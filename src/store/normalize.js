import { normalize, schema } from 'normalizr';

const note = new schema.Entity('noteList');

const notesSchema = { noteList: [note] };

const normalizedNotes = (data) => {
  const noteNormalized = normalize(data, notesSchema);
  return {
    entities: noteNormalized.entities.noteList || {},
    ids: noteNormalized.result.noteList,
  };
};

export default {
  normalizedNotes,
};
