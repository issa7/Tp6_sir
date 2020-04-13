import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PokemonserviceService } from './pokemonservice.service';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IssaBAKComponent } from './issa-bak/issa-bak.component';
import { FormsModule } from '@angular/forms';
import { FilterPokemonPipePipe } from './filter-pokemon--pipe.pipe';
import { PokemonIdComponent } from './pokemon-id/pokemon-id.component';

@NgModule({
  declarations: [
    AppComponent,
    IssaBAKComponent,
    FilterPokemonPipePipe,
    PokemonIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule ,
    HttpClientModule
  ],

  providers: [PokemonserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
