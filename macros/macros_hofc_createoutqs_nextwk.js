const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "CRTOUTQS_FORNEXTWK"
const MACRO_ENV = "hofc"

module.exports = {
  filename: function(series, date_mon_MMDD, date_fri_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, date_mon_MMDD, "to_"+date_fri_MMDD)
  },

  getmacro: function (date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD) {
    return mainmacro(date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD)
  },

  variables: function (date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD) {
    return getVariables(date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD)
  },  

  macrobody: function (date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD) {
    return getMacroBody(date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD)
  }  

};

function getVariables(date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD) {
  return `
    REM 1ST MON OUTQ IS: `+ date_mon_nextwk_MMDD +`

    REM 1ST TUES OUTQ IS: `+ date_tue_nextwk_MMDD +`

    REM 1ST WED OUTQ IS: `+ date_wed_nextwk_MMDD +`

    REM 1ST THURS OUTQ IS: `+ date_thr_nextwk_MMDD +`

    REM 1ST FRI OUTQ IS: `+ date_fri_nextwk_MMDD +`

    REM 1ST SAT OUTQ IS: `+ date_sat_nextwk_MMDD +`
    `
}

function getMacroBody(date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD) {
  return `

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable









   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable











   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    










           
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"
  `

}


// ===============================================

function mainmacro(date_mon_nextwk_MMDD,
date_tue_nextwk_MMDD,
date_wed_nextwk_MMDD,
date_thr_nextwk_MMDD,
date_fri_nextwk_MMDD,
date_sat_nextwk_MMDD) {
  return `[PCOMM SCRIPT HEADER]
LANGUAGE=VBSCRIPT
DESCRIPTION=
[PCOMM SCRIPT SOURCE]
OPTION EXPLICIT
autECLSession.SetConnectionByName(ThisSessionName)

REM 1ST MON OUTQ IS: `+ date_mon_nextwk_MMDD +`

REM 1ST TUES OUTQ IS: `+ date_tue_nextwk_MMDD +`

REM 1ST WED OUTQ IS: `+ date_wed_nextwk_MMDD +`

REM 1ST THURS OUTQ IS: `+ date_thr_nextwk_MMDD +`

REM 1ST FRI OUTQ IS: `+ date_fri_nextwk_MMDD +`

REM 1ST SAT OUTQ IS: `+ date_sat_nextwk_MMDD +`



REM This line calls the macro subroutine
subSub1_

sub subSub1_()
   autECLSession.autECLOIA.WaitForAppAvailable
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable









   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable












   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB000/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB068/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB077/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB116/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB130/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB171/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable











   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB007/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB016/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB044/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB053/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB071/OUTQ6`+ date_sat_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    










           
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"


end sub
`


}