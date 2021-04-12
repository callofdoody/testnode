const fs = require('fs');
const replace = require('replace-in-file');

const ORIG_SAMPLEMAC = "./SAMPLE/SAMPLE.mac"
const ORIG_VARS = "REM *INSERT VARS*"
const ORIG_MACROBODY = "   ' === ALL CODE HERE BELOW "

module.exports = {
  writemacro: function (filename, contents) {
    return writemacro(filename, contents)
  },

  createmacro: function(filename, dirname, variables, macrobody) {
    return createmacro(filename, dirname, variables, macrobody)
  },
  readymacro: function(filename) {

  },



  insertFileDetails: function(insertfilename, sourcepath,filelist) {
    return insertFileDetails(insertfilename, sourcepath,filelist)
  }

};


function writemacro(filename, contents) {
  fs.writeFile(
    filename, 
    contents, 
    function (err) {
    if (err) return console.log(err);
    console.log('created '
      +filename
      +'');
  });
}

function createmacro(filename, dirname, variables, macrobody) {
  
  fs.copyFile(ORIG_SAMPLEMAC, 
  dirname+"/"+filename, 
//  "./"+filename, 
  (err) => {
    if (err) {
        throw err;
    }
    console.log(filename+" initialized.");
  }  )

  const options = {
    //files: "./"+filename,
    files: dirname+"/"+filename, 
    from: [ORIG_VARS, ORIG_MACROBODY],
    to: [variables, macrobody],
  };

  try {
    const results = replace.sync(options)
    console.log("Loaded "+filename);
  }
  catch (error) {
    console.log("ERROR IN LOADING:");
    console.error('Error occurred:', error);
  }

}



function insertFileDetails(insertfilename, sourcepath,filelist) {
  var f1 = {}
  f1['filename'] = insertfilename
  f1['path'] = sourcepath +"/"+ insertfilename
  filelist.push(f1)
}


