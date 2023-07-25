const path = require('path');

    console.log(path);
    console.log(path.sep);
    console.log(path.basename(__filename));
    console.log(process.env.PATH);
    console.log(path.parse(__filename));
    console.log(path.delimiter);
    console.log(path.extname(__filename));
    console.log(path.toNamespacedPath(__filename));
    console.log(path.join(__dirname, 'test', 'hello.html'));
    console.log(path.resolve(__dirname, 'test', 'hello.html'));
    const filePAth = 'C:\\Users\\Admin\\Desktop\\NodeJS\\path\\index.js';
    console.log(path.dirname(filePAth));
    console.log(path.relative(__dirname, filePAth));
    console.log(path.normalize('C:\\Users\\Admin\\Desktop\\NodeJS\\path\\index.js'));

const currentPAth =__filename;
console.log(currentPAth);
