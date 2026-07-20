const fs = require('fs');


// blokoujace, podejscie synchroniczne
const textIn = fs.readFileSync('./starter/txt/input.txt','utf-8');
console.log (textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;
fs.writeFileSync('./starter/txt/output.txt',textOut); // zapisujemy do pliku potem definiujemy co zapisujemy
console.log('File written');



// nieblokujace, podejscie asynchroniczne

fs.readFile('./starter/txt/start.txt', 'utf-8', (err, data1) => {
    if(err) return console.log('ERROR!');
    fs.readFile(`./starter/txt/${data1}.txt`, 'utf-8', (err, data2) => {
        console.log(data2);
        fs.readFile('./starter/txt/append.txt', 'utf-8', (err, data3) => {
             console.log(data3);
            
             fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}` , 'utf-8', err => {
                console.log('Your file has ben written :D'); 
             });
        });
    });
});
console.log('Will read file!');
