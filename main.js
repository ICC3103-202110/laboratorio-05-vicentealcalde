/*
important: sometimes the console.clear does not work well, 
in that case open a new terminal, that should solve it
*/
/*
For this laboratory, 
the example shown by the teacher in class was used as a basis,
so in view.js they are very similar
link: https://github.com/ICC3103-202110/counter_app_example
*/
const {initModel} = require('./model')
const {update} = require('./update')
const {allView,inputForm_1,inputForm_2} = require('./view')
const {printTable} = require('console-table-printer')
model=initModel
/*
app I did it recurrent because 
I wanted it to be different
 from what was shown in classes

*/
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


