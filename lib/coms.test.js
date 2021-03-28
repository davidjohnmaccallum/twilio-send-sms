const subject = require('./coms')

test("coms", () => {

  expect(subject.buildHelloSms({
    name: "John Doe",
    tel: "+27725586774"
  })).toEqual({
    tel: "+27725586774",
    message: "Welcome, John Doe"
  })

})