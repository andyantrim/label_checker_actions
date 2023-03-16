# Label checker action
Simple action that checks at least one label is present from the list provided

## Adding to your repository

Add the following to `.github/workflows/label.yml`

```
name: "Check labels"

on: pull_request
  types: [opened, edited, labeled, unlabeled, ready_for_review]

jobs:
  check_labels: 
    runs-on: ubuntu-latest
    name: A job to check labels exist
    steps:
      - name: Checks the label matches
        uses: andyantrim/label_checker_actions@v0.1
        with:
          labels: 'label1,label2'
```

This will run on PRs and ensure that a label is added correctly, it will fail if label1 or label2 are not present.
