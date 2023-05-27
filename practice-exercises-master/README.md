## Practice

This practice comprises 2 exercises

### Context

The page header of the home page of AMC Entertainment website should be animated by applying animation effects.

At a specified interval, only one effect should be generated.

The subsequent effect should be generated once the previous effect has got applied.

The animation effects should not block the page load or any other user activity on the web page.

Hence the complete animation code has to run asynchronously.

### Problem Statements

#### Practice 1 - Animated Header – With Callback

The AMC Entertainment wants the heading on its website animated.

The animation effects should be generated at a specified interval

Write a JavaScript program to created an animated heading using Callbacks that generates animation effects asynchronously without blocking the page load

##### Task – 1: Define Function to Draw Box

- Define function `drawBox()`.
- The function should take a DOM element as parameter which serves as the container for drawing rectangle.
- The function should create div of width 100vw and height 100px.
- The div should be styled with a solid border of width 5px to generate box effect.
- Append the div to the container.
- Return the div element which would ten be used for subsequent animation effect.

##### Task 2 – Define Function to Change Color of Box Border

- Define function `changeBorderColor()`.
- The function should take the DOM element as parameter whose border color needs to be changed.
- Apply the style to the element to change the border color to “orange”
- Return the element so that it could be used to apply subsequent animation effect.

##### Task 3 – Define Function to Make Box Corners Rounded

- Define function `makeBorderRounded()`.
- The function should take the DOM element as parameter whose corners need to be rounded.
- Apply the style to the element to change the border radius to “15px” (or more if required).
- Return the element so that it could be used to apply subsequent animation effect.

##### Task 4 – Define Function to Fill the Box with a Color

- Define function `fillColor()`.
- The function should take the DOM element as parameter which should be filled with color.
- Apply the style to the element to change the background color to “cadet blue”.
- Return the element so that it could be used to apply subsequent animation effect.

##### Task 5 – Define Function to Display Heading in Box

- Define function `displayHeading()`.
- The function should take the DOM element as parameter which will contain the text entered.
- The element should contain the text “AMC Entertainment”.
- The color of the text should be “orange”.
- The text should be center aligned.

##### Task 6 - Call Functions to Animate After a Delay

- The above functions should be called one after the other each executing after a delay of specified duration.
- The function `drawBox()` should execute after 1 second.
- The function `changeBorderColor()` should execute 1.5 seconds after the `drawBox()` function has executed.
- The function `makeBorderRounded()` should execute 2 seconds after the `changeBorderColor()` function has executed.
- The function `fillColor()` should execute 2.5 seconds after the `makeBorderRounded()` function has executed.
- The function `displayHeading()` should execute 3 seconds after the `fillColor()` function has executed.
- Use `setTimeout()` method to set up the delays.

#### Practice 2 - Animated Header – With Promise

The AMC Entertainment wants the heading on its website animated.

The animation effects should be generated at a specified interval

Write a JavaScript program to created an animated heading using Promise that generates animation effects asynchronously without blocking the page load.

##### Tasks

- The first four tasks for this exercise are same as the tasks carried out in previous exercise.
- Task 1 - Define Function to Draw Box.
- Task 2 – Define Function to Change Color of Box Border.
- Task 3 – Define Function to Make Box Corners Rounded.
- Task 4 – Define Function to Fill the Box with a Color.
- Task 5 – Define Function to Display Heading in Box.

##### Task 6 - Define Function That Returns Promise

- Define function `promiseAnimation()` that returns promise.
- The function should take 3 parameters: interval, animate and element.
    - `interval` – This parameter is used as timeout (interval) parameter of the `setTimeout()` method.
    - `animate` – This parameter is the callback function parameter. It receives one of the functions defined to generate animation effect.
    - `element` – This parameter is the DOM element on which the animation effect needs to be applied. The callback `animate()` function should be called with this element as its parameter.
- The promise, in its executor function should call the `setTimeout()` function that times out at given interval.
- Upon timeout, the `animate()` callback function should be called with the `element` as its parameter.
- The promise should resolve with the `element` returned by the callback function.

##### Task 7 – Consume Promise

- Use Promise chaining to consume promise for applying animation effects.
- To begin, call the `promiseAnimation()` function with interval, drawBox and document.body as the parameters.
- The initial promise resolves in 1 second (*) and returns the element returned by `animate()` function called from within the promise.
- Then the `.then` handler is called with the element returned by `animate()` function, which in turn calls the `promiseAnimation()` to create a new promise, this time with a different interval value, `changeBorderColor` and `element` as its parameters.
- The next `then` gets the result of the previous one, calls `promiseAnimation()` with next animation effect function to be applied on the returned element and passes it to the next handler.
- The process should be repeated to apply the rest of the animation effects.

