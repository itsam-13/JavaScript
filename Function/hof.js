//discount calculator using higher order function

function discountCalculator(discount){
    return function(price){
        return price - price*(discount/100)
    }
}

let ten = discountCalculator(10); //ten is the new function 
let twenty = discountCalculator(20);

console.log(ten(200));
console.log(twenty(240));

        //             discountCalculator(10)
        //                       │
        //          discount = 10
        //                       │
        //                       ▼
        // returns function(price){...}
        //                       │
        //                       ▼
        //                  ten variable
        //                       │
        //              ten(200)
        //                       │
        //  price = 200, discount = 10
        //                       │
        //                       ▼
        //              returns 180