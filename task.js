function performBankOperations(balance, callback) {
    const deposit = (amount) => {
        balance += amount;
        console.log(`Поповнено ${amount} грн. Новий баланс: ${balance} грн.`);
    };

    const withdraw = (amount) => {
        if (balance >= amount) {
            balance -= amount;
            console.log(`Знято ${amount} грн. Новий баланс: ${balance} грн.`);
        } else {
            console.log("Недостатньо коштів на рахунку!");
        }
    };

    callback(deposit, withdraw);
}


const currentBalance = 5000;

performBankOperations(currentBalance, function (deposit, withdraw) {
    deposit(2000); 
    withdraw(1000); 
});
