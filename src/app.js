exports.handler = async function(event) {
    const postageapp  = require('postageapp');
    const PostApp = new postageapp('UslZu52EC5gtwFSWmLjfH7NTCxlBJw87');

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