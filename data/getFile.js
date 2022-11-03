const fs = require('fs');

const getFile = (file) => {
     
     if( !fs.existsSync(file) ){
          return null
     }

     const data = fs.readFileSync( file, { encoding: 'utf-8' });

     return JSON.parse( data )
};


module.exports = {
     getFile
};
