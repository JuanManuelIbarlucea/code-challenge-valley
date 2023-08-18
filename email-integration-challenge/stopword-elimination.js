const { emailsToSend, sendEmail} = require("./utils/emails");

const stopwords = ['and', 'the', 'is', 'of', 'to', 'in', 'for', 'with', 'this', 'our'];

function eliminateStopwords(content) {
  const words = content.split(' ');
  const filteredWords = words.filter(word => !stopwords.includes(word.toLowerCase()));
  return filteredWords.join(' ');
}

function sendRelevantEmails() {
  emailsToSend.forEach(recipient => {
    const emailContent = `Hello ${recipient.name}, this email contains many stopwords and is a test of stopword elimination in content.`;
    const cleanedContent = eliminateStopwords(emailContent);

    const emailToSend = {
      ...email,
      subject: 'Test Email with Eliminated Stopwords',
      text: cleanedContent
    };

    sendEmail(emailToSend);
  });
}

sendRelevantEmails();
