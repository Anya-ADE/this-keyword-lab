const box = document.querySelector('.box');

box.addEventListener('click', (event) => {
//BUG: this.classList.add('active'); throws an error because 'this' 
// refers to the global object (window) in this context, not the c
// licked element. To fix this, we can use 'event.currentTarget' instead 
// of 'this' to refer to the clicked element. 

    /*this.classList.add('active');*/

    event.currentTarget.classList.add('active');

    //The event.currentTarget property 
// refers to the element to which the event handler is attached, 
// which in this case is the box element. So we can replace 'this.classList.add('active');
// ' with 'event.currentTarget.classList.add('active');'
//  to correctly add the 'active' class to the clicked element.
});
