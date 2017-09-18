I've been lucky enough to be using JavaScript with a transpiler for a few years now and for us web developers, it really has opened a whole new world for us.  Instead of waiting for browsers to support the latest features we are able to write the JavaScript of tomorrow and have it converted into a format that today's browsers will understand.

Here are 5 features that I really think can make a big difference to the readability and maintainability of a code base.

## 1. Block scope variables
It might not seem so at first but being able to write
`let id = 1;` or `const customerName = 'Barry';` can make a huge difference to the readability of a code base.  Whist the 'const' keyword does not prevent mutation of object properties, the original variable cannot be redeclared or assigned in that block.  I find myself using it a-lot to simply let myself or another developer know that the variable will not be changed again in that scope (at least intentionally!).  Lets face it when code gets complex one less variable that you have to track in your head is always nice!

When looking at source code of libraries (lets face it not every cool npm package has great documentation so sometimes its the only way of working our what something does or is doing to you!) the fact that `let` and `const` are being used greatly improves readability of the code. Code written with the use of block scoped variables means that we no longer need to declare our variables at the top of every closure (ok not everyone did this but it was fairly common) to explicitly take into account variable hoisting and function level scope.  Code written in this way was theoretically safe but often required one to become a human compiler in order to understand the code you were reading.

@[Try for yourself]({ "stubs": ["blockScope.js","blockScope.test.js"], "command": "node_modules/mocha/bin/mocha --compilers js:babel-core/register blockScope.test.js" })

## 2. Template Strings
This is one of the most common sense additions to JavaScript.  When querying a backend api it was always annoying having to do something like:
```javascript
    var url = '/api/customers/' + customerId + '/orders/'+orderId;
```
instead we can do something like:

```javascript
const url = `/api/customers/${customerId}/orders/${orderId}`; 
```
This massively simplifies one of the most boilerplate coding tasks for web developers and makes strings much easier to read and maintain.

As an added bonus frameworks such as Angular(2+) allow you to declare templates and styles in the same file as their related component.  As template strings respect line breaks, i.e you can write:
```javascript
    `<div>
         <h1>Hello World!</h1>
     </div>`
```
Obviously for full scale application you may wish to externalize these files depending on your tastes but this really can be great for prototyping or trying things out.

## 3. Destructuring

The ability to destructure properties of an object or array helps us write more expressive code with less errors.  For example:
```javascript
    var getFullName = function(person) {        
        var firstName = person.firstName;
        var lastName = person.lastName;        
        return firstName + ' ' + lastName;
    };
```
can become:
```javascript
const getFullName = ({firstName, lastName}) => `${firstName} ${lastName}`;
```

Something like:
```javascript
let person = {name: 'Andrew', age: 5, gender: 'male'};
```
Can later be used as:    
```javascript    
const { name, age, gender } = person;
```
This can prove really useful writing Jsx markup in React where you might want to reference the property directly in your markup rather than use dot notation or if you want to be really specific about what properties of an object your code will use in the following lines of code. (obviously this is not React specific).

@[Try writing a function that uses destructuring and template strings to build a string that passes the test.]({ "stubs": ["destructure.js","destructure.test.js"], "command": "node_modules/mocha/bin/mocha --compilers js:babel-core/register destructure.test.js" })

## 4. Spread operator
The spread operator opens up a whole new world when it comes to dealing with objects or arrays and can actually change the way we deal with our data.

If we have and array and wish to add a value to it in older versions of JavaScript we might do something like:
```javascript
    var arrayToExtend = [1, 2, 3];

    arrayToExtend.push(4);

    console.log(arrayToExtend);
    //results in [1, 2, 3, 4];
```
Now we can do:
```javascript
    const updatedArray = [...arrayToExtend, 4];
```
Whilst we may not want to do this in every scenario we may there are many times that this approach is desirable.  Firstly the code is pretty terse which is always a good thing, secondly using the spread operator to assign the contents of the original array to a new array with the value to be added placed explicitly on the end of the new array gives us a new reference.  Many frameworks use this approach (we are effectively updating our data in an immutable fashion) to optimize performance by only executing code that is dependant on data when a new reference is detected, or to produce more deterministic results.  Many templating engines and state management libraries use this approach.  Whilst we are creating a new array here the performance is still pretty fast as the references of the elements of the original array are still the same.  We are not doing a deep clone of the original array and all of its data.

@[Try using the spread operator to add an element to the start of the array.]({ "stubs": ["spreadExample.test.js"], "command": "node_modules/mocha/bin/mocha --compilers js:babel-core/register spreadExample.test.js" })

The spread operator can also be used with objects to extend an original object whilst creating a new reference:

@[The spread operator can also be used with objects to extend an original object whilst creating a new reference:]({ "stubs": ["objectSpread.js"], "command": "node_modules/babel-cli/bin/babel-node.js objectSpread.js" })

As we haven't mutated our original baseEmployee variable we can us this as a template for our data.  The spread operator with objects is also a great way to update / combine data.
## 5. Iterables and generators
From ES6 onwards any object that possess the property symbol.iterator is able to be traversed with the new for of loop.

This is because the property symbol.iterator is the implementation of an iterator which provides the logic for enumerating the parent object.  Generator functions allow us to specify custom logic for yielding values which really opens up interesting possibilities for transforming and processing data.

Another interesting application of generators is how they can be used to enable asynchronous processing that looks similar to synchronous code.  By yielding a Promise and calling the the next function of the generator (or throw on error) when the Promise resolves we have the foundation of async and await in Javascript.

@[Learn by doing!  Try running and playing around with the following code to see generators in action]({ "stubs": ["generator.js", "generator.statemachine.js"], "command": "node_modules/mocha/bin/mocha --compilers js:babel-core/register generator.test.js" })

Though the code above is simplified for the purposes of a blog post the generatorFunc generator is written in a very similar manner to a function that would use async and await in JavaScript e.g:
```javascript
    async function doSomethingAsync() {

       let result = await getDataAsync();
       processResult(result);      
    }
```
Whilst not every scenario for async programming in JavaScript suit this (I quite like using RxJs with Angular to declare the handling of asynchronous events with constant values using set and time based operators and the function chaining works well here) it's great to have the option to avoid conflating the input and output of our code, i.e stuff reads from top to bottom in the sequence in which it executes, I'm sure anyone that has experience "callback hell" or "Christmas tree" syntax will appreciate this.  When this does work well the code is extremely easy to read and understand.

NB: I opted not go too in depth on generators and async and await as to do the topic justice would have taken more than a couple of posts.  This is a link to the book that I found helped me alot to get my head round this subject [The 80/20 Guide to ES2015 Generators](http://es2015generators.com/).

## Final thoughts
Javascript really has become a-lot of fun as well as a really exciting space to work in recent years.  The improvements in the language features means that it has gone from a language the used to be rife with oddities and programming compromises in order to achieve the semblance of a well structured, maintainable code base to a language that offers great productivity, reach and accessibility thats also pretty fun to work with.  Obviously these are just my favourite /  most used features and there are a ton more both in the language and on the way.  All in all its a pretty exciting times of development and innovation ahead for everyone working in this space.
