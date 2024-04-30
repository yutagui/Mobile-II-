import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonImg, IonList, IonItem, IonLabel} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Sua Lista</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        <IonImg src='https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab'/>
        <IonList>
          <IonItem routerLink='/Tab3'>
            <IonLabel>
              BARRAS E BARRAS
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
              TRAP THE FATO
            </IonLabel>
          </IonItem>
          <IonItem>
            <IonLabel>
            DE JET NO PORSCHE
            </IonLabel>
          </IonItem>
        </IonList>
        
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 4</IonTitle>
          </IonToolbar>
        </IonHeader> */}
      </IonContent>
    </IonPage>
  );
};

export default Tab4;