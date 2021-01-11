const nameStr1 = ['ball', 'bat', 'glove', 'glove', 'glove'];
const priceStr1 = [2,3,1,2,1];
const weightStr1 = [2,5,1,1,1];

// ['ball', 2, 2], ['bat', 3, 5], ['glove', 1, 1]

function numDuplicates(nameStr, priceStr, weightStr) {
    let products = [];
    let currentProduct = {}
    let counter = 0;
    // let m = new Hashmap();
    for (i=0; i < nameStr.length; i++) {
        products.set( nameStr[i], [priceStr[i], weightStr[i]] )
    };

    console.log(products)
    // console.log(products[2][0])
    // console.log(products[4][0])
    // console.log(products[2][0] === products[4][0] ? 'dup' : 'not a dup');
     debugger
};

numDuplicates(nameStr1, priceStr1, weightStr1);