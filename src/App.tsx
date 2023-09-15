
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import AppBody from './components/body/body';
import Header from './components/header/header';
import SideBar from './components/side-bar/side-bar';

function App() {
  return (
    <BrowserRouter>
      <div className='flex items-start'>
        <div className="max-w-sm h-screen">
          <SideBar />
        </div>
        <div className='flex flex-col w-full h-screen'>
          <Header />
          <AppBody />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
