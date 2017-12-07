import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AlphaComponent } from './alpha/alpha.component';
import { BetaComponent } from './beta/beta.component';
import {DataService} from './data.service';
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http'
import { GammaComponent } from './gamma/gamma.component'; // <-- Import HttpModule
import {NumbersService} from './numbers.service';
import {GoldService} from './Gold.service';
import {GitService} from './Git.service';



@NgModule({
  declarations: [
    AppComponent,
    AlphaComponent,
    BetaComponent,
    GammaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    HttpModule,
    HttpClientModule,
  ],
  providers: [DataService,NumbersService,GoldService,GitService],
  bootstrap: [AppComponent]
})
export class AppModule { }
