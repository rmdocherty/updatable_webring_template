# updatable_webring_template
MVP for a 'webring' - structured set of links to other (scientific) data - which can be updated (new content added + site rebuilt) via some external source (in this case, google sheets).



## Instructions to get updates working:

1. Create a fine-grained PAT (scoped ONLY to your repo) that actions read/write permissions.
2. Add this script to an AppScript file associated with your google sheets, where GITHUB_TOKEN is the PAT you just generated
```AppScript
function triggerGithubAction() {
  // NB: this is a token scoped only for R/W of the actions of the given repo
  // i.e it can only trigger actions
  const GITHUB_TOKEN = "foo";
  const REPO_OWNER = "your_username";
  const REPO_NAME = "your_repo";
  const WORKFLOW_ID = "workflow_name.yml";   // or the numeric workflow ID
  const BRANCH = "main";            // must exist in the repo

  const url = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}/actions/workflows/${WORKFLOW_ID}/dispatches`;

  const payload = {
    ref: BRANCH
    // optionally:
    // inputs: {
    //   key: "value"
    // }
  };

  const options = {
    method: "post",
    contentType: "application/json",
    headers: {
      Authorization: "token " + GITHUB_TOKEN,
      Accept: "application/vnd.github+json"
    },
    payload: JSON.stringify(payload),
    muteHttpExceptions: true
  };

  const response = UrlFetchApp.fetch(url, options);

  Logger.log(response.getResponseCode());
  Logger.log(response.getContentText());
}
```
3. Add a workflow file to `.github/workflows/on_spreadsheet_update.yml`
```
name: Spreadsheet Sync Trigger Test

on:
  workflow_dispatch:
    types: [spreadsheet_update]

jobs:
  ping:
    runs-on: ubuntu-latest
    steps:
      - name: Acknowledge Trigger
        run: echo "hello_world"
```
4. Add some button / way of running the script to your spreadsheet