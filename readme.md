# birthday.io

[![Build Status](https://travis-ci.org/garbados/birthday.io.svg)](https://travis-ci.org/garbados/birthday.io)
[![Coverage Status](https://coveralls.io/repos/garbados/birthday.io/badge.png)](https://coveralls.io/r/garbados/birthday.io)

Send birthday videos to your friends and enemies!

## Install

birthday.io requires [node.js](http://nodejs.org/) to run. Once you have it installed, run this in a terminal:

    git clone git@github.com:garbados/birthday.io.git
    cd birthday.io
    npm install
    # set environment variables
    npm start

Your birthday.io instance is now running on <http://localhost:3000>.

## Configure

For birthday.io to run, it requires the following environment variables to be set:

* `ORCHESTRATE_API_KEY`: store information in the [Orchestrate](http://orchestrate.io/) DBaaS.
* `YOUTUBE_ACCESS_TOKEN`: get videos from YouTube.
* `FACEBOOK_APP_ID` and `FACEBOOK_APP_SECRET`: list users' friends who have birthdays today or soon.
* `GOOGLE_ANALYTICS_TOKEN`: collects visitor data using Google Analytics. (optional)

If any required variables are not set, birthday.io will not run.

## Tests

    npm test

## License

[ASLv2](http://www.apache.org/licenses/LICENSE-2.0), yo.
