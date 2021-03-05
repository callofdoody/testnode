const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "MVALL_DAILYQSPLFS"
const MACRO_ENV = "hofc"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function (outq, datesixdaysago_MMDD, oldestoutq_MMDD) {
    return mainmacro(outq, datesixdaysago_MMDD, oldestoutq_MMDD)
  },

  variables: function (outq, datesixdaysago_MMDD, oldestoutq_MMDD) {
    return variables(outq, datesixdaysago_MMDD, oldestoutq_MMDD)
  },  

  macrobody: function (outq, datesixdaysago_MMDD, oldestoutq_MMDD) {
    return macrobody(outq, datesixdaysago_MMDD, oldestoutq_MMDD)
  }  
};


function variables(outq, datesixdaysago_MMDD, oldestoutq_MMDD) {
  return `
REM TOMORROW OUTQ target is: `+ outq +`

REM Date six days ago MMDD is: `+ datesixdaysago_MMDD +`


REM OLDEST holding outq date MMDD is: `+ oldestoutq_MMDD +`  
`
  
}


function macrobody(outq, datesixdaysago_MMDD, oldestoutq_MMDD) {
  return `
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB000 PDSYLIB007 PDSYLIB016 PDSYLIB044 PDSYLIB053)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        
   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB068 PDSYLIB071 PDSYLIB077)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB116 PDSYLIB130 PDSYLIB171)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                   





   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/`+ outq +`) TOOUTQ(PDSYLIB000/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/`+ outq +`) TOOUTQ(PDSYLIB007/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/`+ outq +`) TOOUTQ(PDSYLIB016/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/`+ outq +`) TOOUTQ(PDSYLIB044/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/`+ outq +`) TOOUTQ(PDSYLIB053/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB068/`+ outq +`) TOOUTQ(PDSYLIB068/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/`+ outq +`) TOOUTQ(PDSYLIB071/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB077/`+ outq +`) TOOUTQ(PDSYLIB077/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB116/`+ outq +`) TOOUTQ(PDSYLIB116/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB130/`+ outq +`) TOOUTQ(PDSYLIB130/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB171/`+ outq +`) TOOUTQ(PDSYLIB171/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


           
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"
`  
}




function mainmacro(outq, datesixdaysago_MMDD, oldestoutq_MMDD) {
  return `[PCOMM SCRIPT HEADER]
LANGUAGE=VBSCRIPT
DESCRIPTION=
[PCOMM SCRIPT SOURCE]
OPTION EXPLICIT
autECLSession.SetConnectionByName(ThisSessionName)

REM TOMORROW OUTQ target is: `+ outq +`

REM Date six days ago MMDD is: `+ datesixdaysago_MMDD +`


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
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB000 PDSYLIB007 PDSYLIB016 PDSYLIB044 PDSYLIB053)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        
   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB068 PDSYLIB071 PDSYLIB077)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq +``+ oldestoutq_MMDD +`) OUTQL(PDSYLIB116 PDSYLIB130 PDSYLIB171)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                   





   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/`+ outq +`) TOOUTQ(PDSYLIB000/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/`+ outq +`) TOOUTQ(PDSYLIB007/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/`+ outq +`) TOOUTQ(PDSYLIB016/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/`+ outq +`) TOOUTQ(PDSYLIB044/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/`+ outq +`) TOOUTQ(PDSYLIB053/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB068/`+ outq +`) TOOUTQ(PDSYLIB068/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/`+ outq +`) TOOUTQ(PDSYLIB071/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB077/`+ outq +`) TOOUTQ(PDSYLIB077/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB116/`+ outq +`) TOOUTQ(PDSYLIB116/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB130/`+ outq +`) TOOUTQ(PDSYLIB130/`+ outq +``+ datesixdaysago_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB171/`+ outq +`) TOOUTQ(PDSYLIB171/`+ outq +``+ datesixdaysago_MMDD +`) "
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