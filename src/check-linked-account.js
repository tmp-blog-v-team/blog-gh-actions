const core = require('@actions/core');
const axios = require('axios');
const constants = require('./constants');

const ENDPOINRT = "https://jpcssblogdev.azurewebsites.net/api";
const TOKEN_ENDPOINT = `${ENDPOINRT}/auth/token`


async function run() {

  try {
    const token = core.getInput("token");
    const githubId = core.getInput("githubId");
    const allowExternalUser = core.getInput("allowExternalUser")
    const headers = {
      Authorization: `Bearer ${token}`
    };

    const res = await axios.get(`${constants.LINKED_ENDPOINT}/${githubId}`, {
      headers: Object.assign(headers, constants.GITHUB_TRACES),
      maxRedirects: 0,
      validateStatus: function (status) {
        return status < 500;
      }
    });

    const result = res.data.alias;

    if(result) {
      if (allowExternalUser !== 'allow' && result.includes('-')){
        console.log(`${githubId} is not FTE.`);
        core.setOutput("isLinked", false);
      }
      console.log(`${githubId} is Microsoft linked account.`)
      core.setOutput("isLinked", true);
    } else {
      console.log(`${githubId} is not Microsoft linked account.`);
      core.setOutput("isLinked", false);
    }
  } catch (error) {
    console.log(error.message)
    core.setFailed(error.message);
  }
}

run();
