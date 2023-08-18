const { emailsToSend, sendEmail } = require('./utils/emails');

const snippets = [
  'Check out our latest deals!',
  'Discover new products just for you!',
  'Exciting news inside, {name}!',
  'Exclusive offer inside, grab it now!',
  // Add more snippets here
];

function getRandomSnippet() {
  return snippets[Math.floor(Math.random() * snippets.length)];
}

function sendPersonalizedEmails() {
  emailsToSend.forEach((email) => {
    const emailToSend = {
      ...email,
      subject: getRandomSnippet(),
      text: `Hello ${recipient.name}, ${getRandomSnippet()}`,
    };

    sendEmail(emailToSend);
  });
}

sendPersonalizedEmails();
