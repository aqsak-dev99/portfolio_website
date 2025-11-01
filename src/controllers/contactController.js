const nodemailer = require('nodemailer');

const sendMessage = async (req, res) => {
  const { name, email, subject, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ ok: false, error: 'All fields are required.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT) || 587,
      secure: false,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM || process.env.MAIL_USER,
      to: process.env.MAIL_TO || process.env.MAIL_USER,
      subject: `Portfolio Contact: ${subject ? subject : name}`,
      replyTo: email,
      text: message,
      html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
    };

    // If mail configuration is missing, simulate success in dev
    if (!process.env.MAIL_HOST || !process.env.MAIL_USER || !process.env.MAIL_PASS) {
      console.log('[Contact] Email config missing; logging message instead:', mailOptions);
      return res.json({ ok: true, message: 'Message logged (dev mode). Configure .env to send emails.' });
    }

    await transporter.sendMail(mailOptions);
    res.json({ ok: true, message: 'Message sent successfully.' });
  } catch (err) {
    console.error('[Contact] Error sending mail:', err);
    res.status(500).json({ ok: false, error: 'Failed to send message.' });
  }
};

module.exports = { sendMessage };