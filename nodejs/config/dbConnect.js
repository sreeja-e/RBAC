const mongoose = require("mongoose");

const dbConnect = async () => {
    try {
    const connect = await mongoose.connect("mongodb+srv://admin:sIJANnpUCKx1vBOm@cluster0.2urhh.mongodb.net/");
    console.log(
        `database connected: ${connect.connection.host}, ${connect.connection.name}`
    );
} catch(err) {
    console.log(err);
    process.exit(1);
}
};
// const dbConnect = async () => {
// mongoose.connect(process.env.CONNECTION_STRING)
// .then(() => console.log("DB connected"));

// mongoose.connection.on('error',function(err){
//     console.log("the error is: ");
// });
// }

module.exports = dbConnect;