import { browser, element, by } from 'protractor';

export class TmpAngularWithSassPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dfa-root h1')).getText();
  }
}
