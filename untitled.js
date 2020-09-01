/***************** 
 * Untitled Test *
 *****************/

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
let expName = 'untitled';  // from the Builder filename that created this script
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
const trials_1LoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trials_1LoopBegin, trials_1LoopScheduler);
flowScheduler.add(trials_1LoopScheduler);
flowScheduler.add(trials_1LoopEnd);
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'stimuli/tools/monkeywrench.jpg', 'path': 'stimuli/tools/monkeywrench.jpg'},
    {'name': 'stimuli/tools/shovel.jpg', 'path': 'stimuli/tools/shovel.jpg'},
    {'name': 'sample_list_phase1.csv', 'path': 'sample_list_phase1.csv'},
    {'name': 'stimuli/animals/tiger.jpg', 'path': 'stimuli/animals/tiger.jpg'},
    {'name': 'stimuli/animals/pelican.jpg', 'path': 'stimuli/animals/pelican.jpg'}
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


var Pre_RewardClock;
var enc;
var cross;
var left;
var right;
var isi;
var key_resp;
var globalClock;
var routineTimer;
function experimentInit() {
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
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var trials_1;
var currentLoop;
function trials_1LoopBegin(trials_1LoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  trials_1 = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sample_list_phase1.csv',
    seed: undefined, name: 'trials_1'
  });
  psychoJS.experiment.addLoop(trials_1); // add the loop to the experiment
  currentLoop = trials_1;  // we're now the current loop

  // Schedule all the trials in the trialList:
  for (const thisTrial_1 of trials_1) {
    const snapshot = trials_1.getSnapshot();
    trials_1LoopScheduler.add(importConditions(snapshot));
    trials_1LoopScheduler.add(Pre_RewardRoutineBegin(snapshot));
    trials_1LoopScheduler.add(Pre_RewardRoutineEachFrame(snapshot));
    trials_1LoopScheduler.add(Pre_RewardRoutineEnd(snapshot));
    trials_1LoopScheduler.add(endLoopIteration(trials_1LoopScheduler, snapshot));
  }

  return Scheduler.Event.NEXT;
}


function trials_1LoopEnd() {
  psychoJS.experiment.removeLoop(trials_1);

  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_allKeys;
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
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    Pre_RewardComponents = [];
    Pre_RewardComponents.push(enc);
    Pre_RewardComponents.push(cross);
    Pre_RewardComponents.push(left);
    Pre_RewardComponents.push(right);
    Pre_RewardComponents.push(isi);
    Pre_RewardComponents.push(key_resp);
    
    for (const thisComponent of Pre_RewardComponents)
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
var continueRoutine;
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
    
    // *key_resp* updates
    if (t >= 7.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 7.0 + 0.6 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // was this correct?
        if (key_resp.keys == corr_resp) {
            key_resp.corr = 1;
        } else {
            key_resp.corr = 0;
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
    if (key_resp.keys === undefined) {
      if (['None','none',undefined].includes(corr_resp)) {
         key_resp.corr = 1;  // correct non-response
      } else {
         key_resp.corr = 0;  // failed to respond (incorrectly)
      }
    }
    // store data for thisExp (ExperimentHandler)
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    psychoJS.experiment.addData('key_resp.corr', key_resp.corr);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
    if (key_resp.corr) {
        num_correct += 1;
        console.log("correct");
    }
    console.log(key_resp.keys);
    
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
