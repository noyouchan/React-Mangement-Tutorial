const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

// json으로 배열 데이터를 변환하여 클라이언트한테 보내줌
app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '노유찬',
            'birthday': '950406',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '김쾌남',
            'birthday': '951231',
            'gender': '남자',
            'job': '프로그래머'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '김성찬',
            'birthday': '951231',
            'gender': '남자',
            'job': '프로그래머'
        }
    ]);
});

// '가 아니라 `
app.listen(port, () => console.log(`Listening on port ${port}`));