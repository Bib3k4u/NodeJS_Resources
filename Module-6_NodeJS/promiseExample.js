const fetchData = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve('Data retived Successfully')
        }, 2000)
    });
};

console.log('Start fetching Data...');

fetchData().then((data)=>{
    console.log(data)
})
.catch((error)=>console.log(error));

console.log("End of the script");