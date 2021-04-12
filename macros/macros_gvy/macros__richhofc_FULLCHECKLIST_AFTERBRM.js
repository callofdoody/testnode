const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "FULLCHECKLIST_AFTERBRM"
const MACRO_ENV = "_richhofc"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },


  variables: function (prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
    threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq) {
    return variables(prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
      threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq)
  },

  macrobody: function (prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
    threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq) {
    return macrobody(prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
      threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq)
  }    
};

function variables(prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
  threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq) {
  return `

REM Yesterdays date MMDDYYYY is: `+prevdate_MMDDYYYY+`

REM two days before MMDDYYYY is: `+twobizdaysbefore_MMDDYYYY+`

REM three days before MMDDYYYY is: `+threebizdaysbefore_MMDDYYYY+`

REM Today OUTQ is: `+today_outq+`

REM Prev Day OUTQ is: `+yesterday_outq+`

REM Two Biz Days Ago OUTQ is: `+twobizdaysbefore_outq+`


  `}


function macrobody(prevdate_MMDDYYYY, twobizdaysbefore_MMDDYYYY, 
  threebizdaysbefore_MMDDYYYY, 
  today_outq, yesterday_outq, twobizdaysbefore_outq) {
  return `
  autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   ' ========== HOSTARTDAY AND JOBLOG ====================== ====================== =============== ============  

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "wrkjoblst hostar*"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 7,1,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 7,2,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "8"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,2,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,3,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,36,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,37,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DC020"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "QGPL/EMDRENNEY"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,36,"10","3c",3,10000

   autECLSession.autECLPS.Wait 468 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,2,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,3,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "1"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,36,"10","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,37,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DC020"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "QGPL/EMLSALT"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 5,36,"10","3c",3,10000

   autECLSession.autECLPS.Wait 688 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 11,2,"00","3c",3,10000

   autECLSession.autECLPS.Wait 3078 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf18]"
   
   autECLSession.autECLPS.WaitForAttrib 11,2,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 11,3,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "2OUTQ(PDSYLIB000/`+today_outq+`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 19,2,"00","3c",3,10000

   autECLSession.autECLPS.Wait 5406 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf3]"
   
   autECLSession.autECLPS.WaitForAttrib 7,1,"00","3c",3,10000

   autECLSession.autECLPS.Wait 1484 

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf3]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 1250 

   autECLSession.autECLOIA.WaitForAppAvailable
   





   ' ========== ====================== ====================== =============== ============  


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVOUTQ FRMOUTQ(PDSYLIB000/`+today_outq+`) TOOUTQ(QGPL/QPRINTS) SPLFNM(SYOZ31)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      

   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF PDSYLIB000/OUTQC PDSYLIB000/`+today_outq+`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB000/OUTQB)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF PDSYLIB000/OUTQB PDSYLIB000/`+twobizdaysbefore_outq+` PERIOD((*AVAIL) (175959 `+twobizdaysbefore_MMDDYYYY+`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF PDSYLIB000/OUTQB PDSYLIB000/`+yesterday_outq+` PERIOD((*AVAIL) (175959 `+prevdate_MMDDYYYY+`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable




   ' ========== ====================== ====================== =============== ============  





   ' ========== ====================== ====================== =============== ============  




   ' ========== ====================== ====================== =============== ============  

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"

  `}  