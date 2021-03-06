const macros_hofc_mvallsploutqs = require('./macros_gvy/macros_hofc_mvallsploutqs')
const macros_rich_mvallsploutqs = require('./macros_gvy/macros_rich_mvallsploutqs')
const macros_hofc_mvallsploutqs_fri = require('./macros_gvy/macros_hofc_mvallsploutqsFRI')
const macros_rich_mvallsploutqs_fri = require('./macros_gvy/macros_rich_mvallsploutqsFRI')


const macros_hofc_createoutqs_nextwk = require('./macros_gvy/macros_hofc_createoutqs_nextwk')
const macros_rich_createoutqs_nextwk = require('./macros_gvy/macros_rich_createoutqs_nextwk')


const macros_cgy = require('./macros_gvy/macros_cgy')
const macros_cgyFRI = require('./macros_gvy/macros_cgyFRI')

const macros_vanbby = require('./macros_gvy/macros_vanbby')
const macros_vanbbyFRI = require('./macros_gvy/macros_vanbbyFRI')


const hofc_FULLCHECKLIST = require('./macros_gvy/macros__hofc_FULLCHECKLIST_AFTERBRM')
const vandivs_FULLCHECKLIST = require('./macros_gvy/macros__vandivs_FULLCHECKLIST')
const richhofc_FULLCHECKLIST = require('./macros_gvy/macros__richhofc_FULLCHECKLIST_AFTERBRM')

const scd_cgy = require('./macros_gvy/macros_scd_cgy')
const scd_vanbby = require('./macros_gvy/macros_scd_vanbby')




module.exports = {


  hofc_mvallsploutqs: function () {
    
    
    return macros_hofc_mvallsploutqs
  },
  rich_mvallsploutqs: function () {
    
    return macros_rich_mvallsploutqs
  },

  hofc_mvallsploutqs_fri: function () {
    
    
    return macros_hofc_mvallsploutqs_fri
  },
  rich_mvallsploutqs_fri: function () {
    
    return macros_rich_mvallsploutqs_fri
  },

  hofc_createoutqs_nextwk: function () {
    
    
    return macros_hofc_createoutqs_nextwk
  },
  rich_createoutqs_nextwk: function () {
    
    return macros_rich_createoutqs_nextwk
  },

  dailylist_cgy : function() {return macros_cgy },
  dailylist_cgyFRI : function() {return macros_cgyFRI },

  dailylist_vanbby : function() {return macros_vanbby },
  dailylist_vanbbyFRI : function() {return macros_vanbbyFRI },


  hofc_FULLCHECKLIST : function() {return hofc_FULLCHECKLIST},
  vandivs_FULLCHECKLIST : function() {return vandivs_FULLCHECKLIST },
  richhofc_FULLCHECKLIST : function() {return richhofc_FULLCHECKLIST },


  scd_cgy : function() {return scd_cgy },
  scd_vanbby : function() {return scd_vanbby },

};

