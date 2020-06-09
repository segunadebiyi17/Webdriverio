import {Given, When, And, Then} from 'cucumber'

Given(/^i have Navigated to computer database website$/, function(){
    browser.url("https://computer-database.herokuapp.com/computers");
});

When(/^I filter to 'MacBook Pro' button$/, function(){
    browser.element("searchbox").setValue('MacBook Pro i7');
    browser.element("searchsubmit").click();
}),

And(/^i click 'delete this computer'$/, function(){
    browser.element("/html/body/section/form[2]/input").click();
    }),

Then(/^Done! Computer<MacBook Pro i7> has been updated" will appear on the database homepage$/, function(){
    browser.takeHeapSnapshot();
    var strUrl = browser.getUrl();
    console.log("URL is: " +strUrl);
});