const { emailsToSend, sendEmail } = require('./utils/emails');

const templates = [
  'Discover the {adjective} {product} for {target_audience}!',
  'Introducing our {product} - perfect for {benefit}!',
  'Get ready to {action} with our {product}!',
];

function spinText(text) {
  return text.replace(/{(.*?)}/g, (_, key) => {
    const options = {
      adjective: ['amazing', 'innovative', 'high-quality'],
      product: ['gadget', 'solution', 'tool'],
      target_audience: ['business professionals', 'enthusiasts', 'creatives'],
      benefit: [
        'increased productivity',
        'effortless workflow',
        'enhanced performance',
      ],
      action: [
        'transform your work',
        'boost your results',
        'achieve greatness',
      ],
    };

    return options[key][Math.floor(Math.random() * options[key].length)];
  });
}

const template = templates[Math.floor(Math.random() * templates.length)];

const emailToSend = {
  ...emailsToSend[0],
  subject: spinText(template),
  text: spinText(template),
  html: `<p>${spinText(template)}</p>`,
};

(async function () {
  await sendEmail(emailToSend);
})();
