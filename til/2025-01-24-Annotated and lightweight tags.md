---
tags: [git]
---

Git has [two kinds of tags](https://git-scm.com/book/en/v2/Git-Basics-Tagging): _annotated_ and _lightweight_.

- An annotated tag is stored as an object. It contains the name of the user who created it (the _tagger_), it can be signed, etc.
- A lightweight tag is like a branch that doesn't change.

Although using one kind or the other doesn't change anything most of the times, there are cases where knowing the difference is useful. GitHub Actions for instance, has a different behaviour for the two: when we push a **lightweight** tag which is on the latest commit of branch `main`, `github.event.base_ref` contains `refs/heads/main`. This allows us to run a workflow on new tags only created on the main branch:

```yaml
on:
  push:
    tags:
      - "v[0-9]+.[0-9]+.[0-9]+"

jobs:
  build-website:
    if: github.event.base_ref == 'refs/heads/main'
    ...
```

However, **this doesn't work if the tag is annotated**.

Commands like `npm version` create annotated tags, so we can just add a `postversion` script in `package.json` to convert the newly created annotated tag to a lightweight one:

```bash
tag=$(git tag --points-at HEAD)

git tag -d "$tag"
git tag "$tag" HEAD
```

See the whole files at [github.com/Zwyx/library-of-babel](https://github.com/Zwyx/library-of-babel).
