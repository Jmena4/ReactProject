import React from 'react';
import { Button, Icon } from 'semantic-ui-react';
class GoogleAuth extends React.Component {
    state = { isSignedIn: null };
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '673316991491-gvjvjtqempti9nuke69fiu31juc6rvaj.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get() });
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange = () => {
        this.setState({ isSignedIn: this.auth.isSignedIn.get() });
    };
    onSignIn =()=>{
        
    }
    renderAuthButton() {
        if (this.state.isSignedIn === null) {
            return <div>I dont know if we are signed in</div>;
        } else if (this.state.isSignedIn) {
            return (
                <Button color='red'>
                    <Icon name="google" />
                    Sign Out
                </Button >
            );
        } else {
            return (
                <Button color='green'>
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

export default GoogleAuth;