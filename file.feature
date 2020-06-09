feature: Adding, editing and deleting a computer

    Background:
        Given i have Navigated to computer database website

    Scenario:  The application provides a means to "Add a new Computer" to its database
        When I click on 'add new computer' button 
        And i populate the field on the computer form with given data while i click 'create this computer' button
        Then a massage "Done! Computer<Name of computer> has been created" will appear in the database homepage

    Scenario: The application provides a means to "Edit an existing Computer" in its database
        When I click an existing computer from the database 
        And i update the fields with given data while i click 'save this computer' button
        Then a massage "Done! Computer<Name of computer> has been updated" will appear in the database homepage

    Scenario: The application provides a means to "Delete a Computer" from its database
        When I click an existing computer from the database 
        And click 'Delete this computer' button
        Then a massage "Done! Computer<Name of computer> has been updated" will appear in the database homepage