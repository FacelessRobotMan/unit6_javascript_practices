'use strict';

const formattingOptions = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
}

const dollarString = new Intl.NumberFormat("en-US",formattingOptions);

class ATM {
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
        this.balance = 0;
        this.isOverdraft = false;
    }

    deposit (amount) {
        this.balance += amount;
        if (this.balance >= 0) {
            this.isOverdraft = false;
        }
    }

    withdraw (amount) {
        if (!this.isOverdraft) {
          this.balance -= amount;
        }
        else {
            return 'You are overdraft. You cannot withdraw any funds.';
        }
        if (this.balance < 0) {
            this.isOverdraft = true;
        }
    }

    checkBalance() {
        let formattedBalance = dollarString.format(this.balance);
        return `${this.firstName} ${this.lastName}'s balance is ${formattedBalance}`;
    }

    checkIsOverdraft() {
        let formattedBalance = dollarString.format(this.balance);
        if (this.isOverdraft) {
            return `${this.firstName} ${this.lastName}'s account is OVERDRAFT by ${formattedBalance}`
        }
        else {
            return `${this.firstName} ${this.lastName}'s account has ${formattedBalance} funds available to withdraw.`
        }
    }
}

