import Footer from './footer';
import Home from './home';
import Navbar from './navbar';
import Error from './pages/error';
import Items from './pages/items';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Talismans from './pages/talismans';
import Sorceries from './pages/sorceries';
import Incantations from './pages/incantations';
import AshesofWar from './pages/ashesofwar';
import ItemDetails from './pages/itemdetails';

function App() {
  return (
   <div>
     <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/talismans" element={<Talismans />} />
            <Route path="/sorceries" element={<Sorceries />} />
            <Route path="/incantations" element={<Incantations />} />
            <Route path="/Ashes%20of%20War" element={<AshesofWar />} />
            <Route path="/items/:name" exact element={<Items />} />
            <Route path="/itemdetails/:name" exact element={<ItemDetails />} />
            <Route path="*" element={<Error />} />
          </Routes>
        </div>
        <Footer />
      </div>
     </Router>
   </div>
  );
}

export default App;
