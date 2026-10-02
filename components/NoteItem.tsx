export type Note = {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
};

type Props = {
  note: Note;
  number: number;
  onEdit: (note: Note) => void;
  onDelete: (note: Note) => void;
};

export default function NoteItem({ note, number, onEdit, onDelete }: Props) {
  const date = new Date(note.updatedAt).toLocaleDateString('en-US', {
    month: 'short', day: 'numeric', year: 'numeric',
  });

  return (
    <article className="noteItem">
      <div className="noteNumber" aria-hidden="true">{String(number).padStart(2, '0')}</div>
      <div className="noteBody">
        <div className="noteHeading">
          <h2>{note.title}</h2>
          <span className="noteDate">{note.updatedAt !== note.createdAt ? 'Edited ' : ''}{date}</span>
        </div>
        <p>{note.description}</p>
      </div>
      <div className="noteActions">
        <button type="button" onClick={() => onEdit(note)} aria-label={`Edit ${note.title}`}>Edit</button>
        <button type="button" className="deleteButton" onClick={() => onDelete(note)} aria-label={`Delete ${note.title}`}>Delete</button>
      </div>
    </article>
  );
}
