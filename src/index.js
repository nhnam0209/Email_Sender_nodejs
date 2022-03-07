let client = require("@sendgrid/mail");


client.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
    to: '<email_receiver>', // Change to your recipient
    from: '<email_sender>', // Change to your verified sender
    templateId: '<template_key>',
  }
  client
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })


