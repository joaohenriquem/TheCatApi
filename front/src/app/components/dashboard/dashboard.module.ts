import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { MessageHourComponent } from './message-hour/message-hour.component';
import { ImgProfileComponent } from './img-profile/img-profile.component';
import { SharedMaterialModule } from 'src/app/shared/shared-material/shared-material.module';
import { CardViewComponent } from './card-view/card-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CurrencyMaskModule, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask';

import localePt from '@angular/common/locales/pt'
import { ShortenerPipe } from 'src/app/shared/pipes/shortener.pipe';
import { InputWidthDirective } from 'src/app/shared/input-width.directive';

import { CatsComponent } from './cats/cats.component';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list'; 
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatRadioModule} from '@angular/material/radio';

registerLocaleData(localePt, 'pt')

export const CustomCurrencyMaskConfig = {
  align: 'left',
  allowNegative: true,
  decimal: ',',
  precision: 2,
  prefix: 'R$ ',
  suffix: '',
  thousands: '.',
}

@NgModule({
  declarations: [
    DashboardComponent,
    MenuComponent,
    FooterComponent,
    MessageHourComponent,
    ImgProfileComponent,
    CardViewComponent,
    ShortenerPipe,
    InputWidthDirective,
    CatsComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedMaterialModule,
    ReactiveFormsModule,
    FormsModule,
    CurrencyMaskModule,
    MatCardModule,
    MatGridListModule,
    MatTooltipModule,
    MatRadioModule
  ],
  providers: [
    {
      provide: CURRENCY_MASK_CONFIG,
      useValue: CustomCurrencyMaskConfig
    },
    {
      provide: LOCALE_ID,
      useValue: 'pt'
    }
  ]
})
export class DashboardModule { }
