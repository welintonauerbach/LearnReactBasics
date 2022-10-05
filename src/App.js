import logo from './logo.svg';
import './App.css';

import AppModuleA from './modules/app-module01/AppModule';
import AppModuleB from './modules/app-module01/AppModule';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />        
        <AppModuleA />
        <AppModuleB />
      </header>          
    </div>
  );
}

export default App;
