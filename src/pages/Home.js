import React from 'react';
import Countries from '../components/Countries';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { Card, CardBody, CardTitle, CardSubtitle, Button, CardText } from 'reactstrap';
const Home = () => {
    return (
        <div>
            <Navigation/>
            <Logo/>
            <h1>Salut</h1>
            <Countries/>
        </div>
    );
};

export default Home;