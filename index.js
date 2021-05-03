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

var SHIFT = "EV3"


var GVY_ON = false
var EVE_ON = true
var WKNDFRI_ON = false
var WKND_ON = false
var EVESUN_ON = false


var WPG_ON = false

var CGYMOVE_ON = true
var WPGMOVE_ON = false

var MOVESPLF_ON = false

var CGY_ON = false
var VANBBY_ON = false
var HOMEOFC_ON = false
var RICHM_ON = false


dates.SETANCHORDATE('Mon May 03 2021')



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

var myPromise = ""

if (EVE_ON) {
  // EVENING SHIFT
  SHIFT = shiftcodes.EVE
  mainhandlerEVE.setDIR(dirname)
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

      if (WPG_ON) {
        var wpg = mainhandlerEVE.WPG_CHECKLISTS()
        filelist = filelist.concat(wpg); 
      }


      if (RICHM_ON) {
        var richh = mainhandlerEVE.RICH_CHECKLISTS()
        filelist = filelist.concat(richh);
      }

       
      if (HOMEOFC_ON) {
        var hofc = mainhandlerEVE.HOFC_CHECKLISTS()  
        filelist = filelist.concat(hofc); 
      }
     
      if (WPGMOVE_ON) {
        var wpgMOVE = mainhandlerEVE.WPG_MOVEALLS()
        filelist = filelist.concat(wpgMOVE); 
      }

      if (CGYMOVE_ON) {
        var cgyMOVE = mainhandlerEVE.CGY_MOVEALLS()  
        filelist = filelist.concat(cgyMOVE);   
      }

    
         
      resolve(filelist)
  
    }, 49999);
  });
}


if (GVY_ON) {
  // GRAVEYARD SHIFT
  SHIFT = shiftcodes.GVY
  mainhandlerGVY.setDIR(dirname)
  const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      //var sploutqs = mainhandlerGVY.CREATEALL_MVALLSPLOUTQS()

      //var cgy = mainhandlerGVY.CGY_CHECKLISTS()
      //var vb = mainhandlerGVY.VANBBY_CHECKLISTS() 
      var inp = ["mon"]
      //var scd = mainhandlerGVY.SCD_VBCGY(inp)

      //var richh = mainhandlerGVY.RICHHOFC_FULLCHECKLISTS()
      var hofc = mainhandlerGVY.HOFC_FULLCHECKLISTS()
      var vdivs = mainhandlerGVY.VANDIVS_FULLCHECKLISTS()
    
      //filelist = filelist.concat(sploutqs);  
      //filelist = filelist.concat(cgy);
      //filelist = filelist.concat(vb);
      //filelist = filelist.concat(scd);    
      //filelist = filelist.concat(richh);
      filelist = filelist.concat(hofc);
      filelist = filelist.concat(vdivs);

        resolve(filelist)
  
    }, 49999);
  });
}



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