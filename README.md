This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started
### Install project dependencies
Install all packages assuming you have the `npm` cli which is available after installing [Nodejs](https://nodejs.org/en/ "Download NodeJS").
```bash
> npm install 
#or 
> yarn
```

### Activate Git Hooks
Activate `husky` by running:
```bash
> npx husky install
# or
> yarn run husky install
``` 
You can learn more about `husky` [here](https://npmjs.com/package/husky "Husky")

## Starting the Development Server
To start the development server, run the development server:

```bash
> npm run dev
# or
> yarn dev
```

If you wish to run in a different port locally, run:
```bash
> PORT=4800 npm run dev
# or
> npm run dev --port=4800
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

## Learn More
To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!
