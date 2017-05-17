# Web Dev Final Exam

## What is it?
The objective of the exam was to build a geographic locator of tweets using meteor, react and d3. Currently it can handle up to 20000 tweets that use the geo property (in Colombia).

## How was it made?
Using the two repositories the teacher kindly gave us (https://github.com/john-guerra/ColombiaVisualizationReact and https://github.com/john-guerra/twitterStreamerMeteor) I started modifying the twitter streamer app like so:
- Added ColombiaMap component, this included creating a public folder (from which static files are served to the client) and adding the corresponding json files for the map.
- Modified the twitter api calls so that only tweets that had the geo property were added to the meteor collection. Also, limit is now 20000 instead of 10.
- Created the Overlay component that draws for each tweet a dot on the canvas.
- Finally, in each component I created new methods that used props so that the Map Component (child component of App) could share the projection function with the Overlay Component (another child component).
- The final touches: modifying css so that the overlay now is rendered behind the canvas in the same position.

## Anything creative?
My creative addition to this exam was changing the color of each dot depending on the number of characters in the corresponding tweet:
- yellow : 80 or more.
- blue: between 40 and 80.
- red: between 0 and 40.

## Setup

It requires you to setup your credentials on the server using environment variables:

```
export TWITTER_CONSUMER_KEY="yourCredentialsHere"
export TWITTER_CONSUMER_SECRET="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_KEY="yourCredentialsHere"
export TWITTER_ACCESS_TOKEN_SECRET="yourCredentialsHere"

meteor npm install
meteor
```
After it has been deployed: go to localhost:3000, click on the Query input and then press Enter.

## Screenshot

![Screenshot](http://i.imgur.com/MrnMFWE.png "Screenshot")

