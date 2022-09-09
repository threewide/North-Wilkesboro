const Engineer = require('../lib/engineer');

describe('Engineer', () => {
    it('should get email', () => {
    const testConstruct = new Engineer("Steve","mid","steve@fakemail.com", "asdf@github.com");

    expect(testConstruct.getEmail()).toEqual("steve@fakemail.com");
    });
  });