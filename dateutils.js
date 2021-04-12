


var ANCHORDATE_THISWEEKMONDAY = new Date(
  "Mon Feb 15 2021")

module.exports = {
  ONEDAY: function() {return ONEDAY},
  GETANCHORDATE: function() {return ANCHORDATE_THISWEEKMONDAY},
  SETANCHORDATE: function(DAY_MTH_DY_YEAR) {
    ANCHORDATE_THISWEEKMONDAY = new Date(DAY_MTH_DY_YEAR)
  },
  THISWEEK_MON_MMDD: function() {
    return date_MMDD(THISWEEK_MON())
  },
  THISWEEK_TUE_MMDD: function() {
    return date_MMDD(THISWEEK_TUE())
  },
  THISWEEK_WED_MMDD: function() {
    return date_MMDD(THISWEEK_WED())
  },
  THISWEEK_THR_MMDD: function() {
    return date_MMDD(THISWEEK_THR())
  },
  THISWEEK_FRI_MMDD: function() {
    return date_MMDD(THISWEEK_FRI())
  },



  NEXTWEEK_MON_MMDD: function() {
    return date_MMDD(NEXTWEEK_MON())
  },
  NEXTWEEK_TUE_MMDD: function() {
    return date_MMDD(NEXTWEEK_TUE())
  },
  NEXTWEEK_WED_MMDD: function() {
    return date_MMDD(NEXTWEEK_WED())
  },
  NEXTWEEK_THR_MMDD: function() {
    return date_MMDD(NEXTWEEK_THR())
  },
  NEXTWEEK_FRI_MMDD: function() {
    return date_MMDD(NEXTWEEK_FRI())
  },
  NEXTWEEK_SAT_MMDD: function() {
    return date_MMDD(NEXTWEEK_SAT())
  },    

  THISWEEK_MON_6DAYSBEFORE_MMDD: function() {
    return date_MMDD(THISWEEK_MON_6DAYSBEFORE())
  },
  THISWEEK_TUE_6DAYSBEFORE_MMDD: function() {
    return date_MMDD(THISWEEK_TUE_6DAYSBEFORE())
  },
  THISWEEK_WED_6DAYSBEFORE_MMDD: function() {
    return date_MMDD(THISWEEK_WED_6DAYSBEFORE())
  },
  THISWEEK_THR_6DAYSBEFORE_MMDD: function() {
    return date_MMDD(THISWEEK_THR_6DAYSBEFORE())
  },    
  THISWEEK_FRI_EARLIERMONDAY_MMDD: function() {
    return date_MMDD(THISWEEK_FRI_EARLIERMONDAY())
  },  
  THISWEEK_FRI_LASTSATURDAY_MMDD: function() {
    return date_MMDD(THISWEEK_FRI_LASTSATURDAY())
  },




  THISWEEK_MON_OLDESTOUTQ_MMDD: function() {
    return date_MMDD(THISWEEK_MON_OLDESTOUTQ())
  },
  THISWEEK_TUE_OLDESTOUTQ_MMDD: function() {
    return date_MMDD(THISWEEK_TUE_OLDESTOUTQ())
  },
  THISWEEK_WED_OLDESTOUTQ_MMDD: function() {
    return date_MMDD(THISWEEK_WED_OLDESTOUTQ())
  },
  THISWEEK_THR_OLDESTOUTQ_MMDD: function() {
    return date_MMDD(THISWEEK_THR_OLDESTOUTQ())
  },
  THISWEEK_FRI_OLDESTOUTQ_SAT_MMDD: function() {
    return date_MMDD(THISWEEK_FRI_OLDESTOUTQ_SAT())
  },   
  THISWEEK_FRI_OLDESTOUTQ_MON_MMDD: function() {
    return date_MMDD(THISWEEK_FRI_OLDESTOUTQ_MON())
  },       





  THISWEEK_MON_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_MON())
  },
  THISWEEK_TUE_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_TUE())
  },
  THISWEEK_WED_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_WED())
  },
  THISWEEK_THR_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_THR())
  },
  THISWEEK_FRI_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_FRI())
  },
  THISWEEK_SAT_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_SAT())
  },
  THISWEEK_SUN_YYYYMMDD: function() {
    return date_YYYYMMDD(THISWEEK_SUN_DAYBEFOREMON())
  },     




  THISWEEK_MON_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_MON())
  },
  THISWEEK_TUE_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_TUE())
  },
  THISWEEK_WED_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_WED())
  },
  THISWEEK_THR_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_THR())
  },
  THISWEEK_FRI_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_FRI())
  },
  THISWEEK_SAT_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_SAT())
  },
  THISWEEK_SUN_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(THISWEEK_SUN_DAYBEFOREMON())
  },     



  THISWEEK_MON_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_MON())
  },
  THISWEEK_TUE_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_TUE())
  },
  THISWEEK_WED_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_WED())
  },
  THISWEEK_THR_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_THR())
  },
  THISWEEK_FRI_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_FRI())
  },
  THISWEEK_SAT_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_SAT())
  },
  THISWEEK_SUN_MMDDYYYY: function() {
    return date_MMDDYYYY(THISWEEK_SUN_DAYBEFOREMON())
  },     



  THISWEEK_MON_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_MON())
  },
  THISWEEK_TUE_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_TUE())
  },
  THISWEEK_WED_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_WED())
  },
  THISWEEK_THR_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_THR())
  },
  THISWEEK_FRI_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_FRI())
  },
  THISWEEK_SAT_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_SAT())
  },
  THISWEEK_SUN_MMDDYY: function() {
    return date_MMDDYY(THISWEEK_SUN_DAYBEFOREMON())
  },     








  NEXTWEEK_MON_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_MON())
  },
  NEXTWEEK_TUE_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_TUE())
  },
  NEXTWEEK_WED_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_WED())
  },
  NEXTWEEK_THR_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_THR())
  },
  NEXTWEEK_FRI_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_FRI())
  },
  NEXTWEEK_SAT_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_SAT())
  },
  NEXTWEEK_SUN_YYYYMMDD: function() {
    return date_YYYYMMDD(NEXTWEEK_SUN())
  },



  NEXTWEEK_MON_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_MON())
  },
  NEXTWEEK_TUE_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_TUE())
  },
  NEXTWEEK_WED_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_WED())
  },
  NEXTWEEK_THR_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_THR())
  },
  NEXTWEEK_FRI_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_FRI())
  },
  NEXTWEEK_SAT_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_SAT())
  },
  NEXTWEEK_SUN_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(NEXTWEEK_SUN())
  },



  NEXTWEEK_MON_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_MON())
  },
  NEXTWEEK_TUE_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_TUE())
  },
  NEXTWEEK_WED_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_WED())
  },
  NEXTWEEK_THR_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_THR())
  },
  NEXTWEEK_FRI_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_FRI())
  },
  NEXTWEEK_SAT_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_SAT())
  },
  NEXTWEEK_SUN_MMDDYYYY: function() {
    return date_MMDDYYYY(NEXTWEEK_SUN())
  },



  TWOWEEKSLATER_MON_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_MON())
  },
  TWOWEEKSLATER_TUE_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_TUE())
  },
  TWOWEEKSLATER_WED_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_WED())
  },
  TWOWEEKSLATER_THR_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_THR())
  },
  TWOWEEKSLATER_FRI_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_FRI())
  },
  TWOWEEKSLATER_SAT_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_SAT())
  },
  TWOWEEKSLATER_SUN_MMDDYYYY: function() {
    return date_MMDDYYYY(TWOWEEKSLATER_SUN())
  },


  TWOWEEKSLATER_MON_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_MON())
  },
  TWOWEEKSLATER_TUE_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_TUE())
  },
  TWOWEEKSLATER_WED_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_WED())
  },
  TWOWEEKSLATER_THR_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_THR())
  },
  TWOWEEKSLATER_FRI_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_FRI())
  },
  TWOWEEKSLATER_SAT_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_SAT())
  },
  TWOWEEKSLATER_SUN_YYYY_MM_DD: function() {
    return date_YYYY_MM_DD(TWOWEEKSLATER_SUN())
  },



  LASTWEEK_MON_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_MON())
  },
  LASTWEEK_TUE_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_TUE())
  },
  LASTWEEK_WED_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_WED())
  },
  LASTWEEK_THR_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_THR())
  },
  LASTWEEK_FRI_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_FRI())
  },
  LASTWEEK_SAT_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_SAT())
  },
  LASTWEEK_SUN_MMDDYYYY: function() {
    return date_MMDDYYYY(LASTWEEK_SUN())
  },


  TWOWEEKSAGO_MON_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_MON())
  },
  TWOWEEKSAGO_TUE_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_TUE())
  },
  TWOWEEKSAGO_WED_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_WED())
  },
  TWOWEEKSAGO_THR_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_THR())
  },
  TWOWEEKSAGO_FRI_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_FRI())
  },
  TWOWEEKSAGO_SAT_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_SAT())
  },
  TWOWEEKSAGO_SUN_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOWEEKSAGO_SUN())
  },







  THISWEEK_MON_FIRSTOFMONTH_YYYYMMDD: function() {
    return date_firstofmonth_YYYYMMDD(THISWEEK_MON())
  },

  THISWEEK_TUE_FIRSTOFMONTH_YYYYMMDD: function() {
    return date_firstofmonth_YYYYMMDD(THISWEEK_TUE())
  },

  THISWEEK_WED_FIRSTOFMONTH_YYYYMMDD: function() {
    return date_firstofmonth_YYYYMMDD(THISWEEK_WED())
  },

  THISWEEK_THR_FIRSTOFMONTH_YYYYMMDD: function() {
    return date_firstofmonth_YYYYMMDD(THISWEEK_THR())
  },

  THISWEEK_FRI_FIRSTOFMONTH_YYYYMMDD: function() {
    return date_firstofmonth_YYYYMMDD(THISWEEK_FRI())
  },  


  THISWEEK_MON_FIRSTOFMONTH_YYYY_MM_DD: function() {
    return date_firstofmonth_YYYY_MM_DD(THISWEEK_MON())
  },

  THISWEEK_TUE_FIRSTOFMONTH_YYYY_MM_DD: function() {
    return date_firstofmonth_YYYY_MM_DD(THISWEEK_TUE())
  },

  THISWEEK_WED_FIRSTOFMONTH_YYYY_MM_DD: function() {
    return date_firstofmonth_YYYY_MM_DD(THISWEEK_WED())
  },

  THISWEEK_THR_FIRSTOFMONTH_YYYY_MM_DD: function() {
    return date_firstofmonth_YYYY_MM_DD(THISWEEK_THR())
  },

  THISWEEK_FRI_FIRSTOFMONTH_YYYY_MM_DD: function() {
    return date_firstofmonth_YYYY_MM_DD(THISWEEK_FRI())
  },  


  THISWEEK_MON_FIRSTOFPREVMONTH_YYYYMMDD: function() {
    return date_firstofPREVmonth_YYYYMMDD(THISWEEK_MON())
  },

  THISWEEK_TUE_FIRSTOFPREVMONTH_YYYYMMDD: function() {
    return date_firstofPREVmonth_YYYYMMDD(THISWEEK_TUE())
  },

  THISWEEK_WED_FIRSTOFPREVMONTH_YYYYMMDD: function() {
    return date_firstofPREVmonth_YYYYMMDD(THISWEEK_WED())
  },

  THISWEEK_THR_FIRSTOFPREVMONTH_YYYYMMDD: function() {
    return date_firstofPREVmonth_YYYYMMDD(THISWEEK_THR())
  },

  THISWEEK_FRI_FIRSTOFPREVMONTH_YYYYMMDD: function() {
    return date_firstofPREVmonth_YYYYMMDD(THISWEEK_FRI())
  },  


  TWOMONTHSLATER_MON_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOMONTHSLATER_MON())
  },

  TWOMONTHSLATER_TUE_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOMONTHSLATER_TUE())
  },

  TWOMONTHSLATER_WED_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOMONTHSLATER_WED())
  },

  TWOMONTHSLATER_THR_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOMONTHSLATER_THR())
  },

  TWOMONTHSLATER_FRI_YYYYMMDD: function() {
    return date_YYYYMMDD(TWOMONTHSLATER_FRI())
  },  



  
};

// 1612220400000 MILLISECONDS AFTER JAN 1 1970
// 1 SEC = 1000
// 1 MIN = 60000 (60k)
// 1 HR = 60*60000
// 1 DAY = 24*60*60000
const ONEDAY = 24*60*60000

function normalizeMonth(num) {
       return num < 10 ? '0'+ num : num
}

function normalizeDay(num) {
       return num < 10 ? '0'+ num : num
}

function date_MMDD(date) {
    return (normalizeMonth(date.getMonth()+1)+ normalizeDay(date.getDate()))
};

function date_YYYYMMDD(date) {
    return (date.getFullYear()+
      normalizeMonth(date.getMonth()+1)
      + normalizeDay(date.getDate()))
};

function date_YYYY_MM_DD(date) {
    return (date.getFullYear()+
      "-"+
      normalizeMonth(date.getMonth()+1)
      +"-"
      + normalizeDay(date.getDate()))
};


function date_MMDDYYYY(date) {
    return (normalizeMonth(date.getMonth()+1)
    + normalizeDay(date.getDate())
    +date.getFullYear())
};

function date_MMDDYY(date) {
    return (normalizeMonth(date.getMonth()+1)
    + normalizeDay(date.getDate())
    + date.getFullYear().toString().substr(-2))
};




function date_firstofPREVmonth_YYYYMMDD(date) {
    return ((date.getMonth()==0 ? date.getFullYear()-1: date.getFullYear()) +
      normalizeMonth(
        date.getMonth()==0 ? "12": date.getMonth())
      + "01")
};

function date_firstofmonth_YYYYMMDD(date) {
    return date.getFullYear()+
      normalizeMonth(date.getMonth()+1)
      + "01"
};

function date_firstofmonth_YYYY_MM_DD(date) {
    return date.getFullYear()+
      "-"+
      normalizeMonth(date.getMonth()+1)
      +"-"
      + "01"
};




//print(new Date(d - (24*60*60000)))
//print(new Date(d.valueOf()+3*DAY))
function THISWEEK_MON() {return ANCHORDATE_THISWEEKMONDAY};
function THISWEEK_TUE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + ONEDAY)};
function THISWEEK_WED() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 2*ONEDAY)};
function THISWEEK_THR() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 3*ONEDAY)};
function THISWEEK_FRI() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 4*ONEDAY)};
function THISWEEK_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 5*ONEDAY)};
function THISWEEK_SUN_DAYBEFOREMON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - ONEDAY)};


function THISWEEK_MON_6DAYSBEFORE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 6*ONEDAY)};
function THISWEEK_TUE_6DAYSBEFORE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (6-1)*ONEDAY)};
function THISWEEK_WED_6DAYSBEFORE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (6-2)*ONEDAY)};
function THISWEEK_THR_6DAYSBEFORE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (6-3)*ONEDAY)};
function THISWEEK_FRI_EARLIERMONDAY() { return ANCHORDATE_THISWEEKMONDAY};

function THISWEEK_FRI_LASTSATURDAY() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 2*ONEDAY)};

// 34 days back 
// 34 days back (FRI targeting SAT too)
// 32 days back (FRI targeting MON)
function THISWEEK_MON_OLDESTOUTQ() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 34*ONEDAY)};
function THISWEEK_TUE_OLDESTOUTQ() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (34-1)*ONEDAY)};
function THISWEEK_WED_OLDESTOUTQ() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (34-2)*ONEDAY)};
function THISWEEK_THR_OLDESTOUTQ() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (34-3)*ONEDAY)};
function THISWEEK_FRI_OLDESTOUTQ_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (34-4)*ONEDAY)};
function THISWEEK_FRI_OLDESTOUTQ_MON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (32-4)*ONEDAY)};


function NEXTWEEK_SUN() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 6*ONEDAY)};
function NEXTWEEK_MON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 7*ONEDAY)};
function NEXTWEEK_TUE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 8*ONEDAY)};
function NEXTWEEK_WED() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 9*ONEDAY)};
function NEXTWEEK_THR() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 10*ONEDAY)};
function NEXTWEEK_FRI() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 11*ONEDAY)};
function NEXTWEEK_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + 12*ONEDAY)};


function TWOWEEKSLATER_SUN() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+6)*ONEDAY)};
function TWOWEEKSLATER_MON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+7)*ONEDAY)};
function TWOWEEKSLATER_TUE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+8)*ONEDAY)};
function TWOWEEKSLATER_WED() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+9)*ONEDAY)};
function TWOWEEKSLATER_THR() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+10)*ONEDAY)};
function TWOWEEKSLATER_FRI() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+11)*ONEDAY)};
function TWOWEEKSLATER_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (7+12)*ONEDAY)};


// TODO: Possible update: direct next month, same monthday
function TWOMONTHSLATER_SUN() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+6)*ONEDAY)};
function TWOMONTHSLATER_MON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+7)*ONEDAY)};
function TWOMONTHSLATER_TUE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+8)*ONEDAY)};
function TWOMONTHSLATER_WED() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+9)*ONEDAY)};
function TWOMONTHSLATER_THR() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+10)*ONEDAY)};
function TWOMONTHSLATER_FRI() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+11)*ONEDAY)};
function TWOMONTHSLATER_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() + (28+21+12)*ONEDAY)};





function LASTWEEK_SUN() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 8*ONEDAY)};
function LASTWEEK_MON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 7*ONEDAY)};
function LASTWEEK_TUE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 6*ONEDAY)};
function LASTWEEK_WED() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 5*ONEDAY)};
function LASTWEEK_THR() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 4*ONEDAY)};
function LASTWEEK_FRI() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 3*ONEDAY)};
function LASTWEEK_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - 2*ONEDAY)};



function TWOWEEKSAGO_SUN() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+8)*ONEDAY)};
function TWOWEEKSAGO_MON() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+7)*ONEDAY)};
function TWOWEEKSAGO_TUE() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+6)*ONEDAY)};
function TWOWEEKSAGO_WED() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+5)*ONEDAY)};
function TWOWEEKSAGO_THR() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+4)*ONEDAY)};
function TWOWEEKSAGO_FRI() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+3)*ONEDAY)};
function TWOWEEKSAGO_SAT() {return new Date(ANCHORDATE_THISWEEKMONDAY.valueOf() - (7+2)*ONEDAY)};