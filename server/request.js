const http = require('http');   

const options = {
    hostname: 'fakestoreapi.com',
    path: '/products/1',
    method: 'GET'
};
const apiReq = http.request(options, (apiRes) => {
    apiRes.on('data', (d) => {
        console.log(d.toString());
    });
});

apiReq.on('error', (error) => {
    console.error(error);
});

apiReq.end();