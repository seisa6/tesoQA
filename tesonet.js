// tesonet.js
// Mantas Šeštokas
describe('Task for QA Automation part', function(){  
	it('Navigate to web, click career and count number of categories, print the answer', function(){  

// Navigating to website   
browser.get('http://www.tesonet.com/');   

// Clicking "Career"   
element(by.id('menu-item-19')).click();    

// Finding categories by className, counting them and printing the answer.
// Category "Sales" was not included, because I have treated it as blank, since it has no data.
element.all(by.className('px-5')).count().then(function(count) {
  console.log(count);
});
// browser.sleep(3000); 
 }); 
}); 