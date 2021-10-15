const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "_MOVELOGS_DCENDP"
const MACRO_ENV = "_scd_rich"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY) {
    return mainmacro(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)
  },

  variables: function(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY) {
    return variables(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)
  },

  macrobody: function(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY) {
    return macrobody(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY)
  }    
};

function variables(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY) {
  return `




REM  **IMPORTANT** MUST CLEAR PDSYLIB000/MTPTAB65 FIRST!

REM SCD DATE MMDDYYY IS: `+ scddate_MMDDYYY +`

REM SCD BATCH IS: `+ scdbatch +`

REM TONIGHT OUTQ IS: `+ outq_tonight +`

REM DATESTART IS: `+ strdate_MMDDYY +` 

REM DATEEND IS:  `+ enddate_MMDDYY +` 

  `}


function macrobody(scddate_MMDDYYY,
  scdbatch,
  outq_tonight,
  strdate_MMDDYY,
  enddate_MMDDYY) {
  return `



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   ' ========== ====================== ====================== =============== ============



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(QSYS/MOVSPLFBRM OPTION(*MOVE) TOOUTQ(PDSYLIB000/`+ outq_tonight +`) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " FROMOUTQ(PDSYLIB000/QPJOBLOG1) FILE(QPJOBLOG) JOB(HOENDPER) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SLTCRTDATE(`+ strdate_MMDDYY +` `+ enddate_MMDDYY +`)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(MJBLGHOEND) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(223000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  

   ' ========== ====================== ====================== =============== ============




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(QSYS/MOVSPLFBRM OPTION(*MOVE) TOOUTQ(PDSYLIB020/`+ outq_tonight +`) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " FROMOUTQ(PDSYLIB020/QPJOBLOG1) FILE(QPJOBLOG) JOB(DCENDP020) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SLTCRTDATE(`+ strdate_MMDDYY +` `+ enddate_MMDDYY +`)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(MJBLGDC020) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(223000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  

   ' ========== ====================== ====================== =============== ============




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(QSYS/MOVSPLFBRM OPTION(*MOVE) TOOUTQ(PDSYLIB022/`+ outq_tonight +`) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " FROMOUTQ(PDSYLIB022/QPJOBLOG1) FILE(QPJOBLOG) JOB(DCENDP022) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SLTCRTDATE(`+ strdate_MMDDYY +` `+ enddate_MMDDYY +`)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(MJBLGDC022) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(223000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  

   ' ========== ====================== ====================== =============== ============




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(QSYS/MOVSPLFBRM OPTION(*MOVE) TOOUTQ(PDSYLIB079/`+ outq_tonight +`) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " FROMOUTQ(PDSYLIB079/QPJOBLOG1) FILE(QPJOBLOG) JOB(DCENDP079) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SLTCRTDATE(`+ strdate_MMDDYY +` `+ enddate_MMDDYY +`)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(MJBLGDC079) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(223000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  

   ' ========== ====================== ====================== =============== ============



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(QSYS/MOVSPLFBRM OPTION(*MOVE) TOOUTQ(PDSYLIB110/`+ outq_tonight +`) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " FROMOUTQ(PDSYLIB110/QPJOBLOG1) FILE(QPJOBLOG) JOB(DCENDP110) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SLTCRTDATE(`+ strdate_MMDDYY +` `+ enddate_MMDDYY +`)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(MJBLGDC110) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(223000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  

   ' ========== ====================== ====================== =============== ============



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(QSYS/MOVSPLFBRM OPTION(*MOVE) TOOUTQ(PDSYLIB172/`+ outq_tonight +`) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " FROMOUTQ(PDSYLIB172/QPJOBLOG1) FILE(QPJOBLOG) JOB(DCENDP172) "

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SLTCRTDATE(`+ strdate_MMDDYY +` `+ enddate_MMDDYY +`)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(MJBLGDC172) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(223000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  

   ' ========== ====================== ====================== =============== ============


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"   











`}