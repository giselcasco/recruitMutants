const validator = require('./serviceValidator');
const validContent=["A","T","C","G"];
const minLength = 4;
const dna = require('../entities/dna');

/**
 * @param {any[]} {data} muestra para el test
 * 
 * @return {boolean} resultado del test * 
 */
exports.isMutant = function isMutant(data){
    const sampleDna = new dna.DNA(data.dna);
    
    if(validator.isValidSampleDna(sampleDna.dnaArray,validContent)){
        var diagonalArray = getOblicualArray(sampleDna.dnaArray,sampleDna.rows);

        var secuencia =  horizontalSearch(sampleDna.dnaArray)
                        + horizontalSearch(sampleDna.dnaArrayTranspose)
                        + horizontalSearch(diagonalArray);
         
       
    }
    return secuencia>1;

}


/**
 * @param {any[]} {data} array de entrada
 * @return {int}  cantidad de veces que se encuentra una secuencia de 4 letras iguales consecutivas
 */
function horizontalSearch(data){
    var counter = 0;
    const rowsData = data.length;
    const rowsContent = validContent.length;
    for(i=0;i<rowsData;i++){
        for(k=0;k<rowsContent;k++){
            var sampleSecuence = validContent[k].repeat(minLength);
            if(data[i].includes(sampleSecuence)){
                counter++;
            }
        }
    } 
    return counter;
}

/**
 * @param {any[]} {data} array de entrada
 * @param {int} {rowsData} data.length
 * @return {any[]} contruye una matriz diagonal con las restricciones de busqueda
 */
function getOblicualArray(data,rowsData){
    const maxLengthSearch = rowsData-minLength;
    const maxLengthDiagonal = rowsData*2 - maxLengthSearch;
    const diagonal = new Array(maxLengthDiagonal);

    //Inicializo array
    for (var j = 0; j < diagonal.length; j++) {
       diagonal[j] = '';        
    }
    
    for(i=0;i<rowsData;i++){   
        for(k=0;k<rowsData;k++){
            //diagonal principal
            if(k==i){
                diagonal[0] =diagonal[0]+ data[i].substring(k,k+1).toUpperCase();    
                diagonal[rowsData-1] =diagonal[rowsData-1]+ data[rowsData-1-i].substring(k,k+1).toUpperCase();
            }
            //diagonal superior
            else if(k>i && k-i<maxLengthSearch+1){
                diagonal[k-i]=diagonal[k-i]+ data[i].substring(k,k+1).toUpperCase(); 
                diagonal[rowsData-1+(k-i)] =diagonal[rowsData-1+(k-i)]+ data[rowsData-1-i].substring(k,k+1).toUpperCase();
            }
            //diagonal inferior
            else if(k<i && i-k<maxLengthSearch+1){
               diagonal[maxLengthSearch+(i-k)]=diagonal[maxLengthSearch+(i-k)]+ data[i].substring(k,k+1).toUpperCase();                
               diagonal[rowsData+maxLengthSearch+(i-k)-1] =diagonal[rowsData+maxLengthSearch+(i-k)-1]+ data[rowsData-1-i].substring(k,k+1).toUpperCase();
            }
        }
    }   
    return diagonal;
}
