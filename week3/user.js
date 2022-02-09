module.exports = class User{
    constructor(userName = "Mike", userAge = 58, num1 , num2 ){
        this.userName = userName,
        this.userAge = userAge,
        this.num1 = num1,
        this.num2 = num2
    }
    addBy()
{   console.log("add", this.num1, this.num2)
    return this.num1 + this.num2
        /* num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 + num2; */
        
}

    subtractBy() 

{ 
    return this.num1 - this.num2
        /* num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 - num2; */

}
     multiplyBy()
{
    return this.num1 * this.num2
       /*  num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 * num2; */
}

     divideBy() 
{ 
    return this.num1 / this.num2
       /*  num1 = document.getElementById("firstNumber").value;
        num2 = document.getElementById("secondNumber").value;
        document.getElementById("result").innerHTML = num1 / num2; */
}
nameAge = () => { return `Hello ${this.userName}. You are ${this.userAge} years young!`

}
/* nameAge(){
    return this.userName
} */
dataType = (arg) => { return `${arg} is a ${typeof(arg)}!`}

turnNumberToString = (num) => {
    let userAgeToString = String(num) 
    return userAgeToString
}
}