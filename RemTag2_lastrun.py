#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.2),
    on Tue Sep  1 14:13:25 2020
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019) 
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195. 
        https://doi.org/10.3758/s13428-018-01193-y

"""

from __future__ import absolute_import, division

from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)

# Store info about the experiment session
psychopyVersion = '2020.2.2'
expName = 'RemTag2'  # from the Builder filename that created this script
expInfo = {'participant': '', 'session': '001'}
dlg = gui.DlgFromDict(dictionary=expInfo, sort_keys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='/Users/bleonard/Downloads/attachments/RemTag2_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.EXP)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=(1024, 768), fullscr=True, screen=0, 
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='testMonitor', color=[0,0,0], colorSpace='rgb',
    blendMode='avg', useFBO=True, 
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard()

# Initialize components for Routine "trial"
trialClock = core.Clock()
instructions_1 = visual.TextStim(win=win, name='instructions_1',
    text='Welcome back. In this part of the experiment, you will see a series of images. \n\nFor each image, your task is to indicate whether or not you saw the image previously in the experiment, and how confident you are in your response.\n\nUse the f, g, h, and j keys to make your responses:\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_1 = keyboard.Keyboard()

# Initialize components for Routine "Memory"
MemoryClock = core.Clock()
stim = visual.ImageStim(
    win=win,
    name='stim', 
    image='sin', mask=None,
    ori=0, pos=(0, 0.2), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
opt1 = visual.TextStim(win=win, name='opt1',
    text='definitely\nyes\n(f)',
    font='Arial',
    pos=(-0.50, -0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
opt2 = visual.TextStim(win=win, name='opt2',
    text='maybe\nyes\n(g)',
    font='Arial',
    pos=(-0.17, -0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
opt3 = visual.TextStim(win=win, name='opt3',
    text='maybe\nno\n(h)',
    font='Arial',
    pos=(0.17, -0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-3.0);
opt4 = visual.TextStim(win=win, name='opt4',
    text='definitely\nno\n(j)',
    font='Arial',
    pos=(0.5, -0.25), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-4.0);
isi = visual.ShapeStim(
    win=win, name='isi', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-5.0, interpolate=True)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "expect"
expectClock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='Did you expect a memory test?',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
yes = visual.TextStim(win=win, name='yes',
    text='yes\n(f)',
    font='Arial',
    pos=(-0.17, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
no = visual.TextStim(win=win, name='no',
    text='no\n(j)',
    font='Arial',
    pos=(0.17, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
expect_test_answer = keyboard.Keyboard()

# Initialize components for Routine "attempt"
attemptClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='Did you attempt to recall the images before the memory test?',
    font='Arial',
    pos=(0, 0.2), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
yes_2 = visual.TextStim(win=win, name='yes_2',
    text='yes\n(f)',
    font='Arial',
    pos=(-0.17, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-1.0);
no_2 = visual.TextStim(win=win, name='no_2',
    text='no\n(j)',
    font='Arial',
    pos=(0.17, 0), height=0.05, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-2.0);
attempt_recall_answer = keyboard.Keyboard()

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "trial"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_1.keys = []
key_resp_1.rt = []
_key_resp_1_allKeys = []
# keep track of which components have finished
trialComponents = [instructions_1, key_resp_1]
for thisComponent in trialComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
trialClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "trial"-------
while continueRoutine:
    # get current time
    t = trialClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=trialClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_1* updates
    if instructions_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_1.frameNStart = frameN  # exact frame index
        instructions_1.tStart = t  # local t and not account for scr refresh
        instructions_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_1, 'tStartRefresh')  # time at next scr refresh
        instructions_1.setAutoDraw(True)
    
    # *key_resp_1* updates
    waitOnFlip = False
    if key_resp_1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_1.frameNStart = frameN  # exact frame index
        key_resp_1.tStart = t  # local t and not account for scr refresh
        key_resp_1.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_1, 'tStartRefresh')  # time at next scr refresh
        key_resp_1.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_1.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_1.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_1.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_1.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_1_allKeys.extend(theseKeys)
        if len(_key_resp_1_allKeys):
            key_resp_1.keys = _key_resp_1_allKeys[-1].name  # just the last key pressed
            key_resp_1.rt = _key_resp_1_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in trialComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "trial"-------
for thisComponent in trialComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions_1.started', instructions_1.tStartRefresh)
thisExp.addData('instructions_1.stopped', instructions_1.tStopRefresh)
# check responses
if key_resp_1.keys in ['', [], None]:  # No response was made
    key_resp_1.keys = None
thisExp.addData('key_resp_1.keys',key_resp_1.keys)
if key_resp_1.keys != None:  # we had a response
    thisExp.addData('key_resp_1.rt', key_resp_1.rt)
thisExp.addData('key_resp_1.started', key_resp_1.tStartRefresh)
thisExp.addData('key_resp_1.stopped', key_resp_1.tStopRefresh)
thisExp.nextEntry()
# the Routine "trial" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
memory_trials = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('sample_list_memTest.csv'),
    seed=None, name='memory_trials')
thisExp.addLoop(memory_trials)  # add the loop to the experiment
thisMemory_trial = memory_trials.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisMemory_trial.rgb)
if thisMemory_trial != None:
    for paramName in thisMemory_trial:
        exec('{} = thisMemory_trial[paramName]'.format(paramName))

for thisMemory_trial in memory_trials:
    currentLoop = memory_trials
    # abbreviate parameter names if possible (e.g. rgb = thisMemory_trial.rgb)
    if thisMemory_trial != None:
        for paramName in thisMemory_trial:
            exec('{} = thisMemory_trial[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Memory"-------
    continueRoutine = True
    routineTimer.add(6.500000)
    # update component parameters for each repeat
    stim.setImage(stim_name)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    MemoryComponents = [stim, opt1, opt2, opt3, opt4, isi, key_resp]
    for thisComponent in MemoryComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    MemoryClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Memory"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = MemoryClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=MemoryClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *stim* updates
        if stim.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            stim.frameNStart = frameN  # exact frame index
            stim.tStart = t  # local t and not account for scr refresh
            stim.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(stim, 'tStartRefresh')  # time at next scr refresh
            stim.setAutoDraw(True)
        if stim.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > stim.tStartRefresh + 6.0-frameTolerance:
                # keep track of stop time/frame for later
                stim.tStop = t  # not accounting for scr refresh
                stim.frameNStop = frameN  # exact frame index
                win.timeOnFlip(stim, 'tStopRefresh')  # time at next scr refresh
                stim.setAutoDraw(False)
        
        # *opt1* updates
        if opt1.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            opt1.frameNStart = frameN  # exact frame index
            opt1.tStart = t  # local t and not account for scr refresh
            opt1.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(opt1, 'tStartRefresh')  # time at next scr refresh
            opt1.setAutoDraw(True)
        if opt1.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > opt1.tStartRefresh + 6.0-frameTolerance:
                # keep track of stop time/frame for later
                opt1.tStop = t  # not accounting for scr refresh
                opt1.frameNStop = frameN  # exact frame index
                win.timeOnFlip(opt1, 'tStopRefresh')  # time at next scr refresh
                opt1.setAutoDraw(False)
        
        # *opt2* updates
        if opt2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            opt2.frameNStart = frameN  # exact frame index
            opt2.tStart = t  # local t and not account for scr refresh
            opt2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(opt2, 'tStartRefresh')  # time at next scr refresh
            opt2.setAutoDraw(True)
        if opt2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > opt2.tStartRefresh + 6.0-frameTolerance:
                # keep track of stop time/frame for later
                opt2.tStop = t  # not accounting for scr refresh
                opt2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(opt2, 'tStopRefresh')  # time at next scr refresh
                opt2.setAutoDraw(False)
        
        # *opt3* updates
        if opt3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            opt3.frameNStart = frameN  # exact frame index
            opt3.tStart = t  # local t and not account for scr refresh
            opt3.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(opt3, 'tStartRefresh')  # time at next scr refresh
            opt3.setAutoDraw(True)
        if opt3.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > opt3.tStartRefresh + 6.0-frameTolerance:
                # keep track of stop time/frame for later
                opt3.tStop = t  # not accounting for scr refresh
                opt3.frameNStop = frameN  # exact frame index
                win.timeOnFlip(opt3, 'tStopRefresh')  # time at next scr refresh
                opt3.setAutoDraw(False)
        
        # *opt4* updates
        if opt4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            opt4.frameNStart = frameN  # exact frame index
            opt4.tStart = t  # local t and not account for scr refresh
            opt4.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(opt4, 'tStartRefresh')  # time at next scr refresh
            opt4.setAutoDraw(True)
        if opt4.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > opt4.tStartRefresh + 6.0-frameTolerance:
                # keep track of stop time/frame for later
                opt4.tStop = t  # not accounting for scr refresh
                opt4.frameNStop = frameN  # exact frame index
                win.timeOnFlip(opt4, 'tStopRefresh')  # time at next scr refresh
                opt4.setAutoDraw(False)
        
        # *isi* updates
        if isi.status == NOT_STARTED and tThisFlip >= 6.0-frameTolerance:
            # keep track of start time/frame for later
            isi.frameNStart = frameN  # exact frame index
            isi.tStart = t  # local t and not account for scr refresh
            isi.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(isi, 'tStartRefresh')  # time at next scr refresh
            isi.setAutoDraw(True)
        if isi.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > isi.tStartRefresh + 0.5-frameTolerance:
                # keep track of stop time/frame for later
                isi.tStop = t  # not accounting for scr refresh
                isi.frameNStop = frameN  # exact frame index
                win.timeOnFlip(isi, 'tStopRefresh')  # time at next scr refresh
                isi.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp.frameNStart = frameN  # exact frame index
            key_resp.tStart = t  # local t and not account for scr refresh
            key_resp.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp, 'tStartRefresh')  # time at next scr refresh
            key_resp.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp.tStartRefresh + 6.0-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['f', 'g', 'h', 'j'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in MemoryComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Memory"-------
    for thisComponent in MemoryComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    memory_trials.addData('stim.started', stim.tStartRefresh)
    memory_trials.addData('stim.stopped', stim.tStopRefresh)
    memory_trials.addData('opt1.started', opt1.tStartRefresh)
    memory_trials.addData('opt1.stopped', opt1.tStopRefresh)
    memory_trials.addData('opt2.started', opt2.tStartRefresh)
    memory_trials.addData('opt2.stopped', opt2.tStopRefresh)
    memory_trials.addData('opt3.started', opt3.tStartRefresh)
    memory_trials.addData('opt3.stopped', opt3.tStopRefresh)
    memory_trials.addData('opt4.started', opt4.tStartRefresh)
    memory_trials.addData('opt4.stopped', opt4.tStopRefresh)
    memory_trials.addData('isi.started', isi.tStartRefresh)
    memory_trials.addData('isi.stopped', isi.tStopRefresh)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
    memory_trials.addData('key_resp.keys',key_resp.keys)
    if key_resp.keys != None:  # we had a response
        memory_trials.addData('key_resp.rt', key_resp.rt)
    memory_trials.addData('key_resp.started', key_resp.tStartRefresh)
    memory_trials.addData('key_resp.stopped', key_resp.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'memory_trials'


# ------Prepare to start Routine "expect"-------
continueRoutine = True
# update component parameters for each repeat
expect_test_answer.keys = []
expect_test_answer.rt = []
_expect_test_answer_allKeys = []
# keep track of which components have finished
expectComponents = [text, yes, no, expect_test_answer]
for thisComponent in expectComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
expectClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "expect"-------
while continueRoutine:
    # get current time
    t = expectClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=expectClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text* updates
    if text.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text.frameNStart = frameN  # exact frame index
        text.tStart = t  # local t and not account for scr refresh
        text.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text, 'tStartRefresh')  # time at next scr refresh
        text.setAutoDraw(True)
    
    # *yes* updates
    if yes.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        yes.frameNStart = frameN  # exact frame index
        yes.tStart = t  # local t and not account for scr refresh
        yes.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(yes, 'tStartRefresh')  # time at next scr refresh
        yes.setAutoDraw(True)
    
    # *no* updates
    if no.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        no.frameNStart = frameN  # exact frame index
        no.tStart = t  # local t and not account for scr refresh
        no.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(no, 'tStartRefresh')  # time at next scr refresh
        no.setAutoDraw(True)
    
    # *expect_test_answer* updates
    waitOnFlip = False
    if expect_test_answer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        expect_test_answer.frameNStart = frameN  # exact frame index
        expect_test_answer.tStart = t  # local t and not account for scr refresh
        expect_test_answer.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(expect_test_answer, 'tStartRefresh')  # time at next scr refresh
        expect_test_answer.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(expect_test_answer.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(expect_test_answer.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if expect_test_answer.status == STARTED and not waitOnFlip:
        theseKeys = expect_test_answer.getKeys(keyList=['f', 'j'], waitRelease=False)
        _expect_test_answer_allKeys.extend(theseKeys)
        if len(_expect_test_answer_allKeys):
            expect_test_answer.keys = _expect_test_answer_allKeys[-1].name  # just the last key pressed
            expect_test_answer.rt = _expect_test_answer_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in expectComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "expect"-------
for thisComponent in expectComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
thisExp.addData('yes.started', yes.tStartRefresh)
thisExp.addData('yes.stopped', yes.tStopRefresh)
thisExp.addData('no.started', no.tStartRefresh)
thisExp.addData('no.stopped', no.tStopRefresh)
# check responses
if expect_test_answer.keys in ['', [], None]:  # No response was made
    expect_test_answer.keys = None
thisExp.addData('expect_test_answer.keys',expect_test_answer.keys)
if expect_test_answer.keys != None:  # we had a response
    thisExp.addData('expect_test_answer.rt', expect_test_answer.rt)
thisExp.addData('expect_test_answer.started', expect_test_answer.tStartRefresh)
thisExp.addData('expect_test_answer.stopped', expect_test_answer.tStopRefresh)
thisExp.nextEntry()
# the Routine "expect" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "attempt"-------
continueRoutine = True
# update component parameters for each repeat
attempt_recall_answer.keys = []
attempt_recall_answer.rt = []
_attempt_recall_answer_allKeys = []
# keep track of which components have finished
attemptComponents = [text_2, yes_2, no_2, attempt_recall_answer]
for thisComponent in attemptComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
attemptClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "attempt"-------
while continueRoutine:
    # get current time
    t = attemptClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=attemptClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *text_2* updates
    if text_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_2.frameNStart = frameN  # exact frame index
        text_2.tStart = t  # local t and not account for scr refresh
        text_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_2, 'tStartRefresh')  # time at next scr refresh
        text_2.setAutoDraw(True)
    
    # *yes_2* updates
    if yes_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        yes_2.frameNStart = frameN  # exact frame index
        yes_2.tStart = t  # local t and not account for scr refresh
        yes_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(yes_2, 'tStartRefresh')  # time at next scr refresh
        yes_2.setAutoDraw(True)
    
    # *no_2* updates
    if no_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        no_2.frameNStart = frameN  # exact frame index
        no_2.tStart = t  # local t and not account for scr refresh
        no_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(no_2, 'tStartRefresh')  # time at next scr refresh
        no_2.setAutoDraw(True)
    
    # *attempt_recall_answer* updates
    waitOnFlip = False
    if attempt_recall_answer.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        attempt_recall_answer.frameNStart = frameN  # exact frame index
        attempt_recall_answer.tStart = t  # local t and not account for scr refresh
        attempt_recall_answer.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(attempt_recall_answer, 'tStartRefresh')  # time at next scr refresh
        attempt_recall_answer.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(attempt_recall_answer.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(attempt_recall_answer.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if attempt_recall_answer.status == STARTED and not waitOnFlip:
        theseKeys = attempt_recall_answer.getKeys(keyList=['f', 'j'], waitRelease=False)
        _attempt_recall_answer_allKeys.extend(theseKeys)
        if len(_attempt_recall_answer_allKeys):
            attempt_recall_answer.keys = _attempt_recall_answer_allKeys[-1].name  # just the last key pressed
            attempt_recall_answer.rt = _attempt_recall_answer_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in attemptComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "attempt"-------
for thisComponent in attemptComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
thisExp.addData('yes_2.started', yes_2.tStartRefresh)
thisExp.addData('yes_2.stopped', yes_2.tStopRefresh)
thisExp.addData('no_2.started', no_2.tStartRefresh)
thisExp.addData('no_2.stopped', no_2.tStopRefresh)
# check responses
if attempt_recall_answer.keys in ['', [], None]:  # No response was made
    attempt_recall_answer.keys = None
thisExp.addData('attempt_recall_answer.keys',attempt_recall_answer.keys)
if attempt_recall_answer.keys != None:  # we had a response
    thisExp.addData('attempt_recall_answer.rt', attempt_recall_answer.rt)
thisExp.addData('attempt_recall_answer.started', attempt_recall_answer.tStartRefresh)
thisExp.addData('attempt_recall_answer.stopped', attempt_recall_answer.tStopRefresh)
thisExp.nextEntry()
# the Routine "attempt" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
