let client = require('@sendgrid/mail')

client.setApiKey(process.env.SENDGRID_API_KEY)

client.send({
    to:{
        email: process.env.EMAIL_RECEIVER,
        name: "Nguyen Hoang Nam",
    },
    from :{
        email: process.env.EMAIL_RECEIVER,
        name: "Nguyen Hoang Nam",
    },
    templateId: 'ad18c2c4a61640abb6676ce244e74997',
    dynamicTemplateData:{
        name: "Nguyen Hoang Nam!!"
    },
})

.then(() =>{
    console.log("Email was sent!");
});