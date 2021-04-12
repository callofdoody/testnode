const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "bl450-sq60"
const MACRO_ENV = "wpg"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function (tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq) {
    return mainmacro(tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq)
  },

  variables: function (tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq) {
    return variables(tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq)
  },

  macrobody: function (tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq) {
    return macrobody(tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq)
  }    
};

function variables(tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq) {
  return `


REM Next Monday Date YYYY-MM-DD is: `+ nextweekmon_billdate_YYYY_MM_DD +`

REM TOMORROW NIGHTS **BILLING** date YYYY-MM-DD is: `+ tommorrow_night_billdate_YYYY_MM_DD +`

REM TONIGHTS **BILLING** date YYYY-MM-DD is: `+ tonight_billdate_YYYY_MM_DD +`

REM TONIGHTS **BILLING** date YYYYMMDD is: `+ tonight_billdate_YYYYMMDD +`




REM FIRST OF MONTH YYYY-MM-DD is: `+ firstofmonth_date_YYYY_MM_DD +`

REM MONDAY EARLIER THIS WEEK YYYYMMDD is: `+ thisweekmon_date_YYYYMMDD +`

REM FIRST OF MONTH YYYYMMDD `+ firstofmonth_date_YYYYMMDD +`

REM OUTQ of the day is: `+ outq +`

  `}


function macrobody(tonight_billdate_YYYYMMDD, 
  tonight_billdate_YYYY_MM_DD, 
  nextweekmon_billdate_YYYY_MM_DD,
  tommorrow_night_billdate_YYYY_MM_DD,
  firstofmonth_date_YYYY_MM_DD,
  firstofmonth_date_YYYYMMDD,
  thisweekmon_date_YYYYMMDD,
  outq) {
  return `


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf23]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL4"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "50"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,40,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,41,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`Y"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,40,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1813 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMWBARCLAY"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,40,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1390 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL5"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "32"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,20,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable








  '=======================================================

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "13"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "130101"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "999999"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "OUTQB"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 2750 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 3406 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,59,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,60,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "R"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "100"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,59,"00","3c",3,10000

   autECLSession.autECLPS.Wait 2000 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "13"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "200101"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "999999"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "*YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "OUTQB"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable


  '=====================================================














   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "62"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,38,"00","3c",3,10000

   autECLSession.autECLPS.Wait 953 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,38,"00","3c",3,10000

   autECLSession.autECLPS.Wait 1297 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "64"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 1,1,"20","3c",3,10000

   autECLSession.autECLPS.Wait 963 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
 



   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[up]"      
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"   
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1532 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 890 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1547 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1109 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "28"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   



   '=======================================================



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "50"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,43,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,44,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,43,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1000 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMRGOFFARD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "50"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,43,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,44,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ nextweekmon_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,43,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1328 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMRGOFFARD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "56"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"


   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   ' =======================================================


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "45"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 10,30,"10","3c",3,10000

   autECLSession.autECLPS.Wait 7000 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 10,30,"10","3c",3,10000

   autECLSession.autECLPS.Wait 3703 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   ' =======================================================


   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PO7162"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,35,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1750 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,1,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1563 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 6,32,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,33,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`S`+ nextweekmon_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,1,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1485 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 6,35,"10","3c",3,10000

   autECLSession.autECLPS.Wait 875 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   


   '===========================================================


  
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "RE"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "54"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,35,"10","3c",3,10000

   autECLSession.autECLPS.Wait 7594 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,35,"10","3c",3,10000

   autECLSession.autECLPS.Wait 2750 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,35,"10","3c",3,10000

   autECLSession.autECLPS.Wait 4062 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL4"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "71"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,31,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,32,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMRGOFFARD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,31,"10","3c",3,10000

   autECLSession.autECLPS.Wait 3453 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   


   
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL4"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "81"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,15,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,16,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "34"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,22,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,23,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,22,"10","3c",3,10000

   autECLSession.autECLPS.Wait 9578 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "34"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,22,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,23,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "I"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "M"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,22,"10","3c",3,10000

   autECLSession.autECLPS.Wait 2485 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "53"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,22,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,23,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "I"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 8,22,"10","3c",3,10000

   autECLSession.autECLPS.Wait 4094 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MT6"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "22"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,17,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,18,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,17,"00","3c",3,10000

   autECLSession.autECLPS.Wait 15765 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MT6"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "22"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,17,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,18,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tommorrow_night_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,17,"00","3c",3,10000

   autECLSession.autECLPS.Wait 4485 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "10"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   '==============================================================

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMRGOFFARD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 3516 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1406 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1484 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 797 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   

  
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 2031 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 750 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "E"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backspace]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ thisweekmon_date_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 2172 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 407 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "ID"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[left]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 828 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 422 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   



   '==============================================================


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI3"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "14"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "32"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,27,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,28,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "UD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 1,1,"20","3c",3,10000

   autECLSession.autECLPS.Wait 2688 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 1,1,"20","3c",3,10000

   autECLSession.autECLPS.Wait 3156 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "33"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,27,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,28,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "UD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "T"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,27,"10","3c",3,10000

   autECLSession.autECLPS.Wait 2421 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "74"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,33,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,34,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMCREEKRUS"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,33,"10","3c",3,10000

   autECLSession.autECLPS.Wait 994 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "PI"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "74"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,33,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,34,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ firstofmonth_date_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYY_MM_DD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf21]"
   
   autECLSession.autECLPS.WaitForAttrib 8,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 8,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "EMRGOFFARD"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,33,"10","3c",3,10000

   autECLSession.autECLPS.Wait 994 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   





   '==============================================================


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BK"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "66"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "22"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "SQ"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "60"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,43,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "BL"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "s"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,30,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,31,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_billdate_YYYYMMDD +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,54,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 6,55,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "YES"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ outq +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[right]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "NO"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 6,2,"10","3c",3,10000

   autECLSession.autECLPS.Wait 1422 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 11,42,"10","3c",3,10000

   autECLSession.autECLPS.Wait 765 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf1]"
   
   autECLSession.autECLPS.WaitForAttrib 18,20,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,21,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"   




`}