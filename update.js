
function cal_tips(amount,tax){
    let tip=amount*(tax/100)
    return tip.toFixed(1)
}

function cal_total(amount,tax){
    let total =amount*((tax/100)+1)
    return total.toFixed(1)
}

function update(tax,amount, model){
    const newTips = cal_tips(amount,tax)
    const newTotal= cal_total(amount,tax)
    return {
        ...model,
        tip: newTips,
        total: newTotal,
        amount: amount,
        tax : tax
    }
}

module.exports = {
    update
}