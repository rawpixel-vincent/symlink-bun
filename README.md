# symlink-bun
test for bun with symlinks file importing node_modules

## Setup

```js
bun setup:bun
```

or

```js
bun setup:npm
```

## Run with node --preserve-symlinks

```js
bun dev:node:symlinks
```

`> OK`

## Run with node

```js
bun dev:node
```

`> Error: Cannot find module 'cross-fetch'`

## Run with bun

```js
bun dev:bun
```

`> OK`
