const fs = require('fs')
const chalk = require('chalk')

const add = () => 'Your notes...'

// Add note 
const addNote = (title, body) => {
    const notes = loadNotes()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            title,
            body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New note added'))
    } else {
        console.log(chalk.red.inverse('Note title already taken!'))
    }
}


// remove note 
const removeNote = (title) => {
    const notes = loadNotes()
    const duplicateNoteRemoved = notes.find((note) => note.title !== title)

    if (duplicateNoteRemoved) {
        console.log(chalk.green.inverse('Note removed'))
        saveNotes(duplicateNoteRemoved)
    } else {
        console.log(chalk.red.inverse('No note found'))
    }
}

// list of notes
const listNotes = () => {
    const notes = loadNotes()

    console.log(chalk.blueBright('Your notes'))
    notes.forEach((note) => {
        console.log(note.title);
    })
}

// read note
const readNotes = (title) => {
    const notes = loadNotes()
    const searchNote = notes.find((note) => note.title === title)

    if (searchNote) {
        console.log(chalk.greenBright(searchNote.title));
        console.log(searchNote.body);
    } else {
        console.log(chalk.red('No note found'));
    }
}

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    add,
    addNote,
    removeNote,
    listNotes,
    readNotes
}