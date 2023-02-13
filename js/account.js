document.getElementById('diposit-btn').addEventListener('click', function(){
    const dipositField = document.getElementById('diposit-field');
    const diposited= dipositField.value;
    const dipositedNumber = parseFloat(diposited);
    const dipositShow= document.getElementById('diposite-show');
    const dipositValue = dipositShow.innerText;
    const diposite = parseFloat(dipositValue);
    const presentBalane = document.getElementById('balance');
    const presentBlanceNum = parseFloat(presentBalane.innerText);
    dipositShow.innerText = dipositedNumber + diposite;
    presentBalane.innerText = dipositedNumber + presentBlanceNum;
    dipositField.value= '';

})

document.getElementById('withdraw-btn').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdraw=withdrawField.value;
    const withdrawNumber = parseFloat(withdraw);
    const withdrawShow = document.getElementById('withdraw-show');
    const withdrawShowNumber = parseFloat(withdrawShow.innerText);
    const presentBalane = document.getElementById('balance');
    const presentBlanceNum = parseFloat(presentBalane.innerText);
    withdrawShow.innerText = withdrawNumber + withdrawShowNumber;
    presentBalane.innerText= presentBlanceNum-withdrawNumber;
    withdrawField.value ='';
    

})