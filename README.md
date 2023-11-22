# Nuxt.js Frontend Application
このアプリケーションは、Nuxt.jsを使ったシンプルなToDoリストアプリです。

## ローカルでの起動方法
### 前提条件
動作確認した環境は下記になります。
* Node.js v18.17.1
* npm 9.6.7
* Ubuntu

### インストール手順
1. リポジトリのクローン
```
git clone https://github.com/YuheiMuto/sample-todo-app.git
```

2. アプリケーションのディレクトリに移動
```
cd sample-todo-app
```

3. 依存関係のインストール
```
npm install
```

### アプリケーションの起動
1. 開発サーバーを起動
```
npm run dev
```

2. ブラウザで `http://localhost:3000` にアクセスして、アプリケーションが起動していることを確認します。

## ビルドとNginxへのデプロイ方法
### ステップ1: Nuxt.jsアプリケーションのビルド
1. プロジェクトをビルドします。
```
npm run build
npm run generate
```
これにより、dist/ ディレクトリに静的ファイルが生成されます。

### ステップ2: Nginxの設定
1. Nginxをインストールします。
* CentOSの場合
```
sudo yum install epel-release
sudo yum install nginx
```

* Ubuntuの場合
```
sudo apt update
sudo apt install nginx
```
2. `/var/www/html/`にdist/のファイルを配置する。
ドキュメントルートに静的資源を配置します。

3. Nginxを再起動します。
```
sudo systemctl restart nginx
```

4. ブラウザで `http://localhost` にアクセスし、アプリケーションが正しく表示されることを確認します。




