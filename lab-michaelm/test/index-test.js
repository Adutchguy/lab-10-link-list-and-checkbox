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
