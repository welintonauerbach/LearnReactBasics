import logo from './logo.svg';
import './App.css';

import AppModuleA from './modules/app-module01/AppModule';

function App() {

// create array to 10 usersData
const usersData = [
      { id: 1, name: 'User 01', document: '123456789', pass: '123456' }, 
      { id: 2, name: 'User 02', document: '123456789', pass: '123456' }, 
      { id: 3, name: 'User 03', document: '123456789', pass: '123456' }, 
      { id: 4, name: 'User 04', document: '123456789', pass: '123456' }, 
      { id: 5, name: 'User 05', document: '123456789', pass: '123456' }, 
      { id: 6, name: 'User 06', document: '123456789', pass: '123456' },
      { id: 7, name: 'User 07', document: '123456789', pass: '123456' },
      { id: 8, name: 'User 08', document: '123456789', pass: '123456' },
      { id: 9, name: 'User 09', document: '123456789', pass: '123456' },
      { id: 10, name: 'User 10', document: '123456789', pass: '123456' }    
]

  return (
    <div className="App">
        <h1>Estudo de React Fundamentos</h1>
        <AppModuleA fromName='Este APP' dataUsers={usersData} />        
            
    </div>
  );
}

export default App;
