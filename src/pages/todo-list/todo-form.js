import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import TextBox from 'devextreme-react/text-box';
import { Button } from 'devextreme-react/button';

const TodoForm = ({ toDoEdit = {}, onSaveClick }) => {
  const { id = Date.now(), note = '' } = toDoEdit;

  const [noteState, setNoteState] = useState(note);

  useEffect(() => {
    setNoteState(note);
  }, [noteState, note]);

  const onClick = (e) => {
    if (!noteState) return;

    onSaveClick(id, noteState);
  };

  return (
    <div className={'content-block'}>
      <div>
        <div className="dx-field">
          <div className="dx-field-value">
            <TextBox
              onValueChanged={(data) => setNoteState(data.value)}
              placeholder={'Add ToDo note'}
              value={noteState}
            />
          </div>
          <div className="dx-field">
            <Button
              text={note ? 'Save ToDo' : 'Add ToDo'}
              type="success"
              onClick={onClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

TodoForm.propTypes = {
  toDoEdit: PropTypes.object.isRequired,
};

export default TodoForm;
