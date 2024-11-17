// console.log('home js are added');

//main-button
//main-cashout-btn
document.getElementById('main-cashout-btn').addEventListener('click',function(){
    // console.log('main cash out clicked');
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.remove('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
})
//main-addmoney-btn
document.getElementById('main-addmoney-btn').addEventListener('click',function(){
    // console.log('main cash out clicked');
    document.getElementById('add-money-section').classList.remove('hidden');
    document.getElementById('transaction-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
})

// main-Transaction-button
document.getElementById('main-transaction-btn').addEventListener('click',function(){
    document.getElementById('add-money-section').classList.add('hidden');
    document.getElementById('cash-out-section').classList.add('hidden');
    document.getElementById('transaction-section').classList.remove('hidden');
})



//Add money process
document.getElementById('addMoney-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add money button clicked');
    const ammount= document.getElementById('ammount').value;
    const pin= document.getElementById('pin').value;
    const mainAmmount= document.getElementById('main-ammount').innerText;
    if(pin === '1234'){
        const balance= parseInt(mainAmmount) +parseInt(ammount) ;
     document.getElementById('main-ammount').innerText= balance;
//transaction section
    const transactionSection= document.getElementById('transaction-section');
    const p= document.createElement('p');
    p.innerText=`Added Money: ${parseInt(ammount)} Total Ammount:${parseInt(balance)}`;
    transactionSection.appendChild(p);


    }
    else{
        alert('wrong password');
    }

    
})


//cashout process

document.getElementById('cashout-btn').addEventListener('click',function(event){
    event.preventDefault();
    // console.log('add money button clicked');
    const ammount= document.getElementById('cashout-ammount').value;
    const pin= document.getElementById('cashout-pin').value;
    const mainAmmount= document.getElementById('main-ammount').innerText;
    if(pin === '1234'){
        const balance= parseInt(mainAmmount) -parseInt(ammount) ;
     document.getElementById('main-ammount').innerText= balance;
//transaction section
const transactionSection= document.getElementById('transaction-section');
const p= document.createElement('p');
p.innerText=`Cashout money: ${parseInt(ammount)} Total Ammount:${parseInt(balance)}`;
transactionSection.appendChild(p);


    }
    else{
        alert('wrong password');
    }

    
})