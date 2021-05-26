import React from 'react'
import Home from './pageRenders/Home'
import Auth from './pageRenders/auth'


const App = () => {

   const [pageToRender, setPageToRender] = React.useState(Home);
   const authPageRedirect = () => {
      setPageToRender(Auth);
   }

   return (
      <React.Fragment>
         {pageToRender}
      </React.Fragment>
   )
}

export authPageRedirect

export default App;
