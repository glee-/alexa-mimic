'use strict';
const Alexa = require('alexa-sdk');
var request = require('request');

//Replace with your app ID (OPTIONAL).  You can find this value at the top of your skill's page on http://developer.amazon.com.
//Make sure to enclose your value in quotes, like this: const APP_ID = 'amzn1.ask.skill.bb4045e6-b3e8-4133-b650-72923c5980f1';
const APP_ID = undefined;

const SKILL_NAME = 'PuppetMaster';
const HELP_MESSAGE = 'You can say run my startup routine, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

const handlers = {
    'LaunchRequest': function () {
      this.emit(':ask', 'Puppet master is now running. Your wish is my command.');
    },
    'SendNewCommandIntent': function () {
        var speechOutput = this.event.request.intent.slots.Command.value;
        this.response.speak("Now performing the command " + speechOutput);
        var mythis = this;
        sendCommand(speechOutput, function() {
          mythis.emit(':responseReady');
        });

    },
    'AMAZON.HelpIntent': function () {
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_REPROMPT;

        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
};

function sendCommand(cmd, callback) {

  var options = { method: 'POST',
    url: 'http://1c65afd3.ngrok.io/',
    headers:
     { 'cache-control': 'no-cache',
       'content-type': 'application/x-www-form-urlencoded' },
    form: { command: cmd } };

  request(options, function (error, response, body) {
    callback();
  });

}
