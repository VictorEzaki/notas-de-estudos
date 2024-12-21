const Author = require("./Author");

const victor = new Author("Victor")

const post = victor.writePost('title do post', 'lorem ipsum')
post.addComment('VictorEzaki', 'LEGAL!')
post.addComment('EZAQUI', 'MUITo BOM!')

console.log(victor)
console.log(post)