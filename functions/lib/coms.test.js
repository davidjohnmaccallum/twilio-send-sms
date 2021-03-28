const subject = require('./coms')

test('coms', () => {

  expect(subject.buildWelcomeSms({
    name: 'John Doe',
    to: '+27725586774',
    from: '+27111111111'
  })).toEqual({
    to: '+27725586774',
    from: '+27111111111',
    body: 'Welcome, John Doe'
  })

})