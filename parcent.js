// if you want calculate 
function disc(productPrice, discountPercentValue) {
    const discountPrice = (productPrice * (100 - discountPercentValue)) / 100;

    return discountPrice;
}


document.getElementById('apply-btn').addEventListener('click', function () {
    // selection element
    let stringProductValue = document.getElementById('product-input').value;
    let stringPercentageValue = document.getElementById('percentage-input').value;
    if (stringPercentageValue !== '' && stringProductValue !== '') {
        // get string to number value
        const productValue = parseFloat(stringProductValue);
        const percentageValue = parseFloat(stringPercentageValue);
        // clear input value form input field

        const result = disc(productValue, percentageValue)
        document.getElementById('result-displayer').innerText = result;
        document.getElementById('percentage-displayer').innerText = percentageValue;

        document.getElementById('product-input').value = '';
        document.getElementById('percentage-input').value = '';
    }
})

