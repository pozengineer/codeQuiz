# codeQuiz

Summary

The web application is a code quiz that allows the user to answer a set of multiple choice questions
with a countdown. If the user selects the correct answer, they get a score value increment. However,
if they select the wrong answer, a time penalty is added to the countdown. When the user finishes the
quiz, they are directed to a window where they insert their initials. The user clicks on a button that
submits their initials alond with the final score that they have achieved into localStorage where they
can view the data at any point in the application through the highscores tab which will list the
highscores array.

The application uses 'addEventListener' so that when one of the buttons is clicked on, it will initiate
the associated function. The use of 'preventDefault' and 'stopPropagation' methods are used to prevent
the window from going to it's default settings when the function is run and prevents the clicked event
from affecting the parent elements in the application. Even though the application illustrates no noticable
bugs, there are a few things that were not rectified due to time restrictions. For example, when the countdown
reaches 0, the user should be alerted that time has run out and sent straight to the userInput window. With
additional time to work on the code, this issue could be fixed. 

The purpose of this application is to demonstrate the use of functions and 'addEventListener' so that events
are able to be delegated to different elements in an html file. This application demonstrates how javaScript
can be utilised to create and append elements to the HTML document. This allows manipulation of element
attributes during certain times when the application is being used. In addition, implementing responsive
behaviour of html files using media queries. This enables the developer to create applications that can be
viewed on multiple devices and screen sizes such as:
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
- Create Elements
- Set Attributes
- AppendChild
- Countdown timer

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
-   HTML: HyperText Markup Language that allows the developer to structure webpages
-   CSS: Style Sheet Language that allows the developer to style an HTML document
-   JavaScript: Programming Language that allows the developer to apply functions and methods to an HTML document 
-   BootStrap: Library of HTML and CSS files and code https://getbootstrap.com/
-   jQuery: JavaScript library that enables HTML document traversal and manipulation, event handling, animation,
    and Ajax much simpler with an easy-to-use API

![passwordGenerator tablet](assets/images/codeQuiz01.jpg)