import React from 'react'
import ReactDOM from 'react-dom'

// Bootstrap Bundles
import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import App from './App'
const Home = () => {
   return <App/>
}

ReactDOM.render(<Home/>, document.getElementById('root'));
