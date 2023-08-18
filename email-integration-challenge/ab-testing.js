const { emailsToSend, sendEmail } = require('./utils/emails');

const emailTemplateA = {
  subject: 'Version A: Exciting News Inside!',
  text: 'Hello {name}, check out our latest announcement!',
};

const emailTemplateB = {
  subject: 'Version B: Exclusive Offer for You!',
  text: "Hi {name}, don't miss this special deal!",
};

async function sendABTestEmails(emails, templateA, templateB) {
  const batchSize = 2; // Number of recipients in each A/B test group

  for (let i = 0; i < emails.length; i += batchSize) {
    const batch = emails.slice(i, i + batchSize);

    await Promise.all(
      batch.map(async (email) => {
        const template = Math.random() < 0.5 ? templateA : templateB;
        const personalizedEmail = {
          ...email,
          ...template,
          text: template.text.replace('{name}', email.recipient.name),
        };

        await sendEmail(personalizedEmail);
      })
    );

    // Add a delay between batches
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
  }
}

sendABTestEmails(emailsToSend, emailTemplateA, emailTemplateB);
