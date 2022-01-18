Feature: Navigation

	As a user,
	I want a navigation,
	so that I can navigate the app.

	Scenario: The user wants to navigate to the about page

		Given the user is on the "root" page
		When the user clicks on "About" in the navigation
		Then the "about" page is visible

	Scenario: The user wants to navigate to the root page

		Given the user is on the "about" page
		When the user clicks on "Home" in the navigation
		Then the "root" page is visible
