import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonCard  } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';

const Tab5: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Login </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="medium">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 5</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonCard>
            <IonInput placeholder='Digite o seu login'/>
            <IonInput placeholder='Digite a sua senha' type='password'/>
                
        </IonCard>
      </IonContent>
      <IonButton routerLink='/tab1' color='success'>
        Logar
      </IonButton>
    </IonPage>
  );
};

export default Tab5;
