const Test = require('./test')



const newTest1 = new Test(3).returnFunc3()
    console.log(newTest1)
    
const newTest2 = new Test(7).returnFunc3()
    console.log(newTest2)

const newTest3 = new Test(21).returnFunc3()
    console.log(newTest3)
    
const newTest4 = new Test(8).returnFunc3()
    console.log(newTest4)

const newTest5 = new Test("Hello World").returnFunc3()
    console.log(newTest5)  