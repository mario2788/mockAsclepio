const fs = require('fs');

// const archivo = './db/data.json' ;

const saveFile = ( namefile, data ) => {
     fs.writeFileSync( namefile, JSON.stringify( data, null, 2 ) ) ;
};

module.exports = {
     saveFile
}
