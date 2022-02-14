const core = require('@actions/core');
const axios = require('axios');
const constants = require('./constants')

async function run() {

  try {
    const githubToken = await core.getIDToken(constants.AUDIENCE);

    const headers = {
      Authorization: `Bearer ${githubToken}`
    }

    const tokenResult = await axios.get(constants.TOKEN_ENDPOINT, {
      headers: Object.assign(headers, constants.GITHUB_TRACES)
    })

    const token = tokenResult.data.value;

    core.setOutput("token", token);

  } catch (error) {
    console.log(error)
    core.setFailed(error.message);
  }
}

run();
