const fs = require('fs');
const http = require('http'); // Require - funkcja do ladowania modulow, (...) modul
const path = require('path');
const url = require('url');


/////////////////////////////////////
// FILES



// blokoujace, podejscie synchroniczne
// const textIn = fs.readFileSync('./starter/txt/input.txt','utf-8');
// console.log (textIn);

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
// fs.writeFileSync('./starter/txt/output.txt',textOut); // zapisujemy do pliku potem definiujemy co zapisujemy
// console.log('File written');



// nieblokujace, podejscie asynchroniczne

// fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
//     if(err) return console.log('ERROR!');
//     fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
//         console.log(data2);
//         fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
//              console.log(data3);
            
//              fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}` , 'utf-8', err => {
//                 console.log('Your file has ben written :D'); 
//              });
//         });
//     });
// });
// console.log('Will read file!');

/////////////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
    const pathName = req.url;

    if(pathName === '/' || pathName === '/overview'){
        res.end('This is the OVERVIEW');
    } else if (pathName === '/product'){
        res.end('This is the PRODUCT');
    }else{
        res.writeHead(404,{
            'Content-type': 'text/html'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () =>{
    console.log('Listening to request on port 8000');

});

