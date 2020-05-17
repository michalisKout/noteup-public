import React from 'react';
import { TextInput, View, Text } from 'react-native';
import PropTypes from 'prop-types';
import EN_MESSAGES from '../../../config/en_messages';
import createStyles from '../../../styles/base';
import popupStyles from './styles';
import HighlightButton from '../../../shared/components/HighlightButton';
import LogMessages from '../../../shared/components/Logs/LogMessages';
import NoteOption from './NoteOption';

const styles = createStyles(popupStyles);

const NotePopup = ({
  handleSubmitNote,
  setNewDescription,
  setNewTitle,
  newTitle,
  newDescription,
  navigation: { goBack },
  shouldUpdate,
  submitNoteText,
  shouldShowOptions,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredView}>
        <View style={styles.notePopUpView}>
          <Text style={styles.popupText}>{EN_MESSAGES.POP_UP.TITLE}</Text>
          <LogMessages />
          <TextInput
            placeholder={EN_MESSAGES.POP_UP.INPUTS.TITLE}
            style={styles.inputNote}
            value={newTitle}
            onChangeText={(text) => {
              setNewTitle(text);
            }}
          />
          <TextInput
            placeholder={EN_MESSAGES.POP_UP.INPUTS.DESCRIPTION}
            style={[styles.inputNote, styles.description]}
            value={newDescription}
            onChangeText={(text) => {
              setNewDescription(text);
            }}
            autoFocus
            multiline
            numberOfLines={10}
          />

          <HighlightButton
            btnStyles={styles.closeBtn}
            onPressHandler={() => {
              goBack();
            }}
            textStyles={styles.textStyle}
            text="&times;"
          />
          {!shouldShowOptions && <NoteOption text="Is this a priority?" />}
          <HighlightButton
            btnStyles={shouldUpdate ? styles.takeNoteBtn : styles.disabledBtn}
            shouldDisable={!shouldUpdate}
            onPressHandler={() => {
              handleSubmitNote();
              goBack();
            }}
            textStyles={styles.textStyle}
            text={submitNoteText}
          />
        </View>
      </View>
    </View>
  );
};

NotePopup.propTypes = {
  handleSubmitNote: PropTypes.func.isRequired,
  setNewDescription: PropTypes.func.isRequired,
  setNewTitle: PropTypes.func.isRequired,
  newDescription: PropTypes.string.isRequired,
  submitNoteText: PropTypes.string.isRequired,
  newTitle: PropTypes.string.isRequired,
  navigation: PropTypes.shape({
    goBack: PropTypes.func.isRequired,
  }).isRequired,
  shouldShowOptions: PropTypes.bool.isRequired,
};

export default NotePopup;
