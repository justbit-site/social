import React from 'react';
import Formsy from 'formsy-react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FormsyText from 'formsy-material-ui/lib/FormsyText';
import RaisedButton from 'material-ui/RaisedButton';
import { blueA400, redA400 } from 'material-ui/styles/colors';

export class Base extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      canSubmit: true,
      email: '',
      password: '',
      passwordConfirmation: '',
      error: '',
      isAlert: false
    };
  }

  enableSubmitBtn(){
    this.setState({
      canSubmit: true
    });
  }

  disableSubmitBtn(){
    this.setState({
      canSubmit: false
    });
  }

  syncField(ev, fieldName){
    let element = ev.target;
    let value = element.value;

    let jsonState = {};
    jsonState[fieldName] = value;
    this.setState(jsonState);
  }

  reload(){
    window.location.href = window.location.href;
  }
}

export const styles = {
  buttonTop: {
    marginTop: '1rem'
  },
  underlineStyle: {
    borderColor: blueA400
  },
  floatingLabelFocusStyle: {
    color: blueA400
  },
  leftSpace: {
    marginLeft: '1em'
  },
  red: redA400
};
