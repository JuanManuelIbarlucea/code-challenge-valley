const { sendEmail, emailsToSend } = require('./utils/emails');

const increaseFactor = 1.5; // Increase sending volume by 50% each step
const intervalInSeconds = 300; // Delay between sending batches (5 minutes)
let currentBatchSize = Math.ceil(emailsToSend.length / increaseFactor);
let currentIndex = 0;

function initiateWarmup() {
  if (currentIndex >= emailsToSend.length) {
    console.log('Warmup complete.');
    return;
  }
  const batch = emailsToSend.slice(
    currentIndex,
    currentIndex + currentBatchSize
  );
  batch.forEach(async (email) => await sendEmail(email));
  currentIndex += currentBatchSize;
  currentBatchSize = Math.ceil(currentBatchSize * increaseFactor);
  setTimeout(initiateWarmup, intervalInSeconds * 1000);
}
initiateWarmup();
