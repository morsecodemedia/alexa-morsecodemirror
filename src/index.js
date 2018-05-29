'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = '';

const SKILL_NAME      = 'MorseCodeMirror';
const WELCOME_MESSAGE = 'Hello! Welcome to morse code mirror. Your guide to updates, road maps and how-to\'s on the morse code mirror project. How may I help you?';
const ABOUT_MESSAGE   = 'The morse code mirror is a smart mirror project developed by Brandon Morse, in an attempt to make a smart mirror that is more practical for every day use rather than just a neat thing to have.';
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
      'description' : 'This screensaver module is a Vue component meant for the morse code mirror smart mirror project.',
      'status'      : 'completed',
      'repository'  : 'https://github.com/morsecodemedia/morsecodemirror-screensaver',
      'blog'        : 'https://blog.morsecodemedia.com/smart-mirror-the-screensaver/'
    },
    {
      'title'       : 'Time Travel',
      'description' : 'This Google Maps directions/time to travel module is a Vue component meant for the morse code mirror smart mirror project.',
      'status'      : 'in development',
      'repository'  : 'https://github.com/morsecodemedia/morsecodemirror-timetravel',
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

function getFeatures() {
  let features = [];
  Object.keys(data.features).forEach(key => {
    features.push(data.features[key].title);
  });
  return features;
}

function getFeatureByTitle(featureTitle) {
  if (!featureTitle) {
    return false;
  }
  let feature = [];
  for (let i = 0; i < data.features.length; i++) {
    if (data.features[i].title.search(featureTitle) > -1) {
      story.push(data.features[i]);
    }
  }
  return feature;
}

function getFeatureByStatus(featureStatus) {
  if (!featureStatus) {
    return false;
  }
  let features = [];
  for (let i = 0; i < data.features.length; i++) {
    if (data.features[i].status.search(featureStatus) > -1) {
      story.push(data.features[i]);
    }
  }
  return features;
}