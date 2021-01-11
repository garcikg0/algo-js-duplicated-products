const nameStr1 = ['ball', 'bat', 'glove', 'glove', 'glove'];
const priceStr1 = [2,3,1,2,1];
const weightStr1 = [2,5,1,1,1];

function numDuplicates(nameStr, priceStr, weightStr) {
    const n = nameStr.length;  
    let products = [];
    let currentProduct = null;
    let counter = 0;
    let hashkey = 0;
    //create array
    //create hash key 
    for (i=0; i < n; i++){
        currentProduct = [nameStr[i], priceStr[i], weightStr[i]];
        let charCode = nameStr[i] + 
        console.log(currentProduct)
    }
   

};

numDuplicates(nameStr1, priceStr1, weightStr1);