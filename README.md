# codeQuiz

Summary

The web application is a code quiz that allows the user to answer a set of multiple choice questions
with a countdown. If the user choose the correct answer, they get a score value. However, if they
chhose the wrong answer, a time penalty is added to the countdown. When the user finishes the quiz,
they are directed to a page where they insert their initials linked with the score that they have
achieved. Then the user clicks on a button that submits their data into localStorage where they can
call on that data at any point in the javaScript code.

Additional functions include copy to clipboard and reset where the user is able to select
the generated password and paste it into another document. The reset method enables the user
to set the application to it's default values in order to generate a new password but it is
not necessary as the user can simply click on the generate password button again.

The application uses 'addEventListener' so that when one of the buttons is clicked on, it will
initiate the associated function. The use of 'preventDefault' and 'stopPropagation' methods are
used to prevent the window from going to it's default settings when the function is run and
prevents the clicked event from affecting the parent elements in the application.

The purpose of this application is to demonstrate the use of functions and 'addEventListener' so
that events are able to be delegated to different elements in an html file. In addition, implementing
responsive behaviour of html files using media queries. This enables the developer to create applications
that can be viewed on multiple devices and screen sizes such as:
- iphone
- Tablet
- Laptop
- Desktop

The following methods, objects and API's (Application programming Interface) were used in this web
application to demonstrate how javaScript can be used to apply calculations and functions to elements
in an html file:
- Arrays 
- Functions
- IF Statements
- addEventListener
- preventDefault method
- stopPropagation method
- Local Storage

Getting Started

This documentation will assist you in viewing this project. To view the project either open
the url of the deployed application with the following address in any browser:

https://pozengineer.github.io/codeQuiz/

Download and clone the repository from GitHub using the following command:

git clone https://github.com/pozengineer/codeQuiz.git

The following files are used to create the application:
- index.html
- reset.css
- style01.css
- javaScript02.js
There are additional files that should be disregarded. They were used as the initial building
blocks for the application but want to keep them for future reference.

This application was built using:
- HTML: HyperText Markup Language that allows the developer to structure webpages
- CSS: Style Sheet Language that allows the developer to style an HTML document
- JavaScript: Programming Language that allows the developer to apply functions and methods to an HTML document 
- BootStrap: Library of HTML and CSS files and code https://getbootstrap.com/

![passwordGenerator tablet](assets/images/codeQuiz01.jpg)