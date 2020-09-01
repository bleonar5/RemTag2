#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2020.2.2),
    on Mon Aug 24 12:56:23 2020
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
expName = 'RemTag'  # from the Builder filename that created this script
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
    originPath='/Users/bleonard/Downloads/attachments/RemTag_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DEBUG)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run before the window creation

# Setup the Window
win = visual.Window(
    size=[1440, 900], fullscr=True, screen=0, 
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

# Initialize components for Routine "instructions"
instructionsClock = core.Clock()
instructions_page = visual.TextStim(win=win, name='instructions_page',
    text='In this experiment, you will perform several tasks and complete several questionnaires.\n\nYou will be paid X for participation, and you will have the opportunity to earn up to X based on your performance.\n\nThis is a two-day experiment. The second part of the experiment will take place 24 hours from now. If you do not return in 24 hours, you will not receive any payment.\n\nPress the space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_3 = keyboard.Keyboard()

# Initialize components for Routine "pre_re_ins"
pre_re_insClock = core.Clock()
text_2 = visual.TextStim(win=win, name='text_2',
    text='On each trial, you will see an image. After a 5-second delay, you will  then be shown two images, one of which will match the image you saw previously (TARGET), and one of which is new. \n\nYour task is to indicate within 600ms which image is the target image. \n\nUse the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right.\n\nPlease try to respond as quickly and as accurately as possible. Press space bar to continue.\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_5 = keyboard.Keyboard()

# Initialize components for Routine "Pre_Reward"
Pre_RewardClock = core.Clock()
enc = visual.ImageStim(
    win=win,
    name='enc', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left = visual.ImageStim(
    win=win,
    name='left', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right = visual.ImageStim(
    win=win,
    name='right', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi = visual.ShapeStim(
    win=win, name='isi', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "check_practice"
check_practiceClock = core.Clock()

# Initialize components for Routine "continue_2"
continue_2Clock = core.Clock()
text = visual.TextStim(win=win, name='text',
    text='You will now begin the first phase of the experiment.\n\nPress space bar to continue.',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_4 = keyboard.Keyboard()

# Initialize components for Routine "Pre_Reward"
Pre_RewardClock = core.Clock()
enc = visual.ImageStim(
    win=win,
    name='enc', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross = visual.ShapeStim(
    win=win, name='cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left = visual.ImageStim(
    win=win,
    name='left', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right = visual.ImageStim(
    win=win,
    name='right', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi = visual.ShapeStim(
    win=win, name='isi', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
key_resp = keyboard.Keyboard()

# Initialize components for Routine "reward_ins"
reward_insClock = core.Clock()
instructions_page_2 = visual.TextStim(win=win, name='instructions_page_2',
    text='In the next phase of the experiment, you will complete the same task that you did previously. This time, you will have the opportunity to earn a bonus by correct performance. \n\nOn each trial, you will receive feedback after indicating which item is the target in the form of GREEN and WHITE stars. \n\nPerformance of 90% or more on the GREEN star trials will result in a bonus of X.\n\nPerformance of 90% or more on the WHITE star trials will result in a bonus of X. You will receive information about the total bonus you earned tomorrow, at the end of the experiment.\n\nAs in the last phase, use the “1” key to indicate that the target is on the left, and use the “2” key to indicate that the target is on the right. Press spacebar to continue.\n',
    font='Arial',
    pos=(0, 0), height=0.04, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=0.0);
key_resp_6 = keyboard.Keyboard()

# Initialize components for Routine "Reward"
RewardClock = core.Clock()
enc2 = visual.ImageStim(
    win=win,
    name='enc2', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=0.0)
cross_2 = visual.ShapeStim(
    win=win, name='cross_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-1.0, interpolate=True)
left2 = visual.ImageStim(
    win=win,
    name='left2', 
    image='sin', mask=None,
    ori=0, pos=(-0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-2.0)
right2 = visual.ImageStim(
    win=win,
    name='right2', 
    image='sin', mask=None,
    ori=0, pos=(0.35, 0), size=(0.5, 0.5),
    color=[1,1,1], colorSpace='rgb', opacity=1,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=True, depth=-3.0)
isi_2 = visual.ShapeStim(
    win=win, name='isi_2', vertices='cross',
    size=(0.05, 0.05),
    ori=0, pos=(0, 0),
    lineWidth=0.5, lineColor=[1,1,1], lineColorSpace='rgb',
    fillColor=[1,1,1], fillColorSpace='rgb',
    opacity=1, depth=-4.0, interpolate=True)
key_resp_2 = keyboard.Keyboard()
reward_star = visual.ImageStim(
    win=win,
    name='reward_star', 
    image='sin', mask=None,
    ori=0, pos=(0, 0), size=(0.25, 0.25),
    color=[1,1,1], colorSpace='rgb', opacity=0,
    flipHoriz=False, flipVert=False,
    texRes=512, interpolate=False, depth=-6.0)
reward_text = visual.TextStim(win=win, name='reward_text',
    text='Miss!',
    font='Arial',
    pos=(0, 0.15), height=0.1, wrapWidth=None, ori=0, 
    color='white', colorSpace='rgb', opacity=1, 
    languageStyle='LTR',
    depth=-7.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine 

# ------Prepare to start Routine "instructions"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_3.keys = []
key_resp_3.rt = []
_key_resp_3_allKeys = []
# keep track of which components have finished
instructionsComponents = [instructions_page, key_resp_3]
for thisComponent in instructionsComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
instructionsClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "instructions"-------
while continueRoutine:
    # get current time
    t = instructionsClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=instructionsClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_page* updates
    if instructions_page.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_page.frameNStart = frameN  # exact frame index
        instructions_page.tStart = t  # local t and not account for scr refresh
        instructions_page.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_page, 'tStartRefresh')  # time at next scr refresh
        instructions_page.setAutoDraw(True)
    
    # *key_resp_3* updates
    waitOnFlip = False
    if key_resp_3.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_3.frameNStart = frameN  # exact frame index
        key_resp_3.tStart = t  # local t and not account for scr refresh
        key_resp_3.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_3, 'tStartRefresh')  # time at next scr refresh
        key_resp_3.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_3.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_3.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_3.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_3.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_3_allKeys.extend(theseKeys)
        if len(_key_resp_3_allKeys):
            key_resp_3.keys = _key_resp_3_allKeys[-1].name  # just the last key pressed
            key_resp_3.rt = _key_resp_3_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in instructionsComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "instructions"-------
for thisComponent in instructionsComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions_page.started', instructions_page.tStartRefresh)
thisExp.addData('instructions_page.stopped', instructions_page.tStopRefresh)
# check responses
if key_resp_3.keys in ['', [], None]:  # No response was made
    key_resp_3.keys = None
thisExp.addData('key_resp_3.keys',key_resp_3.keys)
if key_resp_3.keys != None:  # we had a response
    thisExp.addData('key_resp_3.rt', key_resp_3.rt)
thisExp.addData('key_resp_3.started', key_resp_3.tStartRefresh)
thisExp.addData('key_resp_3.stopped', key_resp_3.tStopRefresh)
thisExp.nextEntry()
num_correct = 0
# the Routine "instructions" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# ------Prepare to start Routine "pre_re_ins"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_5.keys = []
key_resp_5.rt = []
_key_resp_5_allKeys = []
# keep track of which components have finished
pre_re_insComponents = [text_2, key_resp_5]
for thisComponent in pre_re_insComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
pre_re_insClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "pre_re_ins"-------
while continueRoutine:
    # get current time
    t = pre_re_insClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=pre_re_insClock)
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
    
    # *key_resp_5* updates
    waitOnFlip = False
    if key_resp_5.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_5.frameNStart = frameN  # exact frame index
        key_resp_5.tStart = t  # local t and not account for scr refresh
        key_resp_5.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_5, 'tStartRefresh')  # time at next scr refresh
        key_resp_5.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_5.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_5.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_5.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_5.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_5_allKeys.extend(theseKeys)
        if len(_key_resp_5_allKeys):
            key_resp_5.keys = _key_resp_5_allKeys[-1].name  # just the last key pressed
            key_resp_5.rt = _key_resp_5_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in pre_re_insComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "pre_re_ins"-------
for thisComponent in pre_re_insComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_2.started', text_2.tStartRefresh)
thisExp.addData('text_2.stopped', text_2.tStopRefresh)
# check responses
if key_resp_5.keys in ['', [], None]:  # No response was made
    key_resp_5.keys = None
thisExp.addData('key_resp_5.keys',key_resp_5.keys)
if key_resp_5.keys != None:  # we had a response
    thisExp.addData('key_resp_5.rt', key_resp_5.rt)
thisExp.addData('key_resp_5.started', key_resp_5.tStartRefresh)
thisExp.addData('key_resp_5.stopped', key_resp_5.tStopRefresh)
thisExp.nextEntry()
# the Routine "pre_re_ins" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
repeat_practice = data.TrialHandler(nReps=30, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=[None],
    seed=None, name='repeat_practice')
thisExp.addLoop(repeat_practice)  # add the loop to the experiment
thisRepeat_practice = repeat_practice.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisRepeat_practice.rgb)
if thisRepeat_practice != None:
    for paramName in thisRepeat_practice:
        exec('{} = thisRepeat_practice[paramName]'.format(paramName))

for thisRepeat_practice in repeat_practice:
    currentLoop = repeat_practice
    # abbreviate parameter names if possible (e.g. rgb = thisRepeat_practice.rgb)
    if thisRepeat_practice != None:
        for paramName in thisRepeat_practice:
            exec('{} = thisRepeat_practice[paramName]'.format(paramName))
    
    # set up handler to look after randomisation of conditions etc
    practice = data.TrialHandler(nReps=1, method='sequential', 
        extraInfo=expInfo, originPath=-1,
        trialList=data.importConditions('sample_list_phase1_practice.csv'),
        seed=None, name='practice')
    thisExp.addLoop(practice)  # add the loop to the experiment
    thisPractice = practice.trialList[0]  # so we can initialise stimuli with some values
    # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
    if thisPractice != None:
        for paramName in thisPractice:
            exec('{} = thisPractice[paramName]'.format(paramName))
    
    for thisPractice in practice:
        currentLoop = practice
        # abbreviate parameter names if possible (e.g. rgb = thisPractice.rgb)
        if thisPractice != None:
            for paramName in thisPractice:
                exec('{} = thisPractice[paramName]'.format(paramName))
        
        # ------Prepare to start Routine "Pre_Reward"-------
        continueRoutine = True
        routineTimer.add(9.100000)
        # update component parameters for each repeat
        enc.setImage(stim_name_enc)
        left.setImage(stim_name_left)
        right.setImage(stim_name_right)
        key_resp.keys = []
        key_resp.rt = []
        _key_resp_allKeys = []
        # keep track of which components have finished
        Pre_RewardComponents = [enc, cross, left, right, isi, key_resp]
        for thisComponent in Pre_RewardComponents:
            thisComponent.tStart = None
            thisComponent.tStop = None
            thisComponent.tStartRefresh = None
            thisComponent.tStopRefresh = None
            if hasattr(thisComponent, 'status'):
                thisComponent.status = NOT_STARTED
        # reset timers
        t = 0
        _timeToFirstFrame = win.getFutureFlipTime(clock="now")
        Pre_RewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
        frameN = -1
        
        # -------Run Routine "Pre_Reward"-------
        while continueRoutine and routineTimer.getTime() > 0:
            # get current time
            t = Pre_RewardClock.getTime()
            tThisFlip = win.getFutureFlipTime(clock=Pre_RewardClock)
            tThisFlipGlobal = win.getFutureFlipTime(clock=None)
            frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
            # update/draw components on each frame
            
            # *enc* updates
            if enc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
                # keep track of start time/frame for later
                enc.frameNStart = frameN  # exact frame index
                enc.tStart = t  # local t and not account for scr refresh
                enc.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(enc, 'tStartRefresh')  # time at next scr refresh
                enc.setAutoDraw(True)
            if enc.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > enc.tStartRefresh + 2.0-frameTolerance:
                    # keep track of stop time/frame for later
                    enc.tStop = t  # not accounting for scr refresh
                    enc.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(enc, 'tStopRefresh')  # time at next scr refresh
                    enc.setAutoDraw(False)
            
            # *cross* updates
            if cross.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
                # keep track of start time/frame for later
                cross.frameNStart = frameN  # exact frame index
                cross.tStart = t  # local t and not account for scr refresh
                cross.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
                cross.setAutoDraw(True)
            if cross.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > cross.tStartRefresh + 5.0-frameTolerance:
                    # keep track of stop time/frame for later
                    cross.tStop = t  # not accounting for scr refresh
                    cross.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                    cross.setAutoDraw(False)
            
            # *left* updates
            if left.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                left.frameNStart = frameN  # exact frame index
                left.tStart = t  # local t and not account for scr refresh
                left.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(left, 'tStartRefresh')  # time at next scr refresh
                left.setAutoDraw(True)
            if left.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > left.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    left.tStop = t  # not accounting for scr refresh
                    left.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(left, 'tStopRefresh')  # time at next scr refresh
                    left.setAutoDraw(False)
            
            # *right* updates
            if right.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
                # keep track of start time/frame for later
                right.frameNStart = frameN  # exact frame index
                right.tStart = t  # local t and not account for scr refresh
                right.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(right, 'tStartRefresh')  # time at next scr refresh
                right.setAutoDraw(True)
            if right.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > right.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    right.tStop = t  # not accounting for scr refresh
                    right.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(right, 'tStopRefresh')  # time at next scr refresh
                    right.setAutoDraw(False)
            
            # *isi* updates
            if isi.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
                # keep track of start time/frame for later
                isi.frameNStart = frameN  # exact frame index
                isi.tStart = t  # local t and not account for scr refresh
                isi.tStartRefresh = tThisFlipGlobal  # on global time
                win.timeOnFlip(isi, 'tStartRefresh')  # time at next scr refresh
                isi.setAutoDraw(True)
            if isi.status == STARTED:
                # is it time to stop? (based on global clock, using actual start)
                if tThisFlipGlobal > isi.tStartRefresh + 1.5-frameTolerance:
                    # keep track of stop time/frame for later
                    isi.tStop = t  # not accounting for scr refresh
                    isi.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(isi, 'tStopRefresh')  # time at next scr refresh
                    isi.setAutoDraw(False)
            
            # *key_resp* updates
            waitOnFlip = False
            if key_resp.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
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
                if tThisFlipGlobal > key_resp.tStartRefresh + 0.6-frameTolerance:
                    # keep track of stop time/frame for later
                    key_resp.tStop = t  # not accounting for scr refresh
                    key_resp.frameNStop = frameN  # exact frame index
                    win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                    key_resp.status = FINISHED
            if key_resp.status == STARTED and not waitOnFlip:
                theseKeys = key_resp.getKeys(keyList=['1', '2'], waitRelease=False)
                _key_resp_allKeys.extend(theseKeys)
                if len(_key_resp_allKeys):
                    key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                    key_resp.rt = _key_resp_allKeys[-1].rt
                    # was this correct?
                    if (key_resp.keys == str(corr_resp)) or (key_resp.keys == corr_resp):
                        key_resp.corr = 1
                    else:
                        key_resp.corr = 0
            
            # check for quit (typically the Esc key)
            if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
                core.quit()
            
            # check if all components have finished
            if not continueRoutine:  # a component has requested a forced-end of Routine
                break
            continueRoutine = False  # will revert to True if at least one component still running
            for thisComponent in Pre_RewardComponents:
                if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                    continueRoutine = True
                    break  # at least one component has not yet finished
            
            # refresh the screen
            if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
                win.flip()
        
        # -------Ending Routine "Pre_Reward"-------
        for thisComponent in Pre_RewardComponents:
            if hasattr(thisComponent, "setAutoDraw"):
                thisComponent.setAutoDraw(False)
        practice.addData('enc.started', enc.tStartRefresh)
        practice.addData('enc.stopped', enc.tStopRefresh)
        practice.addData('cross.started', cross.tStartRefresh)
        practice.addData('cross.stopped', cross.tStopRefresh)
        practice.addData('left.started', left.tStartRefresh)
        practice.addData('left.stopped', left.tStopRefresh)
        practice.addData('right.started', right.tStartRefresh)
        practice.addData('right.stopped', right.tStopRefresh)
        practice.addData('isi.started', isi.tStartRefresh)
        practice.addData('isi.stopped', isi.tStopRefresh)
        # check responses
        if key_resp.keys in ['', [], None]:  # No response was made
            key_resp.keys = None
            # was no response the correct answer?!
            if str(corr_resp).lower() == 'none':
               key_resp.corr = 1;  # correct non-response
            else:
               key_resp.corr = 0;  # failed to respond (incorrectly)
        # store data for practice (TrialHandler)
        practice.addData('key_resp.keys',key_resp.keys)
        practice.addData('key_resp.corr', key_resp.corr)
        if key_resp.keys != None:  # we had a response
            practice.addData('key_resp.rt', key_resp.rt)
        practice.addData('key_resp.started', key_resp.tStartRefresh)
        practice.addData('key_resp.stopped', key_resp.tStopRefresh)
        if key_resp.corr:
            num_correct += 1
            print('correct')
        print(key_resp.keys)
        thisExp.nextEntry()
        
    # completed 1 repeats of 'practice'
    
    
    # ------Prepare to start Routine "check_practice"-------
    continueRoutine = True
    # update component parameters for each repeat
    if num_correct == 4:
        repeat_practice.finished = True
        print('finished')
    else:
        num_correct = 0
    # keep track of which components have finished
    check_practiceComponents = []
    for thisComponent in check_practiceComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    check_practiceClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "check_practice"-------
    while continueRoutine:
        # get current time
        t = check_practiceClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=check_practiceClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in check_practiceComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "check_practice"-------
    for thisComponent in check_practiceComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    # the Routine "check_practice" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()
    
# completed 30 repeats of 'repeat_practice'


# ------Prepare to start Routine "continue_2"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_4.keys = []
key_resp_4.rt = []
_key_resp_4_allKeys = []
# keep track of which components have finished
continue_2Components = [text, key_resp_4]
for thisComponent in continue_2Components:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
continue_2Clock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "continue_2"-------
while continueRoutine:
    # get current time
    t = continue_2Clock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=continue_2Clock)
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
    
    # *key_resp_4* updates
    waitOnFlip = False
    if key_resp_4.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_4.frameNStart = frameN  # exact frame index
        key_resp_4.tStart = t  # local t and not account for scr refresh
        key_resp_4.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_4, 'tStartRefresh')  # time at next scr refresh
        key_resp_4.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_4.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_4.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_4.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_4.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_4_allKeys.extend(theseKeys)
        if len(_key_resp_4_allKeys):
            key_resp_4.keys = _key_resp_4_allKeys[-1].name  # just the last key pressed
            key_resp_4.rt = _key_resp_4_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in continue_2Components:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "continue_2"-------
for thisComponent in continue_2Components:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text.started', text.tStartRefresh)
thisExp.addData('text.stopped', text.tStopRefresh)
# check responses
if key_resp_4.keys in ['', [], None]:  # No response was made
    key_resp_4.keys = None
thisExp.addData('key_resp_4.keys',key_resp_4.keys)
if key_resp_4.keys != None:  # we had a response
    thisExp.addData('key_resp_4.rt', key_resp_4.rt)
thisExp.addData('key_resp_4.started', key_resp_4.tStartRefresh)
thisExp.addData('key_resp_4.stopped', key_resp_4.tStopRefresh)
thisExp.nextEntry()
# the Routine "continue_2" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_1 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('sample_list_phase1.csv'),
    seed=None, name='trials_1')
thisExp.addLoop(trials_1)  # add the loop to the experiment
thisTrial_1 = trials_1.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_1.rgb)
if thisTrial_1 != None:
    for paramName in thisTrial_1:
        exec('{} = thisTrial_1[paramName]'.format(paramName))

for thisTrial_1 in trials_1:
    currentLoop = trials_1
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_1.rgb)
    if thisTrial_1 != None:
        for paramName in thisTrial_1:
            exec('{} = thisTrial_1[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Pre_Reward"-------
    continueRoutine = True
    routineTimer.add(9.100000)
    # update component parameters for each repeat
    enc.setImage(stim_name_enc)
    left.setImage(stim_name_left)
    right.setImage(stim_name_right)
    key_resp.keys = []
    key_resp.rt = []
    _key_resp_allKeys = []
    # keep track of which components have finished
    Pre_RewardComponents = [enc, cross, left, right, isi, key_resp]
    for thisComponent in Pre_RewardComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    Pre_RewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Pre_Reward"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = Pre_RewardClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=Pre_RewardClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *enc* updates
        if enc.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc.frameNStart = frameN  # exact frame index
            enc.tStart = t  # local t and not account for scr refresh
            enc.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc, 'tStartRefresh')  # time at next scr refresh
            enc.setAutoDraw(True)
        if enc.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                enc.tStop = t  # not accounting for scr refresh
                enc.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc, 'tStopRefresh')  # time at next scr refresh
                enc.setAutoDraw(False)
        
        # *cross* updates
        if cross.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            cross.frameNStart = frameN  # exact frame index
            cross.tStart = t  # local t and not account for scr refresh
            cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross, 'tStartRefresh')  # time at next scr refresh
            cross.setAutoDraw(True)
        if cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                cross.tStop = t  # not accounting for scr refresh
                cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross, 'tStopRefresh')  # time at next scr refresh
                cross.setAutoDraw(False)
        
        # *left* updates
        if left.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            left.frameNStart = frameN  # exact frame index
            left.tStart = t  # local t and not account for scr refresh
            left.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left, 'tStartRefresh')  # time at next scr refresh
            left.setAutoDraw(True)
        if left.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > left.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                left.tStop = t  # not accounting for scr refresh
                left.frameNStop = frameN  # exact frame index
                win.timeOnFlip(left, 'tStopRefresh')  # time at next scr refresh
                left.setAutoDraw(False)
        
        # *right* updates
        if right.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            right.frameNStart = frameN  # exact frame index
            right.tStart = t  # local t and not account for scr refresh
            right.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right, 'tStartRefresh')  # time at next scr refresh
            right.setAutoDraw(True)
        if right.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > right.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                right.tStop = t  # not accounting for scr refresh
                right.frameNStop = frameN  # exact frame index
                win.timeOnFlip(right, 'tStopRefresh')  # time at next scr refresh
                right.setAutoDraw(False)
        
        # *isi* updates
        if isi.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
            # keep track of start time/frame for later
            isi.frameNStart = frameN  # exact frame index
            isi.tStart = t  # local t and not account for scr refresh
            isi.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(isi, 'tStartRefresh')  # time at next scr refresh
            isi.setAutoDraw(True)
        if isi.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > isi.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                isi.tStop = t  # not accounting for scr refresh
                isi.frameNStop = frameN  # exact frame index
                win.timeOnFlip(isi, 'tStopRefresh')  # time at next scr refresh
                isi.setAutoDraw(False)
        
        # *key_resp* updates
        waitOnFlip = False
        if key_resp.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
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
            if tThisFlipGlobal > key_resp.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                key_resp.tStop = t  # not accounting for scr refresh
                key_resp.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp, 'tStopRefresh')  # time at next scr refresh
                key_resp.status = FINISHED
        if key_resp.status == STARTED and not waitOnFlip:
            theseKeys = key_resp.getKeys(keyList=['1', '2'], waitRelease=False)
            _key_resp_allKeys.extend(theseKeys)
            if len(_key_resp_allKeys):
                key_resp.keys = _key_resp_allKeys[-1].name  # just the last key pressed
                key_resp.rt = _key_resp_allKeys[-1].rt
                # was this correct?
                if (key_resp.keys == str(corr_resp)) or (key_resp.keys == corr_resp):
                    key_resp.corr = 1
                else:
                    key_resp.corr = 0
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in Pre_RewardComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Pre_Reward"-------
    for thisComponent in Pre_RewardComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_1.addData('enc.started', enc.tStartRefresh)
    trials_1.addData('enc.stopped', enc.tStopRefresh)
    trials_1.addData('cross.started', cross.tStartRefresh)
    trials_1.addData('cross.stopped', cross.tStopRefresh)
    trials_1.addData('left.started', left.tStartRefresh)
    trials_1.addData('left.stopped', left.tStopRefresh)
    trials_1.addData('right.started', right.tStartRefresh)
    trials_1.addData('right.stopped', right.tStopRefresh)
    trials_1.addData('isi.started', isi.tStartRefresh)
    trials_1.addData('isi.stopped', isi.tStopRefresh)
    # check responses
    if key_resp.keys in ['', [], None]:  # No response was made
        key_resp.keys = None
        # was no response the correct answer?!
        if str(corr_resp).lower() == 'none':
           key_resp.corr = 1;  # correct non-response
        else:
           key_resp.corr = 0;  # failed to respond (incorrectly)
    # store data for trials_1 (TrialHandler)
    trials_1.addData('key_resp.keys',key_resp.keys)
    trials_1.addData('key_resp.corr', key_resp.corr)
    if key_resp.keys != None:  # we had a response
        trials_1.addData('key_resp.rt', key_resp.rt)
    trials_1.addData('key_resp.started', key_resp.tStartRefresh)
    trials_1.addData('key_resp.stopped', key_resp.tStopRefresh)
    if key_resp.corr:
        num_correct += 1
        print('correct')
    print(key_resp.keys)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_1'


# ------Prepare to start Routine "reward_ins"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_6.keys = []
key_resp_6.rt = []
_key_resp_6_allKeys = []
# keep track of which components have finished
reward_insComponents = [instructions_page_2, key_resp_6]
for thisComponent in reward_insComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
reward_insClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "reward_ins"-------
while continueRoutine:
    # get current time
    t = reward_insClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=reward_insClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame
    
    # *instructions_page_2* updates
    if instructions_page_2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        instructions_page_2.frameNStart = frameN  # exact frame index
        instructions_page_2.tStart = t  # local t and not account for scr refresh
        instructions_page_2.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(instructions_page_2, 'tStartRefresh')  # time at next scr refresh
        instructions_page_2.setAutoDraw(True)
    
    # *key_resp_6* updates
    waitOnFlip = False
    if key_resp_6.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_6.frameNStart = frameN  # exact frame index
        key_resp_6.tStart = t  # local t and not account for scr refresh
        key_resp_6.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_6, 'tStartRefresh')  # time at next scr refresh
        key_resp_6.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_6.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_6.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_6.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_6.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_6_allKeys.extend(theseKeys)
        if len(_key_resp_6_allKeys):
            key_resp_6.keys = _key_resp_6_allKeys[-1].name  # just the last key pressed
            key_resp_6.rt = _key_resp_6_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False
    
    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()
    
    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in reward_insComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished
    
    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "reward_ins"-------
for thisComponent in reward_insComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('instructions_page_2.started', instructions_page_2.tStartRefresh)
thisExp.addData('instructions_page_2.stopped', instructions_page_2.tStopRefresh)
# check responses
if key_resp_6.keys in ['', [], None]:  # No response was made
    key_resp_6.keys = None
thisExp.addData('key_resp_6.keys',key_resp_6.keys)
if key_resp_6.keys != None:  # we had a response
    thisExp.addData('key_resp_6.rt', key_resp_6.rt)
thisExp.addData('key_resp_6.started', key_resp_6.tStartRefresh)
thisExp.addData('key_resp_6.stopped', key_resp_6.tStopRefresh)
thisExp.nextEntry()
# the Routine "reward_ins" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()

# set up handler to look after randomisation of conditions etc
trials_2 = data.TrialHandler(nReps=1, method='sequential', 
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('sample_list_phase2.csv'),
    seed=None, name='trials_2')
thisExp.addLoop(trials_2)  # add the loop to the experiment
thisTrial_2 = trials_2.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
if thisTrial_2 != None:
    for paramName in thisTrial_2:
        exec('{} = thisTrial_2[paramName]'.format(paramName))

for thisTrial_2 in trials_2:
    currentLoop = trials_2
    # abbreviate parameter names if possible (e.g. rgb = thisTrial_2.rgb)
    if thisTrial_2 != None:
        for paramName in thisTrial_2:
            exec('{} = thisTrial_2[paramName]'.format(paramName))
    
    # ------Prepare to start Routine "Reward"-------
    continueRoutine = True
    routineTimer.add(10.100000)
    # update component parameters for each repeat
    enc2.setImage(stim_name_enc)
    left2.setImage(stim_name_left)
    right2.setImage(stim_name_right)
    key_resp_2.keys = []
    key_resp_2.rt = []
    _key_resp_2_allKeys = []
    reward_star.setImage(star_name)
    # keep track of which components have finished
    RewardComponents = [enc2, cross_2, left2, right2, isi_2, key_resp_2, reward_star, reward_text]
    for thisComponent in RewardComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    RewardClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1
    
    # -------Run Routine "Reward"-------
    while continueRoutine and routineTimer.getTime() > 0:
        # get current time
        t = RewardClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=RewardClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame
        
        # *enc2* updates
        if enc2.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            enc2.frameNStart = frameN  # exact frame index
            enc2.tStart = t  # local t and not account for scr refresh
            enc2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(enc2, 'tStartRefresh')  # time at next scr refresh
            enc2.setAutoDraw(True)
        if enc2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > enc2.tStartRefresh + 2.0-frameTolerance:
                # keep track of stop time/frame for later
                enc2.tStop = t  # not accounting for scr refresh
                enc2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(enc2, 'tStopRefresh')  # time at next scr refresh
                enc2.setAutoDraw(False)
        
        # *cross_2* updates
        if cross_2.status == NOT_STARTED and tThisFlip >= 2.0-frameTolerance:
            # keep track of start time/frame for later
            cross_2.frameNStart = frameN  # exact frame index
            cross_2.tStart = t  # local t and not account for scr refresh
            cross_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(cross_2, 'tStartRefresh')  # time at next scr refresh
            cross_2.setAutoDraw(True)
        if cross_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > cross_2.tStartRefresh + 5.0-frameTolerance:
                # keep track of stop time/frame for later
                cross_2.tStop = t  # not accounting for scr refresh
                cross_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(cross_2, 'tStopRefresh')  # time at next scr refresh
                cross_2.setAutoDraw(False)
        
        # *left2* updates
        if left2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            left2.frameNStart = frameN  # exact frame index
            left2.tStart = t  # local t and not account for scr refresh
            left2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(left2, 'tStartRefresh')  # time at next scr refresh
            left2.setAutoDraw(True)
        if left2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > left2.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                left2.tStop = t  # not accounting for scr refresh
                left2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(left2, 'tStopRefresh')  # time at next scr refresh
                left2.setAutoDraw(False)
        
        # *right2* updates
        if right2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            right2.frameNStart = frameN  # exact frame index
            right2.tStart = t  # local t and not account for scr refresh
            right2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(right2, 'tStartRefresh')  # time at next scr refresh
            right2.setAutoDraw(True)
        if right2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > right2.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                right2.tStop = t  # not accounting for scr refresh
                right2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(right2, 'tStopRefresh')  # time at next scr refresh
                right2.setAutoDraw(False)
        
        # *isi_2* updates
        if isi_2.status == NOT_STARTED and tThisFlip >= 8.6-frameTolerance:
            # keep track of start time/frame for later
            isi_2.frameNStart = frameN  # exact frame index
            isi_2.tStart = t  # local t and not account for scr refresh
            isi_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(isi_2, 'tStartRefresh')  # time at next scr refresh
            isi_2.setAutoDraw(True)
        if isi_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > isi_2.tStartRefresh + 1.5-frameTolerance:
                # keep track of stop time/frame for later
                isi_2.tStop = t  # not accounting for scr refresh
                isi_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(isi_2, 'tStopRefresh')  # time at next scr refresh
                isi_2.setAutoDraw(False)
        
        # *key_resp_2* updates
        waitOnFlip = False
        if key_resp_2.status == NOT_STARTED and tThisFlip >= 7.0-frameTolerance:
            # keep track of start time/frame for later
            key_resp_2.frameNStart = frameN  # exact frame index
            key_resp_2.tStart = t  # local t and not account for scr refresh
            key_resp_2.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(key_resp_2, 'tStartRefresh')  # time at next scr refresh
            key_resp_2.status = STARTED
            # keyboard checking is just starting
            waitOnFlip = True
            win.callOnFlip(key_resp_2.clock.reset)  # t=0 on next screen flip
            win.callOnFlip(key_resp_2.clearEvents, eventType='keyboard')  # clear events on next screen flip
        if key_resp_2.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > key_resp_2.tStartRefresh + 0.6-frameTolerance:
                # keep track of stop time/frame for later
                key_resp_2.tStop = t  # not accounting for scr refresh
                key_resp_2.frameNStop = frameN  # exact frame index
                win.timeOnFlip(key_resp_2, 'tStopRefresh')  # time at next scr refresh
                key_resp_2.status = FINISHED
        if key_resp_2.status == STARTED and not waitOnFlip:
            theseKeys = key_resp_2.getKeys(keyList=['1', '2'], waitRelease=False)
            _key_resp_2_allKeys.extend(theseKeys)
            if len(_key_resp_2_allKeys):
                key_resp_2.keys = _key_resp_2_allKeys[-1].name  # just the last key pressed
                key_resp_2.rt = _key_resp_2_allKeys[-1].rt
        
        # *reward_star* updates
        if reward_star.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
            # keep track of start time/frame for later
            reward_star.frameNStart = frameN  # exact frame index
            reward_star.tStart = t  # local t and not account for scr refresh
            reward_star.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward_star, 'tStartRefresh')  # time at next scr refresh
            reward_star.setAutoDraw(True)
        if reward_star.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > reward_star.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                reward_star.tStop = t  # not accounting for scr refresh
                reward_star.frameNStop = frameN  # exact frame index
                win.timeOnFlip(reward_star, 'tStopRefresh')  # time at next scr refresh
                reward_star.setAutoDraw(False)
        
        # *reward_text* updates
        if reward_text.status == NOT_STARTED and tThisFlip >= 7.6-frameTolerance:
            # keep track of start time/frame for later
            reward_text.frameNStart = frameN  # exact frame index
            reward_text.tStart = t  # local t and not account for scr refresh
            reward_text.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(reward_text, 'tStartRefresh')  # time at next scr refresh
            reward_text.setAutoDraw(True)
        if reward_text.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > reward_text.tStartRefresh + 1.0-frameTolerance:
                # keep track of stop time/frame for later
                reward_text.tStop = t  # not accounting for scr refresh
                reward_text.frameNStop = frameN  # exact frame index
                win.timeOnFlip(reward_text, 'tStopRefresh')  # time at next scr refresh
                reward_text.setAutoDraw(False)
        if key_resp_2.keys:
            print('***')
            print(key_resp_2.keys)
            print(corr_resp)
            print(int(key_resp_2.keys) == int(corr_resp))
            print('***')
            if int(key_resp_2.keys) == int(corr_resp):
                reward_text.text = "Hit! You Won!"
                reward_star.opacity = 1.0
                
        
        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()
        
        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in RewardComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished
        
        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()
    
    # -------Ending Routine "Reward"-------
    for thisComponent in RewardComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    trials_2.addData('enc2.started', enc2.tStartRefresh)
    trials_2.addData('enc2.stopped', enc2.tStopRefresh)
    trials_2.addData('cross_2.started', cross_2.tStartRefresh)
    trials_2.addData('cross_2.stopped', cross_2.tStopRefresh)
    trials_2.addData('left2.started', left2.tStartRefresh)
    trials_2.addData('left2.stopped', left2.tStopRefresh)
    trials_2.addData('right2.started', right2.tStartRefresh)
    trials_2.addData('right2.stopped', right2.tStopRefresh)
    trials_2.addData('isi_2.started', isi_2.tStartRefresh)
    trials_2.addData('isi_2.stopped', isi_2.tStopRefresh)
    # check responses
    if key_resp_2.keys in ['', [], None]:  # No response was made
        key_resp_2.keys = None
    trials_2.addData('key_resp_2.keys',key_resp_2.keys)
    if key_resp_2.keys != None:  # we had a response
        trials_2.addData('key_resp_2.rt', key_resp_2.rt)
    trials_2.addData('key_resp_2.started', key_resp_2.tStartRefresh)
    trials_2.addData('key_resp_2.stopped', key_resp_2.tStopRefresh)
    trials_2.addData('reward_star.started', reward_star.tStartRefresh)
    trials_2.addData('reward_star.stopped', reward_star.tStopRefresh)
    trials_2.addData('reward_text.started', reward_text.tStartRefresh)
    trials_2.addData('reward_text.stopped', reward_text.tStopRefresh)
    thisExp.nextEntry()
    
# completed 1 repeats of 'trials_2'


# Flip one final time so any remaining win.callOnFlip() 
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='tab')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
