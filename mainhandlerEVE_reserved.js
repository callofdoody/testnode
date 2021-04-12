/*

 // ** NO SCDBATCHES  YET **
function HOFC_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.SCDBATCH1,
    outqs.OUTQ1, filelist, filenames)

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.SCDBATCH2,
    outqs.OUTQ2, filelist, filenames)  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.SCDBATCH3,
    outqs.OUTQ3, filelist, filenames)  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.SCDBATCH4,
    outqs.OUTQ4, filelist, filenames)  

  HOFC_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.SCDBATCH5,
    outqs.OUTQ5, filelist, filenames)                

  
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist


}

*/





 // ** NO SCDBATCHES  YET **
function RICH_CHECKLISTS(){
  var filelist = []
  var filenames = []  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_TUE, 
    dates.THISWEEK_MON_MMDD(),
    dates.THISWEEK_MON_MMDDYYYY(), 
    scdbatches.SCDBATCH1,
    outqs.OUTQ1, filelist, filenames)

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_WED, 
    dates.THISWEEK_TUE_MMDD(),
    dates.THISWEEK_TUE_MMDDYYYY(), 
    scdbatches.SCDBATCH2,
    outqs.OUTQ2, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_THR, 
    dates.THISWEEK_WED_MMDD(),
    dates.THISWEEK_WED_MMDDYYYY(), 
    scdbatches.SCDBATCH3,
    outqs.OUTQ3, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_FRI, 
    dates.THISWEEK_THR_MMDD(),
    dates.THISWEEK_THR_MMDDYYYY(), 
    scdbatches.SCDBATCH4,
    outqs.OUTQ4, filelist, filenames)  

  RICH_CHECKLIST(numdates.NUMDATE_EVGY_MON, 
    dates.THISWEEK_FRI_MMDD(),
    dates.THISWEEK_FRI_MMDDYYYY(), 
    scdbatches.SCDBATCH5,
    outqs.OUTQ5, filelist, filenames)                
  for(i in filenames) {
    file.insertFileDetails(filenames[i], DIR, filelist)
  }
  
  return filelist
}