const { emailsToSend, sendEmail } = require('./utils/emails');

const senderDomains = ['domain1.com', 'domain2.com', 'domain3.com'];
let currentDomainIndex = 0;

function getNextDomain() {
  currentDomainIndex = (currentDomainIndex + 1) % senderDomains.length;
  return senderDomains[currentDomainIndex];
}

function sendEmails() {
  emailsToSend.forEach((email) => {
    const senderDomain = getNextDomain();
    const emailToSend = {
      ...email,
      from: `sender@${senderDomain}`,
    };
    sendEmail(emailToSend);
  });
}

sendEmails();
