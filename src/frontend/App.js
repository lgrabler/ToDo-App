import React, { useState, useEffect } from 'react';
import { Button, IconButton, Divider } from '@chakra-ui/react';
import { EditIcon, CheckIcon, DeleteIcon } from '@chakra-ui/icons';
import './App.css';

function App() {
  const [note, setNote] = useState('');
  const [notes, setNotes] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editContent, setEditContent] = useState('');

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

// Funktion zum Abbrechen einer Notiz
  const handleCancel = () => {
    setNote('');
    alert('Notiz wurde abgebrochen.');
  };

// Funktion zum Bearbeiten einer Notiz
  const handleEdit = (id) => {
    const noteToEdit = notes.find(note => note.id === id);
    setEditId(id);
    setEditContent(noteToEdit.content);
  };

  // Funktion zum Speichern einer bearbeiteten Notiz
  const saveEdit = (id) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, content: editContent } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
    setEditId(null);
    setEditContent('');
  };

  // Funktion zum Markieren einer Notiz als abgeschlossen
  const handleSuccess = (id) => {
    const updatedNotes = notes.map(note =>
      note.id === id ? { ...note, completed: !note.completed } : note
    );
    setNotes(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  // Funktion zum Löschen einer Notiz
  const handleDelete = (id) => {
    const newNotes = notes.filter(note => note.id !== id);
    setNotes(newNotes);
    localStorage.setItem('notes', JSON.stringify(newNotes));
  };

  // Rendern der App
  return (
    <div className="App">
    <div className="container">
      <div className="header">
        <h2>Projektthema: ToDo-Liste</h2>
      </div>
      <div className="textarea-container">
        <label htmlFor="note">Notizen:</label>
        <br />
        <textarea
          id="note"
          rows="5"
          cols="100"
          value={note}
          onChange={handleChange}
          placeholder="Fügen Sie einen neuen Eintrag hinzu..."
        ></textarea>
      </div>
      <div className="button-container">
        <Button className="save-button" onClick={addNote}>Speichern</Button>
        <Button className="cancel-button" onClick={handleCancel}>Abbrechen</Button>
      </div>
      <Divider />
      <div className="notes-table">
        <h3>Gespeicherte To-Do's:</h3>
        <table>
          <thead>
            <tr>
              <th className='note-column'>Notiz</th>
              <th className='action-column'>Bearbeiten</th>
              <th className='action-column'>Abgeschlossen</th>
              <th className='action-column'>Löschen</th>
            </tr>
          </thead>
          <tbody>
            {notes.map(note => (
              <tr key={note.id}>
                <td style={{ textDecoration: note.completed ? 'line-through' : 'none' }}>
                  {editId === note.id ? (
                    <input
                      type="text"
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      onBlur={() => saveEdit(note.id)}
                    />
                  ) : (
                    note.content
                  )}
                </td>
                <td>
                  <IconButton
                    icon={<EditIcon />}
                    onClick={() => handleEdit(note.id)}
                  />
                </td>
                <td>
                  <IconButton
                    icon={<CheckIcon />}
                    onClick={() => handleSuccess(note.id)}
                  />
                </td>
                <td>
                  <IconButton
                    icon={<DeleteIcon />}
                  onClick={() => handleDelete(note.id)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    <div className="footer">
    <p>Projektwoche 2. Lehrjahr - Fachinformatiker*in für Anwendungsentwicklung (erstellt von Lana Grabler)</p>
  </div>
  </div>
  );
}

export default App;
