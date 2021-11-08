const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromainEVE')
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

  HOFC_CHECKLISTS: function() {
    return HOFC_CHECKLISTS()
  },  

  HOFC_REG_CHECKLISTS: function() {
    return HOFC_REG_CHECKLISTS()
  },    

  HOFC_ADM_CHECKLISTS: function() {
    return HOFC_ADM_CHECKLISTS()
  },    

  RICH_CHECKLISTS: function() {
    return RICH_CHECKLISTS()
  },    

  RICH_REG_CHECKLISTS: function() {
    return RICH_REG_CHECKLISTS()
  },     

  RICH_ADM_CHECKLISTS: function() {
    return RICH_ADM_CHECKLISTS()
  },       

  CGY_MOVEALLS: function() {
    return CGY_MOVEALLS()
  },  

  WPG_MOVEALLS: function() {
    return WPG_MOVEALLS()
  }, 
  
  RICH_MVLOGS_SCDS: function() {
    return RICH_MVLOGS_SCDS()
  },    
  
  // RICH_MVLOGS_REGS: function() {
  //   return RICH_MVLOGS_REGS()
  // },      

  // HOMEOFC_MVLOGS_SCDS: function() {
  //   return HOMEOFC_MVLOGS_SCDS()
  // },    
  
  // HOMEOFC_MVLOGS_REGS: function() {
  //   return HOMEOFC_MVLOGS_REGS()
  // },        

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


  WPG_CHECKLIST_MON(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(), 
    dates.THISWEEK_TUE_YYYYMMDD(), 
    dates.THISWEEK_TUE_YYYY_MM_DD(), 
    dates.NEXTWEEK_MON_YYYY_MM_DD(),       
    dates.THISWEEK_WED_YYYY_MM_DD(),  
    outqs.OUTQ2, filelist, filenames)


  WPG_CHECKLIST_TUE(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(), 
    dates.THISWEEK_WED_YYYYMMDD(), 
    dates.THISWEEK_WED_YYYY_MM_DD(),
    dates.NEXTWEEK_MON_YYYY_MM_DD(),      
    dates.THISWEEK_THR_YYYY_MM_DD(), 
    outqs.OUTQ3, filelist, filenames)  



  WPG_CHECKLIST_WED(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(), 
    dates.THISWEEK_THR_YYYYMMDD(), 
    dates.THISWEEK_THR_YYYY_MM_DD(),   
    dates.NEXTWEEK_MON_YYYY_MM_DD(),
    dates.THISWEEK_FRI_YYYY_MM_DD(),
    dates.TWOWEEKSAGO_THR_YYYY_MM_DD(), 
    dates.TWOMONTHSLATER_THR_YYYY_MM_DD(),
    outqs.OUTQ4, filelist, filenames)  


  WPG_CHECKLIST_THR(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(), 
    dates.THISWEEK_FRI_YYYYMMDD(), 
    dates.THISWEEK_FRI_YYYY_MM_DD(),
    // dates.TWOWEEKSLATER_MON_YYYY_MM_DD(),
    dates.NEXTWEEK_MON_YYYY_MM_DD(),      
    dates.NEXTWEEK_MON_YYYY_MM_DD(), 
    dates.THISWEEK_FRI_FIRSTOFMONTH_YYYY_MM_DD(),
    dates.THISWEEK_FRI_FIRSTOFMONTH_YYYYMMDD(),
    dates.THISWEEK_MON_YYYYMMDD(),    
    outqs.OUTQ5, filelist, filenames)      



  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist


}


/*
HOFC_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames)
    */


 
 // ** NO SCDBATCHES  YET **
function HOFC_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames)                
*/
  
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist


}

 
 // ** NO SCDBATCHES  YET **
function HOFC_REG_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  HOFC_REG_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  HOFC_REG_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  HOFC_REG_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  HOFC_REG_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  HOFC_REG_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames)                
*/
  
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


 
 // ** NO SCDBATCHES  YET **
function HOFC_ADM_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  HOFC_ADM_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  HOFC_ADM_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  HOFC_ADM_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  HOFC_ADM_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  HOFC_ADM_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames)                
*/
  
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist


}



 
 // ** NO SCDBATCHES  YET **
function RICH_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  RICH_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames)
*/                
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}

 // ** NO SCDBATCHES  YET **
function RICH_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  RICH_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames)   
*/

  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


 // ** NO SCDBATCHES  YET **
function RICH_ADM_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  RICH_ADM_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  RICH_ADM_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  RICH_ADM_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  RICH_ADM_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  RICH_ADM_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames)
*/

  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


 // ** NO SCDBATCHES  YET **
function RICH_REG_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  RICH_REG_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ1, filelist, filenames)

  RICH_REG_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ2, filelist, filenames)  

  RICH_REG_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ3, filelist, filenames)  

  RICH_REG_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ4, filelist, filenames)  

/*
  // USE FOR WKND FRI?
  RICH_REG_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.TEMP,
    outqs.OUTQ5, filelist, filenames) 
*/               

  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


// function HOFC_MVLOGS(){
//   var filelist = []
//   var filenames = []  


//   for(i in filenames) {
//     file.insertFileDetails(filenames[i], DIR, filelist)
//   }
  
//   return filelist
// }


// function RICH_MVLOGS(){
//   var filelist = []
//   var filenames = []  


//   for(i in filenames) {
//     file.insertFileDetails(filenames[i], DIR, filelist)
//   }
  
//   return filelist
// }\]


function WPG_MOVEALLS(){
  var filelist = []
  var filenames = []  


// tonight_actualdate_MMDDYYYY,
//   tonight_actualdate_MMDDYY,
//   outq


  WPG_MOVEALL(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(),
    dates.THISWEEK_MON_MMDDYY(), 
    outqs.OUTQ1, filelist, filenames)

  WPG_MOVEALL(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(),
    dates.THISWEEK_TUE_MMDDYY(), 
    outqs.OUTQ2, filelist, filenames)  

  WPG_MOVEALL(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(),
    dates.THISWEEK_WED_MMDDYY(), 
    outqs.OUTQ3, filelist, filenames)  

  WPG_MOVEALL(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(),
    dates.THISWEEK_THR_MMDDYY(), 
    outqs.OUTQ4, filelist, filenames)  

  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


 
function CGY_MOVEALLS(){
  var filelist = []
  var filenames = []  

  CGY_MOVEALL(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(),
    outqs.OUTQ1, filelist, filenames)

  CGY_MOVEALL(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(),
    outqs.OUTQ2, filelist, filenames)  

  CGY_MOVEALL(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(),
    outqs.OUTQ3, filelist, filenames)  

  CGY_MOVEALL(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(),
    outqs.OUTQ4, filelist, filenames)  


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

  RICH_MOVELOGS_SCD(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(),
    scdbatches.TEMP,
    outqs.OUTQ2,
    dates.THISWEEK_MON_MMDDYY(),
    dates.THISWEEK_SUN_MMDDYY(),
     filelist, filenames)

  RICH_MOVELOGS_SCD(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(),
    scdbatches.TEMP,
    outqs.OUTQ3,
    dates.THISWEEK_TUE_MMDDYY(),
    dates.THISWEEK_MON_MMDDYY(),    
     filelist, filenames)  

  RICH_MOVELOGS_SCD(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(),
    scdbatches.TEMP,
    outqs.OUTQ4,
    dates.THISWEEK_WED_MMDDYY(),
    dates.THISWEEK_TUE_MMDDYY(),     
     filelist, filenames)  

  RICH_MOVELOGS_SCD(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(),
    scdbatches.TEMP,
    outqs.OUTQ5,
    dates.THISWEEK_THR_MMDDYY(),
    dates.THISWEEK_WED_MMDDYY(),     
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


function WPG_CHECKLIST_MON(today_numdate, today_MMDD, 
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq, filelist, filenames) {
  var fname = macro.wpg_MON().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.wpg_MON().variables(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq)
  var macrobody = macro.wpg_MON().macrobody(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function WPG_CHECKLIST_TUE(today_numdate, today_MMDD, 
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq, filelist, filenames) {
  var fname = macro.wpg_TUE().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.wpg_TUE().variables(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq)
  var macrobody = macro.wpg_TUE().macrobody(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}



function WPG_CHECKLIST_WED(today_numdate, today_MMDD, 
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    twoweeksago_date_YYYY_MM_DD,
    twomonthslater_date_YYYY_MM_DD,
      outq, filelist, filenames) {
  var fname = macro.wpg_WED().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.wpg_WED().variables(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    twoweeksago_date_YYYY_MM_DD,
    twomonthslater_date_YYYY_MM_DD,
      outq)
  var macrobody = macro.wpg_WED().macrobody(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    twoweeksago_date_YYYY_MM_DD,
    twomonthslater_date_YYYY_MM_DD,
      outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}





function WPG_CHECKLIST_THR(today_numdate, today_MMDD, 
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    firstofmonth_date_YYYY_MM_DD,
    firstofmonth_date_YYYYMMDD,
    thisweekmon_date_YYYYMMDD,
      outq, filelist, filenames) {
  var fname = macro.wpg_THR().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.wpg_THR().variables(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    firstofmonth_date_YYYY_MM_DD,
    firstofmonth_date_YYYYMMDD,
    thisweekmon_date_YYYYMMDD,
      outq)
  var macrobody = macro.wpg_THR().macrobody(
    tonight_billdate_YYYYMMDD,
    tonight_billdate_YYYY_MM_DD, 
    nextweekmon_billdate_YYYY_MM_DD,
    tommorrow_night_billdate_YYYY_MM_DD,
    firstofmonth_date_YYYY_MM_DD,
    firstofmonth_date_YYYYMMDD,
    thisweekmon_date_YYYYMMDD,
      outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}




function HOFC_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames) {
  var fname = macro.scd_hofc().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_hofc().variables(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)
  var macrobody = macro.scd_hofc().macrobody(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function HOFC_REG_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames) {
  var fname = macro.scd_hofc_REG().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_hofc_REG().variables(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)
  var macrobody = macro.scd_hofc_REG().macrobody(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}

function HOFC_ADM_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames) {
  var fname = macro.scd_hofc_ADM().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_hofc_ADM().variables(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)
  var macrobody = macro.scd_hofc_ADM().macrobody(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function RICH_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames) {
  var fname = macro.scd_rich().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_rich().variables(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)
  var macrobody = macro.scd_rich().macrobody(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function RICH_ADM_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames) {
  var fname = macro.scd_rich_ADM().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_rich_ADM().variables(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)
  var macrobody = macro.scd_rich_ADM().macrobody(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function RICH_REG_CHECKLIST(today_numdate, today_MMDD, 
    scddate_MMDDYYYY,
    scdbatch,
    outq_morning, filelist, filenames) {
  var fname = macro.scd_rich_REG().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.scd_rich_REG().variables(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)
  var macrobody = macro.scd_rich_REG().macrobody(scddate_MMDDYYYY,
    scdbatch,
    outq_morning)    
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



function CGY_MOVEALL(today_numdate, today_MMDD, 
    tonight_actualdate_MMDDYYYY,
  outq, filelist, filenames) {
  var fname = macro.cgy_MOVEALL().filename(MACROSERIES+"_"+EVE_SHIFT, today_numdate,
    today_MMDD)
  var variables = macro.cgy_MOVEALL().variables(tonight_actualdate_MMDDYYYY,
  outq)
  var macrobody = macro.cgy_MOVEALL().macrobody(tonight_actualdate_MMDDYYYY,
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
