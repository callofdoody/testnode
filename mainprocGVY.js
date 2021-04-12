const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromain')
const emailer = require('./emailutils')
const file = require('./fileutils')
const dates = require('./dateutils')
const mainhandlerGVY = require('./mainhandlerGVY')
const shiftcodes = require('./shiftcodes')

const moveFile = require('move-file');







// MAIN PROC BELOW

var dirname = './TEMP_'
  +SHIFT+"_"
  +dates.THISWEEK_MON_MMDD()+"_"
  +dates.THISWEEK_FRI_MMDD()
fs.mkdir(dirname, (err) => {
    if (err) {
        throw err;
    }
    console.log("Directory "+dirname+" is created.");
});
mainhandlerGVY.setDIR(dirname)



const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var sploutqs = mainhandlerGVY.CREATEALL_MVALLSPLOUTQS()

    var cgy = mainhandlerGVY.CGY_CHECKLISTS()
    var vb = mainhandlerGVY.VANBBY_CHECKLISTS() 
    var inp = ["mon"]
    var scd = mainhandlerGVY.SCD_VBCGY(inp)

    var richh = mainhandlerGVY.RICHHOFC_FULLCHECKLISTS()
    var hofc = mainhandlerGVY.HOFC_FULLCHECKLISTS()
    var vdivs = mainhandlerGVY.VANDIVS_FULLCHECKLISTS()
  
    filelist = filelist.concat(sploutqs);  
    filelist = filelist.concat(cgy);
    filelist = filelist.concat(vb);
    filelist = filelist.concat(scd);    
    filelist = filelist.concat(richh);
    filelist = filelist.concat(hofc);
    filelist = filelist.concat(vdivs);

      resolve(filelist)
 
  }, 49999);
});


myPromise
.then(async filelist => {  
  if (MAINSWITCH) {
    console.log('sending email...')
    //emailer.emailout(sample)
    await emailer.emailout(filelist)
    console.log('email sent.')
  };

})

