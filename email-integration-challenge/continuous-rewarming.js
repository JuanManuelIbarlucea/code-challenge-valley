const { emailsToSend } = require("./utils/emails");


const initialSendingVolume = 5; // Number of emails in the initial sending
const maxSendingVolume = 20; // Maximum number of emails to send

function graduallyIncreaseSending(emails, initialVolume, maxVolume) {
  let currentVolume = initialVolume;

  while (currentVolume <= maxVolume) {
    const segment = emails.filter(email => email.recipient.engaged).slice(0, currentVolume);
    segment.forEach(email => {
      const emailToSend = {
        ...email,
        subject: 'Stay Engaged!',
        text: `Hello ${email.recipient.name}, we value your engagement.`
      };

      sendEmail(emailToSend);
      email.recipient.engaged = false; // Mark as sent to prevent resending

      // Add a delay between sending emails
      setTimeout(() => {}, 1000); // 1 second delay
    });

    currentVolume += initialVolume;
  }
}

graduallyIncreaseSending(emailsToSend, initialSendingVolume, maxSendingVolume);
