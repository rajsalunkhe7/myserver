const express = require('express');
const mysql = require('mysql');



const app = express();

function connect() {
    const connection = mysql.createConnection({
        host: '172.17.0.1 ',
        user: 'root',
        password: 'root',
        database: 'user',
        port:9090
    });

    connection.connect();

    return connection;
}


app.get('/user',(request,response)=>{

    const connection = connect();
    const statement ='select *from user';
    connection.query(statement,(error,product)=>{
        connection.end;
        console.log(product);
        // console.log(error);
        response.send(product);
    });
});


app.post('/user',(request,response)=>{

    const connection = connect();
    const statement ='select *from user';
    connection.query(statement,(error,product)=>{
        console.log(product);
        console.log(error);
        connection.end;
        response.send(product);
    });
});

app.post('/user/post',(request,response)=>{

    const data = request.body;
     console.log(`${data.Address}`);
    const connection = connect();
    const statement = `insert into user (id,Name,Address,Phone) values(${data.id},'${data.Name}','${data.Address}','${data.Phone}')`;
    connection.query(statement,(error,result)=>{
        connection.end;
        console.log(result);
        console.log(error);
        response.send(result);
    })
});



app.listen(3000,'0.0.0.0',()=>{console.log('server starte on port 3000')})