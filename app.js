const yargs = require('yargs')
const note = require('./notes.js')

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'write something in the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.addNote(argv.title, argv.body)
    }

})

// create a remove command
yargs.command({
    command: 'remove',
    describe: 'remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.removeNote(argv.title)
    }
})

// list of notes
yargs.command({
    command: 'list',
    describe: 'list of notes',
    handler() {
        note.listNotes()
    }
})


// read note
yargs.command({
    command: 'read',
    describe: 'read the note',
    bulider: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        note.readNotes(argv.title)
    }
})


yargs.parse()
//console.log(yargs.argv)













