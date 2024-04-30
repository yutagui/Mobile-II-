import React from 'react';
import {search} from 'ionicons/icons'
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonButton, IonIcon, IonInput, IonAvatar, IonImg, IonList, IonItem, IonLabel } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="secondary">
          <IonTitle>Procurar</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="dark">
        {/* <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 2</IonTitle>
          </IonToolbar>
        </IonHeader> */}
        <IonCard>
          <IonInput placeholder='Digite uma música'/>
          <IonButton routerLink='/tab6'>
            <IonIcon icon={search}/>
          </IonButton>
        </IonCard>
      </IonContent>
        
      <IonList>

        <IonTitle className='titulo'>Buscas Recentes</IonTitle>

          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://i.scdn.co/image/ab67616d0000b27302e44464bcac91d2414582ab"/>
            </IonAvatar>
            <IonLabel>
              Derek - TRAP THE FATO
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://th.bing.com/th/id/OIP.tzrBaw6aepGIXtPuPBth5QHaHa?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
              Grupo Revelação - Coração Radiante
            </IonLabel>
          </IonItem>

          <IonItem>
            <IonAvatar slot="start">
              <IonImg src="https://th.bing.com/th/id/OIP.tFsUFuj4wsC57Db1TwLmaQHaEK?rs=1&pid=ImgDetMain"/>
            </IonAvatar>
            <IonLabel>
              Simone Mendes - Pior Parte 
            </IonLabel>
          </IonItem>

          </IonList>
    
     

      <IonButton routerLink='/tab8' color='medium'>
        Exibir mais 
      </IonButton>

    </IonPage>
  );
};

export default Tab2;
