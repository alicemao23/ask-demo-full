const Alexa = require("ask-sdk-core");

const AddNewTopicHandler = {
  canHandle(handlerInput) {
    return (
      Alexa.getRequestType(handlerInput.requestEnvelope) === "IntentRequest" &&
      Alexa.getIntentName(handlerInput.requestEnvelope) === "AddNewTopicIntent"
    );
  },
  handle(handlerInput) {
    const speakOutput = "Hello, This is Add New Topic Intent";
    return (
      handlerInput.responseBuilder
        .speak(speakOutput)
        //.reprompt('add a reprompt if you want to keep the session open for the user to respond')
        .getResponse()
    );
  },
};

module.exports = AddNewTopicHandler;
