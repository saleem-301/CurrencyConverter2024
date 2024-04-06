#! /usr/bin/env node

// import inquirer from 'inquirer';

import inquirer from "inquirer"


let currency :any = 
{
    USD : 1,
    PKR : 277.54,
    EURO: 0.92,
    ST_POUND : 0.79,

}
// console.log(currency.USD)

let convertor = await inquirer.prompt
(
    [
        {
            name:'country1',
            type: 'list',
            message: ' Select the currency to be converted',
            choices : ['USD','PKR','EURO','ST_POUND'],
        },
        {
            name:'country2',
            type: 'list',
            message: ' Select the currency converted into',
            choices : ['USD','PKR','EURO','ST_POUND'],
        },
        {
            name: 'Amnt',
            type: 'number',
            message: 'Enter the Amount'
        }
        
    ]
    
)

let ans1 = currency[convertor.country2]
let ans2 = currency[convertor.country1]
let ans3 = convertor.Amnt
console.log(ans1/ans2 * ans3)

