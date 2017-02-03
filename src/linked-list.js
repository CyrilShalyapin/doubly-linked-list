const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = null;
        this._tail = null;
    }

    append(data) {
        let node = new Node(data);

        if (this.length === 0) {
            this._head = node;
            this._tail = node;
        } else {
            this._tail.next = node;
            node.prev = this._tail;
            this._tail = node;
        }

        this.length++;

        return this;
           
    }

    head() {
        if (this._head) return this._head.data;
        else return null;
    }

    tail() {
        if (this._tail) return this._tail.data;
        else return null;
    }

    at(index) { 
        if (this.length <= index || index < 0) {
            throw new Error('nonexistent index!');
        }
        let currentNode = this._head,
        counter = 0;

        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        return currentNode.data;

    }

    insertAt(index, data) {
        if (this.length === 0 || this.length < index) {
            return this.append(data);
        }

        let node = new Node(data),
            currentNode = this._head,
            box = null,
            counter = 0;

        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
         
        }

        box = currentNode.prev;
        box.next = node;
    
        this.length++;

        return this;
  
    }

    isEmpty() {
        if (this.length === 0) return true;
        else return false;
    }

    clear() {
        this.length = 0;
        this._head = null;
        this._tail = null;

        return this;

    }

    deleteAt(index) {
        if (this.length === 1) {
            return this.clear();
        } else if (this.length === 0) {
            return this;
        }

        let currentNode = this._head,
            box = null,
            counter = 0;

        while (counter < index) {
            currentNode = currentNode.next;
            counter++;
        }

        box = currentNode.prev;
        box.next = currentNode.next;
        box = currentNode.next;
        box.prev = currentNode.prev;
        currentNode = null;

        this.length--;

        return this;

    }

    reverse() {
        if (this.length === 1 || this.length === 0) {
            return this;
        }

        let currentNodeTop = this._head,
            currentNodeBottom = this._tail,
            box = new Node(),
            counter = 0;

        while (counter < this.length/2) {
            box.data               = currentNodeBottom.data;
            currentNodeBottom.data = currentNodeTop.data;
            currentNodeTop.data    = box.data;

            currentNodeTop = currentNodeTop.next;
            currentNodeBottom = currentNodeBottom.prev;

            counter++;
        }

        return this;

    }

    indexOf(data) {
        let currentNode = this._head,
            counter = 0;

        while (counter < this.length) {
            if (currentNode.data === data) {
                return counter
            }

            currentNode = currentNode.next;
            counter++;
        }

        return -1;

    }
} 


module.exports = LinkedList;
