# Next App

This is a template for a Next.js app.

It uses the following tools/libraries:

* [Storybook](https://storybook.js.org/)
* [Cypress](https://cypress.io/)
* [Jest](https://jestjs.io/)
* [Commitlint](https://commitlint.js.org/)
* [Stylelint](https://stylelint.io/)
* [Eslint](https://eslint.org/)
* [Prettier](https://prettier.io/)

## Getting started

**Run the development server:**

```bash
npm run dev
```

**Run storybook:**

```shell
npm run storybook
```


## Atomic design

We use atomic design. You can read more about our decision in the
[documentation](./docs/ATOMIC_DESIGN.md).

## Behavior Driven Development

We use behavior tests. You can read more about our decision in the
[documentation](./docs/BEHAVIOR_DRIVEN_DEVELOPMENT.md).

## Test Driven Development

We jest to write unit tests. Please look at the Documentation for [Jest](https://jestjs.io/)
and [testing-library](https://testing-library.com/docs/react-testing-library/intro/).

## Commitlint

We use commitlint to ensure conventional commit messages. You can read more about our decision in
the [documentation](./docs/COMMITS.md).


## Commands

**Run the development server:**

```bash
npm run dev
```

**Build:**

```shell
npm run build
```

**Run storybook:**

```shell
npm run storybook
```

**Build storybook:**

```shell
npm run storybook:build
```

**Run e2e tests:**

```shell
npm run cypress # local without server
# npm run cypress:run # headless
# npm run test:e2e # with server
```

**Run unit tests:**

```shell
npm run jest
# npm run jest:watch # watch
# npm run test:unit # same as "npm run jest"
```

**Run all tests:**

```shell
npm run test
```

**Run stylelint**

```shell
npm run stylelint
```

**Run eslint**

```shell
npm run eslint
```

**Run all linters**

```shell
npm run lint
```

## Skipping linters

If you need to skip a linter you can add the `--no-verify` flag.

> Warning! We strongly advise against skipping linters.

```shell
# Skipping commitlint
git commit README.md -m "this is a dirty commit" --no-verify
# Skipping linters
git push --no-verify
```
