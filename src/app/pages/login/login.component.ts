import { DOCUMENT } from '@angular/common';
import { Component, OnInit, OnDestroy, Inject } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnInit() {
    this.document.body.classList.add('bg-light');
  }
  ngOnDestroy() {
    this.document.body.classList.remove('bg-light');
  }


}
