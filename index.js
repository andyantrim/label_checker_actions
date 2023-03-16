const core = require('@actions/core');
const github = require('@actions/github');

try {
    const labels = core.getInput('labels');
    // Split labels into array
    const labelsArray = labels.split(',');
    // Get the labels from the PR
    const prLabels = github.context.payload.pull_request.labels;
    // Check if the PR has the label
    const hasLabel = prLabels.some(label => labelsArray.includes(label.name));
    // Set the output
    core.setOutput('pass', hasLabel);
    if (!hasLabel) {
        core.setFailed(`The PR does not have the label: ${labels}`);
    }
} catch (error) {
    core.setFailed(error.message);
}
