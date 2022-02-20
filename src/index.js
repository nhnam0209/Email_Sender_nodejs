let client = require("@sendgrid/mail");


client.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: 'nhnam3004@gmail.com', // Change to your recipient
    from: 'nhnam3004@gmail.com', // Change to your verified sender
    templateId: 'ad18c2c4a61640abb6676ce244e74997',
  }
  client
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })


