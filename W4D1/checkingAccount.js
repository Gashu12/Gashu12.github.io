"use strict";

/**
 * A Bank Account class
 * 
 * Extends the basic Account class, adds interest functionality
 * SavingsAccount should have an interest variable, which is set in the 
 * constructor and has a getter and a setter mehtod. It should also have an 
 * addInterest() method which deposits the interest amount into the account. 
 * The calculation for the amount is balance * interest / 100 .
 */
class CheckingAccount extends Account{
    /**
     * Constructor for creating a new SavingsAccount object
     * 
     * @param {number} number the number for this account
     * @param {number} int is the interest rate
     */
    constructor(number, int) {
        super(number);
        this._interest = int;
    }

    /**
     * @returns {number} the interest rate
     */
    getInterest(){
        return this._interest;
    }

    /**
     * 
     * @param {number} newInterest is the new Interest rate
     * @returns {undefined} resets the interest property
     */
    setInterest(newInterest){
        this._interest = newInterest;
    }



    }

    const testCheckingAcc = new CheckingAccount(65232, 2);
    console.log("interest rate is: ", testCheckingAcc.getInterest());
    testCheckingAcc.deposit(1000);
    console.log("balance should be 1000: ", testCheckingAcc.getBalance());
    console.log(testCheckingAcc);