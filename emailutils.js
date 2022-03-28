
var nodemailer = require('nodemailer');
const fs = require('fs');


module.exports = {
  emailout: function (filelist) {
    return emailsend(filelist)
  }
};


var mail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'callofduty.blackupss@gmail.com',
    pass: 'doodyfoody12'
  }
});

var mailOptions = {
  from: 'callofduty.blackupss@gmail.com',
  to: 'roberto.trigo@core-mark.com',
  subject: 'Sending Email via Node.js',
  text: 'That was easy!',
  attachments: [{   
           // filename and content type is derived from path
            path: './RUN_gy_hofc_MVALLSPLFOUTQS_4wedthurs_6666.mac'
        }
    ]
};

function emailsend() {}

function emailsend(filelist) {
  var mailingOptions = {
  from: 'callofduty.blackupss@gmail.com',
  to: 'roberto.trigo@core-mark.com',
  subject: 'Sending Email via Node.js',
  text: 'That was easy!',
  attachments: filelist
  };

  mail.sendMail(mailingOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
}
