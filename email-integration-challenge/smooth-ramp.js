const { emailsToSend } = require('./utils/emails');

const initialDelay = 5000; // Initial delay in milliseconds (5 seconds)
const finalDelay = 1000; // Final delay in milliseconds (1 second)
const steps = 10; // Number of steps in the ramp

async function sendEmailsSmoothRamp(
  emails,
  initialInterval,
  finalInterval,
  steps
) {
  const intervalStep = (initialInterval - finalInterval) / steps;
  for (let i = 0; i < emails.length; i++) {
    await sendEmail(emails[i]);
    await new Promise((resolve) =>
      setTimeout(resolve, initialInterval - intervalStep * i)
    );
  }

  await new Promise((resolve) =>
    setTimeout(resolve, emails.length * finalInterval)
  );

  for (let i = 0; i < emails.length; i++) {
    await sendEmail(emails[i]);
    await new Promise((resolve) =>
      setTimeout(resolve, finalInterval + intervalStep * i)
    );
  }
}

sendEmailsSmoothRamp(emailsToSend, initialDelay, finalDelay, steps);
