import './App.css';
import Header from './Header'
import Content from './Content';
import Footer from './footer';


function App() {
  const handleNamechane=()=>{
    const names=['kasu','girma','gite'];
    const int=Math.floor(Math.random()*3)
    return names[int]
  }
  return (
    <div className="App">
     <Header />
     <Content />
     <Footer />
    </div>
  );
}

export default App;
