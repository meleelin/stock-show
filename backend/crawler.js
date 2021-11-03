const express = require("express")
const connection = require("./utils/db")
const cors = require("cors")
let app = express()

app.listen(3001, function () {
    console.log("server is running at port 3001");
});


app.use(cors());

app.get("/", function (request, response, next) {
    response.send("Hello World!")
});

app.get("/stock", async function (req, res, next) {
    let sql = "SELECT * FROM stock";
    let stockNo = await connection.queryAsync(sql);   
    res.json(stockNo)
});

app.get("/stock/:stock_id", async function (req, res, next) {
    let sql = "SELECT * FROM stock_price WHERE stock_id = ?"
    let stockData = await connection.queryAsync(sql, [req.params.stock_id])
    res.json(stockData)

});


app.use((req, res, next) => {
    res.status(404)
});
