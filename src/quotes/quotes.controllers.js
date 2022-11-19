const quotesDB = []
let id = 1
//* {
//*     id: 1,
//*     author: 'Sahid',
//*     quote: 'Dudas?',
//*     year: '2022'
//* }

const findAllQuotes = () => {
    return quotesDB
}

const findQuoteById = (id) => {
    const filteredQuote = quotesDB.find(quote => quote.id == id)
    return filteredQuote
}

const createNewQuote = (obj) => {
    const newQuote = {
        id: id++, // este valor lo administramos nosotros
        author: obj.author ? obj.author :  'Anonymous', //? Somos campos opcionales
        quote: obj.quote,
        year: obj.year || 'Year Unknown' //? Somos campos opcionales
    }
    quotesDB.push(newQuote)
    return newQuote
}

const findRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quotesDB.length)
    return quotesDB[randomIndex]
}

module.exports = {
    findAllQuotes,
    findQuoteById,
    createNewQuote,
    findRandomQuote
}