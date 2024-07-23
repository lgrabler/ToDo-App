import { Request, Response } from "express";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 5000;

interface Note {
  id: number;
  content: string;
}

let notes: Note[] = [];

app.use(cors());
app.use(bodyParser.json());

app.get("/notes", (req: Request, res: Response) => {
  res.json(notes);
});

app.post("/notes", (req: Request, res: Response) => {
  const newNote: Note = {
    id: notes.length + 1,
    content: req.body.content,
  };
  notes.push(newNote);
  res.json(newNote);
});

app.put("/notes/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex !== -1) {
    notes[noteIndex].content = req.body.content;
    res.json(notes[noteIndex]);
  } else {
    res.status(404).send("Note not found");
  }
});

app.delete("/notes/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  const noteIndex = notes.findIndex((note) => note.id === id);

  if (noteIndex !== -1) {
    const deletedNote = notes.splice(noteIndex, 1);
    res.json(deletedNote[0]);
  } else {
    res.status(404).send("Note not found");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
function cors(): any {
  throw new Error("Function not implemented.");
}
