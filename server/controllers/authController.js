const saltRounds = 10
const bcrypt = require('bcryptjs')

module.exports = {
    async register(req, res){
        const db = req.app.get('db')
        const {username, password} = req.body
        const [usernameCheck] =  await db.get_user(username)
        if(usernameCheck) return res.status(400).send('username is already taken login or choose a diffrent username.') 
        const salt = bcrypt.genSaltSync(saltRounds)
        const hash = bcrypt.hashSync(password, salt)
        const [newUser] = await db.add_user([username, hash]) 
        console.log(newUser)
        if(!newUser) return res.sendStatus(500) 
        req.session.user = newUser
        res.sendStatus(200)
    },
    async login(req, res) {
        const db = req.app.get('db')
        const {username, password} = req.body
        const [usernameCheck] =  await db.get_user(username)
        if(!usernameCheck) return res.status(403).send('username is not correct.') 
        const passwordCheck = bcrypt.compareSync(password, usernameCheck.hash)
        if(!passwordCheck) return res.status(404).send('password is incorrect')
        req.session.user ={
            id: usernameCheck.id,
            username: usernameCheck.username
        }
        res.sendStatus(200)
    },
    sessionCheck(req,res){
        if(req.session && req.session.user){
            res.sendStatus(200)
        } else  { 
            res.sendStatus(403)
        }
    }
}