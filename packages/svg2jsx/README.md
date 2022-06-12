# @wetools/svg2jsx

Transform svg into valid jsx or tsx. Visit our [website](wetools.vercel.com).

> This package is inspired by `[@balajmarius/svg2jsx](https://www.npmjs.com/package/@balajmarius/svg2jsx)`.

# Install

Install `@wetools/svg2jsx` in your project.

```bash
npm install @wetools/svg2jsx
# or
yarn add @wetools/svg2jsx
# or
pnpm add @wetools/svg2jsx
```

# Usage

```ts
svg2jsx(svg, options);
```

## Props

- `svg: string` The svg string to be transformed.
- `options?: {}`
  - `type?: functional | class` The type of the result component.
  - `lang?: jsx | tsx` The language of the result component.
  - `singleQuote?: boolean` Either double or single quotes in the result compoent.

## Returns

`Promise<string>` Return the string of result component.

# License

The tailwind-layout-react is open sourced software licensed under [MIT license](https://github.com/logeast/tailwind-layout-react/blob/main/LICENSE).
