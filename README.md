<center>
  <img src=".github/assets/hero-illustration.svg" alt="A developer walking and a screen with the text NextJS" />
</center>

# Next.js Boilerplate

---

This is a [Next.js](https://nextjs.org/) boilerplate based on the course [React Avançado](https://reactavancado.com.br), with some flavors like Tailwind, Storybook, Vitest, Cypress and Testing-Library.

## What is inside?

- [Next.js](https://nextjs.org/)
- [ReactJS](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind](https://tailwindcss.com/)
- [Storybook](https://storybook.js.org/)
- [Vitest](https://vitest.dev/)
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Cypress](https://www.cypress.io/)
- [Eslint](https://eslint.org/)
- [Prettier](https://prettier.io/)
- [Husky](https://github.com/typicode/husky)
- [Lint-Staged](https://github.com/okonet/lint-staged)
- [Plop](https://plopjs.com/)

## Getting Started

You can use this as a boilerplate:

```
npx create-next-app --example https://github.com/adeonir/boilerplate-nextjs
```

Then, run the development server:

```
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font, but you can choose any font from Google Fonts.

If you like to try the production build, run:

```
pnpm build
```

And then:

```
pnpm start
```

## Commands

- `dev`: runs your application in development mode
- `build`: creates the production build
- `start`: starts a simple server with the build production code
- `lint`: runs the linter in all components and pages
- `test:unit`: runs vitest once
- `watch:unit`: runs vitest in watch mode
- `coverage`: runs vitest creating a coverage report
- `coverage:preview`: starts a server with the coverage report files
- `test:e2e`: runs cypress once
- `watch:e2e`: runs cypress in watch mode
- `test:ci`: runs cypress within the CI
- `generate`: runs plop to generate component files
- `storybook`: runs storybook on `localhost:6006`
- `storybook:build`: builds the storybook
- `storybook:preview`: starts a server with the storybook static files

---

Made with ♥️ by Adeonir Kohl
