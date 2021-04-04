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

//for mega menu
  $('ul.nav li.dropdown').hover(function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
  }, function() {
    $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
  });