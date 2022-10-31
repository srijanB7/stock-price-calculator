const initialPriceHolder = document.querySelector("#initialPrice");
const quantityHolder = document.querySelector("#quantity");
const currentPriceHolder = document.querySelector("#currentPrice");
const resultButton = document.querySelector("#result");
const finalMessageHolder = document.querySelector("#finalMessage");

resultButton.addEventListener('click', () => {
    let initialPrice = initialPriceHolder.value;
    let quantity = quantityHolder.value;
    let currentPrice = currentPriceHolder.value;
    
    let result = calculateInvestment(initialPrice, quantity, currentPrice);
    showResult(result);
});

function showResult(result) {
    let msg;
    if(result[0] > 0)
        msg = `Hey, the profit is ${result[0]} and the percent is ${result[1]}`;
    else 
        msg = `Hey, the loss is ${Math.abs(result[0])} and the percent is ${result[1]}`;

    finalMessageHolder.textContent = msg;
}

function calculateInvestment(initialPrice, quantity, currentPrice) {
    let result = (currentPrice - initialPrice) * quantity;
    let percentage = Math.floor((Math.abs(result) * 100 )/(initialPrice * quantity));
    return [result, percentage];
}