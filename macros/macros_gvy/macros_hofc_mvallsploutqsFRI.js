const macroutils = require('./macroutils_mvallsplfoutqs')
const fs = require('fs');

const MACRO_LABEL = "MVALL_DAILYQSPLFS"
const MACRO_ENV = "hofc"

module.exports = {
  filename: function(series, numday, date_MMDD) {
    return macroutils.filename(series, 
    MACRO_ENV, MACRO_LABEL, numday, date_MMDD)
  },

  getmacro: function (outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD) {
    return mainmacro(outq_mon, outq_sat, date_mon_earlierweek_MMDD, 
    oldestoutq_mon_MMDD,
    date_lastsat_MMDD, 
    oldestoutq_sat_MMDD)
  },

  variables: function (outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD) {
    return variables(outq_mon, outq_sat, date_mon_earlierweek_MMDD, 
    oldestoutq_mon_MMDD,
    date_lastsat_MMDD, 
    oldestoutq_sat_MMDD)
  },

  macrobody: function (outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD) {
    return macrobody(outq_mon, outq_sat, date_mon_earlierweek_MMDD, 
    oldestoutq_mon_MMDD,
    date_lastsat_MMDD, 
    oldestoutq_sat_MMDD)
  }    
};

function variables(outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD) {
  return `

REM NEXT MON OUTQ target is: `+ outq_mon +`

REM NEXT SAT OUTQ target is: `+ outq_sat +`


REM MON EARLIER THIS WEEK MMDD is: `+ date_mon_earlierweek_MMDD +`

REM LAST SAT DATE MMDD is: `+ date_lastsat_MMDD +`


REM OLDEST holding MONDAY outq date MMDD is: `+ oldestoutq_mon_MMDD +`

REM OLDEST holding SATURDAY outq date MMDD is: `+ oldestoutq_sat_MMDD +`


  `}


function macrobody(outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD) {
  return `
  
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[pf7]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_sat +``+ oldestoutq_sat_MMDD +`) OUTQL(PDSYLIB007 PDSYLIB016 PDSYLIB044)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable  






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_sat +``+ oldestoutq_sat_MMDD +`) OUTQL(PDSYLIB053 PDSYLIB071)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable  






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB000 PDSYLIB007 PDSYLIB016)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        

      autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB044 PDSYLIB053)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        
   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB068 PDSYLIB071 PDSYLIB077)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB116 PDSYLIB130 PDSYLIB171)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                   







  ' ========== ====================== ====================== =============== ============   






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB007/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB016/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB044/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB053/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB071/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




  ' ========== ====================== ====================== =============== ============   





   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB000/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB007/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB016/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB044/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB053/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB068/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB071/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB077/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB116/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB130/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB171/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


  ' ========== ====================== ====================== =============== ============   
   





   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/`+ outq_sat +`) TOOUTQ(PDSYLIB007/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/`+ outq_sat +`) TOOUTQ(PDSYLIB016/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/`+ outq_sat +`) TOOUTQ(PDSYLIB044/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/`+ outq_sat +`) TOOUTQ(PDSYLIB053/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable         


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/`+ outq_sat +`) TOOUTQ(PDSYLIB071/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    






   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/`+ outq_mon +`) TOOUTQ(PDSYLIB000/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/`+ outq_mon +`) TOOUTQ(PDSYLIB007/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/`+ outq_mon +`) TOOUTQ(PDSYLIB016/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/`+ outq_mon +`) TOOUTQ(PDSYLIB044/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/`+ outq_mon +`) TOOUTQ(PDSYLIB053/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB068/`+ outq_mon +`) TOOUTQ(PDSYLIB068/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/`+ outq_mon +`) TOOUTQ(PDSYLIB071/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB077/`+ outq_mon +`) TOOUTQ(PDSYLIB077/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB116/`+ outq_mon +`) TOOUTQ(PDSYLIB116/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB130/`+ outq_mon +`) TOOUTQ(PDSYLIB130/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB171/`+ outq_mon +`) TOOUTQ(PDSYLIB171/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


           
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"


`}



function mainmacro(outq_mon, outq_sat, date_mon_earlierweek_MMDD, oldestoutq_mon_MMDD,
date_lastsat_MMDD, oldestoutq_sat_MMDD) {
  return `[PCOMM SCRIPT HEADER]
LANGUAGE=VBSCRIPT
DESCRIPTION=
[PCOMM SCRIPT SOURCE]
OPTION EXPLICIT
autECLSession.SetConnectionByName(ThisSessionName)

REM NEXT MON OUTQ target is: `+ outq_mon +`

REM NEXT SAT OUTQ target is: `+ outq_sat +`


REM MON EARLIER THIS WEEK MMDD is: `+ date_mon_earlierweek_MMDD +`

REM LAST SAT DATE MMDD is: `+ date_lastsat_MMDD +`


REM OLDEST holding MONDAY outq date MMDD is: `+ oldestoutq_mon_MMDD +`

REM OLDEST holding SATURDAY outq date MMDD is: `+ oldestoutq_sat_MMDD +`


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
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_sat +``+ oldestoutq_sat_MMDD +`) OUTQL(PDSYLIB007 PDSYLIB016 PDSYLIB044 PDSYLIB053 PDSYLIB071)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable  





   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB000 PDSYLIB007 PDSYLIB016 PDSYLIB044 PDSYLIB053)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        
   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB068 PDSYLIB071 PDSYLIB077)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(`+ outq_mon +``+ oldestoutq_mon_MMDD +`) OUTQL(PDSYLIB116 PDSYLIB130 PDSYLIB171)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                   







  ' ========== ====================== ====================== =============== ============   






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB007/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB016/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB044/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB053/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB071/`+ outq_sat +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




  ' ========== ====================== ====================== =============== ============   





   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB000/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB007/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB016/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB044/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB053/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB068/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB071/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB077/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB116/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB130/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB171/`+ outq_mon +`)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


  ' ========== ====================== ====================== =============== ============   
   





   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/`+ outq_sat +`) TOOUTQ(PDSYLIB007/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/`+ outq_sat +`) TOOUTQ(PDSYLIB016/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/`+ outq_sat +`) TOOUTQ(PDSYLIB044/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/`+ outq_sat +`) TOOUTQ(PDSYLIB053/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable         


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/`+ outq_sat +`) TOOUTQ(PDSYLIB071/`+ outq_sat +``+ date_lastsat_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    






   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/`+ outq_mon +`) TOOUTQ(PDSYLIB000/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/`+ outq_mon +`) TOOUTQ(PDSYLIB007/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/`+ outq_mon +`) TOOUTQ(PDSYLIB016/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/`+ outq_mon +`) TOOUTQ(PDSYLIB044/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/`+ outq_mon +`) TOOUTQ(PDSYLIB053/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB068/`+ outq_mon +`) TOOUTQ(PDSYLIB068/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/`+ outq_mon +`) TOOUTQ(PDSYLIB071/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB077/`+ outq_mon +`) TOOUTQ(PDSYLIB077/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB116/`+ outq_mon +`) TOOUTQ(PDSYLIB116/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB130/`+ outq_mon +`) TOOUTQ(PDSYLIB130/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB171/`+ outq_mon +`) TOOUTQ(PDSYLIB171/`+ outq_mon +``+ date_mon_earlierweek_MMDD +`) "
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