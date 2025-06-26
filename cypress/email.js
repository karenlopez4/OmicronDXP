const fs = require('fs');
const archiver = require('archiver');

var output = fs.createWriteStream("./cypress/reports/reporte.zip");
var archive = archiver('zip');
archive.pipe(output);

archive.directory('./cypress/reports/html',"reporte");
archive.finalize();

//---------------------------------------------------------------------------------------------------------------
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "smtp-mail.outlook.com", 
    secureConnection: false,
    port: 587, 
    tls: {
       ciphers:'SSLv3'
    },
    auth: {
        user: 'tests.cypress.omicron@outlook.com',
        pass: 'Davidhdz12.'
    },
    tls : { rejectUnauthorized: false }
});
var mailOptions = {
    from: 'Reporte de pruebas automatizadas <tests.cypress.omicron@outlook.com>',
    //to: 'david-hdz@outlook.com, tania.dominguez@axity.com, karen.lopez@axity.com, enrique.reyes@axity.com', 
    to: 'prueba@outlook.com, karenlopez.paz@gmail.com',
    subject: 'Reporte de pruebas ejecutadas en cypress', 
    attachments: [
      {
          filename: 'reporte.zip',
          path: './cypress/reports/reporte.zip',
      }]
};

transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
    }

    console.log('Message sent: ' + info.response);
});

