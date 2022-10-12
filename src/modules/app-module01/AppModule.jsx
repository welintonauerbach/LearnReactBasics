import { Component } from 'react';
import './AppModule.css'
import AppControlFrame from '../app-comp-frame/app-control-frame';
import ShowUser from '../AppShowUser'

class AppModule extends Component {
      render() {
            const { fromName, dataUsers } = this.props;

            return (
                  <div className="AppModule">
                        <h1>App Module 01 - {fromName}</h1>
                        <AppControlFrame frameName="Lista de Usuários">
                              {
                                    dataUsers
                                          .map(user => {
                                                return (
                                                      <ShowUser key={user.id} id={user.id} name={user.name} document={user.document} pass={user.pass} />
                                                )
                                          })
                              }
                        </AppControlFrame>
                  </div>
            );
      }
}


export default AppModule

