import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonImg, IonText, IonLabel, IonTabBar, IonIcon, IonItem, IonTabs } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { pause } from 'ionicons/icons';


const Tab7: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Reproduzindo</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonImg src='https://th.bing.com/th/id/OIP.VTVIFt7URvVfYxIaqLT43AHaHW?rs=1&pid=ImgDetMain'/>
      <IonContent>
        <IonTitle className='tituloMusica'>Boate Azul</IonTitle>
        <IonText className='subtituloMusica'>Edson e Hudson</IonText>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
      {/* <IonList> */}
        <IonItem>
            <IonIcon aria-hidden="true" icon={pause}/>
            <IonLabel> Edson e Hudson - Boate Azul </IonLabel>
          </IonItem>
      {/* </IonList> */}
    </IonPage>
  );
};

export default Tab7;
