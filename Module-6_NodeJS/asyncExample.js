const fetchData = (callback) => {
    setTimeout(()=>{
        callback('Data retived Successfully');
    }, 2000)
};

console.log('Start fetching Data...');

fetchData((data)=>{
    console.log(data);
});

console.log('End of Script')