const jwt = require('jsonwebtoken')
const fs = require('fs')

module.exports = {
    generateTokenUser: async (req, res) => {
        try {
            const privateKey = fs.readFileSync(process.cwd() + '/private.key')
            
            jwt.sign({email: req.body.email}, privateKey, {expiresIn: '2h', algorithm: 'RS256'}, (err, token) => {
                res.status(200).json({
                    'success': true,
                    'response': token
                })
            })
        } catch (err) {
            res.status(500).json({
                'success': false,
                'response': 'Internal server error'
            })
        }
    } 
}