const express= require('express');
const app=express();
const compression = require('compression');

app.use(compression({
    level:6,  //9 for best compression and -1 for default compression 0 for no compression
    threshold: 0, // if less than 100kb should not be compressed value= 100*1000
    filter:(req,res)=>{
        if(req.headers['x-no-compression'])
        {
            return false;
        }
        return compression.filter(req,res);
    }
 }));

app.get('/', (req,res)=>{
    const animal = 'hippopotomus';
    const repeactedData=animal.repeat(100);
    res.json({repeactedData})
});

app.listen(3000,function(){
    console.log("Example Running on http://localhost:3000/");
})