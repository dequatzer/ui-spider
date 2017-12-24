import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CssTutorialsComponent } from './css-tutorials/css-tutorials.component';
import { BootstrapTutorialsComponent } from './bootstrap-tutorials/bootstrap-tutorials.component';
import { SassTutorialsComponent } from './sass-tutorials/sass-tutorials.component';
import { AboutComponent } from './about/about.component';
import { HtmlComponent } from './html/html.component';
import { TagDoctypeComponent } from './html/tag-doctype/tag-doctype.component';
import { HtmlIntroComponent } from './html/html-intro/html-intro.component';

const appRoutes:Routes = [
  { path : '' , component : HomeComponent },
  { path : 'home' , component : HomeComponent },
  { path : 'html', component : HtmlComponent,
      children: [
          { path : '', component : HtmlIntroComponent},
          { path : 'html-intro', component : HtmlIntroComponent},
          { path : 'tag-doctype', component : TagDoctypeComponent}
      ]
  },
  { path : 'css-tutorials', component : CssTutorialsComponent},
  { path : 'bootstrap-tutorials', component : BootstrapTutorialsComponent},
  { path : 'sass-tutorials', component : SassTutorialsComponent},
  { path : 'about', component : AboutComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CssTutorialsComponent,
    BootstrapTutorialsComponent,
    SassTutorialsComponent,
    AboutComponent,
    HtmlComponent,
    TagDoctypeComponent,
    HtmlIntroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes) // <-- installs Router routes, components and services
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
