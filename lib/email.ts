import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

export async function sendRSVPConfirmation(email: string, name: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Thank You for Your RSVP - Mirabel & Godspower Wedding',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Thank You, ${name}!</h2>
          <p>We're thrilled to have you celebrate our special day on <strong>September 4, 2026</strong>.</p>
          <p><strong>Wedding Schedule:</strong></p>
          <ul>
            <li>10:00 AM - Traditional Marriage Ceremony (Kano)</li>
            <li>4:00 PM - Church Wedding (Kano)</li>
            <li>7:00 PM - Reception & Dinner (Meena Event Center)</li>
          </ul>
          <p>We can't wait to celebrate with you!</p>
          <p>With love,<br>Mirabel & Godspower</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}

export async function sendAdminNotification(name: string, phone: string, message: string) {
  try {
    await transporter.sendMail({
      from: process.env.EMAIL_FROM,
      to: process.env.EMAIL_USER,
      subject: 'New RSVP Confirmation - Mirabel & Godspower Wedding',
      html: `
        <div style="font-family: Arial, sans-serif;">
          <h2>New RSVP Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Message:</strong> ${message || 'No message'}</p>
          <p><strong>Time:</strong> ${new Date().toLocaleString()}</p>
        </div>
      `,
    });
    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    return { success: false, error };
  }
}
