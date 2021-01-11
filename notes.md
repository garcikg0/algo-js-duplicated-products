HashMaps (url : https://adrianmejia.com/data-structures-time-complexity-for-beginners-arrays-hashmaps-linked-lists-stacks-queues-tutorial/)
Hashrtable is a data structure that maps keys to values. 
Hash Map uses a hash table for implmentation while treemaps uses a binary search tree. 
In arrays, the data is referenced using a numberic index (relatively to the postiion). 
However, HashMaps uses labels that could be a string, number, ojbect, or anything. 
Internally, the HashMap uses an Array, and it maps the labels to array indexes using a hash function. 
Two ways to implement hashmaps: 
- Array : using a hash function to map a key to the array index value. 
Worst:O(n) Average:O(1)
- Binary Search Tree: Using a self-balancing binary search tree lookup for values. 
Worst: O(log n) Average: O(log n)

The most common implementation of Maps is using an array and hash function. 

LINKED LIST ( url : https://www.youtube.com/watch?v=41GSinwoMYA start at 41:19)
- The Constructor function in a class is the first code that executes when ever later you call new LinkedList();
- When 'new' is used, it goes to the constructor function Ex. const linkedList1 = new LinkedList();
- Elements in a linked list are called nodes. 
- To efficiently insert new nodes, at least at the end and at the beginning of the list, we keep track of the first node (Head) and last node (Tail). 
    - The Head and Tail allows us to have two specific markers, or markers, placed in the LinkedList which we want to keep updated.
        - The Head Marker points to the first node of the LinkedList. 
        - The Tail Marker points to the last node of the LinkedList.
    - The Head and Tail allows us to efficiently prepend and append elements to the LinkedList
- We implicitly store the data with LinkedLists. 
    - The nodes know about the next node but each node doesn't necessarily know something about the list it's part of. 
    - The list doesn't know all of it's nodes. 
    - The list knows the first and last nodes of list elements. 
    - The nodes themsleves know the next one in line. 
- Adding an Append method - 
    - append method should take a value. 
    - create new node as an object. We store the value and pointer at the next element in line. 
            const newNode = {value: value, next: null};
                * When we append a node, it's always at the end of the list (to the right of the previous value) *
    - check if we have a Tail --> if (this.tail) //if there is a tail:
        - if true, we update the previous Tail's 'next' value to the new node.
        - if false, we set the Tail to the newNode. 
    - check if we have a Head --> if (!this.head) //if there is not a head:
        - if true, we set the Head to the newNode.
        - if false, nothing. 
    - if the list is empty, the only new element is both head and tail. 
- To Output a List 
    - toArray() method and drill into each node next's property that are connected to each other
    - set a variable with an empty array ex. const elements = []; 
    - set a variable for the first node ex. let curNode = this.head.
    - do an iteration with a while loop and variable with the first node ex. while (curNode){}
        - add curNode element to the empty array ex. elements.push (curNode)
        - replace curNode with the next node ex. curNode = curNode.next
        - at the end, return the array, ex. return elements; 
- To Prepend 
    - prepend method should take a value. 
    - create new node as an object. We store the value and pointer to the current head (the head that is about to be repaced.)
            const newNode = { value: value, next: this.head};
                * When we prepend, we push the previous head to the next element * 
                    - In other words, we save a copy of the head about to be replaced and put it in the next key of the newNode. 
    - set the head as the newNode.   
            this.head = newNode;
    - if we have an empty list, set the Tail as the newNode. 
        if (!this.tail) {
                this.tail = newNode;
            }
        * By setting the newNode as the Head and Tail results in it being the first and and only element in the LinkedList *

Java Answer - https://stackoverflow.com/questions/58566800/comparing-products-given-three-seperate-lists