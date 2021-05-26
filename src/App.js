import Ceil from './Assets/svgs/ceiling.svg'
import Button from './components/button/button'

const App = () => {
   return <>
    <img src={Ceil} alt="" />
    <Button type="submit" value="Login as Customer" />
   </>
}

export default App;
