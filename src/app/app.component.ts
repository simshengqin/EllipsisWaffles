import {Component, ChangeDetectorRef, OnInit, OnDestroy, ElementRef, ViewChild} from '@angular/core';
import { onAuthUIStateChange, CognitoUserInterface, AuthState } from '@aws-amplify/ui-components';
import {Router} from "@angular/router";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'authenticator';
  user: CognitoUserInterface;
  authState: AuthState;
  loggedIn = false;
  isLoginDelayActive = false;
  @ViewChild('file') file: ElementRef;
  constructor(private ref: ChangeDetectorRef,
              private router: Router) {

}

  async ngOnInit() {
    onAuthUIStateChange(async (authState, authData) => {
      this.authState = authState;
      this.loggedIn = false;
      if (this.authState === 'signedin') { // || this.authState === 'signin') {
        this.loggedIn = true;
        this.user = authData as CognitoUserInterface;
        localStorage.setItem('username', this.user.username); //setting session name -->cookies
        if (this.user.username.includes('company')) {
          localStorage.setItem('role', 'company');
          this.router.navigate(['/company/view-transactions'])
        }
        else {
          localStorage.setItem('role', 'user');
          this.router.navigate(['/user/home'])
        }

        // if (username)
        this.ref.detectChanges();
      }

    });
  }
  ngOnDestroy() {
    return onAuthUIStateChange;
  }
}
