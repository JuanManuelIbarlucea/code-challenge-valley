exports.emailsToSend = [
  {
    to: 'recipient@example.com',
    subject: 'Some email',
    text: 'This is an email',
    html: `<p>This is the html of an email.</p>`,
    recipient: {
      name: 'Name',
      email: 'recipient@example.com',
    },
  },
  // You can add more emails here
];

exports.sendEmail = (email) => {
  return new Promise((resolve, reject) => {
    console.log(`Sending email: ${email.text}`);
    resolve();
  });
};
