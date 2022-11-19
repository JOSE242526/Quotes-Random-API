//? File's imports
const quoteControllers = require("./quotes.controllers");

const getAllQuotes = (req, res) => {
  const data = quoteControllers.findAllQuotes();
  res.status(200).json(data);
};



const getQuoteById = (req, res) => {
  const id = req.params.id;
  const data = quoteControllers.findQuoteById(id);

  if (data) {
    //? Caso Exitoso
    res.status(200).json(data);
  } else {
    //! error
    res.status(404).json({ message: "Invalid ID" });
  }
};

const postNewQuote = (req, res) => {
  const { quote, author, year } = req.body;
  if (quote) {
    //? Caso Exitoso
    const data = quoteControllers.createNewQuote({ quote, author, year });
    res.status(201).json(data);
  } else {
    //! error
    res.status(400).json({
            message: "Invalid Data",
            fields: { 
                author: "asd", 
                quote: "hola*", 
                year: "2022" 
            },
        });
  }
};


const getRandomQuote = (req, res) => {
    const data = quoteControllers.findRandomQuote()
    if(data){
        //? Caso Exitoso
        res.status(200).json(data)
    }else {
        //! Caso de Error
        res.status(400).json({
            message: 'DB is empty'
        })
    }
}

module.exports = {
    getAllQuotes,
    getQuoteById,
    getRandomQuote,
    postNewQuote
}