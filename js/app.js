// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

$(document).ready(function(){
    $('.show-my-shedule').click(function(){
        $('.page').fadeOut();
        $('.page.home').fadeIn();
    });
    $('.show-upcoming-programs').click(function(){
        $('.page').fadeOut();
        $('.page.upcoming-programs').fadeIn();
    });
    $('.button.tiny').click(function(){
        $(this).toggleClass('success');
    });
});

//define program objects

var p1 = {
    title: "ACM Student Research Competition",
    day: "d27",
    start: "3",
    end: "5"
};

var p3 = {
    title: "Appy Hour",
    day: "d28",
    start: "5",
    end: "7"
};

var p5 = {
    title: "Art Gallery",
    day: "d24",
    start: "9",
    end: "7"
};


var p7 = {
    title: "Art Gallery",
    day: "d25",
    start: "9",
    end: "7"
};


var p9 = {
    title: "Art Gallery",
    day: "d26",
    start: "9",
    end: "7"
};
