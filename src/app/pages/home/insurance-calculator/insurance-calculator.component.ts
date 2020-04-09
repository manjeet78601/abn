import { Component, OnInit } from '@angular/core';
import { HomeConstants } from '../../home/home.constants';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-insurance-calculator',
  templateUrl: './insurance-calculator.component.html',
  styleUrls: ['./insurance-calculator.component.scss'],
})
export class InsuranceCalculatorComponent implements OnInit {
  BTN = HomeConstants.BTN;
  PAGE_BOTTOM1 = HomeConstants.PAGE_BOTTOM1;
  PAGE_SUBTITLE = HomeConstants.PAGE_SUBTITLE;
  PAGE_HEADER = HomeConstants.LIFE_INSURANCE_HEADER;
  PAGE_SUB_HEADER = HomeConstants.LIFE_INSURANCE_SUB_HEADER;
  STEP1_BOTTOM = HomeConstants.STEP1_BOTTOM;
  BTTN = HomeConstants.BTTN;
  progress = 0;
  totalCoverage = 0;
  INSURANCE_CALCULATOR = HomeConstants.INSURANCE_CALCULATOR;
  isUerLoggedIn: boolean;
  constructor(private router: Router, private navigationService: MenuService, private auth: AuthService) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() { }

  InsuranceBudget() {
    this.navigationService.setCompletedMenu('Life Insurance Calculator');
    this.router.navigate(['/home/budget']);

  }

  incrementProgress(progress) {
    if (this.progress < 100 && this.progress < progress) {
      this.progress = progress;
    }

  }

  calculateCoverage() {
    const annualIncome = this.INSURANCE_CALCULATOR.QUESTIONS[0].VALUE;
    const years = this.INSURANCE_CALCULATOR.QUESTIONS[1].VALUE;
    const debt = this.INSURANCE_CALCULATOR.QUESTIONS[2].VALUE;
    const childrensFuture = this.INSURANCE_CALCULATOR.QUESTIONS[3].VALUE;
    const funeraryCosts = this.INSURANCE_CALCULATOR.QUESTIONS[4].VALUE;
    const savings = this.INSURANCE_CALCULATOR.QUESTIONS[5].VALUE;
    const existingPolicy = this.INSURANCE_CALCULATOR.QUESTIONS[6].VALUE;
    const additionalAnnualIncome = this.INSURANCE_CALCULATOR.QUESTIONS[7].VALUE;

    const totalCoverage = (annualIncome * years)
      + debt + childrensFuture + funeraryCosts - savings - existingPolicy - additionalAnnualIncome;
    this.totalCoverage = totalCoverage > 0 ? totalCoverage : 0;

  }
  trackProgressBar() {
    const completedQuescount = this.INSURANCE_CALCULATOR.QUESTIONS.filter(data => {
      return !!data.VALUE;
    });
    this.progress = Math.floor(12.5 * completedQuescount.length);
  }
  createAccount() {
    this.router.navigate(['/auth/signup']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }

}



