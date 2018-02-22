//App Modules
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { IonicStorageModule } from '@ionic/storage';

//Pages
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProfilePage } from '../pages/profile/profile';
import { MyPostsPage } from '../pages/my-posts/my-posts';
import { FavoritesPage } from '../pages/favorites/favorites';
import { FeedformPage } from '../pages/feedform/feedform';
import { LoginPage } from '../pages/login/login';

//Ionic Plugins
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LocalNotifications } from '@ionic-native/local-notifications';

//Providers
import { MomboProvider } from '../providers/mombo/mombo';
import { UserProvider } from '../providers/user/user';
import { ProcessHttpmsgProvider } from '../providers/process-httpmsg/process-httpmsg';
import { MyPostsProvider } from '../providers/my-posts/my-posts';
import { FavoritesProvider } from '../providers/favorites/favorites';

//Base URL
import { baseURL } from '../shared/baseurl';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProfilePage,
    MyPostsPage,
    FavoritesPage,
    FeedformPage,
    LoginPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpClientModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProfilePage,
    MyPostsPage,
    FavoritesPage,
    FeedformPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    MomboProvider,
    UserProvider,
    ProcessHttpmsgProvider,
    LocalNotifications,
    MyPostsProvider,
    FavoritesProvider,
    { provide: 'BaseURL', useValue: baseURL }    
    
  ]
})
export class AppModule {}
