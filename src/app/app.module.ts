import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { PrincipalModule } from './principal/principal.module';
import { FooterModule } from './footer/footer.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PrincipalModule,
    FooterModule,
    HttpClientModule   
  ],
  providers: [],
  bootstrap: [AppComponent]  
})
export class AppModule { }
