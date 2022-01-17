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

  const response = ses.sendEmail(params
    , function (err, data) {
      if (err) console.log(err, err.stack);
      else {
        console.log(data);
        return data;
      }
    });

  return {
    statusCode: '200',
    body: response
  }
}