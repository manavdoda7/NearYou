import React from 'react'
import ReactDOM from 'react-dom'

// Bootstrap Bundles
import 'bootstrap/dist/css/bootstrap.min.css'
// // import App from 'App'
// import $ from 'jquery';
// import Popper from 'popper.js';
// import 'bootstrap/dist/js/bootstrap.bundle.min';

import Ceiling from './components/ceiling/ceiling'
const Home = () => {
   return <div>
       <div className="nav">
           <Ceiling/>
       </div>
    </div>
}

ReactDOM.render(<Home/>, document.getElementById('root'));
