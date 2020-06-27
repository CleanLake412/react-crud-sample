const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id': 1,
            'image': 'https://placeimg.com/64/64/1',
            'name': '山本太郎',
            'birthday': '961222',
            'gender': '男性',
            'job': '大学生'
        },
        {
            'id': 2,
            'image': 'https://placeimg.com/64/64/2',
            'name': '花島三郎',
            'birthday': '960508',
            'gender': '男性',
            'job': '開発者'
        },
        {
            'id': 3,
            'image': 'https://placeimg.com/64/64/3',
            'name': '久保田',
            'birthday': '961127',
            'gender': '男性',
            'job': 'デザイナー'
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
