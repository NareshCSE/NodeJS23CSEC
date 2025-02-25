const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send(`
        <h2>Add Two Numbers</h2>
        <form action="/add" method="post">
            <label for="num1">Number 1:</label>
            <input type="number" id="num1" name="num1" required>
            <br><br>
            <label for="num2">Number 2:</label>
            <input type="number" id="num2" name="num2" required>
            <br><br>
            <input type="submit" value="Add">
        </form>
    `);
});

app.post("/add", (req, res) => {
    const num1 = parseFloat(req.body.num1);
    const num2 = parseFloat(req.body.num2);
    const sum = num1 + num2;
    res.send(`<h2>Result: ${sum}</h2><a href="/">Go Back</a>`);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
