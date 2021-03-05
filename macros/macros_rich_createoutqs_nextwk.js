const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "CRTOUTQS_FORNEXTWK"
const MACRO_ENV = "rich"

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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
       












       



          
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"

  `
};


// ============================================= 



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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ1`+ date_mon_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ2`+ date_tue_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ3`+ date_wed_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ4`+ date_thr_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB020/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB022/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB079/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB110/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "CRTOUTQ OUTQ(PDSYLIB172/OUTQ5`+ date_fri_nextwk_MMDD +`) SEQ(*JOBNBR) DSPDTA(*YES) JOBSEP(1)"
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