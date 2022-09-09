const Intern = require('../lib/intern');

describe('Intern', () => {
    it('should get school', () => {
    const testConstruct = new Intern("Bill","3","billy@fakemail.com", "Fanshawe");

    expect(testConstruct.getSchool()).toEqual("Fanshawe");
    });
  });