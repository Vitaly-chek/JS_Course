        // СТрелочные функции

// let f1 = () => console.log("Hello f1");
 
// let fl11 = 11;
// let fl22 = 22;

// let func1 = (fl1, fl2) => {console.log("Hello func1", fl1, fl2)}
 
// func1(fl11, fl22);
// f1();


// let func2 = (fl11 > 10) ?
//     (fl1, fl2) => {console.log("Hello func2_1 =", fl1 + fl2)}:
//     (fl1, fl2) => {console.log("Hello func2_2 =", fl1 - fl2)};

//     func2(fl11, fl22)



        // Metods

//     function Yolochka(){}

//     Yolochka.prototype.method1 = function(){
//         console.log('method1')
//     }

//     Yolochka.prototype.method2 = function(n1, n2){
//         console.log('method2', n1 + n2)
//     }

//     Yolochka.prototype.method3 = () => {
//         console.log('method3')
//     }

// let forest = new Yolochka()

// forest.method1()
// forest.method2(fl11, fl22)
// forest.method3()


            // Циклы

        // while

// let count = 0;
// let count_stope = 10;
// let n = 1;

// console.log('Before count =', count)

// while (count <= count_stope){
//     console.log(n, 'Hello!!!');
//     n ++;
//     count ++;
// }

// console.log('After count =', count)

        //for

// let n=1;

// for (let i = 0; i < 20; i++){
        
//         if(i % 2 == 0)
//         console.log(n, "===", i)
//         n++;
// }


let names = [   'Kate',
                'Alex',
                'Ivan',
                'Ignat',
                'Andrey',
                'Vika'];

for (let item of names){
        
        console.log(item, "Name =", names[item])
}
