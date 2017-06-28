'use strict';

class SLL {
  // O of 1
  constructor(value){
    this.value = value;
    this.next = null;
  }

  // O of N
  appendNode(node){
    if(!(node instanceof SLL))
      return null;
    if(!this.next){
      this.next = node;
      return;
    }
    this.next.appendNode(node);
  }

  //O of N
  forEach(callback){
    let current = this;
    while(current){
      callback(current, this);
      current = current.next;
    }
  }

  //O of N
  findMiddle(){
    let slow, fast;
    slow = fast = this;
    while(fast && fast.next && fast.next.next){
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow.value;
  }

  //O of N
  removeNode(node){
    if(this === null) return;

    let current = this;
    while (current.next != null) {
      if (current.next === node) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
  }

  // ) of N
  reverse(){
    if(!this.next) return;
    let current = this;
    let previous = null;
    while(current){
      let save = current.next;
      current.next = previous;
      previous = current;
      current = save;
    }
    return previous;
  }
}

module.exports = SLL;
