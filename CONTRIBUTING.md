# IDE（開発環境）

VSCode推奨

```bash
# VSCode拡張機能
code --install-extension csstools.postcss
code --install-extension esbenp.prettier-vscode
code --install-extension dbaeumer.vscode-eslint
```

# コミット

```bash
# 例: 機能に関するコミット
git commit -m 'feat(機能名): 変更内容'
```

コミット時には[commitlint](https://commitlint.js.org/)によるコミットメッセージのチェック・[husky](https://github.com/typicode/husky)によるコード整形・テストの自動実行を行います。  
使用できるコミットメッセージのフォーマットは[onventional-changelog/commitlint](https://github.com/conventional-changelog/commitlint)の`README.md`を参照してください。

# テスト

[Jest](https://jestjs.io/ja)を使用したテストを実行する。
※ テストはコミット時に自動で実行されます。

```bash
yarn test
```

# ディレクトリ構成（フォルダ構成）

ドメイン駆動設計・レイヤードアーキテクチャを採用しています。

- `domain/model/` ドメイン層（ビジネスルール・仕様）
  - `[モジュール名]/` 機能の実装
  - `ApiClient/` [API](https://github.com/tingtt/prc_hub_back)のクライアントコード（[apenapi2aspida](https://github.com/aspida/openapi2aspida)で自動生成）
- `application/` ユースケース層（ドメイン層を扱い、プレゼンテーション層への仲介を行う。）
- `src/` プレゼンテーション層（ユースケース層を扱い、UIを形成する）
  - `atoms/` - 原子（AtomicDesign - Lv.1）
  - `molecules/` - 分子（AtomicDesign - Lv.2）
  - `organisms/` - 生体（AtomicDesign - Lv.3）
  - `templates/` - テンプレート（AtomicDesign - Lv.4）
  - `pages/` - ページ（AtomicDesign - Lv.5）

# API

```bash
# クライアントコードの自動生成
make openapi2aspida
```

[バックエンドのリポジトリ](https://github.com/tingtt/prc_hub_back)から取得したOpenAPI仕様書を元に[apenapi2aspida](https://github.com/aspida/openapi2aspida)でクライアントコードを自動生成します。