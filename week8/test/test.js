const chai = require('chai')
const expect = chai.expect
const TodoList = require('../todoList')

it('add item to array ', function(){
	// var todoList = new TodoList()
		expect(todoList.pushArray('snare drum')).to.deep.equal(['snare drum']) 

})
it('add multiple items to the array ', function(){
	// var todoList = new TodoList()
		expect(todoList.pushArray('snare drum',"bass drum",'tom tom','floor tom',1,2,true,{car:'car'})).to.deep.equal(['snare drum',"bass drum",'tom tom','floor tom',1,2,true,{car:'car'}]) 

})

it('delete item from the array ', function(){
	// var todoList = new TodoList()
    todoList.pushArray('snare drum',"bass drum",'tom tom','floor tom',1,2,true,{car:'car'})
		expect(todoList.removeArray('snare drum')).to.deep.equal(["bass drum",'tom tom','floor tom',1,2,true,{car:'car'}]) 

})

it('delete the last random item from the array ', function(){
	// var todoList = new TodoList()
    todoList.pushArray('snare drum',"bass drum",'tom tom','floor tom',1,2,true,{car:'car'})
		expect(todoList.removeArray('floor tom')).to.deep.equal(['snare drum','bass drum','tom tom',1,2,true,{car:'car'}]) 

})

it('delete a random item from the array ', function(){
	// var todoList = new TodoList()
    todoList.pushArray('snare drum',"bass drum",'tom tom','floor tom',1,2,true,{car:'car'})
		expect(todoList.removeArray('tom tom')).to.deep.equal(['snare drum',"bass drum",'floor tom',1,2,true,{car:'car'}]) 

})

beforeEach(function(){
	todoList = new TodoList()
})
before(function(){
	console.log('****Test Start****')
})

afterEach(function(){
	console.log('****Test Complete****')
})

after(function(){
	console.log('****All Testing Complete****')
})


