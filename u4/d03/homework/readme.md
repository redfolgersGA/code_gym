# React TODO app

![](https://media.giphy.com/media/GuDI9sLsiRNqU/giphy.gif)

Don't leave Neville Longbottom, your newest client, down! He needs your help to create an To-Do List app, so that he can keep track of tasks that need doing.

Tonight you are going to be building another React application. You need to implement a TODO app, which allows the user to create tasks and see a list of the created tasks. Aside from Hello World, the TODO app is one of the most basic ways to begin learning a new framework.

## Setup

There are no files provided, because you will be building out the
 app with `create-react-app`. 
Create a `components` folder inside of `src` to keep all of your components in. 

## Completion

Complete Parts 1 - 5

## Assignment

#### Part 1 - React Setup

First build a simple React app with a 2 components. The first should be an `App` component, and the other should be a `Title` component (an h1 with the title "Todos"). Add some basic styling to your components. 

#### Part 2 - Layout

It is a good idea to first focus on building a static version of your
app. Do not worry about holding state or adding interactivity, but
instead focus on breaking your application into components and
implementing only the `render` method for those components.

Hardcode an array of tasks and focus on rendering them on the page with
React. Each task should have some sort of check button, and by default say NOT DONE.

#### Part 3 - Interactivity

Now that you have the components built, implement interactivity.

- Allow the user to create a task by pressing the button in the
`CreateTask` component.
- Allow the user to mark a task as done (possibly through checking a checkbox).
- Complete tasks should say DONE instead of NOT DONE.

**Things to consider:**
- Think about which component will have what state at any time
- Think about what state you will need to keep in order to successfully implement the interactions
- Think about what an HTML checkbox looks like, and what data it returns if checked/unchecked

#### Part 4 - Destroy

* Implement delete buttons for each task!
* Give the elements a 'className' attribute for any classes you want to give them for styling (since this is JavaScript, class is a reserved word). E.G:
  <p className="done">This task is complete!</p>
  <p className="not-done">This task needs doing...</p>
* Edit your task-completion function to change classNames appropriately!

#### Part 5 - Continue working on your React checklist. 
