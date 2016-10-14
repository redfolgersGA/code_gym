![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png)

# Hit the Ground Running with HTML and CSS

**Welcome to your first morning exercise!**

Morning exercises are from 9:00-10:00am. Today you will work on the assignment until 9:45. We will use the rest of the time to go over questions.

## Objectives
- Use HTML to construct a simple web page
- Use CSS to style our HTML elements
- Begin to use documentation

## Setup
This morning you will be creating a simple HTML/CSS web page. To get started, follow the set up instructions below. You will want to use Sublime Text to edit the files and Chrome to view the web page in the browser. Refreshing the page in Chrome will show changes made to the HTML and CSS files.

1. Create new index.html and style.css files

2. Link your HTML and CSS files in the head of index.html

## Assignment
You will be building a simple web page using HTML and CSS. We will do our styling in a the CSS file and use ids and classes to select our HTML elements.

1. In the body of your html file create a div with the id "container".

2. In your CSS file set the styling of the container div to:
  - give the div a white background color
  - make the div take up the full width and height of the screen
  - give it a solid red, 3px border

3. Now add a header text (h1 element) with the text "WDI X-Files"

4. Add the class "title" to the h1 and use CSS to give it the font "helvetica", a red font color, and center it in the container div.

5. Under the h1 and still inside the container div add a paragraph tag with the class "content" and your name as the text. Add the following styles:
  - font-family: geneva
  - color: red

6. Next create an image tag with the src pointing to an image from the X-Files and give it the class name "image". Style the image so that the maximum width is 200px.

7. Last, style the p and img elements so that they are displayed side by side in the browser.

## Bonus
Type out your answers in a new file called "answers.md"
1. What is the difference between a CSS class and id?

2. Which has a larger font size: h2 or h4?

3. How would you make the div border appear dashed instead of solid?

4. How would you comment out a line of CSS? What about HTML?

5. What does the CSS selector * do?

6. Explain the differences between inline and block elements.

7. What is the difference between article and section elements? How are they different from div elements?

8. Explain the CSS property 'clear' and why it is useful when using the 'float' property.

9. What do HTML and CSS stand for?

## Tips
1. Google is your friend
2. Work with each other
3. Using online resources and documentation is an important part of learning to program. Click [here](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) for a link to MDN, a well respected source for documentation.
4. Use your resources first, but please ask for help if you are truly stuck.
5. If you are having trouble setting up the HTML or CSS files, check out the following examples.

In index.html:

    <!DOCTYPE html>
    <html>
    <head>
      <title>Simple Web Page</title>
      <link rel="stylesheet" type="text/css" href="style.css" />
    </head>
    <body>

      <div id="container">
        <p class="content">Jared</p>
        <img class="image" src="some_url" />
      </div>

    </body>
    </html>
In style.css:
    #container {
      border: 1px solid black;
    }

    .title {
      font-family: halvetica;
    }

## Suggested Resources
- [HTML Documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Element)
- [CSS Documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference)
- [Stack Overflow](http://stackoverflow.com/)
- Prework
- Google
