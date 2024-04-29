import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonLabel, IonTabBar, IonIcon, IonItem, IonTabs } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pause } from 'ionicons/icons';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src='https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab'/>
      <IonContent>
        <IonTitle className='tituloMusica'>BARRAS E BARRAS</IonTitle>
        <IonText className='subtituloMusica'>Derek - TRAP THE FATO</IonText>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
      {/* <IonList> */}
        <IonItem>
            <IonIcon aria-hidden="true" icon={pause}/>
            <IonLabel>  Derek - BARRAS E BARRAS</IonLabel>
        </IonItem>
      {/* </IonList> */}
    </IonPage>
  );
};

export default Tab3;
