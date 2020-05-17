import { pipe, set, update } from 'lodash/fp';

export const addEntityInList = (state, entity) => {
  const newEntityPath = ['entities', entity.id];
  const newIdPath = 'ids';

  return pipe(set(newEntityPath, entity), set([newIdPath], [entity.id, ...state.ids]))(state);
};

export const updateEntityInList = (state, updatedEntity) => {
  const existingEntityPath = ['entities', updatedEntity.id];
  const updateHandler = (prevEntity) => ({ ...prevEntity, ...updatedEntity });
  return pipe(update(existingEntityPath, updateHandler))(state);
};

export const removeEntityFromList = (state, entityId) => {
  const updatedEntities = { ...state.entities };
  delete updatedEntities[entityId];
  const updatedIds = state.ids.filter((id) => id !== entityId);

  return { ...state, entities: updatedEntities, ids: updatedIds };
};
