## Next.js WordPress example (TypeScript)（Tailwind CSS）

## Getting Started

```bash
$ npx create-next-app YOUR_APP_NAME --example "https://github.com/romeoromen/headless-example-nextjs-typescript/tree/main"
$ cd YOUR_APP_NAME


$ vim next.config.js
const settings = {
    env: {
        WORDPRESS_URL: 'https://<<REPLAE_TO_YOUR_DOMAIN>>/wp-json'
    }
}
# or
$ vim .env.local
WORDPRESS_URL=https://<<REPLAE_TO_YOUR_DOMAIN>>/wp-json
$ vim next.config.js
const settings = {
    env: {
        WORDPRESS_URL: process.env.WORDPRESS_URL
    }
}

$ npm run dev
# or
$ yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

## In Development
ホットリロード有効化しつつ開発を行う。
```bash
$ npm run dev
```

## Build & Deployment

### Static Export （静的化テスト）


```bash
$ yarn export (or npm run export)
$ npx serve public
```

### Serverless hosting with AWS （AWSを利用したServerless Nextjs Pluginを利用する場合）

```bash
$ yarn deploy-aws
```
