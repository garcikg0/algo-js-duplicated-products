const nameStr1 = ['ball', 'bat', 'glove', 'glove', 'glove'];
const priceStr1 = [2,3,1,2,1]
const weightStr1 = [2,5,1,1,1]

// const nameStr2 = ['ball', 'box', 'lamp', 'brick', 'pump'];
// const priceStr2 = [2,2,2,2,2]
// const weightStr2 = [2,2,2,2,2]

//Attempting with Linked List
function numDuplicates(nameStr, priceStr, weightStr) {

    class LinkedList {
        constructor() {
            this.name = null; 
            this.price = null; 
            this.weight = null;
            this.next = null;
        }

        append(name, price, weight) {
            const newNode = { name: this.name, price: this.price, weight: this.weight, next: null};
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
            if (!this.head) {
                this.head = newNode;
            }
        }

        toArray() {
            const elements = [];

            let curNode = this.head;
            while (curNode) {
                elements.push(curNode)
                curNode = curNode.next;
            }
            return elements;
        }
    }

    const linkedList1 = new LinkedList();
    linkedList1.append(nameStr[0])
    linkedList1.append(priceStr[0])
    linkedList1.append(weightStr[0])
    console.log( linkedList1.head.value)
};

numDuplicates(nameStr1, priceStr1, weightStr1);