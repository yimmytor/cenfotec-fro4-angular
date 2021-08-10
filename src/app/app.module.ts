import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { PrincipalModule } from './principal/principal.module';
import { FooterModule } from './footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeaderModule,
    PrincipalModule,
    FooterModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
