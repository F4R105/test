const express = require('express')
const client = require('prom-client')
const app = express()
const PORT = 3500

client.collectDefaultMetrics()

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

app.get('/metrics', async (req, res) => {
    res.set('Content-Type', client.register.contentType)
    res.send(await client.register.metrics())
})

app.get((req, res) => {
    res.status(404).json({
        message: 'page not found'
    })
})

app.listen(PORT, () => {
    console.log('app is listening on port ', PORT)
})