var cheerio = require('cheerio')
var request = require('request') 

//writestream 

//writeStream.write('title', price, stock \n'); 

request('http://books.toscrape.com/', (error, response, html) => { 
if(!error && response.statusCode == 200){ 
  //keep 
  const $ = cheerio.load(html); 
  
