import { expect } from 'chai';

// Assume eventSource is properly initialized for testing purposes
// You should have a proper setup for eventSource before running this test.

describe('Your Test Suite Name', () => {
  it('receives events from server', (done: Mocha.Done) => {
    eventSource.addEventListener('message', (event: MessageEvent) => {
      expect(JSON.parse(event.data)).to.eql({
        hello: 'world',
      });
      done();
    });
  });
});
