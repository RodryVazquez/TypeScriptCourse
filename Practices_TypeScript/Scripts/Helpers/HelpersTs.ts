//Excercise: Problem Code
//Section 2, Lecture 27
//Try to be as explicit as possible and add Types to everything you can!

//Type del objeto bankAccount
type bankAccountType = { money: number, deposit: (value: number) => void };

let bankAccount : bankAccountType  = {
    money: 2000,
    deposit(value :number):void {
        this.money += value;
    }
};

let myself: { name: string, bankAccount: bankAccountType, hobbies:string[]} = {
    name: "Max",
    bankAccount: bankAccount,
    hobbies: ["Sports", "Cooking"]
};

myself.bankAccount.deposit(1);
console.log(myself);
