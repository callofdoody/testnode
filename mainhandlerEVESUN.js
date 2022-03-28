const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromainEVESUN')
const emailer = require('./emailutils')
const file = require('./fileutils')
const dates = require('./dateutils')
const numdates = require('./numdatelabels')
const outqs = require('./outqs')
const scdbatches = require('./scdbatches')



const MACROSERIES = "RUN02"

const GVY_SHIFT = "gvy"
const EVE_SHIFT = "eve"
const DAY_SHIFT = "day"
const WKND_SHIFT = "wknd"

var DIR = "."


module.exports = {

  WPG_CHECKLISTS: function() {
    return WPG_CHECKLISTS()
  },  

  WPG_MOVEALLS: function() {
    return WPG_MOVEALLS()
  }, 
  
  RICH_MVLOGS_SCDS: function() {
    return RICH_MVLOGS_SCDS()
  },    

  HOFC_MVLOGS_SCDS: function() {
    return HOFC_MVLOGS_SCDS()
  },    
    

  getDIR: function() {
    return DIR
  },  

  setDIR: function(inp) {
    DIR = inp
  },   
}


function WPG_CHECKLISTS() {
  var filelist = []
  var filenames = []  

/*
function (tonight_billdate_YYYYMMDD,
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  outq) {
    return macrobody(tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  outq)
*/
  WPG_CHECKLIST_SUN(numdates.NUMDATE_WKND_SUN, 
    dates.THISWEEK_MON_MMDD(), 
    dates.THISWEEK_TUE_YYYYMMDD(), 
    dates.THISWEEK_TUE_YYYY_MM_DD(), 
    dates.NEXTWEEK_MON_YYYY_MM_DD(),       
    dates.THISWEEK_WED_YYYY_MM_DD(),  
    outqs.OUTQ1, filelist, filenames)


  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist


}



function WPG_MOVEALLS(){
  var filelist = []
  var filenames = []  



  WPG_MOVEALL(numdates.NUMDATE_WKND_SUN, 
    dates.THISWEEK_SUN_MMDD(),
    dates.THISWEEK_SUN_MMDDYYYY(),
    dates.THISWEEK_SUN_MMDDYY(), 
    outqs.OUTQ5, filelist, filenames)

  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}




/*
RICH_MOVELOGS_SCD(today_numdate, today_MMDD, 
    scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY, 
  filelist, filenames) 
*/
function RICH_MVLOGS_SCDS(){
  var filelist = []
  var filenames = []  

  RICH_MOVELOGS_SCD(numdates.NUMDATE_WKND_SUN, 
    dates.THISWEEK_SUN_MMDD(),
    dates.THISWEEK_SUN_MMDDYYYY(),
    scdbatches.TEMP,
    outqs.OUTQ1,
    dates.THISWEEK_SUN_MMDDYY(),
    dates.THISWEEK_MON_MMDDYY(),
     filelist, filenames)

  
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


function RICH_MVLOGS_REGS(){
  var filelist = []
  var filenames = []  


  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}

/*
HOFC_MOVELOGS_SCD(today_numdate, today_MMDD, 
    scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY, 
  filelist, filenames) 
*/
function HOFC_MVLOGS_SCDS(){
  var filelist = []
  var filenames = []  

  HOFC_MOVELOGS_SCD(numdates.NUMDATE_WKND_SUN, 
    dates.THISWEEK_SUN_MMDD(),
    dates.THISWEEK_SUN_MMDDYYYY(),
    scdbatches.TEMP,
    outqs.OUTQ1,
    dates.THISWEEK_SUN_MMDDYY(),
    dates.THISWEEK_MON_MMDDYY(),
     filelist, filenames)


  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


function HOFC_MVLOGS_REGS(){
  var filelist = []
  var filenames = []  


  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}

function WPG_CHECKLIST_SUN(today_numdate, today_MMDD, 
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq, filelist, filenames) {
  var fname = macro.wpg_SUN().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.wpg_SUN().variables(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq)
  var macrobody = macro.wpg_SUN().macrobody(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}



// tonight_actualdate_MMDDYYYY,
//   tonight_actualdate_MMDDYY,
//   outq
function WPG_MOVEALL(today_numdate, today_MMDD, 
    tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq, filelist, filenames) {
  var fname = macro.wpg_MOVEALL().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.wpg_MOVEALL().variables(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq)
  var macrobody = macro.wpg_MOVEALL().macrobody(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}




function RICH_MOVELOGS_SCD(today_numdate, today_MMDD, 
    scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY, 
  filelist, filenames) {
  var fname = macro.scd_rich_MVLOGS().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_rich_MVLOGS().variables(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)
  var macrobody = macro.scd_rich_MVLOGS().macrobody(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function HOFC_MOVELOGS_SCD(today_numdate, today_MMDD, 
    scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY, 
  filelist, filenames) {
  var fname = macro.scd_hofc_MVLOGS().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_hofc_MVLOGS().variables(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)
  var macrobody = macro.scd_hofc_MVLOGS().macrobody(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}
