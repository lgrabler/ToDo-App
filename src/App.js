import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
const [notes, setNotes] = useState('');

useEffect(() => {
const savedNotes = localStorage.getItem('notes');
  if (savedNotes) {
  setNotes(savedNotes);
  }
}, []);

const handleSave = () => {
  localStorage.setItem('notes', notes);
  alert('Notizen gespeichert!');
};

const handleCancel = () => {
  setNotes('');
  alert('Notizen abgebrochen!');
};

return (
  <div className="container">
    <div className="textarea-container">
      <label htmlFor="notes">Notizen:</label>
      <textarea
        id="notes"
        rows="10"
        cols="50"
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
      ></textarea>
    </div>
    <div className="button-container">
      <button onClick={handleSave}>Speichern</button>
      <button onClick={handleCancel}>Abbrechen</button>
    </div>
  </div>
  );
}


export default App;
