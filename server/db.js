const mongoose = require("mongoose");

const uri = 'mongodb+srv://shanofreteam:SKxbfrICa7zCCH63@cluster0.fu8inul.mongodb.net/?retryWrites=true&w=majority';

//MongoDB Connection
module.exports = () => {
    const connectionParams = {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    };
    try {
        mongoose.connect(uri, connectionParams);
        console.log("Connected to database successfully");
    } catch (error) {
        console.log(error);
        console.log("Could not connect database!");
    }
};
