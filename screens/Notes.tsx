import React from 'react';
import MainView from '../components/MainView';
import NotesInput from '../components/NotesInput';
import {VerticalSpace} from '../components/styled';

const Notes = () => {
  return (
    <MainView headerTitle="Notes">
      <VerticalSpace size={2} />
      <NotesInput />
    </MainView>
  );
};

export default Notes;
