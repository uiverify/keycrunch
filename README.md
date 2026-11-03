# Keycrunch

Keycrunch is a made-up keyboard and desk-accessory store. It is the example project for [UI Verify](https://uiverify.ai): a small React storefront whose components and pages are covered by Storybook stories, and every pull request is checked visually.

## How it is tested

Each pull request builds the Storybook and uploads it to UI Verify. UI Verify renders every story at a desktop and a phone width, compares it with the approved baseline from `main`, and reviews each change with AI, so a reviewer sees which changes look intended and which look like regressions before merging. The workflow is in [`.github/workflows/uiverify.yml`](.github/workflows/uiverify.yml).

## Run it locally

```sh
npm ci
npm run dev              # the store
npm run storybook        # the stories
npm run build-storybook  # what CI uploads
```

Product photos are generated once with `scripts/generate-images.mjs` and committed under `src/assets/products/`.
