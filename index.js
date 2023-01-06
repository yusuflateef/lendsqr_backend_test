const express = require('express');
const app = express();
app.get('/',(req,res)=>{

    res.send('home')
});

app.get('/detail',(req,res)=>{
    res.send('happy');
})

app.listen(1200)