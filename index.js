var twilio = require('twilio');

exports.handler = (event, context, callback) => {

    console.log("Received event: " + event.Body);
    callback(null, '<?xml version=\"1.0\" encoding=\"UTF-8\"?>' +
            '<Response><Message>Hello world! -Lambda</Message></Response>');
};