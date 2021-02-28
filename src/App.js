import './App.css';
import Beers from './components/Beers'

function App() {
  // constructor(props) {
  //   super(props)
  
  //   this.state = {
  //     arrayOfBeers: []
  //   }
  // }

  // render(){
    return (
      <div className="Punk">
        <h1 className="title">On Draft: </h1>
        <Beers />
      </div>
    )
  // }
}

export default App;
