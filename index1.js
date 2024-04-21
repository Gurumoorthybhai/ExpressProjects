setTimeout(()=>console.log("hello"));
setImmediate(()=>console.log("hi"));
process.nextTick(()=>console.log("guru"));

// // hi
// guru
// hello


// node - value, address

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LL {

    constructor(value) {
        const node = new Node(value);
        this.head = node;
        this.next = this.head;
        this.length = 1;
    }

    push(value) {

        const newNode = new Node(value);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }
    }

    printAll() {
        while (this.head != null) {
            console.log(this.head);
            this.head = this.head.next;
            
        }
    }
}

const obj = new LL(10);
obj.push(20);
obj.printAll();