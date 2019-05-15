import React from 'react';
import { Menu } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';

const Header = () => {
    return (
        <div >
            <Menu pointing secondary>
                <Link to="/" className="item">
                    Streamy
                </Link>
                <Menu.Menu position='right'>
                    <Link to="/" className="item">
                        All Streams
                    </Link>
                    <div> <GoogleAuth /></div>
                </Menu.Menu >
            </Menu>
        </div>

        // <div className="ui secondary pointing menu">
        //     <Link to="/" className="item">
        //         Streamy
        //     </Link>
        //     <div className="right menu">
        //         <Link to="/" className="item">
        //             All Streams
        //         </Link>
        //         {/* <GoogleAuth /> */}
        //     </div>
        // </div>
    );
};

export default Header;