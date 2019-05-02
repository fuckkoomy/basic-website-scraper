var cheerio = require('cheerio')
var request = require('request') 

//writestream 

//writeStream.write('title', price, stock \n'); 

request('http://books.toscrape.com/', (error, response, html) => { 
if(!error && response.statusCode == 200){ 
  //keep 
  const $ = cheerio.load(html); 
  

  
  
  
  console.log('prints all the titles of books') 
  $('h3 a').each((i, el) => { 
    const href = $(el).text() ; 
    const hrefText = $(el).attr('title'); 
    console.log(hrefText); 
  }); 
  console.log(''); 
  console.log('print all the values of the books'); 
  $('.price_color').each((i, el) => { 
    const thing = $(el).text() ; 
    const link = $(el).attr('title'); 
    console.log(thing); 
  }); 
  
    
  
