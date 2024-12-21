class Book {
    constructor(title) {
        this.title = title
        this.published = false
    }
    
    publish() {
        this.published = true
    }
}


const eragon = new Book("Eragon")
const harry = new Book("Harry Potter")

console.log(eragon) 
console.log(harry) 