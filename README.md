# PuppetMaster

A skill for the Amazon Alexa platform.

This aims to provide a simple framework for handling requests to a generic endpoint.

The goal for this project was to create a means for an Amazon Alexa device to be able to interact with a another computer. This was done by hosting a webserver on the target machine, then having the Alexa skill make POST requests on the webserver to trigger various actions.

Some applications that came up during testing include:
* Starting up a game of Hearthstone
* Opening essential programs to aid workflow

The target OS for this skill was MacOS, due to a reliance on Automator and AppleScript in order to write macros. While these are operating system specific, options for other operating systems also exist, most notably AutoHotKey for Windows.

## Installation

A basic understanding of creating Amazon Alexa skills is required to deploy your own copy of the skill.

This skill uses the `request` nodejs package.

One setup option is as follows:

~~~~
git clone https://github.com/glee-/alexa-mimic.git`
cd alexa-mimic
npm install
zip -r package.zip index.js node_modules
~~~~

You can then upload package.zip directly to a Amazon Lambda service.

## Control and Macros

Simply start the Node.js server under the 'server' folder and create a tunnel to localhost using ngrok. Other servers that make post requests to the ngrok address will be able to run predefined macros on your computer.

To add more macros, use Apple's Automator software. Most custom behavior can be implemented using AppleScript, which some desktop apps (e.g. Spotify) have an API for. Add a case for your new macro in the POST endpoint in `index.js` and create a corresponding command for Alexa.
