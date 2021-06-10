const http = require('http');
const fs = require('fs');
const axios = require('axios');

http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'image/jpg'});

    const image = 'http://wallpaperaccess.com/full/21593.jpg';

    axios.get(image, { responseType: 'stream' })
        .then(img => {
            img.data.pipe(res);
        });

    res.end;
}).listen(3232);

