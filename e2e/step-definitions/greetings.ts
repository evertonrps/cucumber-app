import { binding, given, then, when } from "cucumber-tsflow";
import { browser, WebElement, by } from "protractor";
import { element } from "@angular/core/src/render3/instructions";
import { HomeComponent } from "src/app/home/home.component";
import * as HomeX from '../pages/helper.page';

let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

@binding()
class GreetingSteps {

    @given(/I am on the Home page/)
    public name(): void {
        HomeX.homePageObject().get();

        //browser.get('http://localhost:4200/');
    };

    @when(/I click on link greeting/)
    public clickOnLink(): void {
        browser.driver.findElement(by.xpath("/html/body/app-root/app-main/div/main/app-home/a[2]")).click();
    };

    @when(/I write Tom in the name input/)
    public writeNameInput(): void {
    }

    @when(/I click on greet button/)
    public clickGreetButton(): void {
    }

    @then(/the greeting should be "([^"]*)"$/)
    public greetingShouldBe(name:string): void {
    }
}

export default GreetingSteps;
