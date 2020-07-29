# DJavascript

djs is my first hackathon project. It was an intense and enjoyable 36 hours hackathon done in a group of 3.

The app requests access to your computers camara and detects users motion in boxs desplayed on the screen - each box outputs a different sound - and in that way you can create your own track! Kids loveeeee it haha.


Demo: https://djavascript.herokuapp.com/

## Table Of Contents
- [DJavascript](#DJavascript)
  * [Running the project](#running-the-project)
  * [Tech Stack](#Techstack)
  * [Challanges](#Challanges)
  * [To Do](#To-Do)
  * [Credit](#Credit)



## Running the project

Preferably check the online demo, 

Otherwise:

1. Clone the repo.
2. Run `npm install`.
3. Run `mongod`
4. Run `node server.js`.
5. Navigate to `http://localhost:3000`.
6. Turn your volume on and rock on !

## Techstack
1. JQuery & handlebars 
2. Express (Node.js), Mongoose (MongoDB).
3. Motion detection library (see link below)

## Challanges
1. My first group project - collaborating was challenging  
2. Motion detection - I scanned the web for a long while to find a good library for my need. First I found a ML lib which helps me detect users skeleton - problem was that it could detect as accurate as users wrists and not fingers, so i continued - and found this lib which compares image pixles, beacuse of the assumption that a computer is mostly steady I decided to it's ok for my usage. (Had to debug it a bit as well haha)

## To Do:
1. Fix DB bug - no space in between sounds (as live session has)  
2. Create better sounds and unable looping 

## Credit:
Big credit to: https://github.com/ReallyGood/js-motion-detection
