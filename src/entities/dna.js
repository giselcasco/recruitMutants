exports.DNA = class DNA {
    /**
     * @param {any[]} sampleDna
     */
    constructor(sampleDna){
        this.dnaArray = sampleDna;
        this.rows=this.dnaArray.length;
        this.dnaMatrix = new Array(this.rows);
        this.dnaArrayTranspose =  new Array(this.rows);
        
        //Matriz
        for(var i=0; i<this.rows; i++) {       
            for(var k=0;k<this.rows;k++){        
                this.dnaMatrix[i]=Array.from(this.dnaArray[i]);     
            }
        } 

        //Transpuesta 
        for(var i=0; i<this.rows; i++) {   
            var row = '';    
            for(var k=0;k<this.rows;k++){       
              row=row+this.dnaMatrix[k][i]; 
            }
            this.dnaArrayTranspose[i]=row;
        } 
    }
}