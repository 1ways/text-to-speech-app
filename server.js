import express from 'express'
import * as PlayHT from 'playht'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

PlayHT.init({
    userId: 'nDIkmEHNJiOl0BPYULWv1PsWiVl2',
    apiKey: 'ed7e4577d47548008b88e77eb0ef11a0',
})

app.post('/generate-speech', async (req, res) => {
    try {
        const { text } = req.body
        const stream = await PlayHT.stream(text, { voiceEngine: 'PlayDialog' })
        stream.pipe(res)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
})

app.listen(3000, () => {
    console.log('Server running on port 3000')
})
