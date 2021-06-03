import React from 'react';
import { Form } from 'react-final-form';
import {
  TextField,
} from 'mui-rff';
import {
  Paper,
  Grid,
  Button,
} from '@material-ui/core';
import { postUser } from '../postUser';
import { useDispatch } from 'react-redux';

const validate = (values: any) => {
  const errors: any = {};
  if (!values.name) {
    errors.name = 'Введите имя';
  }
  if (!values.email) {
    errors.email = 'Введите почту';
  }
  return errors;
};

const formFields = [
  {
    field: (
      <TextField
        label="ФИО"
        name="firstName"
        required={true}
        style={{ marginTop: 20 }}
      />
    ),
  },
  {
    field: (
      <TextField
        type="email"
        label="Электронная почта"
        name="email"
        required={true}
        style={{ marginTop: 20 }}
      />
    ),
  },
  {
    field: <TextField name="avatar" label="Ссылка на аватар" style={{ marginTop: 20 }} />,
  },
];

export default function ModalInner({ modalActive, setModalActive }: { modalActive: any, setModalActive: any }) {

  const dispatch = useDispatch();
  const onSubmit = async (values: any) => {
    function createEntry() {
      return (dispatch: any) => postUser(values).then((res: any) => {
        dispatch({ type: 'ADD_USERS', payload: values })
      })
    }
    dispatch(createEntry());
  };
  
  return (
    <Form
      onSubmit={onSubmit}
      validate={validate}
      render={({ handleSubmit, form, submitting, pristine }) => (
        <form onSubmit={handleSubmit} noValidate>
          <Paper style={{ padding: 24 }}>
            <div>
              {formFields.map((item, idx) => (
                <div key={idx} >
                  {item.field}
                </div>
              ))}
              <Grid item style={{ marginTop: 24 }}>
                <Button
                  type="button"
                  variant="contained"
                  onClick={form.reset}
                  disabled={submitting || pristine}
                >
                  Сброс
                  </Button>
              </Grid>
              <Grid item style={{ marginTop: 24 }}>
                <Button
                  variant="contained"
                  color="primary"
                  type="submit"
                  disabled={submitting}
                >
                  Добавить контакт
                  </Button>
              </Grid>
            </div>
          </Paper>
        </form>
      )}
    />
  );
}