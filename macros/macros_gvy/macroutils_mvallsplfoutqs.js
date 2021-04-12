module.exports = {

  filename: function (series, env, label,
  numday, date_MMDD) {
    return series +"_"
        + env + "_"
        + numday +"_"
        + date_MMDD +"_"
        + label +"_"       
        + ".mac"
  },

};