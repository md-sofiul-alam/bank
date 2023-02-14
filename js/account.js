document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositField = document.getElementById('deposit-field');
    const deposited= depositField.value;
    const depositedNumber = parseFloat(deposited);
    const depositShow= document.getElementById('deposite-show');
    const depositValue = depositShow.innerText;
    const deposite = parseFloat(depositValue);
    const presentBalane = document.getElementById('balance');
    const presentBlanceNum = parseFloat(presentBalane.innerText);
    if(!isNaN(depositedNumber) && depositedNumber % 10===0){
        depositShow.innerText = depositedNumber + deposite;
    presentBalane.innerText = depositedNumber + presentBlanceNum;
    depositField.value= '';
    }
    else{
        alert("please provide an amount divided by 10");
        dipositField.value= '';
    }

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw=withdrawField.value;
    const withdrawNumber = parseFloat(withdraw);
    const withdrawShow = document.getElementById('withdraw-show');
    const withdrawShowNumber = parseFloat(withdrawShow.innerText);
    const presentBalane = document.getElementById('balance');
    const presentBlanceNum = parseFloat(presentBalane.innerText);
    if(!isNaN(withdrawNumber) && withdrawNumber % 10 ===0 && withdrawNumber <= presentBlanceNum){
        withdrawShow.innerText = withdrawNumber + withdrawShowNumber;
    presentBalane.innerText= presentBlanceNum-withdrawNumber;
    withdrawField.value ='';
    }
    else if(!isNaN(withdrawNumber) && withdrawNumber % 10 ===0 && withdrawNumber > presentBlanceNum){
            alert("Insufficient Balance");
            withdrawField.value ='';
        }
    else{
        alert("please provide an amount divided by 10");
        withdrawField.value ='';
    }
})