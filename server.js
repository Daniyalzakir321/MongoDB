// IMPORT
import mongoose from "mongoose";
import express from "express";
import Cors from "cors";
import his from "./DbSchema.js";


// APP CONFIG
const app = express();
const port = process.env.PORT || 3001;  // const port = 3001;  // <-- or


// MIDDLEWARE
app.use(express.json());
app.use(Cors());


// DB CONFIG
const connection_url = 'mongodb+srv://wall_paper-46574:<Password>@cluster0.heo95.mongodb.net/WALLPAPER?retryWrites=true&w=majority'
mongoose.connect(connection_url, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// API ROUTES || API ENDPOINTS
app.get("/", (req,res)=>res.status(200).send("Hello World From Daniyal"));

app.post("/daniyal", (req, res) => {
    const a = req.body;
    his.create(a, (err, data) => {
        if (err) {
            res.status(500).send(err) // 500 error, to post data
        }
        else {
            res.status(201).send(data) // 201 successfully send the data
        }
    });
});

app.get("/daniyal", (req, res) => {
    his.find( (err, data) => {
        if (err) {
            res.status(500).send(err) // 500 error, to get data
        }
        else {
            res.status(200).send(data) // 200 successfully get the data
        }
    });
});


// LISTEN
app.listen(port, () => console.log(`Listen on localhost:${port}`));