async function streamAudio(text) {
    try {
        const response = await fetch('http://localhost:3000/generate-speech', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text }),
        })

        if (!response.ok) {
            throw new Error('Failed to generate speech')
        }

        const blob = await response.blob()
        const audioUrl = URL.createObjectURL(blob)
        const audio = new Audio(audioUrl)
        audio.play()

        return audio
    } catch (error) {
        console.error('Error generating speech:', error)
    }
}

export default streamAudio
