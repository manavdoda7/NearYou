import React from 'react'
import Ceil from './Assets/svgs/ceiling.svg'
import Door from './Assets/svgs/door.svg'
import lgrass from './Assets/svgs/grassleft.svg'
import rgrass from './Assets/svgs/grassright.svg'
import Button from './components/button/button'
import './CSS/index.css'

const App = () => {
   return <Home/>
}

const Home = () => {
   return (<React.Fragment>
    <div className="ceil">
      <img src={Ceil} alt="" className='ceilsvg'/>
      <Button type="button" value="eShop"/>
    </div>
    <section className="logreg">
      <div className="login-button">
         <Button type="submit" value="Login as Customer" />
         <Button type="submit" value="Login as Provider" />
      </div>
      <div style = {{'padding-top': '100px'}}>
         <h4>Not yet Registered ?</h4>
         <div className="sreg">
            <button>Register as a Seller or Service Provider Here >></button>
         </div>
      </div>
    </section>
    <section className="out">
    <section className="description">
    <div className="lft">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi beatae quidem id delectus eius repellendus!
         <img src={lgrass} style={{bottom:0, left:0}} alt="" />
      </div>
      <div className="centr">
            <img src={Door} alt="" />

      </div>
      <div className="ryt">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis eligendi id libero reiciendis eum cum!
         <img src={rgrass} style={{bottom:0, right:0}} alt="" />
      </div>
    </section>
    </section>
   </React.Fragment>)
}

export default App;
