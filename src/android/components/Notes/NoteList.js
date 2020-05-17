import React from 'react';
import { FlatList } from 'react-native';
import PropTypes from 'prop-types';
import NoteContainer from '../../containers/NoteContainer';

const AllNoteList = ({ navigation, noteIds, isProfile }) => {
  return (
    <>
      <FlatList
        data={noteIds}
        renderItem={({ item }) => (
          <NoteContainer navigation={navigation} id={item} isProfile={isProfile} />
        )}
        keyExtractor={(id, index) => {
          const itemKey = isProfile ? `${id}_${index}_priority` : `${id}_${index}`;
          return itemKey;
        }}
      />
    </>
  );
};

AllNoteList.defaultProps = {
  isProfile: false,
};

AllNoteList.propTypes = {
  noteIds: PropTypes.arrayOf(PropTypes.string).isRequired,
  navigation: PropTypes.object.isRequired,
  isProfile: PropTypes.bool,
};

export default AllNoteList;
