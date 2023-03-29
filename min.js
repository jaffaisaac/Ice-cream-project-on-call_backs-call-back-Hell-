//  THIS IS CALL BACK HELL call back hell


/**
 * This is an ice cream project from the order->production -> processing ->receving
 * 
 * this process is divided into two section:- front_end & back_end
 *  front_end -> 
 * back_end -> stock
 */

/**
 * here are the steps in the making and serving  of the  ice cream and time in seconds
 * place_order ----->2s
 * cut_frult  ------>2s
 * Add water & ice-->1s
 * start machine --->1s
 * select container->2s
 * select toppings ->3s
 * serve ice cream-->2s
 */

let stocks ={
    fruits: ["strawberry" ,"graps","bananas","apples"],
    Liquids:["water","Ice"],
    holder:["cone","cup","stick"],
    toppings :["chocolates","peanuts"]
}

let order = (fruit_Name, call_production)=>{
    setTimeout(()=> {
        console.log(`${stocks.fruits[fruit_Name]} was selected!`)
        call_production();
    },2000)
};

let production =()=>{
    setTimeout(()=>{
        console.log(`Production in Process`)
        setTimeout(()=>{
            console.log(`cutting the fruit has started `)

            setTimeout(()=>{
                console.log(`${stocks.Liquids[0]} and ${stocks.Liquids[1]} was Added`)
            
                setTimeout(()=>{
                    console.log(`Machine has Started the processing`)
                    setTimeout(()=>{
                        console.log(`The ${stocks.holder[2]} has been selected`)
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} has been Add on top`)
                            setTimeout(()=>{
                                console.log(`Ice Cream ready! Pick and Go`);
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)

        },2000)
    },0)
}

order(3,production)