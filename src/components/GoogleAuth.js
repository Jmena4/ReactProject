import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions'
import { Button, Icon } from 'semantic-ui-react';
class GoogleAuth extends React.Component {


  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '673316991491-gvjvjtqempti9nuke69fiu31juc6rvaj.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return <div>I dont know if we are signed in</div>;
    } else if (this.props.isSignedIn) {
      return (
        <Button onClick={this.onSignOutClick} color='red'>
          <Icon name="google" />
          Sign Out
                </Button >
      );
    } else {
      return (
        <Button onClick={this.onSignInClick} color='green'>
          <Icon name="google" />
          Sing In with Google
                </Button>
      );
    }
  }
  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);