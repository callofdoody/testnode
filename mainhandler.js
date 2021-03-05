const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromain')
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
  CREATEALL_MVALLSPLOUTQS: function() {
    return CREATEALL_MVALLSPLOUTQS()
  },

  CGY_CHECKLISTS: function() {
    return CGY_CHECKLISTS()
  },


  VANBBY_CHECKLISTS: function() {
    return VANBBY_CHECKLISTS()
  },  

  getDIR: function() {
    return DIR
  },  

  setDIR: function(inp) {
    DIR = inp
  },   

  HOFC_FULLCHECKLISTS: function() {
    return HOFC_FULLCHECKLISTS()
  },

  RICHHOFC_FULLCHECKLISTS: function() {
    return RICHHOFC_FULLCHECKLISTS()
  },  

  VANDIVS_FULLCHECKLISTS: function() {
    return VANDIVS_FULLCHECKLISTS()
  },

  SCD_VBCGY: function() {
    return SCD_VBCGY()
  }  

};


function SCD_VBCGY(inp) {

//  var moved_days_list = (inp === undefined ? [] : inp)
  var moved_days_list = ["mon"] //***TODO FIX */

  var filelist = []
  var filenames = []

  var mon_scd = scdbatches.SCDBATCH1
  var tue_scd = scdbatches.SCDBATCH2 
  var wed_scd = scdbatches.SCDBATCH3 
  var thr_scd = scdbatches.SCDBATCH4 
  var fri_scd = scdbatches.SCDBATCH5 
  var mon_outq = outqs.OUTQ1
  var tue_outq = outqs.OUTQ2
  var wed_outq = outqs.OUTQ3
  var thr_outq = outqs.OUTQ4
  var fri_outq = outqs.OUTQ5
  var mon_macrodate_MMDDYYYY = (moved_days_list.includes("mon") ? dates.NEXTWEEK_MON_MMDDYYYY() : dates.THISWEEK_MON_MMDDYYYY())
  var tue_macrodate_MMDDYYYY = (moved_days_list.includes("tue") ? dates.NEXTWEEK_TUE_MMDDYYYY() : dates.THISWEEK_TUE_MMDDYYYY())
  var wed_macrodate_MMDDYYYY = (moved_days_list.includes("wed") ? dates.NEXTWEEK_WED_MMDDYYYY() : dates.THISWEEK_WED_MMDDYYYY())
  var thr_macrodate_MMDDYYYY = (moved_days_list.includes("thr") ? dates.NEXTWEEK_THR_MMDDYYYY() : dates.THISWEEK_THR_MMDDYYYY())
  var fri_macrodate_MMDDYYYY = (moved_days_list.includes("fri") ? dates.NEXTWEEK_FRI_MMDDYYYY() : dates.THISWEEK_FRI_MMDDYYYY())

  GY_SCD(macro.scd_cgy(), numdates.NUMDATE_DAY_MON+"To"+numdates.NUMDATE_DAY_FRI,dates.THISWEEK_MON_MMDD()+"-"+
  dates.THISWEEK_FRI_MMDD(),
  false,
  mon_scd, tue_scd, wed_scd, thr_scd, fri_scd, 
    mon_outq, tue_outq, wed_outq, thr_outq, fri_outq,
    mon_macrodate_MMDDYYYY, 
    tue_macrodate_MMDDYYYY, 
    wed_macrodate_MMDDYYYY, 
    thr_macrodate_MMDDYYYY, 
    fri_macrodate_MMDDYYYY, filelist, filenames)

  GY_SCD(macro.scd_cgy(), numdates.NUMDATE_DAY_MON+"To"+numdates.NUMDATE_DAY_FRI,dates.THISWEEK_MON_MMDD()+"-"+
  dates.THISWEEK_FRI_MMDD(),
  true,
  mon_scd, tue_scd, wed_scd, thr_scd, fri_scd, 
    mon_outq, tue_outq, wed_outq, thr_outq, fri_outq,
    mon_macrodate_MMDDYYYY, 
    tue_macrodate_MMDDYYYY, 
    wed_macrodate_MMDDYYYY, 
    thr_macrodate_MMDDYYYY, 
    fri_macrodate_MMDDYYYY, filelist, filenames)    

  GY_SCD(macro.scd_vanbby(), numdates.NUMDATE_DAY_MON+"To"+numdates.NUMDATE_DAY_FRI,dates.THISWEEK_MON_MMDD()+"-"+
  dates.THISWEEK_FRI_MMDD(),
  false,
  mon_scd, tue_scd, wed_scd, thr_scd, fri_scd, 
    mon_outq, tue_outq, wed_outq, thr_outq, fri_outq,
    mon_macrodate_MMDDYYYY, 
    tue_macrodate_MMDDYYYY, 
    wed_macrodate_MMDDYYYY, 
    thr_macrodate_MMDDYYYY, 
    fri_macrodate_MMDDYYYY, filelist, filenames)    

  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }  
  
  return filelist
}




function GY_SCD(macro_obj, today_numdate, today_MMDD, has_gwarning,
mon_scd, tue_scd, wed_scd, thr_scd, fri_scd, 
  mon_outq, tue_outq, wed_outq, thr_outq, fri_outq,
  mon_macrodate_MMDDYYYY, 
  tue_macrodate_MMDDYYYY, 
  wed_macrodate_MMDDYYYY, 
  thr_macrodate_MMDDYYYY, 
  fri_macrodate_MMDDYYYY, filelist, filenames) {
  var fname = macro_obj.filename(MACROSERIES, today_numdate,
    today_MMDD + (has_gwarning ? "_GWARN_": "")
    )
  var variables = macro_obj.variables(has_gwarning, mon_scd, tue_scd, wed_scd, thr_scd, fri_scd, 
  mon_outq, tue_outq, wed_outq, thr_outq, fri_outq,
  mon_macrodate_MMDDYYYY, 
  tue_macrodate_MMDDYYYY, 
  wed_macrodate_MMDDYYYY, 
  thr_macrodate_MMDDYYYY, 
  fri_macrodate_MMDDYYYY)
  var macrobody = macro_obj.macrobody(has_gwarning, mon_scd, tue_scd, wed_scd, thr_scd, fri_scd, 
  mon_outq, tue_outq, wed_outq, thr_outq, fri_outq,
  mon_macrodate_MMDDYYYY, 
  tue_macrodate_MMDDYYYY, 
  wed_macrodate_MMDDYYYY, 
  thr_macrodate_MMDDYYYY, 
  fri_macrodate_MMDDYYYY)
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}



function CREATEALL_MVALLSPLOUTQS() {

  var filelist = []
  var filenames = []

  HOFC_MVALLSPLOUTQS(filelist, filenames)
  RICH_MVALLSPLOUTQS(filelist, filenames)
  CREATEOUTQS_NEXTWK(macro.hofc_createoutqs_nextwk(),filelist, filenames)
  CREATEOUTQS_NEXTWK(macro.rich_createoutqs_nextwk(),filelist, filenames)

  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}

function CGY_CHECKLISTS(filelist, filenames) {
  var filelist = []
  var filenames = []  


  CGY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_MON, dates.THISWEEK_MON_MMDD(), 
  dates.THISWEEK_MON_YYYYMMDD(), 
  dates.THISWEEK_SUN_YYYYMMDD(), 
  dates.THISWEEK_MON_FIRSTOFMONTH_YYYYMMDD(),  outqs.OUTQ1, filelist, filenames)


  CGY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_TUE, dates.THISWEEK_TUE_MMDD(), 
  dates.THISWEEK_TUE_YYYYMMDD(), 
  dates.THISWEEK_MON_YYYYMMDD(), 
  dates.THISWEEK_TUE_FIRSTOFMONTH_YYYYMMDD(),  outqs.OUTQ2, filelist, filenames)

  CGY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_WED, dates.THISWEEK_WED_MMDD(), 
  dates.THISWEEK_WED_YYYYMMDD(), 
  dates.THISWEEK_TUE_YYYYMMDD(), 
  dates.THISWEEK_WED_FIRSTOFMONTH_YYYYMMDD(),  outqs.OUTQ3, filelist, filenames)

  CGY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_THR, dates.THISWEEK_THR_MMDD(), 
  dates.THISWEEK_THR_YYYYMMDD(), 
  dates.THISWEEK_WED_YYYYMMDD(), 
  dates.THISWEEK_THR_FIRSTOFMONTH_YYYYMMDD(),  outqs.OUTQ4, filelist, filenames)  


  CGY_FRIDAY_CHECKLIST(numdates.NUMDATE_EVGY_FRI, dates.THISWEEK_FRI_MMDD(), 
  dates.THISWEEK_FRI_YYYYMMDD(), 
  dates.THISWEEK_THR_YYYYMMDD(), 
  dates.THISWEEK_FRI_FIRSTOFMONTH_YYYYMMDD(), outqs.OUTQ5, filelist, filenames)  


  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


function CGY_DAY_CHECKLIST(today_numdate, today_MMDD, today_YYYYMMDD, yesterday_YYYYMMDD,firstofmonth_billdate_YYYYMMDD, outq, filelist, filenames) {
  var fname = macro.dailylist_cgy().filename(MACROSERIES, today_numdate,
    today_MMDD)
  var macfile = macro.dailylist_cgy().getmacro(
    today_YYYYMMDD, 
    yesterday_YYYYMMDD, 
    dates.NEXTWEEK_MON_YYYYMMDD(),
    firstofmonth_billdate_YYYYMMDD, outq)
  var variables = macro.dailylist_cgy().variables(
    today_YYYYMMDD, 
    yesterday_YYYYMMDD, 
    dates.NEXTWEEK_MON_YYYYMMDD(),
    firstofmonth_billdate_YYYYMMDD, outq)
  var macrobody = macro.dailylist_cgy().macrobody(
    today_YYYYMMDD, 
    yesterday_YYYYMMDD, 
    dates.NEXTWEEK_MON_YYYYMMDD(),
    firstofmonth_billdate_YYYYMMDD, outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}




function CGY_FRIDAY_CHECKLIST(today_numdate, today_MMDD, today_YYYYMMDD, yesterday_YYYYMMDD,firstofmonth_billdate_YYYYMMDD, outq, filelist, filenames) {
  var fname = macro.dailylist_cgyFRI().filename(MACROSERIES, today_numdate + numdates.ENDOFWEEK,
    today_MMDD)
  var macfile = macro.dailylist_cgyFRI().getmacro(
    today_YYYYMMDD, 
    yesterday_YYYYMMDD, 
    dates.THISWEEK_MON_YYYYMMDD(),
    firstofmonth_billdate_YYYYMMDD, outq)

  var variables = macro.dailylist_cgyFRI().variables(
    today_YYYYMMDD, 
    yesterday_YYYYMMDD, 
    dates.THISWEEK_MON_YYYYMMDD(),
    firstofmonth_billdate_YYYYMMDD, outq)
  var macrobody = macro.dailylist_cgyFRI().macrobody(
    today_YYYYMMDD, 
    yesterday_YYYYMMDD, 
    dates.THISWEEK_MON_YYYYMMDD(),
    firstofmonth_billdate_YYYYMMDD, outq)    
  file.createmacro(fname, DIR, variables, macrobody)

  filenames.push(fname)
}


function HOFC_FULLCHECKLISTS() {
  var filelist = []
  var filenames = []

  HOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_MON, dates.THISWEEK_MON_MMDD(),
  dates.THISWEEK_SUN_MMDDYYYY(), outqs.OUTQ1, filelist, filenames)
  HOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_TUE, dates.THISWEEK_TUE_MMDD(),
  dates.THISWEEK_MON_MMDDYYYY(), outqs.OUTQ2, filelist, filenames)
  HOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_WED, dates.THISWEEK_WED_MMDD(),
  dates.THISWEEK_TUE_MMDDYYYY(), outqs.OUTQ3, filelist, filenames)
  HOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_THR, dates.THISWEEK_THR_MMDD(),
  dates.THISWEEK_WED_MMDDYYYY(), outqs.OUTQ4, filelist, filenames)
  HOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_FRI, dates.THISWEEK_FRI_MMDD(),
  dates.THISWEEK_THR_MMDDYYYY(), outqs.OUTQ5, filelist, filenames)      

  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}



function RICHHOFC_FULLCHECKLISTS() {
  var filelist = []
  var filenames = []

  RICHHOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_MON, dates.THISWEEK_MON_MMDD(),
  dates.THISWEEK_SUN_MMDDYYYY(),
   dates.LASTWEEK_FRI_MMDDYYYY(), 
   dates.LASTWEEK_THR_MMDDYYYY(),
  outqs.OUTQ1, outqs.OUTQ5, outqs.OUTQ5,
  filelist, filenames)

  RICHHOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_TUE, dates.THISWEEK_TUE_MMDD(),
  dates.THISWEEK_MON_MMDDYYYY(), dates.THISWEEK_SUN_MMDDYYYY(), dates.LASTWEEK_FRI_MMDDYYYY(),
  outqs.OUTQ2, outqs.OUTQ1, outqs.OUTQ5,
  filelist, filenames)

  RICHHOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_WED, dates.THISWEEK_WED_MMDD(),
  dates.THISWEEK_TUE_MMDDYYYY(), dates.THISWEEK_MON_MMDDYYYY(), dates.THISWEEK_SUN_MMDDYYYY(),
  outqs.OUTQ3, outqs.OUTQ2, outqs.OUTQ1,
  filelist, filenames)  

  RICHHOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_THR, dates.THISWEEK_THR_MMDD(),
  dates.THISWEEK_WED_MMDDYYYY(), dates.THISWEEK_TUE_MMDDYYYY(), dates.THISWEEK_MON_MMDDYYYY(),
  outqs.OUTQ4, outqs.OUTQ3, outqs.OUTQ2,
  filelist, filenames) 

  RICHHOFC_FULLCHECKLIST(numdates.NUMDATE_EVGY_FRI, dates.THISWEEK_FRI_MMDD(),
  dates.THISWEEK_THR_MMDDYYYY(), dates.THISWEEK_WED_MMDDYYYY(), dates.THISWEEK_TUE_MMDDYYYY(),
  outqs.OUTQ5, outqs.OUTQ4, outqs.OUTQ3,
  filelist, filenames)      

  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}

function VANDIVS_FULLCHECKLISTS() {
  var filelist = []
  var filenames = []
//today_numdate, macrodate_MMDD, 
  VANDIVS_FULLCHECKLIST(numdates.NUMDATE_EVGY_MON, dates.THISWEEK_MON_MMDD(),  dates.THISWEEK_SUN_MMDDYYYY(),
  outqs.OUTQ5, filelist, filenames)

  VANDIVS_FULLCHECKLIST(numdates.NUMDATE_EVGY_TUE, dates.THISWEEK_TUE_MMDD(),  dates.THISWEEK_MON_MMDDYYYY(),
  outqs.OUTQ1, filelist, filenames)

  VANDIVS_FULLCHECKLIST(numdates.NUMDATE_EVGY_WED, dates.THISWEEK_WED_MMDD(),  dates.THISWEEK_TUE_MMDDYYYY(),
  outqs.OUTQ2, filelist, filenames)

  VANDIVS_FULLCHECKLIST(numdates.NUMDATE_EVGY_THR, dates.THISWEEK_THR_MMDD(),  dates.THISWEEK_WED_MMDDYYYY(),
  outqs.OUTQ3, filelist, filenames)

  VANDIVS_FULLCHECKLIST(numdates.NUMDATE_EVGY_FRI, dates.THISWEEK_FRI_MMDD(),  dates.THISWEEK_THR_MMDDYYYY(),
  outqs.OUTQ4, filelist, filenames)      

  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}



function VANBBY_CHECKLISTS() {
  var filelist = []
  var filenames = []



  VANBBY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_MON, dates.THISWEEK_MON_MMDD(),    dates.THISWEEK_MON_YYYYMMDD(), 
  dates.THISWEEK_SUN_YYYYMMDD(), 
  dates.NEXTWEEK_MON_YYYYMMDD(),
  dates.THISWEEK_MON_FIRSTOFMONTH_YYYYMMDD(),
  dates.THISWEEK_MON_FIRSTOFPREVMONTH_YYYYMMDD(),
  outqs.OUTQ1, filelist, filenames)

  VANBBY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_TUE, dates.THISWEEK_TUE_MMDD(),    dates.THISWEEK_TUE_YYYYMMDD(), 
  dates.THISWEEK_MON_YYYYMMDD(), 
  dates.NEXTWEEK_MON_YYYYMMDD(),
  dates.THISWEEK_TUE_FIRSTOFMONTH_YYYYMMDD(),
  dates.THISWEEK_TUE_FIRSTOFPREVMONTH_YYYYMMDD(),
  outqs.OUTQ2, filelist, filenames)

  VANBBY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_WED, dates.THISWEEK_WED_MMDD(),    dates.THISWEEK_WED_YYYYMMDD(), 
  dates.THISWEEK_TUE_YYYYMMDD(), 
  dates.NEXTWEEK_MON_YYYYMMDD(),
  dates.THISWEEK_WED_FIRSTOFMONTH_YYYYMMDD(),
  dates.THISWEEK_WED_FIRSTOFPREVMONTH_YYYYMMDD(),
  outqs.OUTQ3, filelist, filenames)

  VANBBY_DAY_CHECKLIST(numdates.NUMDATE_EVGY_THR, dates.THISWEEK_THR_MMDD(),    dates.THISWEEK_THR_YYYYMMDD(), 
  dates.THISWEEK_WED_YYYYMMDD(), 
  dates.NEXTWEEK_MON_YYYYMMDD(),
  dates.THISWEEK_THR_FIRSTOFMONTH_YYYYMMDD(),
  dates.THISWEEK_THR_FIRSTOFPREVMONTH_YYYYMMDD(),
  outqs.OUTQ4, filelist, filenames)  


  VANBBY_FRIDAY_CHECKLIST(numdates.NUMDATE_EVGY_FRI, dates.THISWEEK_FRI_MMDD(),    dates.THISWEEK_FRI_YYYYMMDD(), 
  dates.THISWEEK_THR_YYYYMMDD(), 
  dates.NEXTWEEK_MON_YYYYMMDD(),
  dates.THISWEEK_FRI_FIRSTOFMONTH_YYYYMMDD(),
  dates.THISWEEK_FRI_FIRSTOFPREVMONTH_YYYYMMDD(),
  outqs.OUTQ5, dates.THISWEEK_MON_YYYYMMDD(), 
  dates.THISWEEK_FRI_MMDDYYYY(), scdbatches.SCDBATCH5, 
  filelist, filenames)


  for(i in filenames) {
    insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}


function VANBBY_DAY_CHECKLIST(today_numdate, today_MMDD, today_billdate_YYYYMMDD,
  yesterday_billdate_YYYYMMDD, 
  nextmon_billdate_YYYYMMDD,
  firstofmonth_billdate_YYYYMMDD,
  firstofPREVmonth_billdate_YYYYMMDD,  
  outq, filelist, filenames) {
  var fname = macro.dailylist_vanbby().filename(MACROSERIES, today_numdate,
    today_MMDD)
  var variables = macro.dailylist_vanbby().variables(
    today_billdate_YYYYMMDD,
      yesterday_billdate_YYYYMMDD, 
      nextmon_billdate_YYYYMMDD,
      firstofmonth_billdate_YYYYMMDD,
      firstofPREVmonth_billdate_YYYYMMDD,  
      outq)
  var macrobody = macro.dailylist_vanbby().macrobody(
    today_billdate_YYYYMMDD,
      yesterday_billdate_YYYYMMDD, 
      nextmon_billdate_YYYYMMDD,
      firstofmonth_billdate_YYYYMMDD,
      firstofPREVmonth_billdate_YYYYMMDD,  
      outq)    
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}


function VANBBY_FRIDAY_CHECKLIST(today_numdate, today_MMDD, today_billdate_YYYYMMDD,
  yesterday_billdate_YYYYMMDD, 
  nextmon_billdate_YYYYMMDD,
  firstofmonth_billdate_YYYYMMDD,
  firstofPREVmonth_billdate_YYYYMMDD,  
  outq,earliermon_billdate_YYYYMMDD,macrodate_MMDDYYYY,scdbatch, filelist, filenames) {
  var fname = macro.dailylist_vanbbyFRI().filename(MACROSERIES, today_numdate + numdates.ENDOFWEEK,
    today_MMDD)

  var variables = macro.dailylist_vanbbyFRI().variables(
    today_billdate_YYYYMMDD,
    yesterday_billdate_YYYYMMDD, 
    nextmon_billdate_YYYYMMDD,
    firstofmonth_billdate_YYYYMMDD,
    firstofPREVmonth_billdate_YYYYMMDD,  
    outq,earliermon_billdate_YYYYMMDD,macrodate_MMDDYYYY,scdbatch) 
  var macrobody = macro.dailylist_vanbbyFRI().macrobody(
    today_billdate_YYYYMMDD,
    yesterday_billdate_YYYYMMDD, 
    nextmon_billdate_YYYYMMDD,
    firstofmonth_billdate_YYYYMMDD,
    firstofPREVmonth_billdate_YYYYMMDD,  
    outq,earliermon_billdate_YYYYMMDD,macrodate_MMDDYYYY,scdbatch)    
  file.createmacro(fname, DIR, variables, macrobody)

  filenames.push(fname)
}





function insertFileDetails(insertfilename, sourcepath,filelist) {
  var f1 = {}
  f1['filename'] = insertfilename
  f1['path'] = sourcepath +"/"+ insertfilename
  filelist.push(f1)
}



function HOFC_FULLCHECKLIST(today_numdate, macrodate_MMDD, prevdate_MMDDYYYY, today_outq, filelist, filenames) {
  var fname = macro.hofc_FULLCHECKLIST().filename(MACROSERIES, today_numdate, macrodate_MMDD)

  var variables = macro.hofc_FULLCHECKLIST().variables(prevdate_MMDDYYYY, 
  today_outq) 
  var macrobody = macro.hofc_FULLCHECKLIST().macrobody(prevdate_MMDDYYYY, 
  today_outq)   
  file.createmacro(fname, DIR, variables, macrobody)

  filenames.push(fname)
}

function RICHHOFC_FULLCHECKLIST(today_numdate, macrodate_MMDD, prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
    threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq, filelist, filenames) {
  var fname = macro.richhofc_FULLCHECKLIST().filename(MACROSERIES, today_numdate, macrodate_MMDD)

  var variables = macro.richhofc_FULLCHECKLIST().variables(prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
    threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq)
  var macrobody = macro.richhofc_FULLCHECKLIST().macrobody(prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
    threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq)  
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}

function VANDIVS_FULLCHECKLIST(today_numdate, macrodate_MMDD, prevdate_MMDDYYYY, yesterday_outq, filelist, filenames) {
  var fname = macro.vandivs_FULLCHECKLIST().filename(MACROSERIES, today_numdate, macrodate_MMDD)

  var variables = macro.vandivs_FULLCHECKLIST().variables(prevdate_MMDDYYYY, 
  yesterday_outq) 
  var macrobody = macro.vandivs_FULLCHECKLIST().macrobody(prevdate_MMDDYYYY, 
  yesterday_outq)   
  file.createmacro(fname, DIR, variables, macrobody)

  filenames.push(fname)
}



function HOFC_MVALLSPLOUTQS(filelist, filenames) {
 

  MVALLSPLOUTQS(macro.hofc_mvallsploutqs(), numdates.NUMDATE_EVGY_MON,
  dates.THISWEEK_MON_MMDD(), outqs.OUTQ2, dates.THISWEEK_MON_6DAYSBEFORE_MMDD(), dates.THISWEEK_MON_OLDESTOUTQ_MMDD(),filenames)

  MVALLSPLOUTQS(macro.hofc_mvallsploutqs(), numdates.NUMDATE_EVGY_TUE,
  dates.THISWEEK_TUE_MMDD(), outqs.OUTQ3, dates.THISWEEK_TUE_6DAYSBEFORE_MMDD(), dates.THISWEEK_TUE_OLDESTOUTQ_MMDD(),filenames)

  MVALLSPLOUTQS(macro.hofc_mvallsploutqs(), numdates.NUMDATE_EVGY_WED,
  dates.THISWEEK_WED_MMDD(), outqs.OUTQ4, dates.THISWEEK_WED_6DAYSBEFORE_MMDD(), dates.THISWEEK_WED_OLDESTOUTQ_MMDD(),filenames)

  MVALLSPLOUTQS(macro.hofc_mvallsploutqs(), numdates.NUMDATE_EVGY_THR,
  dates.THISWEEK_THR_MMDD(), outqs.OUTQ5, dates.THISWEEK_THR_6DAYSBEFORE_MMDD(), dates.THISWEEK_THR_OLDESTOUTQ_MMDD(),filenames)  


  MVALLSPLOUTQS_FRI(macro.hofc_mvallsploutqs_fri(), numdates.NUMDATE_EVGY_FRI + numdates.ENDOFWEEK,  dates.THISWEEK_FRI_MMDD(), 
      outqs.OUTQ1, 
      outqs.OUTQ6,  
      dates.THISWEEK_FRI_EARLIERMONDAY_MMDD(), dates.THISWEEK_FRI_OLDESTOUTQ_MON_MMDD(),
      dates.THISWEEK_FRI_LASTSATURDAY_MMDD(),
      dates.THISWEEK_FRI_OLDESTOUTQ_SAT_MMDD(), filenames)


}


function RICH_MVALLSPLOUTQS(filelist, filenames) {

  MVALLSPLOUTQS(macro.rich_mvallsploutqs(), numdates.NUMDATE_EVGY_MON,
  dates.THISWEEK_MON_MMDD(), outqs.OUTQ2, dates.THISWEEK_MON_6DAYSBEFORE_MMDD(), dates.THISWEEK_MON_OLDESTOUTQ_MMDD(),filenames)

  MVALLSPLOUTQS(macro.rich_mvallsploutqs(), numdates.NUMDATE_EVGY_TUE,
  dates.THISWEEK_TUE_MMDD(), outqs.OUTQ3, dates.THISWEEK_TUE_6DAYSBEFORE_MMDD(), dates.THISWEEK_TUE_OLDESTOUTQ_MMDD(),filenames)

  MVALLSPLOUTQS(macro.rich_mvallsploutqs(), numdates.NUMDATE_EVGY_WED,
  dates.THISWEEK_WED_MMDD(), outqs.OUTQ4, dates.THISWEEK_WED_6DAYSBEFORE_MMDD(), dates.THISWEEK_WED_OLDESTOUTQ_MMDD(),filenames)

  MVALLSPLOUTQS(macro.rich_mvallsploutqs(), numdates.NUMDATE_EVGY_THR,
  dates.THISWEEK_THR_MMDD(), outqs.OUTQ5, dates.THISWEEK_THR_6DAYSBEFORE_MMDD(), dates.THISWEEK_THR_OLDESTOUTQ_MMDD(),filenames)



  MVALLSPLOUTQS(macro.rich_mvallsploutqs_fri(), numdates.NUMDATE_EVGY_FRI + numdates.ENDOFWEEK, 
  dates.THISWEEK_FRI_MMDD(), outqs.OUTQ1, dates.THISWEEK_FRI_EARLIERMONDAY_MMDD(), dates.THISWEEK_FRI_OLDESTOUTQ_MON_MMDD(),filenames)
}

function MVALLSPLOUTQS(macro_obj, numdate, macrodate_MMDD, 
  outq, earlierdate_MMDD, oldestoutqdate_MMDD,filenames) {
  var fname = macro_obj.filename(MACROSERIES, numdate, macrodate_MMDD)
  var macfile_rich_fri = macro_obj.getmacro(
    outq, earlierdate_MMDD, oldestoutqdate_MMDD)
  var variables = macro_obj.variables(
    outq, earlierdate_MMDD, oldestoutqdate_MMDD)
  var macrobody = macro_obj.macrobody(
    outq, earlierdate_MMDD, oldestoutqdate_MMDD) 
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}



function MVALLSPLOUTQS_FRI(macro_obj, numdate, macrodate_MMDD, 
outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD, filenames) {
  var fname = macro_obj.filename(MACROSERIES, numdate, macrodate_MMDD)
  var macfile_rich_fri = macro_obj.getmacro(
outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD)
  var variables = macro_obj.variables(
outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD)
  var macrobody = macro_obj.macrobody(
outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD)
  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)
}

function CREATEOUTQS_NEXTWK(macro_obj,filelist, filenames) {
  var fname = macro_obj.filename(MACROSERIES,
    dates.NEXTWEEK_MON_MMDD(),
    dates.NEXTWEEK_SAT_MMDD())
  var macfile = macro_obj.getmacro(
    dates.NEXTWEEK_MON_MMDD(), dates.NEXTWEEK_TUE_MMDD(),
    dates.NEXTWEEK_WED_MMDD(),
    dates.NEXTWEEK_THR_MMDD(),
    dates.NEXTWEEK_FRI_MMDD(),
    dates.NEXTWEEK_SAT_MMDD() )
  //file.writemacro(fname, macfile)
  var variables = macro_obj.variables(
    dates.NEXTWEEK_MON_MMDD(), dates.NEXTWEEK_TUE_MMDD(),
    dates.NEXTWEEK_WED_MMDD(),
    dates.NEXTWEEK_THR_MMDD(),
    dates.NEXTWEEK_FRI_MMDD(),
    dates.NEXTWEEK_SAT_MMDD() )  
  var macrobody = macro_obj.macrobody(
    dates.NEXTWEEK_MON_MMDD(), dates.NEXTWEEK_TUE_MMDD(),
    dates.NEXTWEEK_WED_MMDD(),
    dates.NEXTWEEK_THR_MMDD(),
    dates.NEXTWEEK_FRI_MMDD(),
    dates.NEXTWEEK_SAT_MMDD() )  

  file.createmacro(fname, DIR, variables, macrobody)
  filenames.push(fname)  

}

function HOFC_CREATEOUTQS_NEXTWK(filelist, filenames) {
  var fname_hofc = macro.macros_hofc_createoutqs_nextwk().filename(MACROSERIES,
    dates.NEXTWEEK_MON_MMDD(),
    dates.NEXTWEEK_SAT_MMDD())
  var macfile_hofc = macro.macros_hofc_createoutqs_nextwk().getmacro(
    dates.NEXTWEEK_MON_MMDD(), dates.NEXTWEEK_TUE_MMDD(),
    dates.NEXTWEEK_WED_MMDD(),
    dates.NEXTWEEK_THR_MMDD(),
    dates.NEXTWEEK_FRI_MMDD(),
    dates.NEXTWEEK_SAT_MMDD() )
//  file.writemacro(fname_hofc, macfile_hofc)
  var variables = macro_obj.variables(
    dates.NEXTWEEK_MON_MMDD(), dates.NEXTWEEK_TUE_MMDD(),
    dates.NEXTWEEK_WED_MMDD(),
    dates.NEXTWEEK_THR_MMDD(),
    dates.NEXTWEEK_FRI_MMDD(),
    dates.NEXTWEEK_SAT_MMDD() )  
  var macrobody = macro_obj.macrobody(
    dates.NEXTWEEK_MON_MMDD(), dates.NEXTWEEK_TUE_MMDD(),
    dates.NEXTWEEK_WED_MMDD(),
    dates.NEXTWEEK_THR_MMDD(),
    dates.NEXTWEEK_FRI_MMDD(),
    dates.NEXTWEEK_SAT_MMDD() )  

  file.createmacro(fname_hofc, ".", variables, macrobody)
  filenames.push(fname_hofc)  

}