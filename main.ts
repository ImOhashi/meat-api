import * as restify from 'restify'

const port = process.env.PORT || 3000

const server = restify.createServer({
    name: 'meat-api',
    version: process.env.npm_package_version
})

server.get('/hello', (req, res, next) => {
    res.json({message: 'Hello'})

    return next()
})

server.listen(port, () => console.log(`Server listening on port: ${port}`))