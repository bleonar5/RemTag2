/**************** 
 * Remtag2 Test *
 ****************/

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
let expName = 'RemTag2';  // from the Builder filename that created this script
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
flowScheduler.add(trialRoutineBegin());
flowScheduler.add(trialRoutineEachFrame());
flowScheduler.add(trialRoutineEnd());
const memory_trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(memory_trialsLoopBegin, memory_trialsLoopScheduler);
flowScheduler.add(memory_trialsLoopScheduler);
flowScheduler.add(memory_trialsLoopEnd);
flowScheduler.add(expectRoutineBegin());
flowScheduler.add(expectRoutineEachFrame());
flowScheduler.add(expectRoutineEnd());
flowScheduler.add(attemptRoutineBegin());
flowScheduler.add(attemptRoutineEachFrame());
flowScheduler.add(attemptRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'sample_list_memTest.csv', 'path': 'sample_list_memTest.csv'},
    {'name': 'stimuli/animals/panda.jpg', 'path': 'stimuli/animals/panda.jpg'},
    {'name': 'stimuli/animals/tiger.jpg', 'path': 'stimuli/animals/tiger.jpg'}
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


var trialClock;
var instructions_1;
var key_resp_1;
var MemoryClock;
var stim;
var opt1;
var opt2;
var opt3;
var opt4;
var isi;
var key_resp;
var expectClock;
var text;
var yes;
var no;
var expect_test_answer;
var attemptClock;
var text_2;
var yes_2;
var no_2;
var attempt_recall_answer;
var globalClock;
var routineTimer;
function experimentInit() {
  // Initialize components for Routine "trial"
  trialClock = new util.Clock();
  instructions_1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'instructions_1',
    text: 'Welcome back. In this part of the experiment, you will see a series of images. \n\nFor each image, your task is to indicate whether or not you saw the image previously in the experiment, and how confident you are in your response.\n\nUse the f, g, h, and j keys to make your responses:\n',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0], height: 0.04,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  key_resp_1 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Memory"
  MemoryClock = new util.Clock();
  stim = new visual.ImageStim({
    win : psychoJS.window,
    name : 'stim', units : undefined, 
    image : undefined, mask : undefined,
    ori : 0, pos : [0, 0.2], size : [0.5, 0.5],
    color : new util.Color([1, 1, 1]), opacity : 1,
    flipHoriz : false, flipVert : false,
    texRes : 512, interpolate : true, depth : 0.0 
  });
  opt1 = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt1',
    text: 'definitely\nyes\n(f)',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.5), (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  opt2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt2',
    text: 'maybe\nyes\n(g)',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.17), (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  opt3 = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt3',
    text: 'maybe\nno\n(h)',
    font: 'Arial',
    units: undefined, 
    pos: [0.17, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  opt4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'opt4',
    text: 'definitely\nno\n(j)',
    font: 'Arial',
    units: undefined, 
    pos: [0.5, (- 0.25)], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  isi = new visual.ShapeStim ({
    win: psychoJS.window, name: 'isi', 
    vertices: 'cross', size:[0.05, 0.05],
    ori: 0, pos: [0, 0],
    lineWidth: 0.5, lineColor: new util.Color([1, 1, 1]),
    fillColor: new util.Color([1, 1, 1]),
    opacity: 1, depth: -5, interpolate: true,
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "expect"
  expectClock = new util.Clock();
  text = new visual.TextStim({
    win: psychoJS.window,
    name: 'text',
    text: 'Did you expect a memory test?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  yes = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes',
    text: 'yes\n(f)',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.17), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  no = new visual.TextStim({
    win: psychoJS.window,
    name: 'no',
    text: 'no\n(j)',
    font: 'Arial',
    units: undefined, 
    pos: [0.17, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  expect_test_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "attempt"
  attemptClock = new util.Clock();
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Did you attempt to recall the images before the memory test?',
    font: 'Arial',
    units: undefined, 
    pos: [0, 0.2], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: 0.0 
  });
  
  yes_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'yes_2',
    text: 'yes\n(f)',
    font: 'Arial',
    units: undefined, 
    pos: [(- 0.17), 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -1.0 
  });
  
  no_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'no_2',
    text: 'no\n(j)',
    font: 'Arial',
    units: undefined, 
    pos: [0.17, 0], height: 0.05,  wrapWidth: undefined, ori: 0,
    color: new util.Color('white'),  opacity: 1,
    depth: -2.0 
  });
  
  attempt_recall_answer = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var _key_resp_1_allKeys;
var trialComponents;
function trialRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'trial'-------
    t = 0;
    trialClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    key_resp_1.keys = undefined;
    key_resp_1.rt = undefined;
    _key_resp_1_allKeys = [];
    // keep track of which components have finished
    trialComponents = [];
    trialComponents.push(instructions_1);
    trialComponents.push(key_resp_1);
    
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var continueRoutine;
function trialRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'trial'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = trialClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *instructions_1* updates
    if (t >= 0.0 && instructions_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      instructions_1.tStart = t;  // (not accounting for frame time here)
      instructions_1.frameNStart = frameN;  // exact frame index
      
      instructions_1.setAutoDraw(true);
    }

    
    // *key_resp_1* updates
    if (t >= 0.0 && key_resp_1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_1.tStart = t;  // (not accounting for frame time here)
      key_resp_1.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_1.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_1.clearEvents(); });
    }

    if (key_resp_1.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_1.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_1_allKeys = _key_resp_1_allKeys.concat(theseKeys);
      if (_key_resp_1_allKeys.length > 0) {
        key_resp_1.keys = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].name;  // just the last key pressed
        key_resp_1.rt = _key_resp_1_allKeys[_key_resp_1_allKeys.length - 1].rt;
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
    trialComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function trialRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'trial'-------
    trialComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp_1.keys', key_resp_1.keys);
    if (typeof key_resp_1.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_1.rt', key_resp_1.rt);
        routineTimer.reset();
        }
    
    key_resp_1.stop();
    // the Routine "trial" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var memory_trials;
var currentLoop;
function memory_trialsLoopBegin(memory_trialsLoopScheduler) {
  // set up handler to look after randomisation of conditions etc
  memory_trials = new TrialHandler({
    psychoJS: psychoJS,
    nReps: 1, method: TrialHandler.Method.SEQUENTIAL,
    extraInfo: expInfo, originPath: undefined,
    trialList: 'sample_list_memTest.csv',
    seed: undefined, name: 'memory_trials'
  });
  psychoJS.experiment.addLoop(memory_trials); // add the loop to the experiment
  currentLoop = memory_trials;  // we're now the current loop

  // Schedule all the trials in the trialList:
  memory_trials.forEach(function() {
    const snapshot = memory_trials.getSnapshot();

    memory_trialsLoopScheduler.add(importConditions(snapshot));
    memory_trialsLoopScheduler.add(MemoryRoutineBegin(snapshot));
    memory_trialsLoopScheduler.add(MemoryRoutineEachFrame(snapshot));
    memory_trialsLoopScheduler.add(MemoryRoutineEnd(snapshot));
    memory_trialsLoopScheduler.add(endLoopIteration(memory_trialsLoopScheduler, snapshot));
  });

  return Scheduler.Event.NEXT;
}


function memory_trialsLoopEnd() {
  psychoJS.experiment.removeLoop(memory_trials);

  return Scheduler.Event.NEXT;
}


var _key_resp_allKeys;
var MemoryComponents;
function MemoryRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'Memory'-------
    t = 0;
    MemoryClock.reset(); // clock
    frameN = -1;
    routineTimer.add(6.500000);
    // update component parameters for each repeat
    stim.setImage(stim_name);
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    MemoryComponents = [];
    MemoryComponents.push(stim);
    MemoryComponents.push(opt1);
    MemoryComponents.push(opt2);
    MemoryComponents.push(opt3);
    MemoryComponents.push(opt4);
    MemoryComponents.push(isi);
    MemoryComponents.push(key_resp);
    
    MemoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


var frameRemains;
function MemoryRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'Memory'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = MemoryClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *stim* updates
    if (t >= 0.0 && stim.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      stim.tStart = t;  // (not accounting for frame time here)
      stim.frameNStart = frameN;  // exact frame index
      
      stim.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (stim.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      stim.setAutoDraw(false);
    }
    
    // *opt1* updates
    if (t >= 0.0 && opt1.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt1.tStart = t;  // (not accounting for frame time here)
      opt1.frameNStart = frameN;  // exact frame index
      
      opt1.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (opt1.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      opt1.setAutoDraw(false);
    }
    
    // *opt2* updates
    if (t >= 0.0 && opt2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt2.tStart = t;  // (not accounting for frame time here)
      opt2.frameNStart = frameN;  // exact frame index
      
      opt2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (opt2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      opt2.setAutoDraw(false);
    }
    
    // *opt3* updates
    if (t >= 0.0 && opt3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt3.tStart = t;  // (not accounting for frame time here)
      opt3.frameNStart = frameN;  // exact frame index
      
      opt3.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (opt3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      opt3.setAutoDraw(false);
    }
    
    // *opt4* updates
    if (t >= 0.0 && opt4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      opt4.tStart = t;  // (not accounting for frame time here)
      opt4.frameNStart = frameN;  // exact frame index
      
      opt4.setAutoDraw(true);
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (opt4.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      opt4.setAutoDraw(false);
    }
    
    // *isi* updates
    if (t >= 6.0 && isi.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      isi.tStart = t;  // (not accounting for frame time here)
      isi.frameNStart = frameN;  // exact frame index
      
      isi.setAutoDraw(true);
    }

    frameRemains = 6.0 + 0.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (isi.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      isi.setAutoDraw(false);
    }
    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    frameRemains = 0.0 + 6.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (key_resp.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      key_resp.status = PsychoJS.Status.FINISHED;
  }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['f', 'g', 'h', 'j'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
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
    MemoryComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MemoryRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'Memory'-------
    MemoryComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        }
    
    key_resp.stop();
    return Scheduler.Event.NEXT;
  };
}


var _expect_test_answer_allKeys;
var expectComponents;
function expectRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'expect'-------
    t = 0;
    expectClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    expect_test_answer.keys = undefined;
    expect_test_answer.rt = undefined;
    _expect_test_answer_allKeys = [];
    // keep track of which components have finished
    expectComponents = [];
    expectComponents.push(text);
    expectComponents.push(yes);
    expectComponents.push(no);
    expectComponents.push(expect_test_answer);
    
    expectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function expectRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'expect'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = expectClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text* updates
    if (t >= 0.0 && text.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text.tStart = t;  // (not accounting for frame time here)
      text.frameNStart = frameN;  // exact frame index
      
      text.setAutoDraw(true);
    }

    
    // *yes* updates
    if (t >= 0.0 && yes.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes.tStart = t;  // (not accounting for frame time here)
      yes.frameNStart = frameN;  // exact frame index
      
      yes.setAutoDraw(true);
    }

    
    // *no* updates
    if (t >= 0.0 && no.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no.tStart = t;  // (not accounting for frame time here)
      no.frameNStart = frameN;  // exact frame index
      
      no.setAutoDraw(true);
    }

    
    // *expect_test_answer* updates
    if (t >= 0.0 && expect_test_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      expect_test_answer.tStart = t;  // (not accounting for frame time here)
      expect_test_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { expect_test_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { expect_test_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { expect_test_answer.clearEvents(); });
    }

    if (expect_test_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = expect_test_answer.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _expect_test_answer_allKeys = _expect_test_answer_allKeys.concat(theseKeys);
      if (_expect_test_answer_allKeys.length > 0) {
        expect_test_answer.keys = _expect_test_answer_allKeys[_expect_test_answer_allKeys.length - 1].name;  // just the last key pressed
        expect_test_answer.rt = _expect_test_answer_allKeys[_expect_test_answer_allKeys.length - 1].rt;
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
    expectComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function expectRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'expect'-------
    expectComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('expect_test_answer.keys', expect_test_answer.keys);
    if (typeof expect_test_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('expect_test_answer.rt', expect_test_answer.rt);
        routineTimer.reset();
        }
    
    expect_test_answer.stop();
    // the Routine "expect" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _attempt_recall_answer_allKeys;
var attemptComponents;
function attemptRoutineBegin(snapshot) {
  return function () {
    //------Prepare to start Routine 'attempt'-------
    t = 0;
    attemptClock.reset(); // clock
    frameN = -1;
    // update component parameters for each repeat
    attempt_recall_answer.keys = undefined;
    attempt_recall_answer.rt = undefined;
    _attempt_recall_answer_allKeys = [];
    // keep track of which components have finished
    attemptComponents = [];
    attemptComponents.push(text_2);
    attemptComponents.push(yes_2);
    attemptComponents.push(no_2);
    attemptComponents.push(attempt_recall_answer);
    
    attemptComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    
    return Scheduler.Event.NEXT;
  };
}


function attemptRoutineEachFrame(snapshot) {
  return function () {
    //------Loop for each frame of Routine 'attempt'-------
    let continueRoutine = true; // until we're told otherwise
    // get current time
    t = attemptClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_2* updates
    if (t >= 0.0 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *yes_2* updates
    if (t >= 0.0 && yes_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      yes_2.tStart = t;  // (not accounting for frame time here)
      yes_2.frameNStart = frameN;  // exact frame index
      
      yes_2.setAutoDraw(true);
    }

    
    // *no_2* updates
    if (t >= 0.0 && no_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      no_2.tStart = t;  // (not accounting for frame time here)
      no_2.frameNStart = frameN;  // exact frame index
      
      no_2.setAutoDraw(true);
    }

    
    // *attempt_recall_answer* updates
    if (t >= 0.0 && attempt_recall_answer.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      attempt_recall_answer.tStart = t;  // (not accounting for frame time here)
      attempt_recall_answer.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { attempt_recall_answer.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { attempt_recall_answer.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { attempt_recall_answer.clearEvents(); });
    }

    if (attempt_recall_answer.status === PsychoJS.Status.STARTED) {
      let theseKeys = attempt_recall_answer.getKeys({keyList: ['f', 'j'], waitRelease: false});
      _attempt_recall_answer_allKeys = _attempt_recall_answer_allKeys.concat(theseKeys);
      if (_attempt_recall_answer_allKeys.length > 0) {
        attempt_recall_answer.keys = _attempt_recall_answer_allKeys[_attempt_recall_answer_allKeys.length - 1].name;  // just the last key pressed
        attempt_recall_answer.rt = _attempt_recall_answer_allKeys[_attempt_recall_answer_allKeys.length - 1].rt;
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
    attemptComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function attemptRoutineEnd(snapshot) {
  return function () {
    //------Ending Routine 'attempt'-------
    attemptComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    psychoJS.experiment.addData('attempt_recall_answer.keys', attempt_recall_answer.keys);
    if (typeof attempt_recall_answer.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('attempt_recall_answer.rt', attempt_recall_answer.rt);
        routineTimer.reset();
        }
    
    attempt_recall_answer.stop();
    // the Routine "attempt" was not non-slip safe, so reset the non-slip timer
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
