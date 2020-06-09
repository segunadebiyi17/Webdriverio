import {Given, When, And, Then} from 'cucumber'

Given(/^i have Navigated to computer database website$/, function(){
    browser.url("https://computer-database.herokuapp.com/computers");
});

When(/^I click on 'add new computer' button$/, function(){
    browser.element("add").click();
}),

And(/^i populate the field on the computer form with given data while i click 'create this computer'$/, function(){
    browser.element("name").setValue('MacBook Pro');
    browser.element("introduced").setValue('09 June 2020');
    browser.element("discontinued").setValue('09 June 2020');
    browser.element("/html/body/section/form/fieldset/div[4]/div/select/option[2]").click();
    browser.element("/html/body/section/form/div/input").click();
}),

Then(/^Done! Computer<Name of computer> has been created" will appear on the database homepage$/, function(){
    browser.takeHeapSnapshot();
    var strUrl = browser.getUrl();
    console.log("URL is: " +strUrl);
});

