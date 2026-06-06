/*
    Task Criteria:
    1. Using JavaScript, create a timer script.
    2. Keep time using 24H clock format. E.g.: 11 for 11am and 23 for 11pm.
    3. Variables provided are time_now and num_of_hours.
       a. time_now store value between 0 to 24, it is the starting time for the timer to count from
       b. num_of_hours store any positive number, it is the value to add to the the time_now.

    Things to watch out for:
    1. One day has 24 hours, so in the event user provided hours longer than 24h, your code needs to adjust accordingly.
*/

// Start by defining variables
var time_now = 13
var num_of_hours = 50

/*
    Now that both user provided values are defined and assigned. We can calculate the time the alarm is set to go off.
    However, in the example given if the time now is 13H, and the user wants the alarm to go off 50 hours later,
    the alarm would go off at 63H, which is not a valid time.
    To correct this, use the remainder function or modulo (%) on the go off time.
*/
var alarm = (time_now + num_of_hours) % 24

// Now print the time
console.log("Alarm will go off at " + alarm)