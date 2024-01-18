const axios = require('axios');

axios.get('https://catfact.ninja/fact').then(res => console.log(res)
.catch(error => console.log(error)))