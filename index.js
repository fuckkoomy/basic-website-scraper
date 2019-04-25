var cheerio = require('cheerio');
var request - require('request'); 



request('https://koomyuwu.github.io/koomy-github.io/', (error, response, html) => { 
 if(!error && response.StatusCode == 200){ 
  //keep 
  const $ = cheerio.load(html); 
  
  //gets site heading 
  
  const SiteHeading = $('.intro h1') 
  const SiteHeadText = SiteHeading.Text(); 
  console.log(siteHeadText); 
  
  
  
  //get navbar link
  
  
  $('a.nav-link').each(('i, el') => { 
   const item = $(el).text(); 
   console.log(item); 
  }); 
  
  
  //get navbar href 
  
  console.log('ALL THE HREF ATTRIBUTE'); 
  $('a.nav-link').each((i, el,) => { 
   const thing = $(el).text(); 
   const link = $(el).attr('href');  
   console.log(link); 
  }); 
  
  
  
 } 
 
 
});
   
   
                      
