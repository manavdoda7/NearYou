import React from 'react'
import Home from './pageRenders/Home'
import Auth from './pageRenders/auth'


const App = () => {

   const authPageRedirect = () => {
      console.log('abc')
      setPageToRender(Auth);
   }

   const [pageToRender, setPageToRender] = React.useState(Home(authPageRedirect));
   

   return (
      <React.Fragment>
         {pageToRender}
      </React.Fragment>
   )
}


export default App;
