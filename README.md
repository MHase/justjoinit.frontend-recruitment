# Just Join IT recruitment task

## Develop Locally

```bash
yarn dev
```

## Build for production

```bash
yarn build
```

## Docker (optional)

If you prefer to use Docker for local development and production, follow these commands:

- Docker container for local development:

```bash
yarn docker:dev
```

- Docker container for production:

```bash
yarn docker:prod
```

## Build warning

You can notice

```bash
ESLint: Invalid Options: - Unknown options: useEslintrc, extensions - 'extensions' has been removed.
```

in the console during build

This issue was already addressed by other users few days ago

- [Reddit](https://www.reddit.com/r/nextjs/comments/1bx3odn/i_encountered_this_linting_error_while_building/)
- [Vercel GH issue #1](https://github.com/vercel/next.js/issues/64114)
- [Vercel GH issue #2](https://github.com/vercel/next.js/issues/64136)

Provided solution was downgrading to eslint e.g. v8.57.0
