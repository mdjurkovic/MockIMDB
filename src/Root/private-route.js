import React from 'react';
import {withAuthenticationRequired} from '@auth0/auth0-react';
import {Route} from 'react-router-dom';
import {Loading} from '../Loading';
import {Root} from './index';

const privateRoute = ({component, ...args})=> (
    <Route component={withAuthenticationRequired(component,{
        // eslint-disable-next-line react/display-name
        onRedirecting: () => <Loading/>,
    })} {...args}/>
);

export default privateRoute;