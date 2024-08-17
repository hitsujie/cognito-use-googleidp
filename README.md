This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# インストール手順

cognitoを使ってGoogleフェデレーションを使用したシステム

## 1. プロジェクトの作成

```bash
npx create-next-app chatsprit-static
cd chatsprit-static
```

## 2. 設定ファイル除外

ローカル環境で下記コマンドを実行すれば設定ファイルを除外できる

```bash
git update-index --assume-unchanged .\src\lib\amplifyConfig.ts
```
