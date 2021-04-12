const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "MOVEALL"
const MACRO_ENV = "wpg"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function (tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq) {
    return mainmacro(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq)
  },

  variables: function (tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq) {
    return variables(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq)
  },

  macrobody: function (tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq) {
    return macrobody(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq)
  }    
};

function variables(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq) {
  return `



REM Tonights ACTUAL Date MMDDYYYY is: `+ tonight_actualdate_MMDDYYYY +`

REM Tonights ACTUAL Date MMDDYY is: `+ tonight_actualdate_MMDDYY +`

REM LAST DAY's OUTQ is: /`+ outq +`



  `}


function macrobody(tonight_actualdate_MMDDYYYY,
  tonight_actualdate_MMDDYY,
  outq) {
  return `


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   ' ========== ====================== ====================== =============== ============



   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "qsys/movsplfbrm"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf4]"
   
   autECLSession.autECLPS.WaitForAttrib 5,36,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 5,37,10000

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
   autECLSession.autECLPS.SendKeys "MOVE"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "WINLASER05"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[backtab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[tab]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "QUSRSYS"
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
   autECLSession.autECLPS.SendKeys "OUTQ*"
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
   autECLSession.autECLPS.SendKeys "PDSYLIB079"
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
   autECLSession.autECLPS.SendKeys "AROP04"
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
   autECLSession.autECLPS.SendKeys "WHENDP079"
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
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[delete]"

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "`+ tonight_actualdate_MMDDYY +`"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll up]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[roll down]"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable



                    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQB)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQC)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQD)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQE)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQH)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQJ)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQK)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/OUTQXHDR)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/DRYROOM)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/EMAIL)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable 


   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/RCOUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/RFOUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB079/RFOUTQ2)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   


   ' ========== ====================== ====================== =============== ============


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQB) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQC) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQD) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQE) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQH) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQJ) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQK) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable      



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/OUTQXHDR) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable             


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/DRYROOM) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/EMAIL) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable 


   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/RCOUTQ1) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/RFOUTQ1) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/RFOUTQ2) TOOUTQ(PDSYLIB079/`+ outq +`) PERIOD((*AVAIL) (175959 `+ tonight_actualdate_MMDDYYYY +`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVOUTQ FRMOUTQ(PDSYLIB079/`+ outq +`) TOOUTQ(PDSYLIB079/`+ outq +`) SPLFNM(APOR63)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVOUTQ FRMOUTQ(PDSYLIB079/`+ outq +`) TOOUTQ(PDSYLIB079/`+ outq +`) SPLFNM(APOR63A)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable      




                                 
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"




`}