function home(){
    window.location.href = 'index.html';
}


function discountTK() {
    let couponInput = document.getElementById('coupon-input');
    let couponInputString = couponInput.value;
    let totalPriceID = document.getElementById('total-price');
    let totalPriceString = totalPriceID.innerText;
    let totalPrice = parseFloat(totalPriceString);
    let discountID = document.getElementById('discount');
    let totalID = document.getElementById('total')

    if (couponInputString.includes('SELL200')) {
        let discount = ((totalPrice*20)/100);
        let discountDisplay = discount.toFixed(2);
        discountID.innerText = discountDisplay;
        let savedTK = totalPrice - discount;
        let savedTkDisplay = savedTK.toFixed(2);
        totalID.innerText = savedTkDisplay;
    }
    else{
        alert('Invalid Coupon Code');
        return;
    }
}

function addToList(productName) {
    let proListDiv = document.getElementById('list-div');
    let ToSetProName = productName;
    let p = document.createElement('p');
    p.classList.add('font-semibold');
    let count = proListDiv.childElementCount;
    p.innerHTML = `${count + 1}.${ToSetProName}`;
    proListDiv.appendChild(p);

}

function productStringToNumb(proPrice) {
    let productPriceID = document.getElementById(proPrice);
    let productPriceString = productPriceID.innerText;
    let productPrice = parseFloat(productPriceString);

    return productPrice;

}

let totalPrice = 0;
function setTotalPrice(proPrice) {
    totalPrice = totalPrice + proPrice;
    let totalPriceDisplay = totalPrice.toFixed(2);
    let totalPriceID = document.getElementById('total-price');
    totalPriceID.innerText = totalPriceDisplay;

    if (totalPrice > 0) {
        let purchaseBtn = document.getElementById('purchase-btn');

        purchaseBtn.classList.remove('pointer-events-none', 'bg-pink-400');
        purchaseBtn.classList.add('bg-color-pink');
    }

    if (totalPrice > 200) {
        let applybtn = document.getElementById('apply-btn');
        applybtn.removeAttribute('disabled');
    }

    let total = document.getElementById('total');
    let totalDisplay = totalPrice.toFixed(2);
    total.innerText = totalDisplay;


    let discountID = document.getElementById('discount');
    discountID.innerText = '0.00';
}



