// on ready/document ready
document.addEventListener('DOMContentLoaded', function () {

    var digits_names_lang = 'zero one two three four five six seven eight nine';
    // var digits_names_lang = 'zero um dois tres quatro cinco seis sete oito nove';

    var weekday_names_lang = 'MON TUE WED THU FRI SAT SUN'; // en
    var weekday_names_lang = 'SEG TER QUA QUI SEX SAB DOM'; // pt-BR

    // Cache some selectors
    var clock = document.querySelector('#clock'),
        alarm = clock.querySelector('.alarm'),
        ampm = clock.querySelector('.ampm');

    // Map digits to their names (this will be an array)
    var digit_to_name = digits_names_lang.split(' ');

    // This object will hold the digit elements
    var digits = {};

    // Positions for the hours, minutes, and seconds
    var positions = [
        'h1', 'h2', ':', 'm1', 'm2', ':', 's1', 's2'
    ];

    // Generate the digits with the needed markup,
    // and add them to the clock

    var digit_holder = clock.querySelectorAll('.digits');

    positions.forEach(function(item, index, items){

        if (item == ':') {
            
            var div_dots = document.createElement("div");
            div_dots.classList.add('dots');
            // digit_holder.appendChild(div_dots);
            digit_holder.forEach(function(itemDh, indexDh, itemsDh){
                itemDh.appendChild(div_dots);
            });

        } else {

            var pos = document.createElement("div");

            for (var i=1; i<8; i++) {

                /*
                var child = document.createElement('span');
                child.classList.add('d'+i);
                pos.appendChild(child);
                */
                pos.innerHTML += '<span class="d'+i+'"></span>';

            }

            // Set the digits as key:value pairs in the digits object
            digits[item] = pos;

            // Add the digit elements to the page
            // digit_holder.appendChild(pos);
            digit_holder.forEach(function(itemDh2, indexDh2, itemsDh2){
                itemDh2.appendChild(pos);
            });

        }

    });


    // Add the weekday names
    var weekday_names = weekday_names_lang.split(' '),
        weekday_holder = clock.querySelector('.weekdays');

    weekday_names.forEach(function(item, index, items){
        var child = document.createElement('span');
        child.innerText = item;
        weekday_holder.appendChild(child);
    });

    var weekdays = clock.querySelectorAll('.weekdays span');

    // Run a timer every second and update the clock
    (function update_time(){

        // Use moment.js to output the current time as a string
        // hh is for the hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        // d is for day of week and A is for AM/PM

        var now = moment().format("hhmmssdA");

        digits.h1.setAttribute('class', digit_to_name[now[0]]);
        digits.h2.setAttribute('class', digit_to_name[now[1]]);
        digits.m1.setAttribute('class', digit_to_name[now[2]]);
        digits.m2.setAttribute('class', digit_to_name[now[3]]);
        digits.s1.setAttribute('class', digit_to_name[now[4]]);
        digits.s2.setAttribute('class', digit_to_name[now[5]]);

        // The library returns Sunday as the first day of the week.
        // Stupid, I know. Lets shift all the days one position down, 
        // and make Sunday last

        var dow = now[6];
        dow--;

        // Sunday!
        if(dow < 0){
            // Make it last
            dow = 6;
        }

        // Mark the active day of the week
        weekdays.forEach(function(item, index, items){
            item.classList.remove('active');
            if (index == dow)
                item.classList.add('active');
        });

        // Set the am/pm text:
        ampm.innerText = now[7]+now[8];

        // Schedule this function to be run again in 1 sec
        setTimeout(update_time, 1000);

    })();

    /*
    // Add the weekday names
    var weekday_names = 'MON TUE WED THU FRI SAT SUN'.split(' '),
        weekday_holder = clock.find('.weekdays');

    $.each(weekday_names, function(){
        weekday_holder.append('<span>' + this + '</span>');
    });

    var weekdays = clock.find('.weekdays span');

    // Run a timer every second and update the clock

    (function update_time(){

        // Use moment.js to output the current time as a string
        // hh is for the hours in 12-hour format,
        // mm - minutes, ss-seconds (all with leading zeroes),
        // d is for day of week and A is for AM/PM

        var now = moment().format("hhmmssdA");

        digits.h1.attr('class', digit_to_name[now[0]]);
        digits.h2.attr('class', digit_to_name[now[1]]);
        digits.m1.attr('class', digit_to_name[now[2]]);
        digits.m2.attr('class', digit_to_name[now[3]]);
        digits.s1.attr('class', digit_to_name[now[4]]);
        digits.s2.attr('class', digit_to_name[now[5]]);

        // The library returns Sunday as the first day of the week.
        // Stupid, I know. Lets shift all the days one position down, 
        // and make Sunday last

        var dow = now[6];
        dow--;

        // Sunday!
        if(dow < 0){
            // Make it last
            dow = 6;
        }

        // Mark the active day of the week
        weekdays.removeClass('active').eq(dow).addClass('active');

        // Set the am/pm text:
        ampm.text(now[7]+now[8]);

        // Schedule this function to be run again in 1 sec
        setTimeout(update_time, 1000);

    })();

    */

    // Switch the theme
    document.querySelector('.button-holder .button').addEventListener('click', function(e){
        clock.classList.toggle('light');
        clock.classList.toggle('dark');
    });

});