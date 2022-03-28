
const wpg_SUN = require('./macros_eve_SUN/macros_wpg_SUN')

const scd_hofc_MVLOGS = require('./macros_eve/macros_hofc_mvlogsSCD_DCENP')
const scd_rich_MVLOGS = require('./macros_eve/macros_rich_mvlogsSCD_DCENP')

// const scd_hofc_MVLOGS = require('./macros_eve/macros_hofc_mvlogs_DCENP')
// const scd_rich_MVLOGS = require('./macros_eve/macros_rich_mvlogs_DCENP')

const wpg_MOVEALL = require('./macros_eve/macros_wpg__MOVEALL')



module.exports = {


  wpg_SUN: function () {return wpg_SUN},



  scd_hofc_MVLOGS: function () {return scd_hofc_MVLOGS},
  scd_rich_MVLOGS: function () {return scd_rich_MVLOGS},  

  wpg_MOVEALL: function () {return wpg_MOVEALL}  

}