module.exports = class Test{
    constructor(number = "Hello World" ){
        this.number = number
        
    }
    returnFunc3() {
        if(typeof this.number === "number") {
            if (this.number % 3 == 0 && this.number % 7 == 0) {
                return "Good Evening"
            }else{
                if   (this.number % 3 == 0){
                    return "Good Morning"
                }else if (this.number % 7 == 0){
                    return "Good Afternoon"
                }else{
                    return String(this.number) 
                }
            }
        }else{
            return "ERROR ONLY NUMBERS"
        }
      
    } 
}