const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "FULLCHECKLIST_AFTERBRM"
const MACRO_ENV = "_hofc"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function (prevdate_MMDDYYYY, 
  today_outq) {
    return mainmacro(prevdate_MMDDYYYY, 
  today_outq)
  },

  variables: function (prevdate_MMDDYYYY, 
  today_outq) {
    return variables(prevdate_MMDDYYYY, 
  today_outq)
  },

  macrobody: function (prevdate_MMDDYYYY, 
  today_outq) {
    return macrobody(prevdate_MMDDYYYY, 
  today_outq)
  }    
};

function variables(prevdate_MMDDYYYY, 
  today_outq) {
  return `
REM Previous date MMDDYYYY is: `+prevdate_MMDDYYYY+`

REM Todays OUTQ is: `+today_outq+` 
  `}


function macrobody(prevdate_MMDDYYYY, 
  today_outq) {
  return `

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"

   ' ========== INSERT LASER32 DEL 7day+ SPLFS ====================== ====================== =============== ============  



   ' ========== INSERT MANSPECRPT JOBLOG ====================== ====================== =============== ============  


   ' autECLSession.autECLOIA.WaitForInputReady
   ' autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(QPJOBLOG1) TOOUTQ(MANSPECRPT) FILE(QPJOBLOG) JOB(MANSPECRPT)"
   ' autECLSession.autECLOIA.WaitForInputReady
   ' autECLSession.autECLPS.SendKeys "[enter]"
   
   
   ' autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   ' autECLSession.autECLPS.WaitForCursor 18,7,10000

   ' autECLSession.autECLOIA.WaitForAppAvailable


   ' ========== INSERT HOSTARTDAY JOBLOG ====================== ====================== =============== ============  


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
   autECLSession.autECLPS.SendKeys "CLROUTQ QPRINT2"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(QPRINT) TOOUTQ(QPRINT2) PERIOD((*AVAIL) (175959 `+prevdate_MMDDYYYY+`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(QPRINTS) TOOUTQ(QPRINT2) PERIOD((*AVAIL) (175959 `+prevdate_MMDDYYYY+`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(XMIT) TOOUTQ(QPRINT2) PERIOD((*AVAIL) (175959 `+prevdate_MMDDYYYY+`))"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable      
   
   ' ========== ====================== ====================== =============== ============ 

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "RLSJOBQ SPECALRPT"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   ' ========== ====================== ====================== =============== ============  



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "RLSJOBQ NIGHT"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable



   ' ========== ====================== ====================== =============== ============     

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVOUTQ FRMOUTQ(PDSYLIB000/`+today_outq+`) TOOUTQ(QGPL/QPRINTS) SPLFNM(SYOZ31) XJOB(HOSTARTDAY)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVOUTQ FRMOUTQ(SFODAILY) TOOUTQ(QGPL/QPRINTS) SPLFNM(SYOZ31) XJOB(HOSTARTDAY)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable







   ' ========== ====================== ====================== =============== ============  






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"

  `}  