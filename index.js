const MessagingResponse = require('twilio').twiml.MessagingResponse;

exports.handler = (event, context, callback) => {
    console.log("Received event: " + event.Body);

    const twiml = new MessagingResponse();
    twiml.message("Hello world!");

    callback(null, twiml.toString());
};