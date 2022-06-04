function workshop (day)
{
    let w_days = ['Monday', 'Tueesday', 'Wednesday', 'Thursday', 'Fridey']
    let h_days = ['Saturday', 'Sunday']

    if (typeof(day) == "string")
    {
        if (w_days.includes(day))
        {
            return true;
        }
        else if (h_days.includes(day))
        {
            return false;
        }
        else
        {
            return false;
        }
    }
    else
    {
        console.log("Error day!!");
        return false;
    }
}


function workhours (hour)
{
    if (hour < 18 && hour >=8)
    {
        return true;
    }
    else if (hour < 0 || hour >24)
    {
        console.log("Error hour!!");
        return false;
    }
}


let day = "Monday";
let hour = 23;

if (workshop(day) && workhours(hour))
{
    console.log("Open!!!");
}
else
{
    console.log("Close!!!");
}

// let test_day = "Sunday";

// switch (test_day)
// {
//     case "Suturday":
//         console.log("Cool! Suturday");
//         break;
//     case "Monday":
//         console.log("Cool! Monday");
//         break;
//     case "Sunday":
//         console.log("Cool! Sunday");
//         break;
//     default: console.log("Default.");
// }