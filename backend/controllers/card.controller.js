import { Card } from "../models/card.model.js";


// create card
const createCard = async(req , res) => {
    try {
        const {title , description} = req.body;
        console.log(title , description)

        if([title, description].some(field => field.trim() === "")){
            return res.status(400).json({message : "All fields are required" , success : false});
        };

        // check if card is already exits
        const isCardExits = await Card.findOne({title});

        if(isCardExits) return res.status(400).json({message : "Card already Exits" , success : false})

        const newCard = await Card.create({title , description});

        return res.status(201).json({message : "card created" , result : newCard , success : true})

        
    } catch (error) {
      console.log(error)
      return res.status(500).json({ message: "Internal server error", success: false });

    }
}


// get all cards
const getAllCards = async(req, res) => {
    try{
        console.log(req.body + "in get all")
        const cards = await Card.find({});
        if(cards.length <= 0) return res.status(200).json({result : []});

        return res.status(200).json({success : true , result : cards})

    }catch(err){
        console.log(err);
       return res.status(500).json({ message: "Internal server error", success: false });

    }
}

// get single card based on query
const getSingleCard = async (req, res) => {
  try {
    const { title } = req.query;

    console.log(title)
    // Ensure title is passed and is a string
    if (!title || typeof title !== "string") {
      return res.status(400).json({ message: "Invalid title parameter", success: false });
    }

    const card = await Card.findOne({ title }); 
    
    if (!card) {
      return res.status(404).json({ message: "Card not found", success: false });
    }
    return res.status(200).json({ result: card, success: true });
  } 
  catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Internal server error", success: false });
  }
};


export { createCard, getAllCards, getSingleCard };