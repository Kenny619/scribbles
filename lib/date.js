const lib = require('./../../../lib/jslib');

/*
class SDates{

    constructor(date, locale=Intl.DateTimeFormat().resolvedOptions().locale){
        5
    }
    

}
*/


/*

get user lcoale and timezone offset

check if the date is a holiday.
If the date is a holiday then push back/forward to the closest work-day

ROUTINE
- daily/weekly/monthly by day
- every nth day/week/month
- nth x date of the month
- first day, last day of the month

*/

//getNthDayOfTheMonth(2023,10,5,2);


/*------------------------
main
--------------------------*/

const d = countDiffWeekDays('2023-09-22', '2023-11-30');
console.log(d);


/*---------------------------*/


function dateString2DateObj(date){

    [year, month, date] = date.split("-");

    const d = new Date(year, month*1-1, date*1);
    return d;

}


function countDiffDays(date1, date2, weekdaysonly=false){
    if(
        lib.checkForExceptions(
            typeof date1 === 'string',
            typeof date2 === 'string',
            typeof weekdaysonly === 'boolean'   
        )
    ) return false;

    const start = new Date(date1);
    const end = new Date(date2);
    if(start > end) return false;

    const diff = (end - start) / 1000 / 3600 / 24;

    if(weekdaysonly === false) return diff;

    const rangeDOWstart = start.getDay();
    const rangeDOWend = rangeDOWstart + diff;

    let weekends = (rangeDOWstart === 0) ? 1 : 0;

    for(let i=0; 7*i+6<=rangeDOWend; i++){
        if(7*i+6 <= rangeDOWend) weekends++;
        if(7*i+7 <= rangeDOWend) weekends++;
    }

    return diff - weekends;
}

function getEOMDateString(year, readableMonth, day=1){
    if(
        lib.checkForExceptions(
            [year, readableMonth, day].every(n => typeof n === 'number'),
            lib.checkInBetween(readableMonth,1,12),
            lib.checkInBetween(day,1,31)
        )
    ) return false;

    const eom = new Date(year, readableMonth, 0);
    return getDateString(year, readableMonth, eom.getDate());
}

function getEOMDateInt(year, readableMonth, day=1){
    if(
        lib.checkForExceptions(
            [year, readableMonth, day].every(n => typeof n === 'number'),
            lib.checkInBetween(readableMonth,1,12),
            lib.checkInBetween(day,1,31)
        )
    ) return false;

    const eom = new Date(year, readableMonth, 0);
    return eom.getDate();
}

function getEndOfTheWeek(year, month, day){

}

function getNthDayOfTheMonth(year, readableMonth, nth, dayIndex){

    if(lib.checkForExceptions(
        [year,readableMonth,nth,dayIndex].every(i => typeof i === 'number'),
        lib.checkInBetween(readableMonth,1,12),
        lib.checkInBetween(nth,1,5),
        lib.checkInBetween(dayIndex,0,6))
    ) return false;

    const dt = new Date(year, readableMonth-1, 1, 0, 0, 0, 0);
    const firstDayIndex = dt.getDay();
    const firstDate = ((7 + (dayIndex-firstDayIndex)) %7) + 1;
    const nDate = (nth-1) *7 + firstDate;

    printCalender(year, readableMonth);

    return (nDate <= getEOMDateInt(year, readableMonth)) ? getDateString(year, readableMonth, nDate) : false; 
}


function getDateString(year, readableMonth, day){
    if(
        lib.checkForExceptions(
            [year, readableMonth, day].every(n => typeof n === 'number'),
            lib.checkInBetween(readableMonth,1,12),
            lib.checkInBetween(day,1,31)
        )
    ) return false;

    return `${year}-${(readableMonth).toString().padStart(2,'0')}-${day.toString().padStart(2,'0')}`;


}


function printCalender(year, readableMonth){

    if(lib.checkForExceptions(
        [year, readableMonth].every(i=>typeof i === 'number'),
        lib.checkInBetween(readableMonth, 1, 12)
    )) return false;

    const firstDay = new Date(year, readableMonth-1, 1);
    const EOMDate = getEOMDateInt(year, readableMonth);

    let week = Array(firstDay.getDay());
    let weeks = [["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]];
    week.fill("--");

    for(let i = 1; i<=EOMDate; i++){
        week.push(i.toString().padStart(2,'0'));
        if(week.length === 7 || i === EOMDate){
            weeks.push(week);
            week = [];
        }
    }

    console.log("");
    console.log(`${year}-${readableMonth.toString().padStart(2,'0')}`);
    weeks.forEach(w=>console.log(w.join(" ")));

}
