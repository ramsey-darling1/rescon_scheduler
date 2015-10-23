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
        //here we mark the schedule as having been updated
        var proid = $(this).attr('data-proid');
        var pid = turn_proid_to_pid(proid);
        set_time(pid);
    });
});

//define program objects
var program_objects = [];

program_objects[0] = {
    title: "ACM Student Research Competition",
    day: "d27",
    start: "3",
    end: "5"
};

program_objects[1] = {
    title: "Appy Hour",
    day: "d28",
    start: "5",
    end: "7"
};

program_objects[2] = {
    title: "Art Gallery",
    day: "d24",
    start: "9",
    end: "7"
};

program_objects[3] = {
    title: "Art Gallery",
    day: "d25",
    start: "9",
    end: "7"
};

program_objects[4] = {
    title: "Art Gallery",
    day: "d26",
    start: "9",
    end: "7"
};

program_objects[5] = {
    title: "Art Gallery",
    day: "d27",
    start: "9",
    end: "7"
};

program_objects[6] = {
    title: "Art Gallery",
    day: "d28",
    start: "9",
    end: "7"
};

program_objects[7] = {
    title: "Art Papers",
    day: "d27",
    start: "9",
    end: "12"
};

program_objects[8] = {
    title: "Birds of a Feather",
    day: "d24",
    start: "9",
    end: "5"
};

program_objects[9] = {
    title: "Birds of a Feather",
    day: "d25",
    start: "9",
    end: "5"
};

program_objects[10] = {
    title: "Birds of a Feather",
    day: "d26",
    start: "9",
    end: "5"
};

program_objects[11] = {
    title: "Birds of a Feather",
    day: "d27",
    start: "9",
    end: "5"
};

program_objects[12] = {
    title: "Birds of a Feather",
    day: "d28",
    start: "9",
    end: "5"
};

program_objects[13] = {
    title: "Computer Animation Festival",
    day: "d26",
    start: "9",
    end: "5"
};

program_objects[14] = {
    title: "Computer Animation Festival",
    day: "d28",
    start: "9",
    end: "5"
};

program_objects[15] = {
    title: "Courses",
    day: "d24",
    start: "9",
    end: "5"
};
program_objects[16] = {
    title: "Courses",
    day: "d25",
    start: "9",
    end: "5"
};
program_objects[17] = {
    title: "Courses",
    day: "d26",
    start: "9",
    end: "5"
};
program_objects[14] = {
    title: "Courses",
    day: "d27",
    start: "9",
    end: "5"
};
program_objects[14] = {
    title: "Courses",
    day: "d28",
    start: "9",
    end: "5"
};
function set_time(pid){
   //mark when the event starts
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].start+" .time").addClass('blocked');
   //mark when the event ends
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].end+" .time").addClass('blocked');
   //loop through and mark the hours between start and end
   for(var c = program_objects[pid].start; c < program_objects[pid].end; c++){
       $(".day."+program_objects[pid].day+" .hour.h"+c+" .time").addClass('blocked');
   }
   //add title
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].start+" .time")
       .append('<span class="event-title"> '+program_objects[pid].title+' </span>');
}

function turn_proid_to_pid(proid){
    //returns pid
    //proid is a string set in the html
    //pid is a number which can be used as an array reference
    var pid;
    switch(proid){
        case 'p1': 
            pid = 0;
            break;
        case 'p3': 
            pid = 1;
            break;
        case 'p5': 
            pid = 2;
            break;
        case 'p7': 
            pid = 3;
            break;
        case 'p9': 
            pid = 4;
            break;
        case 'p11': 
            pid = 5;
            break;
        case 'p13': 
            pid = 6;
            break;
        case 'p15': 
            pid = 7;
            break;
    }
    return pid;
}
