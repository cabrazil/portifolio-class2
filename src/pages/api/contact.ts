import nodemailer from 'nodemailer';

const email = process.env.EMAILADDRESS;
const emailPass = process.env.EMAILPASS;

const transporter = nodemailer.createTransport({
  host: 'smtpi.kinghost.net',
  port: 587,
  auth: {
    user: email,
    pass: emailPass
  }
});

const mailer = ({ senderMail, name, text }) => {
  const from = `${name} <${senderMail}>`;
  const message = {
    from,
    to: `${email}`,
    subject: `Nova mensagem de contato - ${name}`,
    text,
    replyTo: from
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(message, (error, info) =>
      error ? reject(error) : resolve(info)
    );
  });
};

export default async (req, res) => {
  const { senderMail, name, content } = req.body;

  if (senderMail === '' || name === '' || content === '') {
    res.status(403).send();
    return;
  }

  const mailerRes = await mailer({ senderMail, name, text: content });
  res.send(mailerRes);
};
