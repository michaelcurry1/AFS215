const chai = require('chai')
const expect = chai.expect

/* Return "1" when passed 1
Return "2" when passed 2
Return "Good Morning" when passed a 3
Return "Good Afternoon" when passed a 7
Return "Good Morning" when passed a 3 or a multiple thereof
Return "Good Afternoon" when passed a 7 or a multiple thereof
Return "Good Evening" when passed a multiple of 3 and 7
If the number is neither a multiple of 3 or 7 return that number as a string
If any data type other than a number is passed return an error message */

function taskComplete(arg) {
    if (arg === 1) {
        return 1
    }
    if (arg === 2) {
        return 2
    }
    if ( arg === 3) {
        return "Good Morning"
    }
    if (arg === 7) {
        return "Good Afternoon"
    }
    if   (this.number % 3 == 0){
        return "Good Morning"
    }else if (this.number % 7 == 0){
        return "Good Afternoon"
    }else{
        return "ERROR ONLY NUMBERS"
    }
}
it('returns 1 when passed 1',function(){
    expect (taskComplete(1)).to.equal(1)
})