import express  from "express";
import cors from "cors";

const app = express();
app.use(express.json());
app.use(cors());

//rotas


app.get("/", (req, res) => {
    res.send("Hello World");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

