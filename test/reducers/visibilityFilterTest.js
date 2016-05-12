var reducer = require('../../src/reducers/visibilityFilter');

describe('visibilityFilter', () => {

  it('should not change the passed state', (done) => {

    const state = Object.freeze({});
    reducer(state, {type: 'INVALID'});

    done();
  });
});
