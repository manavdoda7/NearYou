import React from 'react'
import ReactDOM from 'react-dom'

// Bootstrap Bundles
import 'bootstrap/dist/css/bootstrap.min.css'
// import App from './App'
import $ from 'jquery';
import Popper from 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const Carousel = () => {
    return <h1 className = "h5 mx-3 my-3">Hello World</h1>
}

ReactDOM.render(<Carousel/>, document.getElementById('root'));
