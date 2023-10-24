import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './App.css'
import HomeScreen from './screens/HomeScreen'
import Navbar from './components/Navbar/Navbar'
import ErrorScreen from './screens/ErrorScreen'

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/"><HomeScreen /></Route>
        <Route path="*"><ErrorScreen /></Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App
