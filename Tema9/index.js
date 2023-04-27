const express = require('express')
const fs = require('fs');
const path = require('path');
const { uuid } = require('uuidv4');
const app = express();

const formidableMiddleware = require('./middlewares/formidableMiddleware');

app.set('view engine', 'ejs');
app.use(express.static('public'));

function getPostsFilePath() {
    return path.join(__dirname, 'posts.json');
}

function getPosts() {
    return new Promise((resolve, reject) => {
        const filePath = getPostsFilePath();
        fs.readFile(filePath, { encoding: 'utf8' }, (err, data) => {
            if(err) {
                resolve([]);
            }
            try {
                resolve(JSON.parse(data));
            } catch(err) {
                resolve([]);
            }
        })
    });
}

app.get('/', (req, res) => {
    getPosts().then(posts => {
        res.render('pages/index', { posts });
    })
});

app.get('/add', (req, res) => {
  res.render('pages/add');
});

app.post('/add', formidableMiddleware(), async (req, res) => {
    const posts = await getPosts();
    const file = req.files['picture'];
    console.log(file)
    const fileName = uuid() + '.' + file.originalFilename.split('.').at(-1);
    const picturePath = path.join(__dirname, 'public', 'images', fileName);
    console.log(picturePath);
    const newPost = {
        title: req.body.title,
        description: req.body.description,
        picture: "/images/" + fileName, 
    };
    posts.push(newPost);

    const imageData = fs.readFileSync(file.filepath);
    fs.writeFileSync(picturePath, imageData);

    fs.writeFile(getPostsFilePath(), JSON.stringify(posts), (err) => {
        res.redirect('/');
    });

});



app.listen(3000);