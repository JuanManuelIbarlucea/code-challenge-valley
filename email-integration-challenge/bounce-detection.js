const { emailsToSend } = require('./utils/emails');

const bounceThreshold = 3; // Number of allowed bounces before removing the recipient

let bouncedRecipients = [];

function handleBounce(email) {
  if (!bouncedRecipients.includes(email)) {
    bouncedRecipients.push(email.to);
    console.log('Recipient', email, 'bounced.');
    if (
      bouncedRecipients.filter((recipient) => recipient === email).length >=
      bounceThreshold
    ) {
      removeRecipient(email);
    }
  }
}

function removeRecipient(email) {
  recipients = recipients.filter((recipient) => recipient.email !== email);
  console.log('Recipient', email, 'removed from the list.');
}

emailsToSend.forEach(async (email) => {
  if (Math.random() < 0.5) {
    // Simulate error
    console.log('Error sending email');
    handleBounce(email);
  } else {
    await sendEmail(email);
  }
});
