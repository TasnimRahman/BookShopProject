//for search
var typed = new Typed('#search', {
    
    strings: ['Search by Publisher (ex. মাওলা ব্রাদার্স , Harpercollins)', 
            'Search by (ex. ক্রীতদাসের হাসি , The Power Of Habit.)',
            'Search by Authors (ex. চমক হাসান ,J.K. Rowling)'
        ],
        startDelay: 1200,
        typespeed: 200,
        backspeed: 20,
        backDelay: 500,
        attr: 'placeholder',
        bindInputFocusEvents: true,
        loop: true,
        

  });

//for navbar
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}



//for crossfading slider

