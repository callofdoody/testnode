const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "_noHOENDP"
const MACRO_ENV = "_scd_richADM"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function(scddate_MMDDYYY,
  scdbatch,
  outq_morning) {
    return mainmacro(scddate_MMDDYYY,
  scdbatch,
  outq_morning)
  },

  variables: function(scddate_MMDDYYY,
  scdbatch,
  outq_morning) {
    return variables(scddate_MMDDYYY,
  scdbatch,
  outq_morning)
  },

  macrobody: function(scddate_MMDDYYY,
  scdbatch,
  outq_morning) {
    return macrobody(scddate_MMDDYYY,
  scdbatch,
  outq_morning)
  }    
};

function variables(scddate_MMDDYYY,
  scdbatch,
  outq_morning) {
  return `




REM  **IMPORTANT** MUST CLEAR PDSYLIB000/MTPTAB65 FIRST!

REM SCD DATE MMDDYYY IS: `+ scddate_MMDDYYY +`

REM EARLIER TODAY *BILLING DATE* OUTQ IS: `+ outq_morning +`

REM SCD BATCH IS: `+ scdbatch +`


  `}


function macrobody(scddate_MMDDYYY,
  scdbatch,
  outq_morning) {
  return `



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   ' ========== ====================== ====================== =============== ============



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(SNDBRKMSG MSG('ALL Home Office Corporate Users: Please signoff now for End of Day backup procedures. Thank you.') TOMSGQ(*ALLWS)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(HOENDMSG) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(180000)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " SBMJOB CMD(RGZPFM FILE(PDBLLIB000/BLPMST02)) "
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys " JOB(RGZPFM) SCDDATE(`+ scddate_MMDDYYY +`) JOBQ(`+ scdbatch +`) SCDTIME(190000) HOLD(*YES)"


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.Wait 421 

   autECLSession.autECLOIA.WaitForAppAvailable  




   ' ========== ====================== ====================== =============== ============            




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"   











`}