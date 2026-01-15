// Створіть клас BankAccount, який буде представляти банківський рахунок. 
// Додайте властивість балансу та методи для внесення та зняття грошей.

class BankAccount {
    #money
    constructor (money) {
        this.#money = money
    }
    
    deposit(depositAmount) {
        this.#money = this.#money + depositAmount
        return this.#money
    }

    withdraw (withdrawAmount) {
        if (withdrawAmount <= this.#money) {
            this.#money = this.#money - withdrawAmount
            return this.#money
        } else {
            return console.log("Недостатньо коштів")
        }
    }

    getBalance() {
        return this.#money
    }
}

const account1 = new BankAccount(1000);

console.log(account1.getBalance()); 

account1.deposit(500);
console.log(account1.getBalance()); 

account1.withdraw(200);
console.log(account1.getBalance()); 