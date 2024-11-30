import './App.css';
import Content from './Components/Content/Content';
import Dynasty from './Components/Dynasty/Dynasty';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Saint from './Components/Saint/Saint';
import Service from './Components/Service/Service';
import Welcome from './Components/Welcome/Welcome';

function App() {
  return (
    <div classname='App'>
      <Header/>
      <Content/>
      <Welcome/>
      <Service/>
      <Saint/>
      <Dynasty/>
      <Footer/>
    </div>
  );
}

export default App;
