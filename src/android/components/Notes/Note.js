import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { faArchive } from '@fortawesome/free-solid-svg-icons';
import { getFormattedDate } from '../../../utils/utils';
import IconButton from '../../../shared/components/IconButton';
import createStyles from '../../../styles/base';
import noteListStyles from './styles';

const styles = createStyles(noteListStyles);

const Note = ({ note, updateNote, noteId, loginInfo, navigation }) => {
  const { description, date, title, id, archived, priority } = note;
  const priorityStyle = priority ? { borderColor: 'red', borderWidth: 2 } : {};
  return (
    !archived && (
      <View style={[styles.noteBox, priorityStyle]}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate({ name: 'NotePopupPage', params: { id } });
          }}
        >
          <View style={styles.noteHeader}>
            <Text style={[styles.description, styles.headerItem]} selectable>
              {title}
            </Text>
          </View>

          <Text style={styles.description} selectable>
            {description}
          </Text>
          <View style={styles.noteFooter}>
            <Text style={styles.date} selectable>
              {getFormattedDate(date)}
            </Text>
            {!note.priority && (
              <IconButton
                handlePress={() => updateNote(loginInfo.user.uid, noteId, { archived: true })}
                faIcon={faArchive}
                btnStyling={[styles.note, styles.archiveNote]}
                iconStyling={styles.iconStyle}
                fontSize={15}
              />
            )}
          </View>
        </TouchableOpacity>
      </View>
    )
  );
};

Note.propTypes = {
  updateNote: PropTypes.func.isRequired,
  noteId: PropTypes.string.isRequired,
  loginInfo: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
  note: PropTypes.object.isRequired,
};

export default Note;
