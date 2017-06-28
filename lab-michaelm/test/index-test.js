'use strict';

const expect = require('expect');
const SLL = require('../index.js');

describe('Testing Linked List', () => {

  describe('Testing constructor', () => {
    it('Should return a new Linked List', (done) => {
      let head = new SLL('a');
      expect(head).toEqual(new SLL('a'));
      done();
    });
  });

  describe('Testing appendNode', () => {
    it('Should append a node', (done) => {
      let head = new SLL('a');
      let a = new SLL('b');
      head.appendNode(a);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 'a', next: {value: 'b', next: null}}));
      done();
    });

    it('Should append two nodes', (done) => {
      let head = new SLL('a');
      let a = new SLL('b');
      let b = new SLL('c');
      head.appendNode(a);
      head.appendNode(b);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 'a', next: {value: 'b', next: {value: 'c', next: null}}}));
      done();
    });

    it('Should append three nodes', (done) => {
      let head = new SLL(1);
      let a = new SLL(2);
      let b = new SLL(3);
      let c = new SLL(4);
      head.appendNode(a);
      head.appendNode(b);
      head.appendNode(c);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 1, next: {value: 2, next: {value: 3, next: {value: 4, next: null}}}}));
      done();
    });
  });

  describe('Testing forEach', () => {
    it('Should add 1 to each node value', (done) => {
      let head = new SLL(1);
      let a = new SLL(2);
      let b = new SLL(3);
      head.appendNode(a);
      head.appendNode(b);
      head.forEach(item => item.value = item.value + 1);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 2, next: {value: 3, next: {value: 4, next: null}}}));
      done();
    });

    let head = new SLL(1);
    let a = new SLL(2);
    let b = new SLL(3);
    head.appendNode(a);
    head.appendNode(b);
    it('Should multiply each node value by 2', (done) => {
      head.forEach(item => item.value = item.value * 2);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 2, next: {value: 4, next: {value: 6, next: null}}}));
      done();
    });

    it('Should should divide each node value by 2', (done) => {
      head.forEach(item => item.value = item.value / 2);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 1, next: {value: 2, next: {value: 3, next: null}}}));
      done();
    });
  });

  describe('Testing findMiddle', () => {
    it('Should return the middle node', (done) => {
      let head = new SLL(1);
      let a = new SLL(2);
      let b = new SLL(3);
      let c = new SLL(4);
      let d = new SLL(5);
      head.appendNode(a);
      head.appendNode(b);
      head.appendNode(c);
      head.appendNode(d);
      let result = head.findMiddle();
      expect(result).toEqual(b.value);
      done();
    });

    it('Should return the middle node', (done) => {
      let head = new SLL('a');
      let a = new SLL('b');
      let b = new SLL('c');
      let c = new SLL('d');
      let d = new SLL('e');
      head.appendNode(a);
      head.appendNode(b);
      head.appendNode(c);
      head.appendNode(d);
      let result = head.findMiddle();
      expect(result).toEqual(b.value);
      done();
    });

    it('Should return the min middle node', (done) => {
      let head = new SLL(1);
      let a = new SLL(2);
      let b = new SLL(3);
      let c = new SLL(4);
      head.appendNode(a);
      head.appendNode(b);
      head.appendNode(c);
      let result = head.findMiddle();
      expect(result).toEqual(a.value);
      done();
    });
  });

  describe('Testing remove()', () => {
    it('Should remove node', (done) => {
      let head = new SLL('a');
      let a = new SLL('b');
      head.appendNode(a);
      head.removeNode(a);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 'a', next: null}));
      done();
    });
    it('Should remove node', (done) => {
      let head = new SLL('a');
      let b = new SLL('b');
      let c = new SLL('c');
      head.appendNode(b);
      head.appendNode(c);
      head.removeNode(c);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 'a', next: {value: 'b', next: null}}));
      done();
    });
    it('Should remove node', (done) => {
      let head = new SLL('a');
      let b = new SLL('b');
      let c = new SLL('c');
      let d = new SLL('d');
      head.appendNode(b);
      head.appendNode(c);
      head.appendNode(d);
      head.removeNode(c);
      expect(JSON.stringify(head)).toEqual(JSON.stringify({value: 'a', next: {value: 'b', next: {value: 'd', next: null}}}));
      done();
    });
  });

  describe('Testing Reverse', () => {
    it('Should reverse a list of objects', (done) => {
      let head = new SLL('a');
      let b = new SLL('b');
      head.appendNode(b);
      head.reverse();
      expect(JSON.stringify(b)).toEqual(JSON.stringify({value: 'b', next: {value: 'a', next: null}}));
      done();
    });
    it('Should reverse a list of objects', (done) => {
      let head = new SLL('a');
      let b = new SLL('b');
      let c = new SLL('c');
      head.appendNode(b);
      head.appendNode(c);
      head.reverse();
      expect(JSON.stringify(c)).toEqual(JSON.stringify({value: 'c', next: {value: 'b', next: {value: 'a', next: null}}}));
      done();
    });
    it('Should reverse undefined', (done) => {
      let head = new SLL('a');
      let b = new SLL('b');
      let c = new SLL('c');
      head.appendNode(b);
      head.appendNode(c);
      expect(c.reverse()).toEqual(undefined);
      done();
    });
  });
});
