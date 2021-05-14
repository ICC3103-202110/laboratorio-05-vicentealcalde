const {initModel} = require('./model')
const {update} = require('./update')
const {allView,inputForm_1,inputForm_2} = require('./view')
const {printTable} = require('console-table-printer')
model=initModel

async function app(model){
    console.clear() //For some reason the console.clear goes crazy
    const {title,table}=allView(model)
    console.log(title)
    printTable(table)
    const {amount} = await inputForm_1(model)
    const {tax} = await inputForm_2(model)
    model = update(tax,amount,model)
    console.log(model.amount)
    console.clear()
    app(model)
}




app(model)


