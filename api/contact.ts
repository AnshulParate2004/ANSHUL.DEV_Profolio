import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  const recipientEmail = process.env.EMAIL_RECEIVER || 'anshulnparateweb@gmail.com';

  // Strategy 1: Resend (Recommended - modern, no Gmail app password needed)
  if (process.env.RESEND_API_KEY) {
    try {
      const resend = new Resend(process.env.RESEND_API_KEY);
      await resend.emails.send({
        from: 'Portfolio Contact <onboarding@resend.dev>',
        to: recipientEmail,
        replyTo: email,
        subject: `Portfolio Inquiry from ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #111; margin-top: 0; border-bottom: 2px solid #D97757; padding-bottom: 8px;">New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #D97757;">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h4 style="margin-bottom: 8px;">Message:</h4>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
            <p style="font-size: 12px; color: #888; margin-top: 25px;">Sent from anshul.dev portfolio via Resend</p>
          </div>
        `,
      });
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (resendError: any) {
      console.error('Resend error:', resendError);
      return res.status(500).json({ error: resendError?.message || 'Failed to send via Resend' });
    }
  }

  // Strategy 2: Nodemailer (if EMAIL_USER and EMAIL_PASS are configured)
  const emailUser = process.env.EMAIL_USER;
  const emailPass = process.env.EMAIL_PASS;

  if (emailUser && emailPass) {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: emailUser,
          pass: emailPass,
        },
      });

      const mailOptions = {
        from: `"${name}" <${emailUser}>`,
        replyTo: email,
        to: recipientEmail,
        subject: `Portfolio Inquiry from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #eaeaea; border-radius: 8px;">
            <h2 style="color: #111; margin-top: 0; border-bottom: 2px solid #D97757; padding-bottom: 8px;">New Portfolio Contact</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #D97757;">${email}</a></p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;" />
            <h4 style="margin-bottom: 8px;">Message:</h4>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 4px; white-space: pre-wrap;">${message}</div>
            <p style="font-size: 12px; color: #888; margin-top: 25px;">Sent from anshul.dev portfolio via Nodemailer</p>
          </div>
        `,
      };

      await transporter.sendMail(mailOptions);
      return res.status(200).json({ success: true, message: 'Message sent successfully!' });
    } catch (error: any) {
      console.error('Nodemailer error:', error);
      return res.status(500).json({ error: error?.message || 'Failed to send message via Nodemailer' });
    }
  }

  return res.status(500).json({
    error: 'No email service configured. Please add RESEND_API_KEY or EMAIL_USER/EMAIL_PASS in Vercel settings.'
  });
}
