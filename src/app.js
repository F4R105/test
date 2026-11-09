const express = require('express')
const app = express()
const PORT = 3500

app.get('/', (req, res) => {
    res.json({
        message: 'api is working correctly'
    })
})

app.get('/health', (req, res) => {
    res.status(200).json({
        status: 'ok',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    })
})

app.get((req, res) => {
    res.status(404).json({
        message: 'page not found'
    })
})

app.listen(PORT, () => {
    console.log('app is listening on port ', PORT)
})