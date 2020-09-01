/*************** 
 * Remtag Test *
 ***************/

import { PsychoJS } from './lib/core-2020.2.js';
import * as core from './lib/core-2020.2.js';
import { TrialHandler } from './lib/data-2020.2.js';
import { Scheduler } from './lib/util-2020.2.js';
import * as visual from './lib/visual-2020.2.js';
import * as sound from './lib/sound-2020.2.js';
import * as util from './lib/util-2020.2.js';
//some handy aliases as in the psychopy scripts;
const { abs, sin, cos, PI: pi, sqrt } = Math;

// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([0, 0, 0]),
  units: 'height',
  waitBlanking: true
});

// store info about the experiment session:
let expName = 'RemTag';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(instructionsRoutineBegin());
flowScheduler.add(instructionsRoutineEachFrame());
flowScheduler.add(instructionsRoutineEnd());
flowScheduler.add(pre_re_insRoutineBegin());
flowScheduler.add(pre_re_insRoutineEachFrame());
flowScheduler.add(pre_re_insRoutineEnd());
flowScheduler.add(practice_instructions_pre_rewardRoutineBegin());
flowScheduler.add(practice_instructions_pre_rewardRoutineEachFrame());
flowScheduler.add(practice_instructions_pre_rewardRoutineEnd());
const repeat_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_practiceLoopBegin, repeat_practiceLoopScheduler);
flowScheduler.add(repeat_practiceLoopScheduler);
flowScheduler.add(repeat_practiceLoopEnd);
flowScheduler.add(continue_2RoutineBegin());
flowScheduler.add(continue_2RoutineEachFrame());
flowScheduler.add(continue_2RoutineEnd());
const pre_reward_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(pre_reward_trialsLoopBegin, pre_reward_trialsLoopScheduler);
flowScheduler.add(pre_reward_trialsLoopScheduler);
flowScheduler.add(pre_reward_trialsLoopEnd);
flowScheduler.add(reward_insRoutineBegin());
flowScheduler.add(reward_insRoutineEachFrame());
flowScheduler.add(reward_insRoutineEnd());
flowScheduler.add(practice_instructions_rewardRoutineBegin());
flowScheduler.add(practice_instructions_rewardRoutineEachFrame());
flowScheduler.add(practice_instructions_rewardRoutineEnd());
const repeat_reward_practiceLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(repeat_reward_practiceLoopBegin, repeat_reward_practiceLoopScheduler);
flowScheduler.add(repeat_reward_practiceLoopScheduler);
flowScheduler.add(repeat_reward_practiceLoopEnd);
flowScheduler.add(continue_3RoutineBegin());
flowScheduler.add(continue_3RoutineEachFrame());
flowScheduler.add(continue_3RoutineEnd());
const reward_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(reward_trialsLoopBegin, reward_trialsLoopScheduler);
flowScheduler.add(reward_trialsLoopScheduler);
flowScheduler.add(reward_trialsLoopEnd);
flowScheduler.add(finalRoutineBegin());
flowScheduler.add(finalRoutineEachFrame());
flowScheduler.add(finalRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/animals/pelican.jpg', 'path': 'stimuli/animals/pelican.jpg'},
    {'name': 'sample_list_phase2_practice.csv', 'path': 'sample_list_phase2_practice.csv'},
    {'name': 'stimuli/flowers.jpeg', 'path': 'stimuli/flowers.jpeg'},
    {'name': 'stimuli/kid.jpeg', 'path': 'stimuli/kid.jpeg'},
    {'name': 'stimuli/woman.jpeg', 'path': 'stimuli/woman.jpeg'},
    {'name': 'stimuli/man.jpeg', 'path': 'stimuli/man.jpeg'},
    {'name': 'sample_list_phase1.csv', 'path': 'sample_list_phase1.csv'},
    {'name': 'stimuli/whitestar.png', 'path': 'stimuli/whitestar.png'},
    {'name': 'stimuli/tree.jpeg', 'path': 'stimuli/tree.jpeg'},
    {'name': 'sample_list_phase2.csv', 'path': 'sample_list_phase2.csv'},
    {'name': 'stimuli/animals/tiger.jpg', 'path': 'stimuli/animals/tiger.jpg'},
    {'name': 'stimuli/tools/monkeywrench.jpg', 'path': 'stimuli/tools/monkeywrench.jpg'},
    {'name': 'stimuli/pizza.jpeg', 'path': 'stimuli/pizza.jpeg'},
    {'name': 'stimuli/greenstar.png', 'path': 'stimuli/greenstar.png'},
    {'name': 'sample_list_phase1_practice.csv', 'path': 'sample_list_phase1_practice.csv'},
    {'name': 'stimuli/car.jpeg', 'path': 'stimuli/car.jpeg'},
    {'name': 'stimuli/mask.jpg', 'path': 'stimuli/mask.jpg'},
    {'name': 'stimuli/tools/shovel.jpg', 'path': 'stimuli/tools/shovel.jpg'}
  ]
});


var frameDur;
function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2020.2.2';
  expInfo['OS'] = window.navigator.platform;

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  
  return Scheduler.Event.NEXT;
}


var instructionsClock;
var instructions_page;
var instructions_continue;
var pre_re_insClock;
var text_2;
var instructions_continue_2;
var practice_instructions_pre_rewardClock;
var text_3;
var instruction_continue_5;
var Pre_RewardClock;
var enc;
var cross;
var left;
var right;
var isi;
var pre_reward_response;
var check_practiceClock;
var continue_2Clock;
var text;
var instructions_continue_3;
var reward_insClock;
var instructions_page_2;
var instructions_continue_4;
var practice_instructions_rewardClock;
var text_5;
var instruction_continue_6;
var RewardClock;
var enc2;
var cross_2;
var left2;
var right2;
var isi_2;
var reward_response;
var reward_star;
var reward_text;
var check_reward_practiceClock;
var continue_3Clock;
var text_4;
var instruction_continue_7;
var finalClock;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "instructions"
  instructionsClock = new util.Clock();
  instructions_page = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_page',
    text: 'In this experiment, you will perform several tasks and complete several questionnaires.\n\nYou will be paid X for participation, and you will have the opportunity to earn up to X based on your performance.\n\nThis is a two-day experiment. The second part of the experiment will take place 24 hours from now. If you do not return in 24 hours, you will not receive any payment.\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "pre_re_ins"
  pre_re_insClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'On each trial, you will see an image. After a 5-second delay, you will  then be shown two images, one of which will match the image you saw previously (TARGET), and one of which is new. \n\nYour task is to indicate within 600ms which image is the target image. \n\nUse the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right.\n\nPlease try to respond as quickly and as accurately as possible. \n\nPress the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_pre_reward"
  practice_instructions_pre_rewardClock = new util.Clock();
  text_3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_3',
    text: 'You will now be presented with 4 practice trials. If you do not complete these trials accurately, you will have to begin the practice round again.\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_continue_5 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Reward"
  Pre_RewardClock = new util.Clock();
  enc = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pre_reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "check_practice"
  check_practiceClock = new util.Clock();
  // Initialize components for Routine "continue_2"
  continue_2Clock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'You will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Pre_Reward"
  Pre_RewardClock = new util.Clock();
  enc = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  pre_reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "reward_ins"
  reward_insClock = new util.Clock();
  instructions_page_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_page_2',
    text: 'In the next phase of the experiment, you will complete the same task that you did previously. This time, you will have the opportunity to earn a bonus by correct performance. \n\nOn each trial, you will receive feedback after indicating which item is the target in the form of GREEN and WHITE stars. \n\nPerformance of 90% or more on the GREEN star trials will result in a bonus of X.\n\nPerformance of 90% or more on the WHITE star trials will result in a bonus of X. You will receive information about the total bonus you earned tomorrow, at the end of the experiment.\n\nAs in the last phase, use the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right. Press the space bar to continue.\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.035,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instructions_continue_4 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "practice_instructions_reward"
  practice_instructions_rewardClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'You will now be presented with 4 practice trials. If you do not complete these trials accurately, you will have to begin the practice round again.\n\nPress the space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_continue_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Reward"
  RewardClock = new util.Clock();
  enc2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  reward_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reward_star', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  reward_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_text',
    text: 'Miss!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "check_reward_practice"
  check_reward_practiceClock = new util.Clock();
  // Initialize components for Routine "continue_3"
  continue_3Clock = new util.Clock();
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'You will now begin the second phase of the experiment.\n\nPress space bar to continue.',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  instruction_continue_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Reward"
  RewardClock = new util.Clock();
  enc2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'enc2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  cross_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'cross_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -1, interpolate: true,
  });
  
  left2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'left2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [(- 0.35), 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -2.0 
  });
  right2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'right2', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0.35, 0], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : -3.0 
  });
  isi_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi_2', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -4, interpolate: true,
  });
  
  reward_response = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  reward_star = new visual.ImageStim({
    win : psychoJS.window,
    name : 'reward_star', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0], size : [0.25, 0.25],
    color : new util.Color([1, 1, 1]), opacity : 0,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : false, depth : -6.0 
  });
  reward_text = new visual.TextStim({
    win: psychoJS.window,
    name: 'reward_text',
    text: 'Miss!',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.15], height: 0.1,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -7.0 
  });
  
  // Initialize components for Routine "final"
  finalClock = new util.Clock();
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _instructions_continue_allKeys;
var instructionsComponents;
function instructionsRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'instructions'-------
    t = 0;
    instructionsClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue.keys = undefined;
    instructions_continue.rt = undefined;
    _instructions_continue_allKeys = [];
    // keep track of which components have finished
    instructionsComponents = [];
    instructionsComponents.push(instructions_page);
    instructionsComponents.push(instructions_continue);
    
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function instructionsRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'instructions'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = instructionsClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_page* updates
    if (t >= 0.0 && instructions_page.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_page.tStart = t;  // (not accounting for frame time here)
      instructions_page.frameNStart = frameN;  // exact frame index
      
      instructions_page.setAutoDraw(true);
    }

    
    // *instructions_continue* updates
    if (t >= 0.0 && instructions_continue.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue.tStart = t;  // (not accounting for frame time here)
      instructions_continue.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue.clearEvents(); });
    }

    if (instructions_continue.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_allKeys = _instructions_continue_allKeys.concat(theseKeys);
      if (_instructions_continue_allKeys.length > 0) {
        instructions_continue.keys = _instructions_continue_allKeys[_instructions_continue_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue.rt = _instructions_continue_allKeys[_instructions_continue_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of instructionsComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


var num_correct;
function instructionsRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'instructions'-------
    for (const thisComponent of instructionsComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue.keys', instructions_continue.keys);
    if (typeof instructions_continue.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue.rt', instructions_continue.rt);
        routineTimer.reset();
        }
    
    instructions_continue.stop();
    num_correct = 0;
    
    // the Routine "instructions" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_continue_2_allKeys;
var pre_re_insComponents;
function pre_re_insRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'pre_re_ins'-------
    t = 0;
    pre_re_insClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue_2.keys = undefined;
    instructions_continue_2.rt = undefined;
    _instructions_continue_2_allKeys = [];
    // keep track of which components have finished
    pre_re_insComponents = [];
    pre_re_insComponents.push(text_2);
    pre_re_insComponents.push(instructions_continue_2);
    
    for (const thisComponent of pre_re_insComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function pre_re_insRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'pre_re_ins'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = pre_re_insClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *instructions_continue_2* updates
    if (t >= 0.0 && instructions_continue_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue_2.tStart = t;  // (not accounting for frame time here)
      instructions_continue_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_2.clearEvents(); });
    }

    if (instructions_continue_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue_2.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_2_allKeys = _instructions_continue_2_allKeys.concat(theseKeys);
      if (_instructions_continue_2_allKeys.length > 0) {
        instructions_continue_2.keys = _instructions_continue_2_allKeys[_instructions_continue_2_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue_2.rt = _instructions_continue_2_allKeys[_instructions_continue_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of pre_re_insComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function pre_re_insRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'pre_re_ins'-------
    for (const thisComponent of pre_re_insComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue_2.keys', instructions_continue_2.keys);
    if (typeof instructions_continue_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue_2.rt', instructions_continue_2.rt);
        routineTimer.reset();
        }
    
    instructions_continue_2.stop();
    // the Routine "pre_re_ins" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruction_continue_5_allKeys;
var practice_instructions_pre_rewardComponents;
function practice_instructions_pre_rewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_instructions_pre_reward'-------
    t = 0;
    practice_instructions_pre_rewardClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_continue_5.keys = undefined;
    instruction_continue_5.rt = undefined;
    _instruction_continue_5_allKeys = [];
    // keep track of which components have finished
    practice_instructions_pre_rewardComponents = [];
    practice_instructions_pre_rewardComponents.push(text_3);
    practice_instructions_pre_rewardComponents.push(instruction_continue_5);
    
    for (const thisComponent of practice_instructions_pre_rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_instructions_pre_rewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_instructions_pre_reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_instructions_pre_rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_3* updates
    if (t >= 0.0 && text_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_3.tStart = t;  // (not accounting for frame time here)
      text_3.frameNStart = frameN;  // exact frame index
      
      text_3.setAutoDraw(true);
    }

    
    // *instruction_continue_5* updates
    if (t >= 0.0 && instruction_continue_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_continue_5.tStart = t;  // (not accounting for frame time here)
      instruction_continue_5.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_continue_5.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_5.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_5.clearEvents(); });
    }

    if (instruction_continue_5.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_continue_5.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_continue_5_allKeys = _instruction_continue_5_allKeys.concat(theseKeys);
      if (_instruction_continue_5_allKeys.length > 0) {
        instruction_continue_5.keys = _instruction_continue_5_allKeys[_instruction_continue_5_allKeys.length - 1].name;  // just the last key pressed
        instruction_continue_5.rt = _instruction_continue_5_allKeys[_instruction_continue_5_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_instructions_pre_rewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructions_pre_rewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_instructions_pre_reward'-------
    for (const thisComponent of practice_instructions_pre_rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_continue_5.keys', instruction_continue_5.keys);
    if (typeof instruction_continue_5.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_continue_5.rt', instruction_continue_5.rt);
        routineTimer.reset();
        }
    
    instruction_continue_5.stop();
    // the Routine "practice_instructions_pre_reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var repeat_practice;
var currentLoop;
function repeat_practiceLoopBegin(repeat_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repeat_practice'
  });
  psychoJS.experiment.addLoop(repeat_practice); // add the loop to the experiment
  currentLoop = repeat_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRepeat_practice of repeat_practice) {
    const snapshot = repeat_practice.getSnapshot();
    repeat_practiceLoopScheduler.add(importConditions(snapshot));
    const practiceLoopScheduler = new Scheduler(psychoJS);
    repeat_practiceLoopScheduler.add(practiceLoopBegin, practiceLoopScheduler);
    repeat_practiceLoopScheduler.add(practiceLoopScheduler);
    repeat_practiceLoopScheduler.add(practiceLoopEnd);
    repeat_practiceLoopScheduler.add(check_practiceRoutineBegin(snapshot));
    repeat_practiceLoopScheduler.add(check_practiceRoutineEachFrame(snapshot));
    repeat_practiceLoopScheduler.add(check_practiceRoutineEnd(snapshot));
    repeat_practiceLoopScheduler.add(endLoopIteration(repeat_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var practice;
function practiceLoopBegin(practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sample_list_phase1_practice.csv',
    seed: undefined, name: 'practice'
  });
  psychoJS.experiment.addLoop(practice); // add the loop to the experiment
  currentLoop = practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPractice of practice) {
    const snapshot = practice.getSnapshot();
    practiceLoopScheduler.add(importConditions(snapshot));
    practiceLoopScheduler.add(Pre_RewardRoutineBegin(snapshot));
    practiceLoopScheduler.add(Pre_RewardRoutineEachFrame(snapshot));
    practiceLoopScheduler.add(Pre_RewardRoutineEnd(snapshot));
    practiceLoopScheduler.add(endLoopIteration(practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function practiceLoopEnd() {
  psychoJS.experiment.removeLoop(practice);

  return Scheduler.Event.NEXT;
}


function repeat_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_practice);

  return Scheduler.Event.NEXT;
}


var pre_reward_trials;
function pre_reward_trialsLoopBegin(pre_reward_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  pre_reward_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sample_list_phase1.csv',
    seed: undefined, name: 'pre_reward_trials'
  });
  psychoJS.experiment.addLoop(pre_reward_trials); // add the loop to the experiment
  currentLoop = pre_reward_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisPre_reward_trial of pre_reward_trials) {
    const snapshot = pre_reward_trials.getSnapshot();
    pre_reward_trialsLoopScheduler.add(importConditions(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineBegin(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineEachFrame(snapshot));
    pre_reward_trialsLoopScheduler.add(Pre_RewardRoutineEnd(snapshot));
    pre_reward_trialsLoopScheduler.add(endLoopIteration(pre_reward_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function pre_reward_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(pre_reward_trials);

  return Scheduler.Event.NEXT;
}


var repeat_reward_practice;
function repeat_reward_practiceLoopBegin(repeat_reward_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  repeat_reward_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 30, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: undefined,
    seed: undefined, name: 'repeat_reward_practice'
  });
  psychoJS.experiment.addLoop(repeat_reward_practice); // add the loop to the experiment
  currentLoop = repeat_reward_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisRepeat_reward_practice of repeat_reward_practice) {
    const snapshot = repeat_reward_practice.getSnapshot();
    repeat_reward_practiceLoopScheduler.add(importConditions(snapshot));
    const reward_practiceLoopScheduler = new Scheduler(psychoJS);
    repeat_reward_practiceLoopScheduler.add(reward_practiceLoopBegin, reward_practiceLoopScheduler);
    repeat_reward_practiceLoopScheduler.add(reward_practiceLoopScheduler);
    repeat_reward_practiceLoopScheduler.add(reward_practiceLoopEnd);
    repeat_reward_practiceLoopScheduler.add(check_reward_practiceRoutineBegin(snapshot));
    repeat_reward_practiceLoopScheduler.add(check_reward_practiceRoutineEachFrame(snapshot));
    repeat_reward_practiceLoopScheduler.add(check_reward_practiceRoutineEnd(snapshot));
    repeat_reward_practiceLoopScheduler.add(endLoopIteration(repeat_reward_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


var reward_practice;
function reward_practiceLoopBegin(reward_practiceLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  reward_practice = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sample_list_phase2_practice.csv',
    seed: undefined, name: 'reward_practice'
  });
  psychoJS.experiment.addLoop(reward_practice); // add the loop to the experiment
  currentLoop = reward_practice;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisReward_practice of reward_practice) {
    const snapshot = reward_practice.getSnapshot();
    reward_practiceLoopScheduler.add(importConditions(snapshot));
    reward_practiceLoopScheduler.add(RewardRoutineBegin(snapshot));
    reward_practiceLoopScheduler.add(RewardRoutineEachFrame(snapshot));
    reward_practiceLoopScheduler.add(RewardRoutineEnd(snapshot));
    reward_practiceLoopScheduler.add(endLoopIteration(reward_practiceLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function reward_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(reward_practice);

  return Scheduler.Event.NEXT;
}


function repeat_reward_practiceLoopEnd() {
  psychoJS.experiment.removeLoop(repeat_reward_practice);

  return Scheduler.Event.NEXT;
}


var reward_trials;
function reward_trialsLoopBegin(reward_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  reward_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sample_list_phase2.csv',
    seed: undefined, name: 'reward_trials'
  });
  psychoJS.experiment.addLoop(reward_trials); // add the loop to the experiment
  currentLoop = reward_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisReward_trial of reward_trials) {
    const snapshot = reward_trials.getSnapshot();
    reward_trialsLoopScheduler.add(importConditions(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineBegin(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineEachFrame(snapshot));
    reward_trialsLoopScheduler.add(RewardRoutineEnd(snapshot));
    reward_trialsLoopScheduler.add(endLoopIteration(reward_trialsLoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function reward_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(reward_trials);

  return Scheduler.Event.NEXT;
}


var _pre_reward_response_allKeys;
var Pre_RewardComponents;
function Pre_RewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Pre_Reward'-------
    t = 0;
    Pre_RewardClock.reset(); // clock
    frameN = -1;
    routineTimer.add(9.100000);
    // update component parameters for each repeat
    enc.setImage(stim_name_enc);
    left.setImage(stim_name_left);
    right.setImage(stim_name_right);
    pre_reward_response.keys = undefined;
    pre_reward_response.rt = undefined;
    _pre_reward_response_allKeys = [];
    // keep track of which components have finished
    Pre_RewardComponents = [];
    Pre_RewardComponents.push(enc);
    Pre_RewardComponents.push(cross);
    Pre_RewardComponents.push(left);
    Pre_RewardComponents.push(right);
    Pre_RewardComponents.push(isi);
    Pre_RewardComponents.push(pre_reward_response);
    
    for (const thisComponent of Pre_RewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function Pre_RewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Pre_Reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = Pre_RewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc* updates
    if (t >= 0.0 && enc.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc.tStart = t;  // (not accounting for frame time here)
      enc.frameNStart = frameN;  // exact frame index
      
      enc.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc.setAutoDraw(false);
    }
    
    // *cross* updates
    if (t >= 2.0 && cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross.tStart = t;  // (not accounting for frame time here)
      cross.frameNStart = frameN;  // exact frame index
      
      cross.setAutoDraw(true);
    }

    frameRemains = 2.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross.setAutoDraw(false);
    }
    
    // *left* updates
    if (t >= 7.0 && left.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left.tStart = t;  // (not accounting for frame time here)
      left.frameNStart = frameN;  // exact frame index
      
      left.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left.setAutoDraw(false);
    }
    
    // *right* updates
    if (t >= 7.0 && right.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right.tStart = t;  // (not accounting for frame time here)
      right.frameNStart = frameN;  // exact frame index
      
      right.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right.setAutoDraw(false);
    }
    
    // *isi* updates
    if (t >= 7.6 && isi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi.tStart = t;  // (not accounting for frame time here)
      isi.frameNStart = frameN;  // exact frame index
      
      isi.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi.setAutoDraw(false);
    }
    
    // *pre_reward_response* updates
    if (t >= 7.0 && pre_reward_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      pre_reward_response.tStart = t;  // (not accounting for frame time here)
      pre_reward_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { pre_reward_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { pre_reward_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { pre_reward_response.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (pre_reward_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      pre_reward_response.status = PsychoJS.Status.FINISHED;
  }

    if (pre_reward_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = pre_reward_response.getKeys({keyList: ['1', '2'], waitRelease: false});
      _pre_reward_response_allKeys = _pre_reward_response_allKeys.concat(theseKeys);
      if (_pre_reward_response_allKeys.length > 0) {
        pre_reward_response.keys = _pre_reward_response_allKeys[_pre_reward_response_allKeys.length - 1].name;  // just the last key pressed
        pre_reward_response.rt = _pre_reward_response_allKeys[_pre_reward_response_allKeys.length - 1].rt;
        // was this correct?
        if (pre_reward_response.keys == corr_resp) {
            pre_reward_response.corr = 1;
        } else {
            pre_reward_response.corr = 0;
        }
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of Pre_RewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Pre_RewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Pre_Reward'-------
    for (const thisComponent of Pre_RewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (pre_reward_response.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         pre_reward_response.corr = 1;  // correct non-response
      } else {
         pre_reward_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('pre_reward_response.keys', pre_reward_response.keys);
    psychoJS.experiment.addData('pre_reward_response.corr', pre_reward_response.corr);
    if (typeof pre_reward_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('pre_reward_response.rt', pre_reward_response.rt);
        }
    
    pre_reward_response.stop();
    if (pre_reward_response.corr) {
        num_correct += 1;
        console.log("correct");
    }
    console.log(pre_reward_response.keys);
    
    return Scheduler.Event.NEXT;
  };
}


var check_practiceComponents;
function check_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_practice'-------
    t = 0;
    check_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    if ((num_correct === 4)) {
        repeat_practice.finished = true;
        console.log("finished");
        num_correct = 0;
    } else {
        num_correct = 0;
    }
    
    // keep track of which components have finished
    check_practiceComponents = [];
    
    for (const thisComponent of check_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function check_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'check_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = check_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of check_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'check_practice'-------
    for (const thisComponent of check_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "check_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_continue_3_allKeys;
var continue_2Components;
function continue_2RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'continue_2'-------
    t = 0;
    continue_2Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue_3.keys = undefined;
    instructions_continue_3.rt = undefined;
    _instructions_continue_3_allKeys = [];
    // keep track of which components have finished
    continue_2Components = [];
    continue_2Components.push(text);
    continue_2Components.push(instructions_continue_3);
    
    for (const thisComponent of continue_2Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function continue_2RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'continue_2'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = continue_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *instructions_continue_3* updates
    if (t >= 0.0 && instructions_continue_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue_3.tStart = t;  // (not accounting for frame time here)
      instructions_continue_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_3.clearEvents(); });
    }

    if (instructions_continue_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue_3.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_3_allKeys = _instructions_continue_3_allKeys.concat(theseKeys);
      if (_instructions_continue_3_allKeys.length > 0) {
        instructions_continue_3.keys = _instructions_continue_3_allKeys[_instructions_continue_3_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue_3.rt = _instructions_continue_3_allKeys[_instructions_continue_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of continue_2Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continue_2RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'continue_2'-------
    for (const thisComponent of continue_2Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue_3.keys', instructions_continue_3.keys);
    if (typeof instructions_continue_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue_3.rt', instructions_continue_3.rt);
        routineTimer.reset();
        }
    
    instructions_continue_3.stop();
    // the Routine "continue_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instructions_continue_4_allKeys;
var pre_reward_accuracy;
var reward_insComponents;
function reward_insRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'reward_ins'-------
    t = 0;
    reward_insClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instructions_continue_4.keys = undefined;
    instructions_continue_4.rt = undefined;
    _instructions_continue_4_allKeys = [];
    pre_reward_accuracy = num_correct;
    num_correct = 0;
    console.log("now setting num_correct to 0");
    
    // keep track of which components have finished
    reward_insComponents = [];
    reward_insComponents.push(instructions_page_2);
    reward_insComponents.push(instructions_continue_4);
    
    for (const thisComponent of reward_insComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function reward_insRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'reward_ins'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = reward_insClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_page_2* updates
    if (t >= 0.0 && instructions_page_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_page_2.tStart = t;  // (not accounting for frame time here)
      instructions_page_2.frameNStart = frameN;  // exact frame index
      
      instructions_page_2.setAutoDraw(true);
    }

    
    // *instructions_continue_4* updates
    if (t >= 0.0 && instructions_continue_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_continue_4.tStart = t;  // (not accounting for frame time here)
      instructions_continue_4.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instructions_continue_4.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_4.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instructions_continue_4.clearEvents(); });
    }

    if (instructions_continue_4.status === PsychoJS.Status.STARTED) {
      let theseKeys = instructions_continue_4.getKeys({keyList: ['space'], waitRelease: false});
      _instructions_continue_4_allKeys = _instructions_continue_4_allKeys.concat(theseKeys);
      if (_instructions_continue_4_allKeys.length > 0) {
        instructions_continue_4.keys = _instructions_continue_4_allKeys[_instructions_continue_4_allKeys.length - 1].name;  // just the last key pressed
        instructions_continue_4.rt = _instructions_continue_4_allKeys[_instructions_continue_4_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of reward_insComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function reward_insRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'reward_ins'-------
    for (const thisComponent of reward_insComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instructions_continue_4.keys', instructions_continue_4.keys);
    if (typeof instructions_continue_4.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instructions_continue_4.rt', instructions_continue_4.rt);
        routineTimer.reset();
        }
    
    instructions_continue_4.stop();
    num_correct = 0;
    
    // the Routine "reward_ins" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruction_continue_6_allKeys;
var practice_instructions_rewardComponents;
function practice_instructions_rewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'practice_instructions_reward'-------
    t = 0;
    practice_instructions_rewardClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_continue_6.keys = undefined;
    instruction_continue_6.rt = undefined;
    _instruction_continue_6_allKeys = [];
    // keep track of which components have finished
    practice_instructions_rewardComponents = [];
    practice_instructions_rewardComponents.push(text_5);
    practice_instructions_rewardComponents.push(instruction_continue_6);
    
    for (const thisComponent of practice_instructions_rewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function practice_instructions_rewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'practice_instructions_reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = practice_instructions_rewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *instruction_continue_6* updates
    if (t >= 0.0 && instruction_continue_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_continue_6.tStart = t;  // (not accounting for frame time here)
      instruction_continue_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_continue_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_6.clearEvents(); });
    }

    if (instruction_continue_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_continue_6.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_continue_6_allKeys = _instruction_continue_6_allKeys.concat(theseKeys);
      if (_instruction_continue_6_allKeys.length > 0) {
        instruction_continue_6.keys = _instruction_continue_6_allKeys[_instruction_continue_6_allKeys.length - 1].name;  // just the last key pressed
        instruction_continue_6.rt = _instruction_continue_6_allKeys[_instruction_continue_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of practice_instructions_rewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function practice_instructions_rewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'practice_instructions_reward'-------
    for (const thisComponent of practice_instructions_rewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_continue_6.keys', instruction_continue_6.keys);
    if (typeof instruction_continue_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_continue_6.rt', instruction_continue_6.rt);
        routineTimer.reset();
        }
    
    instruction_continue_6.stop();
    // the Routine "practice_instructions_reward" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _reward_response_allKeys;
var correct;
var RewardComponents;
function RewardRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Reward'-------
    t = 0;
    RewardClock.reset(); // clock
    frameN = -1;
    routineTimer.add(10.100000);
    // update component parameters for each repeat
    enc2.setImage(stim_name_enc);
    left2.setImage(stim_name_left);
    right2.setImage(stim_name_right);
    reward_response.keys = undefined;
    reward_response.rt = undefined;
    _reward_response_allKeys = [];
    reward_star.setImage(star_name);
    reward_text.text = "Miss!";
    reward_star.opacity = 0.0;
    correct = false;
    console.log("setting text to miss");
    
    // keep track of which components have finished
    RewardComponents = [];
    RewardComponents.push(enc2);
    RewardComponents.push(cross_2);
    RewardComponents.push(left2);
    RewardComponents.push(right2);
    RewardComponents.push(isi_2);
    RewardComponents.push(reward_response);
    RewardComponents.push(reward_star);
    RewardComponents.push(reward_text);
    
    for (const thisComponent of RewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function RewardRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Reward'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = RewardClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *enc2* updates
    if (t >= 0.0 && enc2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      enc2.tStart = t;  // (not accounting for frame time here)
      enc2.frameNStart = frameN;  // exact frame index
      
      enc2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 2.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (enc2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      enc2.setAutoDraw(false);
    }
    
    // *cross_2* updates
    if (t >= 2.0 && cross_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      cross_2.tStart = t;  // (not accounting for frame time here)
      cross_2.frameNStart = frameN;  // exact frame index
      
      cross_2.setAutoDraw(true);
    }

    frameRemains = 2.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (cross_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      cross_2.setAutoDraw(false);
    }
    
    // *left2* updates
    if (t >= 7.0 && left2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      left2.tStart = t;  // (not accounting for frame time here)
      left2.frameNStart = frameN;  // exact frame index
      
      left2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (left2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      left2.setAutoDraw(false);
    }
    
    // *right2* updates
    if (t >= 7.0 && right2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      right2.tStart = t;  // (not accounting for frame time here)
      right2.frameNStart = frameN;  // exact frame index
      
      right2.setAutoDraw(true);
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (right2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      right2.setAutoDraw(false);
    }
    
    // *isi_2* updates
    if (t >= 8.6 && isi_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi_2.tStart = t;  // (not accounting for frame time here)
      isi_2.frameNStart = frameN;  // exact frame index
      
      isi_2.setAutoDraw(true);
    }

    frameRemains = 8.6 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi_2.setAutoDraw(false);
    }
    
    // *reward_response* updates
    if (t >= 7.0 && reward_response.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_response.tStart = t;  // (not accounting for frame time here)
      reward_response.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { reward_response.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { reward_response.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { reward_response.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_response.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_response.status = PsychoJS.Status.FINISHED;
  }

    if (reward_response.status === PsychoJS.Status.STARTED) {
      let theseKeys = reward_response.getKeys({keyList: ['1', '2'], waitRelease: false});
      _reward_response_allKeys = _reward_response_allKeys.concat(theseKeys);
      if (_reward_response_allKeys.length > 0) {
        reward_response.keys = _reward_response_allKeys[_reward_response_allKeys.length - 1].name;  // just the last key pressed
        reward_response.rt = _reward_response_allKeys[_reward_response_allKeys.length - 1].rt;
        // was this correct?
        if (reward_response.keys == corr_resp) {
            reward_response.corr = 1;
        } else {
            reward_response.corr = 0;
        }
      }
    }
    
    
    // *reward_star* updates
    if (t >= 7.6 && reward_star.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_star.tStart = t;  // (not accounting for frame time here)
      reward_star.frameNStart = frameN;  // exact frame index
      
      reward_star.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_star.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_star.setAutoDraw(false);
    }
    
    // *reward_text* updates
    if (t >= 7.6 && reward_text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      reward_text.tStart = t;  // (not accounting for frame time here)
      reward_text.frameNStart = frameN;  // exact frame index
      
      reward_text.setAutoDraw(true);
    }

    frameRemains = 7.6 + 1.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (reward_text.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      reward_text.setAutoDraw(false);
    }
    console.log("frame");
    if ((reward_response.keys && (! correct))) {
        console.log("keypress and no repeat");
        if ((Number.parseInt(reward_response.keys) === Number.parseInt(corr_resp))) {
            correct = true;
            reward_text.text = "Hit! You Won!";
            reward_star.opacity = 1.0;
            num_correct += 1;
            console.log(("correct: " + num_correct));
        }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of RewardComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function RewardRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Reward'-------
    for (const thisComponent of RewardComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // was no response the correct answer?!
    if (reward_response.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         reward_response.corr = 1;  // correct non-response
      } else {
         reward_response.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('reward_response.keys', reward_response.keys);
    psychoJS.experiment.addData('reward_response.corr', reward_response.corr);
    if (typeof reward_response.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('reward_response.rt', reward_response.rt);
        }
    
    reward_response.stop();
    return Scheduler.Event.NEXT;
  };
}


var check_reward_practiceComponents;
function check_reward_practiceRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'check_reward_practice'-------
    t = 0;
    check_reward_practiceClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    console.log("setting correct false");
    if ((num_correct === 4)) {
        repeat_reward_practice.finished = true;
        console.log("finished");
        num_correct = 0;
    } else {
        num_correct = 0;
    }
    
    // keep track of which components have finished
    check_reward_practiceComponents = [];
    
    for (const thisComponent of check_reward_practiceComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function check_reward_practiceRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'check_reward_practice'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = check_reward_practiceClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of check_reward_practiceComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function check_reward_practiceRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'check_reward_practice'-------
    for (const thisComponent of check_reward_practiceComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "check_reward_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _instruction_continue_7_allKeys;
var continue_3Components;
function continue_3RoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'continue_3'-------
    t = 0;
    continue_3Clock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    instruction_continue_7.keys = undefined;
    instruction_continue_7.rt = undefined;
    _instruction_continue_7_allKeys = [];
    // keep track of which components have finished
    continue_3Components = [];
    continue_3Components.push(text_4);
    continue_3Components.push(instruction_continue_7);
    
    for (const thisComponent of continue_3Components)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function continue_3RoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'continue_3'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = continue_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_4* updates
    if (t >= 0.0 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *instruction_continue_7* updates
    if (t >= 0.0 && instruction_continue_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instruction_continue_7.tStart = t;  // (not accounting for frame time here)
      instruction_continue_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { instruction_continue_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { instruction_continue_7.clearEvents(); });
    }

    if (instruction_continue_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = instruction_continue_7.getKeys({keyList: ['space'], waitRelease: false});
      _instruction_continue_7_allKeys = _instruction_continue_7_allKeys.concat(theseKeys);
      if (_instruction_continue_7_allKeys.length > 0) {
        instruction_continue_7.keys = _instruction_continue_7_allKeys[_instruction_continue_7_allKeys.length - 1].name;  // just the last key pressed
        instruction_continue_7.rt = _instruction_continue_7_allKeys[_instruction_continue_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of continue_3Components)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function continue_3RoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'continue_3'-------
    for (const thisComponent of continue_3Components) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    psychoJS.experiment.addData('instruction_continue_7.keys', instruction_continue_7.keys);
    if (typeof instruction_continue_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('instruction_continue_7.rt', instruction_continue_7.rt);
        routineTimer.reset();
        }
    
    instruction_continue_7.stop();
    // the Routine "continue_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var reward_accuracy;
var finalComponents;
function finalRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'final'-------
    t = 0;
    finalClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    reward_accuracy = num_correct;
    
    // keep track of which components have finished
    finalComponents = [];
    
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


function finalRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'final'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = finalClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    for (const thisComponent of finalComponents)
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
        break;
      }
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function finalRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'final'-------
    for (const thisComponent of finalComponents) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    }
    // the Routine "final" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
