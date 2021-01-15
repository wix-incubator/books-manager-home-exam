const { setup: setupDevServer } = require("jest-dev-server")
module.exports = async () => {
  await setupDevServer({
    command: 'npm run start --port 3000',
    launchTimeout: 30000,
    debug: true,
    port: 3000
  })
}
