const buildWelcomeSms = ({name, from, to}) => ({
  from, 
  to,
  body: `Welcome, ${name}`
})

module.exports = {
  buildWelcomeSms
}