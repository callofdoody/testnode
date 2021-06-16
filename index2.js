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

var SHIFT = "GV1"


var GVY_ON = true
var EVE_ON = false

var WKNDFRI_ON = false
var WKND_ON = false
var EVESUN_ON = false

// =============
var WPG_ON = false

var CGYMOVE_ON = false
var WPGMOVE_ON = false

var HOMEOFC_REG_ON = true
var RICHM_REG_ON = true
var HOMEOFC_ADM_ON = true
var RICHM_ADM_ON = true


// =============
var MOVESPLF_ON = true

var CGY_ON = true
var VANBBY_ON = false
var VANDIVS_ON = false

var HOMEOFC_ON = false
var RICHM_ON = false
var SCD_VBCGY_ON = false


dates.SETANCHORDATE('Mon Jun 14 2021')



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


      if (RICHM_ADM_ON) {
        var richh = mainhandlerEVE.RICH_ADM_CHECKLISTS()
        filelist = filelist.concat(richh);
      }

      if (RICHM_REG_ON) {
        var richh = mainhandlerEVE.RICH_REG_CHECKLISTS()
        filelist = filelist.concat(richh);
      }
       
      if (HOMEOFC_ON) {
        var hofc = mainhandlerEVE.HOFC_CHECKLISTS()  
        filelist = filelist.concat(hofc); 
      }
      if (HOMEOFC_REG_ON) {
        var hofc = mainhandlerEVE.HOFC_REG_CHECKLISTS()  
        filelist = filelist.concat(hofc); 
      }

      if (HOMEOFC_ADM_ON) {
        var hofc = mainhandlerEVE.HOFC_ADM_CHECKLISTS()  
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
  myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      var inp = ["mon"]

      if (MOVESPLF_ON) {
        var sploutqs = mainhandlerGVY.CREATEALL_MVALLSPLOUTQS()
        filelist = filelist.concat(sploutqs);          
      }

      if (CGY_ON) {
        var cgy = mainhandlerGVY.CGY_CHECKLISTS()
        filelist = filelist.concat(cgy);        
      }

      if (HOMEOFC_ON) {
        var hofc = mainhandlerGVY.HOFC_FULLCHECKLISTS()
        filelist = filelist.concat(hofc);        
      }

      if (RICHM_ON) {
        var richh = mainhandlerGVY.RICHHOFC_FULLCHECKLISTS()
        filelist = filelist.concat(richh);
      }


      if (VANDIVS_ON) {
        var vandivs = mainhandlerGVY.VANDIVS_FULLCHECKLISTS()
        filelist = filelist.concat(vandivs);
      }


      if (VANBBY_ON) {
        var vb = mainhandlerGVY.VANBBY_CHECKLISTS() 
        filelist = filelist.concat(vb);        
      }

      if (SCD_VBCGY_ON) {
        var scd = mainhandlerGVY.SCD_VBCGY(inp)
        filelist = filelist.concat(scd);         
      }


        resolve(filelist)
  
    }, 79999);
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