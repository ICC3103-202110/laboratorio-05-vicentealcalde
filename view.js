const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')
const {initModel} = require('./model')
 

function getTitle(){
    return chalk.green(
        figlet.textSync(
            'Tip App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

function getTable(model){
    const {amount,tax,tip,total} = model
    return [
        {amount: amount , tax: tax, Tips: tip , Total: total },
    ]
}

function allView(model){
    return{
    title: getTitle(),
    table: getTable(model)
}}

function inputForm_1(model){
    const {amount} = model
    const message = 'Amount?'
    return inquirer.prompt([
        {
            name: 'amount',
            type: 'amount',
            message: message,
            default: amount,
            validate: function(value){
                if(value >=0){
                    return true
                } else {
                    return 'Enter another mount'
                }
            }
        }
    ])
}

function inputForm_2(model){
    const {tax} = model
    const message = 'enter %tips'
    return inquirer.prompt([
        {
            name: 'tax',
            type: 'tax',
            message: message,
            default: tax,
            validate: function(value){
                if(value >=0){
                    return true
                } else {
                    return 'Enter another %tips'
                }
            }
        }
    ])
}


module.exports = {
    allView, 
    inputForm_1,
    inputForm_2
}