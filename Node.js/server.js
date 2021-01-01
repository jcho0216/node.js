const express = require('express');
const app = express();
const path = require("path");

app.listen(8000, function(){
    console.log('listening on 8000');
});

app.get('/pet', function(요청, 응답){
    응답.send('펫용품 쇼핑');
});

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/', function(요청, 응답){
    응답.sendFile(__dirname + '/ToDoList.html');
});
