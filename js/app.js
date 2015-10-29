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

    $('.attend').click(function(){
        //the user wants to attend this event.
        //first click, we grab the pid
        var pid = $(this).attr('data-proid');
        //and call the function to mark the schedule
        attend(this,pid);
    });
});

function leave(e,pid){
    $(e).off('click');//end this click event
    remove_time(pid);//take the event off the schedule
    $(e).removeClass('success');//change the color of the button
    $(e).on('click',function(){
        //bind the button to another click event, so the same button
        //can be used to add the event to the users schedule
        attend(e,pid); 
    });
}

function attend(e,pid){
    $(e).off('click');//end this click event
    set_time(pid);//put the event on the schedule
    $(e).addClass('success');//change the color of the button
    $(e).on('click',function(){
        //bind the button to another click event, so the same button
        //can be used to cancel going to the event
        leave(e,pid); 
    });
}


function set_time(pid){
   //mark when the event starts
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].start+" .time").addClass('blocked');
   //mark when the event ends
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].end+" .time").addClass('blocked');
   //loop through and mark the hours between start and end
   for(var c = Number(program_objects[pid].start); c < Number(program_objects[pid].end); c++){
       $(".day."+program_objects[pid].day+" .hour.h"+c+" .time").addClass('blocked');
   }
   //add title
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].start+" .time")
       .append('<span class="event-title"> '+program_objects[pid].title+' </span>');
}

function remove_time(pid){
   //remove when the event starts
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].start+" .time").removeClass('blocked');
   //remove when the event ends
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].end+" .time").removeClass('blocked');
   //loop through and remove the hours between start and end
   for(var c = Number(program_objects[pid].start); c < Number(program_objects[pid].end); c++){
       $(".day."+program_objects[pid].day+" .hour.h"+c+" .time").removeClass('blocked');
   }
   //remove title
   $(".day."+program_objects[pid].day+" .hour.h"+program_objects[pid].start+" .time .event-title").remove();
}

//define program objects
var program_objects = [];

program_objects[0] = {
    title: "ACM Student Research Competition",
    day: "d27",
    start: "15",
    end: "17"
};

program_objects[1] = {
    title: "Appy Hour",
    day: "d28",
    start: "17",
    end: "19"
};

program_objects[2] = {
    title: "Art Gallery",
    day: "d24",
    start: "9",
    end: "17"
};

program_objects[3] = {
    title: "Art Gallery",
    day: "d25",
    start: "9",
    end: "17"
};

program_objects[4] = {
    title: "Art Gallery",
    day: "d26",
    start: "9",
    end: "17"
};

program_objects[5] = {
    title: "Art Gallery",
    day: "d27",
    start: "9",
    end: "17"
};

program_objects[6] = {
    title: "Art Gallery",
    day: "d28",
    start: "9",
    end: "17"
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
    end: "17"
};

program_objects[9] = {
    title: "Birds of a Feather",
    day: "d25",
    start: "9",
    end: "17"
};

program_objects[10] = {
    title: "Birds of a Feather",
    day: "d26",
    start: "9",
    end: "17"
};

program_objects[11] = {
    title: "Birds of a Feather",
    day: "d27",
    start: "9",
    end: "17"
};

program_objects[12] = {
    title: "Birds of a Feather",
    day: "d28",
    start: "9",
    end: "17"
};

program_objects[13] = {
    title: "Computer Animation Festival",
    day: "d26",
    start: "9",
    end: "17"
};

program_objects[14] = {
    title: "Computer Animation Festival",
    day: "d28",
    start: "9",
    end: "17"
};

program_objects[15] = {
    title: "Courses",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[16] = {
    title: "Courses",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[17] = {
    title: "Courses",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[18] = {
    title: "Courses",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[19] = {
    title: "Courses",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[20] = {
    title: "Emerging Technologies",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[21] = {
    title: "Emerging Technologies",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[22] = {
    title: "Emerging Technologies",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[23] = {
    title: "Emerging Technologies",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[24] = {
    title: "Emerging Technologies",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[25] = {
    title: "International Center",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[26] = {
    title: "International Center",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[27] = {
    title: "International Center",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[28] = {
    title: "International Center",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[29] = {
    title: "International Center",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[30] = {
    title: "Panels",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[31] = {
    title: "Panels",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[32] = {
    title: "Panels",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[33] = {
    title: "Panels",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[34] = {
    title: "Panels",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[35] = {
    title: "Posters",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[36] = {
    title: "Posters",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[37] = {
    title: "Posters",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[38] = {
    title: "Posters",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[39] = {
    title: "Posters",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[40] = {
    title: "Production Sessions",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[41] = {
    title: "Production Sessions",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[42] = {
    title: "Real-Time Live",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[43] = {
    title: "Studio",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[44] = {
    title: "Studio",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[45] = {
    title: "Studio",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[46] = {
    title: "Studio",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[47] = {
    title: "Studio",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[48] = {
    title: "Technical Papers",
    day: "d25",
    start: "9",
    end: "17"
};
program_objects[49] = {
    title: "Technical Papers",
    day: "d26",
    start: "9",
    end: "17"
};
program_objects[50] = {
    title: "Technical Papers",
    day: "d27",
    start: "9",
    end: "17"
};
program_objects[51] = {
    title: "Technical Papers",
    day: "d28",
    start: "9",
    end: "17"
};
program_objects[52] = {
    title: "VR Village",
    day: "d24",
    start: "9",
    end: "17"
};
program_objects[53] = {
    title: "VR Village",
    day: "d27",
    start: "9",
    end: "17"
};

