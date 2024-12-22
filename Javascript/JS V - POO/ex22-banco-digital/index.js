const App = require('./App')

App.createUser('Victor Ezaki', 'victor@gmail.com')
App.createUser('Ezaki Victor', 'ezaki@gmail.com')
App.createUser('Teste Testando', 'teste@gmail.com')

App.deposit('victor@gmail.com', 100)
App.transfer('victor@gmail.com', 'ezaki@gmail.com', 20)

App.changeLoanFee(10)
App.takeLoan('teste@gmail.com', 2000, 24)

console.log(App.findUser('victor@gmail.com'))
console.log(App.findUser('victor@gmail.com').account)
console.log(App.findUser('ezaki@gmail.com'))
console.log(App.findUser('ezaki@gmail.com').account)
console.log(App.findUser('teste@gmail.com'))
console.log(App.findUser('teste@gmail.com').account)
console.log(App.findUser('teste@gmail.com').account.loans[0].installments)