# birthday.io

Send birthday videos to your friends and enemies!

## Install

birthday.io requires [node.js]() to run. Once you have it installed, run this in a terminal:

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
* `FACEBOOK_ACCESS_TOKEN`: list users' friends who have birthdays today or soon.
* `GOOGLE_ANALYTICS_TOKEN`: collects visitor data using Google Analytics. (optional)

If any required variables are not set, birthday.io will not run.

## Tests

    npm test

## License

[ASLv2](http://www.apache.org/licenses/LICENSE-2.0), yo.
