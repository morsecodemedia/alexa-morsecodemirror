'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = '';

const SKILL_NAME      = 'MorseCodeMirror';
const WELCOME_MESSAGE = 'Hello! Welcome to morse code mirror. Your guide to updates, road maps and how-to\'s on the morse code mirror project. How may I help you?';
const ABOUT_MESSAGE   = '';
const HELP_MESSAGE    = '';
const HELP_REPROMPT   = 'What can I help you with?';
const STOP_MESSAGE    = 'Be well!';
const UPDATES_MESSAGE = '';

const data = {
  'howto': [
    {
      'key' : 'value'
    }
  ],
  'updates': [
    {
      'key' : 'value'
    }
  ],
  'features': [
    {
      'title'       : 'Screensaver',
      'description' : '',
      'status'      : 'completed',
      'repository'  : '',
      'blog'        : ''
    },
    {
      'title'       : 'Time Travel',
      'description' : '',
      'status'      : 'in development',
      'repository'  : '',
      'blog'        : ''
    },
    {
      'title'       : 'Time Travel Bridges',
      'description' : '',
      'status'      : 'pipeline',
      'repository'  : '',
      'blog'        : ''
    },
    {
      'title'       : 'Calendar',
      'description' : '',
      'status'      : 'pipeline',
      'repository'  : '',
      'blog'        : ''
    },
    {
      'title'       : 'Weather',
      'description' : '',
      'status'      : 'pipeline',
      'repository'  : '',
      'blog'        : ''
    }
  ]
};

const handlers = {
  "LaunchRequest": function () {
    this.response.speak(WELCOME_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.HelpIntent': function () {
    let speechOutput  = HELP_MESSAGE;
    let reprompt      = HELP_REPROMPT;

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
  'AboutIntent': function () {
    this.response.speak(ABOUT_MESSAGE);
    this.emit(':responseReady');
  },
  'UpdatesIntent': function () {
    this.response.speak(UPDATES_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.NoIntent': function () {
    this.response.speak(STOP_MESSAGE);
    this.emit(':responseReady');
  },
  'AMAZON.YesIntent': function () {
    this.emit(':responseReady');
  }
};

exports.handler = (event, context) => {
  const alexa = Alexa.handler(event, context);
  alexa.AppId = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
};