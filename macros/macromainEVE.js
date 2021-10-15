
const wpg_MON = require('./macros_eve/macros_wpg_MON')
const wpg_TUE = require('./macros_eve/macros_wpg_TUE')
const wpg_WED = require ('./macros_eve/macros_wpg_WED')
const wpg_THR = require('./macros_eve/macros_wpg_THR')

const scd_hofc = require('./macros_eve/macros_hofc_ALL_NOTHOENDP')
const scd_rich = require('./macros_eve/macros_rich_ALL_NOTHOENDP')


const scd_hofc_REG = require('./macros_eve/macros_hofc_REG_NOTHOENDP')
const scd_rich_REG = require('./macros_eve/macros_rich_REG_NOTHOENDP')

const scd_hofc_ADM = require('./macros_eve/macros_hofc_ADM_NOTHOENDP')
const scd_rich_ADM = require('./macros_eve/macros_rich_ADM_NOTHOENDP')

const scd_hofc_MVLOGS = require('./macros_eve/macros_hofc_mvlogs_DCENP')
const scd_rich_MVLOGS = require('./macros_eve/macros_rich_mvlogs_DCENP')

const cgy_MOVEALL = require('./macros_eve/macros_cgy__MOVEALL')
const wpg_MOVEALL = require('./macros_eve/macros_wpg__MOVEALL')



module.exports = {


  wpg_MON: function () {return wpg_MON},
  wpg_TUE: function () {return wpg_TUE},
  wpg_WED: function () {return wpg_WED},
  wpg_THR: function () {return wpg_THR},

  scd_hofc: function () {return scd_hofc},
  scd_rich: function () {return scd_rich},

  scd_hofc_ADM: function () {return scd_hofc_ADM},
  scd_rich_ADM: function () {return scd_rich_ADM},

  scd_hofc_REG: function () {return scd_hofc_REG},
  scd_rich_REG: function () {return scd_rich_REG},


  scd_hofc_MVLOGS: function () {return scd_hofc_MVLOGS},
  scd_rich_MVLOGS: function () {return scd_rich_MVLOGS},  

  cgy_MOVEALL: function () {return cgy_MOVEALL},
  wpg_MOVEALL: function () {return wpg_MOVEALL}  

}