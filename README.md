# VR-FlowGen

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
今回は芥川龍之介著「蜘蛛の糸」を題材にシステムを作成しています。

test-imageフォルダに格納されている360度画像は skyboxAI by Blockade Labsを使用しています。(https://skybox.blockadelabs.com/ )

Soundのフォルダに格納されている小説の文章読み上げ音声は、動画制作会社VIDWEBのボイスゲートを利用しています。（https://vidweb.co.jp/ ）

APIを用いて小説の文章からskyboxAIを用いて360度画像を生成するシステムはこちらをご覧ください。()
