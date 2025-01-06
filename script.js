import streamAudio from './playht.js'

// Dropdowns logic
const dropdowns = document.querySelectorAll('.content-side__dropdown')

dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', (e) => {
        const isOpen = dropdown.classList.contains('show')

        if (
            e.target.classList.contains('content-side__dropdown-value') ||
            e.target.classList.contains('content-side__dropdown-head') ||
            e.target.classList.contains('content-side__dropdown-caret')
        ) {
            dropdowns.forEach((d) => d.classList.remove('show'))

            if (isOpen) {
                dropdown.classList.remove('show')
            } else {
                dropdown.classList.add('show')
            }
        }

        if (e.target.classList.contains('content-side__dropdown-item')) {
            let headEl = dropdown.querySelector('.content-side__dropdown-value')

            const currentValue = headEl.textContent

            const value = e.target.textContent

            headEl.textContent = value
            e.target.textContent = currentValue

            dropdown.classList.remove('show')
        }
    })
})

// Close all dropdowns when user clicks outside of it
document.addEventListener('click', (e) => {
    const isClickInsideDropdown = e.target.closest('.content-side__dropdown')

    if (!isClickInsideDropdown) {
        dropdowns.forEach((d) => d.classList.remove('show'))
    }
})

// Speed selecion logic
const speedItems = document.querySelectorAll('.content-side__speeds-item')

speedItems.forEach((speedItem) => {
    speedItem.addEventListener('click', (e) => {
        speedItems.forEach((s) => s.classList.remove('selected'))
        speedItem.classList.add('selected')
    })
})

// Textarea validation
const textarea = document.querySelector('.content-side__textarea')
const submitButtom = document.querySelector('.content-side__btn')

submitButtom.addEventListener('click', (e) => {
    if (textarea.value == '') {
        textarea.focus()
    } else {
        // Generate audio from text
        streamAudio(textarea.value)
    }
})

