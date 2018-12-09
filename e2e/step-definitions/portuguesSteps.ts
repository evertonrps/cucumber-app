
import { binding, given, then, before, after } from "cucumber-tsflow";
import { browser, WebElement, by } from "protractor";
import { element } from "@angular/core/src/render3/instructions";
import * as HomeX from '../pages/helper.page';
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

@binding()
class PortuguesSteps{
  
  // @after()
  // public beforeAllScenarios(): void {
  //   browser.driver.quit();
  // }

    @given(/que navego ate a pagina de carros/)
    public NavegaAteSite():void {
      HomeX.homePageObject().get();
         //browser.get('http://localhost:4200/');
         browser.waitForAngular();
         browser.driver.findElement(by.xpath("/html/body/app-root/app-main/div/main/app-home/a[1]")).click();
       // console.log("navego ate o google")
    }

    @then(/verifico se estou na pagina correta/)
    public VerificoSeEstouNaPaginaCorreta():void {         
       //let url = await browser.getCurrentUrl().then((resultado)=> {console.log("resultado: "+resultado);});
       browser.waitForAngular();
       //let searchbox : WebElement = null;
       return expect(browser.driver.findElement(by.xpath("/html/body/app-root/app-main/div/main/app-carros/p")).getText()).to.eventually.equal("carros works!");
       //searchbox= (element)browser.driver.executeAsyncScript("return document.evaluate('/html/body/app-root/div[2]/label', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;", searchbox);
       
      // expect(url).to.equal("www.google.com.br");
      //return expect(browser.getCurrentUrl()).to.eventually.equal("www.google.com.b1r");

      // return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
}

export default PortuguesSteps;