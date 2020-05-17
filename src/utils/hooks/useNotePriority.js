import { useDispatch, useSelector } from 'react-redux';
import noteActions from '../../actions/noteActions';

export const useNotePriority = () => {
  const dispatch = useDispatch();
  const priority = useSelector((state) => state.currentNoteOptions.priority);

  const setPriority = (isPriority) => dispatch(noteActions.setNotePriority(isPriority));

  return {
    priority,
    setPriority,
  };
};
