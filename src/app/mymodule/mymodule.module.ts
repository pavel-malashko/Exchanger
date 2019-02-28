import { NgModule } from '@angular/core';
import { SharedModuleModule } from '../shared-module/shared-module.module'
import { SelectTempComponent} from './select-temp/select-temp.component'
import { HomePageComponent} from '../home-page/home-page.component'
import { FormsModule } from '@angular/forms';
import { WalletService } from './select-temp/iwallet.service'
import { ExserviceService } from './exchange/exservice.service'
import { RouterModule } from '@angular/router';
import { ExchangeComponent } from './exchange/exchange.component';

const  routes = [
  { path: '', component: HomePageComponent, pathMatch: 'full'},
  { path: 'wallet', component: SelectTempComponent },
  { path: 'exchange', component: ExchangeComponent },
];
@NgModule({
  declarations: [
    SelectTempComponent,
    ExchangeComponent
  ],
  imports: [
    SharedModuleModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[
    SelectTempComponent
  ],
  providers: [WalletService,ExserviceService],
})
export class MymoduleModule { }
