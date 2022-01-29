import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes,  Route,} from "react-router-dom";
import ProdcutScreen from './screens/ProdcutScreen';

export default function App() {
  return (
    <Router >
      {/* Warning: Expected `onClick` listener to be a function, instead got a value of `string` type */}
      <Header />
      

      <main className='container ml-auto mr-auto min-h-screen'>
        <Routes>
          <Route path="/" element={<HomeScreen /> } />
          <Route path="product/:id" element={<ProdcutScreen /> } />

        </Routes>
        
      </main>

      <Footer />
    </Router>
  )
}
