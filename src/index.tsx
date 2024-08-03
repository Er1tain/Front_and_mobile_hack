import React from 'react';
import { createRoot } from 'react-dom/client';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Welcome from './pages/Welcome';
import Reg from './pages/Reg';
import Auth from './pages/Auth';

import WorkerProfile from './pages/Worker/Profile';
import WorkerTasks from './pages/Worker/Tasks';
import CurrentTasks from './pages/Worker/CurrentTasks';
import ProgressBar from './pages/Worker/ProgressBar';

import EmployerProfile from './pages/Employer/Profile';
import PotentialWorkers from './pages/Employer/PotentialWorkers';
import MapOfPartners from './pages/Employer/MapOfPartners';
import CRUDvacancies from './pages/Employer/CRUDvacancies';
import CRUDobjects from './pages/Employer/CRUDobjects';
import BuilderObjects from './pages/Employer/BuilderObjects';


const container = document.getElementById('root');
// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
    
        <Route exact path="/">
          <Welcome/>
        </Route>

        <Route exact path='/reg'>
          <Reg/>
        </Route>

        <Route exact path='/auth'>
          <Auth/>
        </Route>

        {/*Маршруты специфичные для пользовательских ролей*/}
        {/*Сотрудник*/}
        <Route exact path='/worker'>
          <Route exact path='/profile'>
            <WorkerProfile/>
          </Route>

          <Route exact path='/tasks'>
            <WorkerTasks/>
          </Route>

          <Route exact path='/current_tasks'>
            <CurrentTasks/>
          </Route>

          <Route exact path='/progress_bar'>
            <ProgressBar/>
          </Route>
        </Route>

        {/*Работодатель*/}
        <Route exact path='/employer'>
          <Route exact path='/profile'>
            <EmployerProfile/>
          </Route>

          <Route exact path='/potential_workers'>
            <PotentialWorkers/>
          </Route>

          <Route exact path='/map_of_partners'>
            <MapOfPartners/>
          </Route>

          <Route exact path='/crud_vacancies'>
            <CRUDvacancies/>
          </Route>

          <Route exact path='/crud_objects'>
            <CRUDobjects/>
          </Route>

          <Route exact path='/builder_projects'>
            <BuilderObjects/>
          </Route>
          {/*Кандидатов на назначение лучше назаначать во всплывающем окне CandidatesForObjects на том же url*/}
        </Route>


      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
  </React.StrictMode>
);

