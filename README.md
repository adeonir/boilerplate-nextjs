<center>
  <img src=".github/assets/hero-illustration.svg" alt="A developer walking and a screen with the text NextJS" />
</center>

# NextJS Boilerplate

---

This is a [Next.js](https://nextjs.org/) boilerplate based on the course [React Avançado](https://reactavancado.com.br), with some personal flavors like Vitest and Storybook with Vite builder.

## What is inside?

- [NextJS](https://nextjs.org/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Vitest](https://vitest.dev/)
- [Storybook](https://storybook.js.org/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/)

## Getting Started

You can use this as a boilerplate:

```
npx degit https://github.com/adeonir/nextjs-boilerplate my-project
```

Then, run the development server:

```
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/pages/index.tsx`. The page auto-updates as you edit and save the file.

If you like to try the production build, run:

```
yarn build
```

And then:

```
yarn start
```

## Commands

- `dev`: runs your application on `localhost:3000`
- `build`: creates the production build
- `export`: exports to static files to `out` folder, and can be run standalone
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `format`: runs prettier to format all components and pages
- `test`: runs vitest in watch mode
- `test:coverage`: runs vitest with coverage table
- `test:ci`: runs vitest once on CI
- `generate`: runs plop to generate component files
- `storybook`: runs storybook on `localhost:6006`
- `storybook:build`: create the production build of storybook

---

Made with ♥️ by Adeonir Kohl
