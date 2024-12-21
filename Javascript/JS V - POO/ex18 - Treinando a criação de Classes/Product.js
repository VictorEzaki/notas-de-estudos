class Product {
    constructor(name, description, price, inStock) {
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }

    addToStock(quantity) {
        if (!quantity) {
            return console.log('Insira um valor válido')
        }

        this.inStock += quantity
        return console.log(`Foram adicionadas ${quantity} ao estoque. Totalizando ${this.inStock}.`)
    }

    calculateDiscount(discount) {
        if (!discount) {
            return console.log('Insira um valor válido!')
        }

        this.price = (this.price * discount) / 100
        
        return console.log(`Foi aplicado um desconto de ${discount}% ao produto. Seu preço agora é de R$${this.price}.`)
    }
}

const note = new Product('asusBook', 'é um notebook', 1000, 20)
console.log(note)

note.addToStock(20)
note.calculateDiscount(50)