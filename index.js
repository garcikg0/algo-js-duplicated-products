const nameStr1 = ['ball', 'bat', 'glove', 'glove', 'glove'];
const priceStr1 = [2,3,1,2,1]
const weightStr1 = [2,5,1,1,1]

// const nameStr2 = ['ball', 'box', 'lamp', 'brick', 'pump'];
// const priceStr2 = [2,2,2,2,2]
// const weightStr2 = [2,2,2,2,2]

//Attempting with Linked List
function numDuplicates(nameStr, priceStr, weightStr) {
    let n = nameStr.length
    class LinkedList {
        constructor() {
            this.head = null; // First element of the list
            this.tail = null; // Last element of the list
        }
    
        append(value) {
            const newNode = { value: value, next: null};
            if (this.tail) {
                this.tail.next = newNode;
            }
            this.tail = newNode;
            if (!this.head) {
                this.head = newNode;
            }
        }

        prepend(value) {
            const newNode = { value: value, next: this.head};

            this.head = newNode;
            if (!this.tail) {
                this.tail = newNode;
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
};

numDuplicates(nameStr1, priceStr1, weightStr1);