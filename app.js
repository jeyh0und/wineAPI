const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000 //vi frågar datorn vilken port är öppet

const wines = {
    allWines: [{ name: "Trapiche", grape: "Malbec", country: "Argentina" },
    { name: "Barefoot", grape: "Zinfandel", country: "USA" },
    { name: "Jacob's Creek", grape: "Cabernet Sauvignon", country: "Australia" },
    { name: "Campo Viejo", grape: "Rioja", country: "Spain" },
    { name: "Leth", grape: "Gruner Veltliner", country: "Austria" },
    { name: "Leth", grape: "Riesling", country: "Austria" }]
}

const grapes = ["Pinot Noir", "Pinot Grigio", "Cabernet Sauvignon", "Chianti", "Rioja", "Sauvignon Blanc"]
const names = ["Barefoot", "Jacob's Creek", "Campo Viejo", "Leth"]
const countries = ["Austria", "Spain", "USA"]

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})

app.get("/wines", (req, res) => {
    res.send(wines)
})


app.get("/newentry", (req, res) => {
    newEntry()
    res.send("Added new data")
})

function newEntry(){
    const randomGrape = grapes[Math.floor(Math.random() * grapes.length)]
    const randomName = names[Math.floor(Math.random() * names.length)]
    const randomCountry = countries[Math.floor(Math.random() * countries.length)]
    const nameAndWine = randomName + ", " + randomGrape

    wines.allWines.push({name: nameAndWine, country: randomCountry}) // lägger till arrayen så att sen visar det hela arrayen med addade

    // console.log("Wine: " + randomName + ", " + randomGrape + ", " + randomCountry)
    return wines
}






app.listen(PORT, () => {
    console.log("Listening to port " + PORT)
    console.log(wines)
})