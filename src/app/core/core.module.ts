import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { LocalStorageService } from './local-storage/local-storage.service';
import { authReducer } from './auth/auth.reducer';
import { AuthEffects } from './auth/auth.effects';

export function getInitialState() {
  return LocalStorageService.loadInitialState();
}

@NgModule({
  imports: [
    // angular
    CommonModule,
    HttpClientModule,

    // ngrx
    StoreModule.forRoot({
      auth: authReducer
    }, { initialState: getInitialState }),
    EffectsModule.forRoot([AuthEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25 //  Retains last 25 states
    })
  ],
  declarations: [],
  providers: [LocalStorageService]
})
export class CoreModule { }
