import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';
import { faUndoAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDate } from '../../../utils/utils';
import IconButton from '../../../shared/components/IconButton';
import createStyles, { fonts } from '../../../styles/base';
import noteListStyles from './styles';

const styles = createStyles(noteListStyles);

const ArchivedNote = ({ note, updateNote, noteId, loginInfo, handleNoteDeletion }) => {
  const { description, date, title, archived } = note;

  return archived ? (
    <View style={styles.noteBox}>
      <Text style={{ ...styles.description, ...{ fontFamily: fonts.secondary } }} selectable>
        {title}
      </Text>
      <Text style={styles.description} selectable>
        {description}
      </Text>
      <View style={styles.noteFooter}>
        <Text style={styles.date} selectable>
          {`Last update: ${getFormattedDate(date)}`}
        </Text>
        <IconButton
          handlePress={() => updateNote(loginInfo.user.uid, noteId, { archived: false })}
          faIcon={faUndoAlt}
          btnStyling={[styles.note, styles.restoreNote]}
          iconStyling={styles.restoreIconStyle}
          fontSize={15}
        />
        <IconButton
          handlePress={() => handleNoteDeletion(loginInfo.user.uid, noteId)}
          faIcon={faTrashAlt}
          btnStyling={[styles.note, styles.deleteNote]}
          iconStyling={styles.deleteIconStyle}
          fontSize={15}
        />
      </View>
    </View>
  ) : null;
};

ArchivedNote.propTypes = {
  updateNote: PropTypes.func.isRequired,
  handleNoteDeletion: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
  loginInfo: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
};

export default ArchivedNote;
