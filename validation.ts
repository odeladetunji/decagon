const store: any = require('localStorage');
const jwtToken: any = require('jsonwebtoken');
require('dotenv').config();

function validateToken(req: any, res: any, next: any){
    const authHeader: String = req.headers.authorization;
    const token: String = authHeader && authHeader.split(' ')[1];

    let tokenCount: number = store.getItem(token)
    
    if(tokenCount < 1)
        return res.send("Your Token has expired, please get a new token");
    
    tokenCount = tokenCount - 1;
    store.setItem(token, tokenCount)

    if(token === null) return res.sendStatus(401);

    jwtToken.verify(token, process.env.ACCESS_TOKEN_KEY, (err: any) => {
        if (err) return res.sendStatus(403);
        next();
    });
}

module.exports = { validateToken }