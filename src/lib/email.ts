import { Resend } from 'resend';

const resend = new Resend('re_7mMbK2U9_Ba5kpMnFQ6kKQyVwb4phZWWa');

interface SendEmailParams {
  firstName: string;
  lastName: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail({
  firstName,
  lastName,
  email,
  subject,
  message,
}: SendEmailParams) {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Anatolia Mosque <contact@anatoliamosque.com>',
      to: 'anatolianorthyork@gmail.com',
      subject: `Contact Form: ${subject}`,
      text: `
Name: ${firstName} ${lastName}
Email: ${email}
Subject: ${subject}

Message:
${message}
      `.trim(),
    });

    if (error) {
      throw error;
    }

    return { success: true, data };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
}
