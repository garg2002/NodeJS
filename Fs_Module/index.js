// Code: Reading a file
const fs = require('fs');

//Asynchronous way of reading a file
console.log("Reading Start ");
fs.readFile('input.txt',  (err, data) => {
    if(err) 
    {
        console.log('Error->', err);
        return err;
    }
    console.log("Data->",data.toString()); //data is a buffer
    return data;

});
console.log("Reading End");

//Synchronous way of reading a file

console.log("Reading Start ");
const data = fs.readFileSync('input.txt');
console.log("Data->",data.toString()); //data is a buffer
console.log("Reading End");


//Read -> Open + Read + Close

fs.open('input.txt', 'r', (err, fd) => {
    if(err) 
    {
        console.log('Error->', err);
        return err;
    }
    console.log("File Descriptor->",fd);
    const buffer = Buffer.alloc(1024);
    fs.read(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
        if(err) 
        {
            console.log('Error->', err);
            return err;
        }
        console.log("Bytes->",bytes);
        console.log("Data->",buffer.slice(0, bytes).toString()); //data is a buffer
        fs.close(fd, (err) => {
            if(err) 
            {
                console.log('Error->', err);
                return err;
            }
            console.log("File Closed");
        });
    });
});

//Write -> Open + Write + Close

//1. Way to writing in a file

 fs.open('input.txt', 'w', (err, fd) => {
    if(err) 
    {
        console.log('Error->', err);
        return err;
    }
    console.log("File Descriptor->",fd);
    const buffer = Buffer.from("Hello World");
    fs.write(fd, buffer, 0, buffer.length, 0, (err, bytes) => {
        if(err) 
        {
            console.log('Error->', err);
            return err;
        }
        console.log("Bytes->",bytes);
        console.log("Data->",buffer.slice(0, bytes).toString()); //data is a buffer
        fs.close(fd, (err) => {
            if(err) 
            {
                console.log('Error->', err);
                return err;
            }
            console.log("File Closed");
        });
    });
 });



//2. Way to writing in a file

fs.open('input.txt', 'w', (err) => {
    if(err)
    {
        return console.log(err);
    }
    else{
        fs.writeFile('input.txt', 'Namaste Duniya', (err) => {
            if (err) {
                return console.log(err);
            }
            else{
                console.log("File Write Success");
            }
        });
    }
});



//Append -> Open + Append + Close
fs.open('input.txt', 'a', (err) => {
    if(err)
    {
        return console.log(err);
    }
    else{
        //1. Method
        fs.appendFile('input.txt', 'Hello world!', (err) => {
            if (err) {
                return console.log(err);
            }
            else{
                console.log("File Append Success");
            }
        });
        //2. Method
        fs.appendFileSync('input.txt', 'Hello world2!', 'utf8',(err)=>{
            if (err) {
                return console.log(err);
            }
            else{
                console.log("File Append Success");
            }
        })
    }
});

// Delete a file

fs.unlink('input.txt', (err) => {
    if (err) {
        return console.log(err);
    }
    else{
        console.log("File Deleted");
    }
});

