import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomePageRoutingModule } from './home-routing.module';
// components
import { HomePage } from './home.page';
import { InsuranceCalculatorComponent } from './insurance-calculator/insurance-calculator.component';
import { LandingComponent } from './landing/landing.component';
import { SharedModule } from 'src/app/sharedModules/shared.module';
import { FinancialBudgetComponent } from './financial-budget/financial-budget.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { CompareQuotesComponent } from './compare-quotes/compare-quotes.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HealthQuestionsComponent } from './health-questions/health-questions.component';
import { TotalBudgetCalculatorComponent } from './total-budget-calculator/total-budget-calculator.component';
import { ChatDialogComponent } from './landing/landing.component';
// services
import { ChatService } from '../../services/chat.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    SharedModule,
    MatExpansionModule
  ],
  declarations: [
    HomePage,
    LandingComponent,
    InsuranceCalculatorComponent,
    FinancialBudgetComponent,
    ChoosePlanComponent,
    CompareQuotesComponent,
    HealthQuestionsComponent,
    ContactComponent,
    HelpComponent,
    TotalBudgetCalculatorComponent,
    ChatDialogComponent
  ],
  entryComponents: [ChatDialogComponent],
  exports:[ChatDialogComponent ],
  providers: [ChatService]
  
})
export class HomePageModule {}
