/**
 * @param {any[]} {sampleDna} muestra de adn para el test
 * @param {any[]} {validContent} contenido permitido de la matriz
 * @return {boolean}  indica si la muestra es valida para el test * 
 */
exports.isValidSampleDna = function isValidSampleDna(sampleDna,validContent){
    const rows = sampleDna.length;
    
    return (isSquareMatrix(sampleDna,rows) &&
            isValidContent(sampleDna, rows,validContent) &&
            rows>=4);
}

/**
 * @param {Array[]} {data} array
 * @param {int} {rows} filas del array
 * @returns {boolean} es matriz cuadrada (y >=4)?
 */
function isSquareMatrix(data,rows){

    for(i=0;i<rows;i++){
        if(!(data[i].length==rows)){
            return false;
        }
    }
    return true;
}

/**
 * @param {Array[]} {data} array
 * @param {int} {rows} filas del array
 * @param {string} {content} contenido válido 
 * @returns {boolean} es su contenido válido?
 */
function isValidContent(data,rows,content){
    for(i=0;i<rows;i++){
        for(k=0;k<rows;k++){
            var abc = data[i].substring(k,k+1).toUpperCase();
            if(!content.includes(abc)){
                return false;
            }
        }
    }        
    return true;
}