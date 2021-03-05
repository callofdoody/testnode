const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "MVALL_DAILYQSPLFS"
const MACRO_ENV = "rich"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function (outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD) {
    return mainmacro(outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD)
  },

  variables: function (outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD) {
    return variables(outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD)
  },

  macrobody: function (outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD) {
    return macrobody(outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD)
  }    
};


function variables(outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD) {
  return `

REM NEX WEEK MON OUTQ target is: `+ outq +`

REM Date *LAST MON* MMDD is: `+ date_mon_earlierweek_MMDD +`

REM OLDEST holding outq date MMDD is: `+ oldestoutq_MMDD +`

`}





function macrobody(outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD) {
  return `
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB000 PDSYLIB020 PDSYLIB022)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB079 PDSYLIB110 PDSYLIB172)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable











   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/`+ outq +`) TOOUTQ(PDSYLIB000/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB020/`+ outq +`) TOOUTQ(PDSYLIB020/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB022/`+ outq +`) TOOUTQ(PDSYLIB022/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/`+ outq +`) TOOUTQ(PDSYLIB079/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB110/`+ outq +`) TOOUTQ(PDSYLIB110/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB172/`+ outq +`) TOOUTQ(PDSYLIB172/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
         
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"
`
}





function mainmacro(outq, date_mon_earlierweek_MMDD, oldestoutq_MMDD) {
  return `[PCOMM SCRIPT HEADER]
LANGUAGE=VBSCRIPT
DESCRIPTION=
[PCOMM SCRIPT SOURCE]
OPTION EXPLICIT
autECLSession.SetConnectionByName(ThisSessionName)

REM NEX WEEK MON OUTQ target is: `+ outq +`

REM Date *LAST MON* MMDD is: `+ date_mon_earlierweek_MMDD +`

REM OLDEST holding outq date MMDD is: `+ oldestoutq_MMDD +`

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
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB000 PDSYLIB020 PDSYLIB022)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB079 PDSYLIB110 PDSYLIB172)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable











   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/`+ outq +`) TOOUTQ(PDSYLIB000/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB020/`+ outq +`) TOOUTQ(PDSYLIB020/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB022/`+ outq +`) TOOUTQ(PDSYLIB022/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB079/`+ outq +`) TOOUTQ(PDSYLIB079/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB110/`+ outq +`) TOOUTQ(PDSYLIB110/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB172/`+ outq +`) TOOUTQ(PDSYLIB172/`+ outq +``+ date_mon_earlierweek_MMDD +`) "
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