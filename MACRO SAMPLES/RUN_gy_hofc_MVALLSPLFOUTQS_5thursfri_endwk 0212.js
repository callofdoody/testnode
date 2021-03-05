`[PCOMM SCRIPT HEADER]
LANGUAGE=VBSCRIPT
DESCRIPTION=
[PCOMM SCRIPT SOURCE]
OPTION EXPLICIT
autECLSession.SetConnectionByName(ThisSessionName)

REM NEXT MON OUTQ target is: OUTQ1

REM NEXT SAT OUTQ target is: OUTQ6


REM MON EARLIER THIS WEEK MMDD is: 0208

REM LAST SAT DATE MMDD is: 0206


REM OLDEST holding MONDAY outq date MMDD is: 0111

REM OLDEST holding SATURDAY outq date MMDD is: 0109


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
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(OUTQ60109) OUTQL(PDSYLIB007 PDSYLIB016 PDSYLIB044 PDSYLIB053 PDSYLIB071)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable  





   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(OUTQ10111) OUTQL(PDSYLIB000 PDSYLIB007 PDSYLIB016 PDSYLIB044 PDSYLIB053)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable        
   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(OUTQ10111) OUTQL(PDSYLIB068 PDSYLIB071 PDSYLIB077)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DELOUTQ OUTQ(OUTQ10111) OUTQL(PDSYLIB116 PDSYLIB130 PDSYLIB171)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable                   







  ' ========== ====================== ====================== =============== ============   






   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB007/OUTQ6)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB016/OUTQ6)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB044/OUTQ6)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB053/OUTQ6)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB071/OUTQ6)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




  ' ========== ====================== ====================== =============== ============   





   

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB000/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB007/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB016/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB044/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB053/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB068/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB071/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    




   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB077/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB116/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    



   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB130/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "HLDOUTQSPL OUTQ(PDSYLIB171/OUTQ1)"
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    


  ' ========== ====================== ====================== =============== ============   
   





   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/OUTQ6) TOOUTQ(PDSYLIB007/OUTQ60206) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/OUTQ6) TOOUTQ(PDSYLIB016/OUTQ60206) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/OUTQ6) TOOUTQ(PDSYLIB044/OUTQ60206) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable

   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/OUTQ6) TOOUTQ(PDSYLIB053/OUTQ60206) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable         


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/OUTQ6) TOOUTQ(PDSYLIB071/OUTQ60206) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable    






   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB000/OUTQ1) TOOUTQ(PDSYLIB000/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB007/OUTQ1) TOOUTQ(PDSYLIB007/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable   

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB016/OUTQ1) TOOUTQ(PDSYLIB016/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
      


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB044/OUTQ1) TOOUTQ(PDSYLIB044/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB053/OUTQ1) TOOUTQ(PDSYLIB053/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB068/OUTQ1) TOOUTQ(PDSYLIB068/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB071/OUTQ1) TOOUTQ(PDSYLIB071/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
                                    
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB077/OUTQ1) TOOUTQ(PDSYLIB077/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable
            

   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB116/OUTQ1) TOOUTQ(PDSYLIB116/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB130/OUTQ1) TOOUTQ(PDSYLIB130/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "MOVESPLF FROMOUTQ(PDSYLIB171/OUTQ1) TOOUTQ(PDSYLIB171/OUTQ10208) "
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "[enter]"
   
   autECLSession.autECLPS.WaitForAttrib 18,6,"00","3c",3,10000

   autECLSession.autECLPS.WaitForCursor 18,7,10000

   autECLSession.autECLOIA.WaitForAppAvailable


           
   
   autECLSession.autECLOIA.WaitForInputReady
   autECLSession.autECLPS.SendKeys "DONE"


end sub
`