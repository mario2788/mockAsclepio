


const makeData = () => {

     // Crear mock:
     getMedicalUnits().then( (d) =>{
          console.log('Medical units:', d );
          saveFile( './mock_API_asclepio/units.json', d) ;

          d.medical_units.forEach( async (unit, i) => {

               for(let k = 0; k < unit.number_of_beds; k++ ){

                    const bed = await getPatients( unit.medical_unit_id, k )
                                        .catch( err => console.log("Error en getPatient",err) ) ;

                    let fileBed = getFile(`./mock_API_asclepio/bed_${unit.medical_unit_id}.json`);

                    if( fileBed != null ){
                         fileBed.push( bed );
                    }else{
                         fileBed = [ bed ]
                    }
                    saveFile( `./mock_API_asclepio/bed_${unit.medical_unit_id}.json`, fileBed) ;


                    const diagnosis = await getDiagnosis( unit.medical_unit_id, k )
                                        .catch( err => console.log("Error en getDiagnosis",err) ) ;

                    let fileDiag = getFile(`./mock_API_asclepio/diagnosis_${unit.medical_unit_id}.json`);

                    if( fileDiag != null ){
                         fileDiag.push( diagnosis );
                    }else{
                         fileDiag = [ diagnosis ]
                    }
                    saveFile( `./mock_API_asclepio/diagnosis_${unit.medical_unit_id}.json`, fileDiag) ;
               };
          });
     }).catch( err => {
          console.log( "Error en getMedicalUnits()", err );
          // console.log( err );
     });
} ;
