const express = require('express');
const app = express();
const https = require('https');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser'); // JSONボディ用
const axios = require('axios'); // GPT API用

const options = {
    key: fs.readFileSync('ssl/key.pem'),
    cert: fs.readFileSync('ssl/cert.pem')
};

// HTTPSサーバーを作成
https.createServer(options, app).listen(3002, () =>
    console.log('HTTPS listening on 3002...')
);

// 静的ファイルのルーティング
app.use(express.static(
    path.join(__dirname, 'public')
));

// リクエストのJSONボディを解析するミドルウェア
app.use(bodyParser.json());

// GPT APIへのリクエスト処理
app.post('/gpt', async (req, res) => {
    const prompt = req.body.prompt; // クライアントからのプロンプト

    try {
        const apiKey = process.env.OPENAI_API_KEY; // 環境変数からAPIキーを取得
        if (!apiKey) {
            throw new Error('API key not found in environment variables');
        }

        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-4',
            messages: [{ role: 'user', content: prompt }],
        }, {
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json',
            },
        });

        res.json({ response: response.data.choices[0].message.content });
    } catch (error) {
        console.error('Error calling GPT API:', error.response ? error.response.data : error.message);
        res.status(500).json({ error: 'Failed to get response from GPT' });
    }
});
