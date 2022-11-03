const express = require('express') ;
const app = express() ;
const port = 8082 ;

const {getFile} = require('./data/getFile');

app.use( express.static('public') );

app.get('/medicalUnits', (req, res) => {

     const units = getFile('./data/units.json')

     if(units){
          console.log('./data/units.json');
          res.json( units );
     }else{
          res.send( `Sin datos.`);
     };
});

app.get('/getPatients/*', (req, res) => {

     const url = req.url.split('/');

     const beds = getFile(`./data/bed_${url[2]}.json`)
     const bed =  beds ? beds[url[3]] : null;

     if(bed){
          console.log(`./data/bed_${url[2]}.json`);
          res.json( bed );
     }else{
          res.send( `Sin datos de la unidad medica.`);
     };
});

app.get('/get-diagnosis/*', (req, res) => {

     const url = req.url.split('/');

     const diags = getFile(`./data/diagnosis_${url[2]}.json`)
     const diag =  diags ? diags[url[3]] : null;

     if(diag){
          console.log(`./data/diagnosis_${url[2]}.json`);
          res.json( diag );
     }else{
          res.send( `Sin datos de ese diagnostico.`);
     };
});

app.listen(port, () => {
     console.log(`Mock de Asclepio listening on port ${port}`)
}) ;
