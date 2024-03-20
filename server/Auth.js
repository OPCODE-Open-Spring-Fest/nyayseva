const jwt = require("jsonwebtoken")

const Auth = async (req, res, next) => {
    try {
        const token = req.get('authorization');
        if (!token) {
            res.status(401).json("No Token !");
        }
        const jwtSecret = req.originalUrl.includes("refresh") ? process.env.REFRESH_SECRET_KEY : process.env.SECRET_KEY;

        jwt.verify(token.split(' ')[1], jwtSecret, (err, user) => {
            if (err && err.name === "TokenExpiredError") return res.status(403).json("Token Expired")
            if (err) return res.status(401).json("Invalid Token")
            // res.json(user)
            req.user = user
            next();
        })
    } catch(err) {
        return res.status(401).json("Unauthorized User !");
    }
}

module.exports = Auth;




