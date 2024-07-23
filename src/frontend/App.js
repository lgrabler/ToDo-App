import React, { useState, useEffect } from 'react';
import { Button } from '@chakra-ui/react';
import axios from 'axios';
import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);

  // Lade Notizen aus localStorage beim ersten Rendern
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes')) || [];
    setNotes(savedNotes);
  }, []);

  // Funktion zum Hinzufügen einer neuen Notiz
  const addNote = () => {
    if (note.trim()) {
      const newNotes = [...notes, { id: Date.now(), content: note }];
      setNotes(newNotes);
      localStorage.setItem('notes', JSON.stringify(newNotes));
      setNote(''); // Leere das Textarea-Feld
    }
  };

  // Funktion zum Handhaben der Texteingabe
  const handleChange = (e) => {
    setNote(e.target.value);
  };
  const handleCancel = () => {
    setNotes('');
    alert('Notiz wurde abgebrochen.');
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Projektthema: ToDo-Liste</h2>
      </div>
      <div className="textarea-container">
        <label htmlFor="notes">Notizen:</label>
        <br />
        <textarea
          id="notes"
          rows="10"
          cols="100"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          placeholder='Fügen Sie einen neuen Eintrag hinzu...'
        ></textarea>
      </div>
      <div className="button-container">
        <button className="save-button" onClick={handleChange}>Speichern</button>
        <button className="cancel-button" onClick={handleCancel}>Abbrechen</button>
      </div>
      <div className="notes-table">
        <h3>Gespeicherte To-Do's:</h3>
        <table>
          <thead>
            <tr>
              <th>Notiz</th>
              <th>Bearbeiten</th>
              <th>Löschen</th>
            </tr>
          </thead>
          <tbody>
            {setNotes.map(note => (
              <tr key={note.id}>
                <td>{note.content}</td>
                <td><Button>Edit</Button></td>
                <td><Button>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
