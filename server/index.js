const express = require("express")
const { mongoose } = require("mongoose")
const dotenv = require("dotenv")
const morgan = require("morgan")
const bcrypt = require("bcryptjs")
const salt = bcrypt.genSaltSync(10);
const lsp = require("./models/lsp")
const jwt = require("jsonwebtoken")
const Auth = require("./Auth")
require("dotenv").config();
const cors = require("cors")

const app = express()
app.use(express.json())
app.use(morgan("tiny"))

app.use(cors())

// ENV configurations
const PORT = process.env.PORT || 8000
const DATABASE_URI = process.env.DATABASE_URI


// Connecting to DB and then launching app
mongoose.connect(DATABASE_URI).then( () => {
    app.listen(PORT, () => {
        console.log(`Database connected, Server running on Port ${PORT} !`)
    })
}).catch ( (err) => {
    console.log("Error occured while connecting to DB !");
    console.error(err)
})
















// Routes

// Register Route
app.post("/register", async (req, res) => {
    try {
        const {fullName, email, password, phone, service, location, practiceAreas, experience, languages, bar,  fees, website, bio} = req.body;
        const newLSP = await lsp.create({
            fullName, email, password: bcrypt.hashSync(password, salt), phone, service, location, practiceAreas, experience, languages, bar, fees, website, bio
        })
        res.status(200).json({
            message: "Successfully Added LSP !",
            lspBody: newLSP
        })
    } catch (err) {
        res.status(500).json("Error")
        console.error(err)
    }
})











// Login Route, though async, I used .then() and not await :)
app.post("/login", async(req, res) => {
    try {
        const { email, password } = req.body;
        user = lsp.findOne({email}).then( (user) => {
            const passwordMatched = bcrypt.compareSync(password, user.password)
            if(passwordMatched) {
                // JWT Code
                const token = jwt.sign({id:user._id, fullName:user.fullName}, process.env.SECRET_KEY, {expiresIn:"1m"})
                const refreshToken = jwt.sign({id:user._id, fullName:user.fullName}, process.env.REFRESH_SECRET_KEY)
                
                // Below code is to NOT SHOW the password in the response
                const {password, ...restParams} = user._doc;

                return res.status(201).json({
                    message: "Successfully Logged in and Created Tokens",
                    user: restParams,
                    fullName: user.fullName,
                    service: user.service, 
                    location: user.location,
                    practiceAreas: user.practiceAreas,
                    experience: user.experience,
                    languages: user.languages,
                    bar: user.bar,
                    fees: user.fees,
                    rating: user.rating,
                    reviews: user.reviews,
                    website: user.website,
                    token: token,
                    refreshToken: refreshToken
                })
            }
            else {
                res.status(401).json("User found, but wrong password !");
            }
        }).catch((err) => {
            res.status(404).json("User Not Found !")
        })
    } catch(err) {
        res.status(500).json("Error")
        console.error(err)
    }
})





// Protected Routes
app.get("/protected", Auth, (req, res) => {
    try {
        res.status(201).json("Protected Route")
    } catch(err) {
        res.status(500).json("Error")
        console.error(err)
    }
})







app.get("/refresh", Auth, (req, res) => {
    try{
        const { user } = req
        const token = jwt.sign({id:user.id, fullName:user.fullName}, process.env.SECRET_KEY)
        return res.status(201).json(token)
    } catch(err) {
        res.status(500).json("Error")
        console.error(err)
    }
})






