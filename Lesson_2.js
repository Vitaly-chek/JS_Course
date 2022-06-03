let hour = 8;

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


function workshop (days, hours){

    if (typeof(days) == "string" && typeof(hours)  == "number" )
    {
        console.log("workday = " + days)
        console.log("workhours = " + hours)
    }



    // console.log("workday = " + days);
    // console.log("workhours = " + hours);
}

workshop("Mondey", 2)


// for (i=0; i=20; i++)
// {
//     i++;
//     console.log(i);
// }

// if (1 || 0 || 0)
// {
//     console.log("Hello") 
// }