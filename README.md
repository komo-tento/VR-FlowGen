# VR-FlowGen


https://github.com/user-attachments/assets/af6088ba-6c58-481a-81dd-8a5c637b09ea


ファイル構造は下記のようになっています。

```bash
VR-FlowGen/
    ├── index.js
    ├── VR-flowgen/
        ├── sound/
              ├── (読み上げ音声ファイル)               
        ├── test-image/
              ├── (360度画像)
        ├── text/
              ├── (小説の文章のテキストファイル)
        ├── index.html

```

また、テキストや画像、音声ファイルはVR空間に展開したい作品に応じて適宜変更してください。

今回は芥川龍之介著「蜘蛛の糸」を題材にシステムを作成しています。

test-imageフォルダに格納されている360度画像は skyboxAI by Blockade Labsを使用しています。(https://skybox.blockadelabs.com/ )

Soundのフォルダに格納されている小説の文章読み上げ音声は、動画制作会社VIDWEBのボイスゲートを利用しています。（https://vidweb.co.jp/ ）

APIを用いて小説の文章からskyboxAIを用いて360度画像を生成するシステムはこちらをご覧ください。(https://github.com/komo-tento/Novel-content-visualisation )

実際にコードを回す前に以下のことをするとローカルで回るはずです。（システムで使用している画像などの都合上多少重くなるため私はAWSで実装しているため違ったら申し訳ないです）
```
npm install で必要なパッケージをインストール
.env に OPENAI_API_KEY を保存
openssl で ssl/key.pem と ssl/cert.pem を作成
```

実際にコードを動かすには以下のコマンドを入力し、https://localhost:3002/　のリンク先に入ればシステムは動くはずです。
```
$ node index.js
```

具体的なシステムの使用方法は最初に添付されている動画を参考にしてください。

画面下の[Next]が文章と読み上げ音声を先に進めるボタンで、[Question(GPT4)]が音声認識とLLMを用いた質疑応答システムです。

質疑応答システムでは、ボタンを押すと音声認識が作動するためそのまま質問をマイクで伝えてください。

しばらくするとLLMの回答結果がVR空間に表示されます。

[Text hidden]のボタンではテキストを表示しているパネルが隠れる仕様になっています。
