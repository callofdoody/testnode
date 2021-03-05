const express = require('express');
const fs = require('fs')
const macro = require('./macros/macromain')
const emailer = require('./emailutils')
const file = require('./fileutils')
const dates = require('./dateutils')
const mainhandler = require('./mainhandler')

const moveFile = require('move-file');



var MAINSWITCH = true;



dates.SETANCHORDATE('Mon Mar 08 2021')


var dirname = './TEMP_'
  +dates.THISWEEK_MON_MMDD()+"_"
  +dates.THISWEEK_FRI_MMDD()
fs.mkdir(dirname, (err) => {
    if (err) {
        throw err;
    }
    console.log("Directory "+dirname+" is created.");
});
mainhandler.setDIR(dirname)


var filelist = []


const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    var sploutqs = mainhandler.CREATEALL_MVALLSPLOUTQS()
    filelist = filelist.concat(sploutqs);
    var hofc = mainhandler.HOFC_FULLCHECKLISTS()
    filelist = filelist.concat(hofc);

    var sploutqs = mainhandler.CREATEALL_MVALLSPLOUTQS()
    var cgy = mainhandler.CGY_CHECKLISTS()
    var vb = mainhandler.VANBBY_CHECKLISTS() 
    var inp = ["mon"]
    var scd = mainhandler.SCD_VBCGY(inp)

    var richh = mainhandler.RICHHOFC_FULLCHECKLISTS()
    var hofc = mainhandler.HOFC_FULLCHECKLISTS()
    var vdivs = mainhandler.VANDIVS_FULLCHECKLISTS()
    //console.log(more)
    filelist = filelist.concat(sploutqs);
    filelist = filelist.concat(cgy);
    filelist = filelist.concat(vb);
    filelist = filelist.concat(scd);    
    filelist = filelist.concat(richh);
    filelist = filelist.concat(hofc);
    filelist = filelist.concat(vdivs);


      resolve(filelist)
 
  }, 39999);
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


var sample = [{"filename":"SAMPLE.mac", "path":"./SAMPLE/SAMPLE.mac" }]

const app = express();

app.get('/', (req, res) => {

  res.send(filelist)
});

app.listen(3000, () => {
  console.log('server started');
});