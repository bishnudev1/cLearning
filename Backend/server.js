const app = require('./app');


app.get('/',(req,res) => {
    res.send('Hello,World from Server Side')
});

app.listen(5000,() => {
    console.log(`Server has started at 5000`);
});