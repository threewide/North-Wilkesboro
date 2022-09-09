const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should get office number', () => {
    const testConstruct = new Manager("Fred","1","freddy@fakemail.com", "51");

    expect(testConstruct.getOfficeNumber()).toEqual("51");
    });
  });