const aws = require("aws-sdk");
const ses = new aws.SES({ region: "eu-west-1" });
exports.handler =  function (event) {
  var params = {
    Destination: {
      ToAddresses: ["querof@gmail.com"],
    },
    Message: {
      Body: {
        Text: { Data: "Test" },
      },

      Subject: { Data: "Test Email" },
    },
    Source: "frank@theinsidersnet.com",
  };

    // const emailResponse = PostApp.sendMessage(options, function callback() {});
    response = await PostApp.sendMessage(options).then((response) => {
      console.log('HTTP Status code: ', response.statusCode);
      console.log('Message UID', object.response.uid);
    }).catch((error) => {
      console.error(error);
    });

    return {
      statusCode: '200',
      body: 'Email sent'
    }
}