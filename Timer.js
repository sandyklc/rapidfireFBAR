/**
 * (c) Facebook, Inc. and its affiliates. Confidential and proprietary.
 */

//==============================================================================
// Welcome to scripting in Spark AR Studio! Helpful links:
//
// Scripting Basics - https://fb.me/spark-scripting-basics
// Reactive Programming - https://fb.me/spark-reactive-programming
// Scripting Object Reference - https://fb.me/spark-scripting-reference
// Changelogs - https://fb.me/spark-changelog
//==============================================================================

// How to load in modules
const Scene = require('Scene');
const Time = require('Time');
const TouchGestures = require('TouchGestures');
const Patches = require('Patches');

// Use export keyword to make a symbol available in scripting debug console
export const Diagnostics = require('Diagnostics');

// To use variables and functions across files, use export/import keyword
// export const animationDuration = 10;

// Use import keyword to import a symbol from another file
// import { animationDuration } from './script.js'

// To access scene objects
// const directionalLight = Scene.root.find('directionalLight0');
const prelimQuestion = Scene.root.find('PrelimQuestion');
const followQuestions = Scene.root.find('FollowQuestions');
const crown = Scene.root.find('King Crown');
const star = Scene.root.find('star');
const rain = Scene.root.find('rain');
const greyFilter = Scene.root.find('GreyFilter');
const followQ = Scene.root.find('FollowQuestions');
const blueFilter = Scene.root.find('BlueFilter');
const straightface = Scene.root.find('straightface');
const goodjob = Scene.root.find('goodjob');
const yellowFilter = Scene.root.find('YellowFilter');

// To access class properties
// const directionalLightIntensity = directionalLight.intensity;

// To log messages to the console
//Diagnostics.log('Console message logged from the script.');

//create a timer that hides questions after 15 seconds
const timer = Time.setTimeout (chooseFilter, 15000);




//create a counter to store the score
var score = 0;


//create a function that hides the Question panel
function hideQuestions() {
  prelimQuestion.material.opacity = 0;
  followQuestions.material.opacity = 0;
}


//Event Listener storing number of times you tap on screen
TouchGestures.onTap().subscribe(function(gesture) {
  Diagnostics.log("Clicked screen");
  score++;
  Diagnostics.log(score);
});

//function to display >= 8 filter
function firstPlaceFilter(){
    crown.hidden = false;
    star.hidden = false;
    Diagnostics.log('reached here!');
}

//function to display >= 5 && <8 filter
function secondPlaceFilter(){
  goodjob.hidden = false;
  yellowFilter.hidden = false;
}

//function to display <5 && >3 filter
function thirdPlaceFilter(){
  followQ.hidden = true;
  blueFilter.hidden = false;
  straightface.hidden = false;
}

//function to display < 3 filter
function lastPlaceFilter(){
  rain.hidden = false;
  greyFilter.hidden = false;
  followQ.hidden = true;
}

//function to choose filter prize after timer runs out
function chooseFilter(){
  hideQuestions();
  if (score < 3){
    lastPlaceFilter();
  } else if (score < 5 && score >=3){
    thirdPlaceFilter();
  } else if(score >= 5 && score < 8){
    secondPlaceFilter();
  } else if (score >= 8){
    firstPlaceFilter();
  }
}
