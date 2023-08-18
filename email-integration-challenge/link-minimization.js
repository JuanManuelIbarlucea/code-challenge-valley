const { emailsToSend } = require('./utils/emails');

const emailTemplate = {
  subject: 'Check out our latest offerings!',
  text: 'Hello {name}, visit our website at {shortened_link} for more details.',
};

const linkShortener = async (originalLink) => {
  // This function should return the shortened link
  const shortenedLink = originalLink; // Placeholder
  return shortenedLink;
};

async function sendMinimizedLinksEmails(emails, template) {
  for (const email of emails) {
    const originalLink = 'https://example.com'; // Replace with your actual link
    const shortenedLink = await linkShortener(originalLink);

    const personalizedEmail = {
      ...email,
      ...template,
      text: template.text
        .replace('{name}', email.recipient.name)
        .replace('{shortened_link}', shortenedLink),
    };

    await sendEmail(personalizedEmail);

    // Add a delay between sending emails
    await new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
  }
}

sendMinimizedLinksEmails(emailsToSend, emailTemplate);
