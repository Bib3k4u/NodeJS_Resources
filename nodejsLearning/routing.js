
app.get('/about', (req,res)=>{
    res.send("this is about page")
})

app.get('/contact', (req,res)=>{
    res.send("this is Contact page")
})

app.get('*', (req,res)=>{
    res.send("Page not found")
})


// middleware function
// app.use((req,res,next) =>{
//     console.log(`Time: ${new Date().toLocaleDateString()}`)
//     next();
// })