import logo from './logo.svg';
import './App.css';
import Header from './component/Header';
import Footer from './component/Footer';


export default function App() {
  return (
    <div >
      <Header />
      <main className='container ml-auto mr-auto min-h-screen'>
        <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1>
      </main>

      <Footer />
    </div>
  )
}
