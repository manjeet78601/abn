import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
// import { InsuranceCalculatorComponent } from './insurance-calculator/insurance-calculator.component';
import { LandingComponent } from './landing/landing.component';
// import { FinancialBudgetComponent } from './financial-budget/financial-budget.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';
import { HealthQuestionsComponent } from './health-questions/health-questions.component';
import { TotalBudgetCalculatorComponent } from './total-budget-calculator/total-budget-calculator.component';
import { QuoteComponent } from './quote/quote.component';
import { EsignatureComponent } from 'src/app/components/esignature/esignature.component';
import { HanumaanChalisaComponent } from './hanumaan-chalisa/hanumaan-chalisa.component';
import { BanjrangBaanComponent } from './banjrang-baan/banjrang-baan.component';
import { SunderkandComponent } from './sunderkand/sunderkand.component';
import { HanumaanAshtakComponent } from './hanumaan-ashtak/hanumaan-ashtak.component';
import { HanumaanArtiComponent } from './hanumaan-arti/hanumaan-arti.component';
import { RamayanArtiComponent } from './ramayan-arti/ramayan-arti.component';

const routes: Routes = [
  // {
  //   path: 'insurance-calculator',
  //   component: InsuranceCalculatorComponent
  // },
  {
    path: 'hanumaan-chalisa',
    component: HanumaanChalisaComponent
  },
  // {
  //   path: 'budget',
  //   component: FinancialBudgetComponent
  // },
  {
    path: 'bajrang-baan',
    component: BanjrangBaanComponent
  },
  {
    path: 'chooseplan',
    component: ChoosePlanComponent
  },
  {
    path: 'sunderkand',
    component: SunderkandComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'esign',
    component: EsignatureComponent
  },
  {
    path: 'help',
    component: HelpComponent
  },
  // {
  //   path: 'total-budget',
  //   component: TotalBudgetCalculatorComponent
  // },
  // {
  //   path: 'health',
  //   component: HealthQuestionsComponent
  // },
  {
    path: 'hanumaan-ashtak',
    component: HanumaanAshtakComponent
  },
  // {
  //   path: 'quote',
  //   component: QuoteComponent
  // },
  {
    path: 'hanumaan-arti',
    component: HanumaanArtiComponent
  },
  {
    path: 'ramayan-arti',
    component: RamayanArtiComponent
  },
  {
    path: '',
    component: LandingComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
