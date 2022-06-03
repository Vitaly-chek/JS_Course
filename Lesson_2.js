// let hour = 8;
// let day = 4;

// if (hour < 0 || hour >24)
// {
//     console.log("Error");
// }
// else if (hour < 18 && hour >=8)
// {
//     console.log("Open");
// }
// else if (hour == "Sundey" || hour == "Satuday")
// {
//     console.log("Free day");
// }
// else 
//     console.log("Close") ;

                        //my code

// function workshop (day)
// {
//     if (typeof(day) == "string")
//     {
//         if (day == 'Sat' || day == 'Sun')
//         {
//             console.log("Close")
//         }
//         else
//         {
//             workhour(hour)
//         }
//     }
//     else
//     {
//         console.log("Error")
//     }
// }


// function workhour (hour)
// {
//     if (typeof(hour) == "number")
//     {
//         if (hour < 8 || hour >= 18)
//         {
//             console.log("Close");
//         }
//         else
//         {
//             console.log("Open");
//         }
//     }
//     else
//     {
//         console.log("Error")
//     }

// }

                    // exit my code


// for (i=0; i=20; i++)
// {
//     i++;
//     console.log(i);
// }

// if (1 || 0 || 0)
// {
//     console.log("Hello") 
// }

             //lesson 

// let day_titel = "Sunday1";     
// let ww_days = ['Monday', 'Tueesday', 'Wednesday', 'Thursday', 'Fridey', 'Saturday', 'Sunday']

// if (!ww_days.includes(day_titel))
// {
//     console.log("Error")
// }
// else
// {

// }

            //end




function workshop (day)
{
    let h_days = ['Saturday', 'Sunday']
    let w_days = ['Monday', 'Tueesday', 'Wednesday', 'Thursday', 'Fridey']

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