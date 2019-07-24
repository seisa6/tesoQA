// conf.js
// Mantas Šeštokas
 exports.config = {  
 specs: ['tesonet.js'],
   capabilities: {
       browserName: 'chrome'  
   },
     onPrepare: function() {    
  
     browser.ignoreSynchronization = true;    
  
  }, 
}; 