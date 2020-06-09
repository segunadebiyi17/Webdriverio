import {Given, When, And, Then} from 'cucumber'

Given(/^i have Navigated to computer database website$/, function(){
    browser.url("https://computer-database.herokuapp.com/computers");
});

When(/^I filter to 'MacBook Pro' button$/, function(){
    browser.element("searchbox").setValue('MacBook Pro');
    browser.element("searchsubmit").click();
}),

And(/^i update the field on the computer form with given data while i click 'create this computer'$/, function(){
    browser.element("name").setValue('MacBook Pro i7');
    browser.element("introduced").setValue('09 June 2019');
    browser.element("discontinued").setValue('09 June 2022');
    browser.element("/html/body/section/form/fieldset/div[4]/div/select/option[2]").click();
    browser.element("/html/body/section/form/div/input").click();
}),

Then(/^Done! Computer<Name of computer> has been updated" will appear on the database homepage$/, function(){
    browser.takeHeapSnapshot();
    var strUrl = browser.getUrl();
    console.log("URL is: " +strUrl);
});