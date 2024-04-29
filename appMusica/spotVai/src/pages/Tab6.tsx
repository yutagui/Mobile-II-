import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, 
            IonImg, IonAvatar, IonLabel} from '@ionic/react';
import './Tab2.css';

const Tab6: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Resultado </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 5</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonList>
            <IonItem routerLink='/tab7' slot='start'>
                <IonAvatar slot="start">
                    <IonImg src="https://th.bing.com/th/id/OIP.VTVIFt7URvVfYxIaqLT43AHaHW?rs=1&pid=ImgDetMain"/>
                </IonAvatar>
                <IonLabel>
                    Boate Azul
                </IonLabel>
            </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab6;
