class BankAccount{
    private _balance:number;
    constructor(balance:number){
        if(balance < 0){
            throw new Error("Initial balance must be 0 or more")
        }
        this._balance = balance;
    }

    public deposit(amount:number){
        if(amount <= 0){
            throw new Error("amount must be larger than 0");
        }
        this._balance += amount;
    }
    public getBalance(){
        return this._balance;
    }
}

const account = new BankAccount(3000);
account.deposit(300);
console.log(account.getBalance());