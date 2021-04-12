
const wpg_MON = require('./macros_eve/macros_wpg_MON')
const wpg_TUE = require('./macros_eve/macros_wpg_TUE')
const wpg_WED = require ('./macros_eve/macros_wpg_WED')
const wpg_THR = require('./macros_eve/macros_wpg_THR')

const scd_hofc = require('./macros_eve/macros_hofc_ALL_NOTHOENDP')
const scd_rich = require('./macros_eve/macros_rich_ALL_NOTHOENDP')

const cgy_MOVEALL = require('./macros_eve/macros_cgy__MOVEALL')
const wpg_MOVEALL = require('./macros_eve/macros_wpg__MOVEALL')



module.exports = {


  wpg_MON: function () {return wpg_MON},
  wpg_TUE: function () {return wpg_TUE},
  wpg_WED: function () {return wpg_WED},
  wpg_THR: function () {return wpg_THR},

  scd_hofc: function () {return scd_hofc},
  scd_rich: function () {return scd_rich},

  cgy_MOVEALL: function () {return cgy_MOVEALL},
  wpg_MOVEALL: function () {return wpg_MOVEALL}  

}