/*jshint esversion: 6*/

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const title = {
			describe: 'Title of note',
			demand: true,
			alias: 't'
		};

const body = {
			describe: 'Body of note',
			demand: true,
			alias: 'b'
		};

const argv = yargs
	.command('add', 'Add a new note.', {
		title,
		body 
	})
	.command('list', 'Display all notes.')
	.command('read', 'Display a note with a specific title', {
		title
	})
	.command('remove', 'Delete a note with a specific title', {
		title
	})
	.help()
	.argv;
var command = process.argv[2];

if (command === 'add') {
	var note = notes.addNote(argv.title, argv.body); 
	if (note) {
		console.log('Note created.');
		notes.logNote(note);
	} else {
		console.log('Error: Note title already in use.');
	}
} else if (command === 'list') {
	var allNotes = notes.getAll();
	console.log(`Displaying ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
	var note = notes.getNote(argv.title);
	if (note) {
		console.log('Note found.');
		notes.logNote(note);
	} else {
		console.log('Error: Note not found.');
	}
} else if (command === 'remove') {
	var noteRemoved = notes.removeNote(argv.title);
	var message = noteRemoved ? 'Note was removed.' : 'Note not found.';
	console.log(message);
} else {
	console.log('Command not recognized.');
}