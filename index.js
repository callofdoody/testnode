const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromain')
const emailer = require('./emailutils')
const file = require('./fileutils')
const dates = require('./dateutils')
const mainhandlerGVY = require('./mainhandlerGVY')
const mainhandlerEVE = require('./mainhandlerEVE')
const shiftcodes = require('./shiftcodes')

const moveFile = require('move-file');



var MAINSWITCH = true;

var SHIFT = "GV3"


var GVY_ON = true
var EVE_ON = true
var WKNDFRI_ON = true
var WKND_ON = true
var EVESUN_ON = true


var MOVESPLF_ON = true
var MOVESPLF_ON = true


dates.SETANCHORDATE('Mon Apr 19 2021')



var filelist = []

var sample = [{"filename":"SAMPLE.mac", "path":"./SAMPLE/SAMPLE.mac" }]

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



/*
// EVENING SHIFT
SHIFT = shiftcodes.EVE
mainhandlerEVE.setDIR(dirname)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //var wpg = mainhandlerEVE.WPG_CHECKLISTS()
    //var richh = mainhandlerEVE.RICH_CHECKLISTS()
    var hofc = mainhandlerEVE.HOFC_CHECKLISTS()  
    //var wpgMOVE = mainhandlerEVE.WPG_MOVEALLS()
    //var cgyMOVE = mainhandlerEVE.CGY_MOVEALLS()  

    //filelist = filelist.concat(wpg);  
    //filelist = filelist.concat(richh);
    filelist = filelist.concat(hofc); 
    //filelist = filelist.concat(wpgMOVE); 
    //filelist = filelist.concat(cgyMOVE);            
    resolve(filelist)
 
  }, 49999);
});
*/



// GRAVEYARD SHIFT
SHIFT = shiftcodes.GVY
mainhandlerGVY.setDIR(dirname)
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //var sploutqs = mainhandlerGVY.CREATEALL_MVALLSPLOUTQS()

    var cgy = mainhandlerGVY.CGY_CHECKLISTS()
    //var vb = mainhandlerGVY.VANBBY_CHECKLISTS() 
    var inp = ["mon"]
    //var scd = mainhandlerGVY.SCD_VBCGY(inp)

    //var richh = mainhandlerGVY.RICHHOFC_FULLCHECKLISTS()
    //var hofc = mainhandlerGVY.HOFC_FULLCHECKLISTS()
    //var vdivs = mainhandlerGVY.VANDIVS_FULLCHECKLISTS()
  
    //filelist = filelist.concat(sploutqs);  
    filelist = filelist.concat(cgy);
    //filelist = filelist.concat(vb);
    //filelist = filelist.concat(scd);    
    //filelist = filelist.concat(richh);
    //filelist = filelist.concat(hofc);
    //filelist = filelist.concat(vdivs);

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



const app = express();

app.get('/', (req, res) => {

  res.send(filelist)
});

app.listen(3000, () => {
  console.log('server started');
});