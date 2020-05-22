import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';
// import { InsuranceCalculatorComponent } from './insurance-calculator/insurance-calculator.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/sharedModules/shared.module';
// import { FinancialBudgetComponent } from './financial-budget/financial-budget.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HealthQuestionsComponent } from './health-questions/health-questions.component';
import { TotalBudgetCalculatorComponent } from './total-budget-calculator/total-budget-calculator.component';
import { QuoteComponent } from './quote/quote.component';
import { ChatService } from '../../services/chat.service';
import { EsignatureComponent } from 'src/app/components/esignature/esignature.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { HanumaanChalisaComponent } from './hanumaan-chalisa/hanumaan-chalisa.component';
import { BanjrangBaanComponent } from './banjrang-baan/banjrang-baan.component';
import { SunderkandComponent } from './sunderkand/sunderkand.component';
import { HanumaanAshtakComponent } from './hanumaan-ashtak/hanumaan-ashtak.component';
import { HanumaanArtiComponent } from './hanumaan-arti/hanumaan-arti.component';
import { RamayanArtiComponent } from './ramayan-arti/ramayan-arti.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    NgbModule,
    ChartsModule
  ],
  declarations: [
    HomePage,
    LandingComponent,
    HanumaanChalisaComponent,
    BanjrangBaanComponent,
    HanumaanAshtakComponent,
    HanumaanArtiComponent,
    RamayanArtiComponent,
    // InsuranceCalculatorComponent,
    // FinancialBudgetComponent,
    SunderkandComponent,
    ChoosePlanComponent,
    ContactComponent,
    HealthQuestionsComponent,
    HelpComponent,
    TotalBudgetCalculatorComponent,
    QuoteComponent,
    EsignatureComponent
  ],
  providers: [ChatService]
})
export class HomePageModule { }
