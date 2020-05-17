import React from 'react';
import { connect } from 'react-redux';
import { getNoteIdsByFiltering } from '../../reducers/noteReducer';
import AllNoteList from '../components/Notes/NoteList';
import TabWrapper from '../components/hoc/TabWrapper';

const ListContainer = (props) => {
  return (
    <TabWrapper {...props}>
      {({ navigation, noteIds, isProfile }) => (
        <AllNoteList navigation={navigation} noteIds={noteIds} isProfile={isProfile} />
      )}
    </TabWrapper>
  );
};
const mapStateToProps = (state, ownProps) => {
  const filterNotes = (noteEntity) => noteEntity.priority === ownProps.isPriorityTab;
  const noteIds = getNoteIdsByFiltering(state, filterNotes);

  return {
    noteIds,
  };
};

export default connect(mapStateToProps)(ListContainer);
