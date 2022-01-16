exports.handler = async function(event) {
    const  postageapp  = require('postageapp');
    const PostApp = new postageapp('UslZu52EC5gtwFSWmLjfH7NTCxlBJw87');

    const options = {
      recipients: "querof@gmail.com",
    
      subject: "This is a test of send email",
      from: "frank@theinsidersnet.com",
    
      content: {
        'text/html': '<strong>This message is a test.</strong>',
        'text/plain': 'This message is a test'
      }
    }

    // const emailResponse = PostApp.sendMessage(options, function callback() {});
    PostApp.sendMessage(options).then((response) => {
      console.log('HTTP Status code: ', response.statusCode);
      console.log('Message UID', object.response.uid);
    }).catch((error) => {
      console.error(error);
    });

    const response = {
      statusCode: '200',
      body: 'Email sent'
    }

    return response;
}