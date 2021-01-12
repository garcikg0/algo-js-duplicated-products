const nameStr1 = ['ball', 'bat', 'glove', 'glove', 'glove'];
const priceStr1 = [2,3,1,2,1];
const weightStr1 = [2,5,1,1,1];

const nameStr2 = ['ball', 'box', 'lamp', 'brick', 'pump'];
const priceStr2 = [2,2,2,2,2]
const weightStr2 = [2,2,2,2,2]

function numDuplicates(nameStr, priceStr, weightStr) {
    let count = 0;
    const resultData = new Map();
    for (i=0; i < nameStr.length; i++) { 
        let currentProduct = nameStr[i] + priceStr[i] + weightStr[i]
        if (resultData.get(currentProduct) != null) {
            count++;
        } else {
            resultData.set(currentProduct, 1)
        } 
    }
    console.log(count)

};

numDuplicates(nameStr1, priceStr1, weightStr1);
numDuplicates(nameStr2, priceStr2, weightStr2);