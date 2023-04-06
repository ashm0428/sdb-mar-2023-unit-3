### Learning

We will practice using String methods, Array methods, and Array iteration methods to write a function. We will also reference our old code from our `capitalize` lab.

Topics

- String method `.split()`
- Array method `.join()`
- Iteration method `.map()`
- Arrays
- Strings

## Procedure

- Create a function that will capitalize the first letter of the word. You may have done a lab in this earlier. This function could be used or refactored to an inline arrow function when you are using your .map()

### Create the `titleize` function

- [ ] Declare a function named `titleize` that will take a string as its argument.
- [ ] Within the `titleize` code block, assign the returned value from calling `.split()` on our string to a variable. You should split the string on spaces.
- [ ] Within the `titleize` code block, call the `.map()` method on our new array we created from `.split()` and use the `capitalize` function as our callback function. Assign the result to a variable.
- [ ] Within the `titleize` code block, call the `.join()` method on our new array we created from `.map()`. You should join the array on spaces.

### Call the `titleize` function

- [ ] Call the function several times passing in different multi-word strings with different styles of capitalization. Print the results of those functions, and run the program.

### Going Further

- Try to chain methods to make your code more concise but still readable.
- What if you only wanted to capitalize the first word?
- How could you write this function to allow a user to enter their own phrase they want to "titleize"?
