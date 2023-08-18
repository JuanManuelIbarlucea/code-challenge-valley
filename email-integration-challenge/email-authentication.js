const dns = require('dns');

const domain = 'yourdomain.com'; // Replace with your domain
const senderIP = 'your_sender_ip'; // Replace with your sender's IP address

// SPF Record: Check if the sender's IP is authorized to send emails for the domain
dns.resolveTxt(domain, (err, records) => {
  if (err) {
    console.error('DNS error:', err);
    return;
  }

  const spfRecords = records.find(record => record[0].startsWith('v=spf1'));
  if (spfRecords && spfRecords[0].includes(senderIP)) {
    console.log('Sender IP is authorized by SPF.');
  } else {
    console.log('Sender IP is not authorized by SPF.');
  }
});

// DMARC Record: Check if DMARC policy is set for the domain
dns.resolveTxt('_dmarc.' + domain, (err, records) => {
  if (err) {
    console.error('DNS error:', err);
    return;
  }

  if (records.length > 0) {
    console.log('DMARC policy is set for the domain:', records[0]);
  } else {
    console.log('No DMARC policy set for the domain.');
  }
});