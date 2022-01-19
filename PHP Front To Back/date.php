<?php 
echo date('d'); // Day
echo date('m'); // Month
echo date('Y'); // Year
echo date("l");    // Day of the week // Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
echo date("d/m/Y");     // Day/Month/Year
echo date("d/m/Y", strtotime("+1 day"));    // Day/Month/Year

echo date('h'); // Hour
echo date('i'); // Minute
echo date('s'); // Second
echo date('a'); // AM or PM

//date_default_timezone_get("Europe/Istanbul");
echo date('h:i:sa');

$timetamp = mktime(10, 14, 54, 9, 10, 1981);
echo date('h:i:sa', $timetamp);

$timetamp2 = strtotime("7:00pm April 22 2019");
$timetamp2 = strtotime("tomorrow");
$timetamp2 = strtotime("next Saturday");
$timetamp2 = strtotime("+2 Months");

echo date('h:i:sa', $timetamp2);    // h:i:sa   Hour:Minute:Second:AM/PM Month Day Year





?>