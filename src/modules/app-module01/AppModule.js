import './AppModule.css'

import CompA from '../app-comp-a/app-comp-a';

function AppModule() {
  return (
    <div className="AppModule">
      <h1>App Module 01</h1>      
        <p>
          <txt-red>Testando HTML</txt-red>
        </p>
        <p>
           <txt-green> Sério que é isso?</txt-green>
        </p>                        
          <CompA name='Weto Auerbach' document={321654987}/>          
    </div>
  );
}

export default AppModule;