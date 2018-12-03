
import { binding, given, then } from "cucumber-tsflow";
import { browser, WebElement, by } from "protractor";
import { element } from "@angular/core/src/render3/instructions";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

@binding()
class PortuguesSteps{
    
    @given(/que navego ate a pagina de carros/)
    public NavegaAteSite():void {
         browser.get('http://localhost:4200/');
       // console.log("navego ate o google")
    }

    @then(/verifico se estou na pagina correta/)
    /**
     * VerificoSeEstouNaPaginaCorreta
     */
    public VerificoSeEstouNaPaginaCorreta():void {         
       //let url = await browser.getCurrentUrl().then((resultado)=> {console.log("resultado: "+resultado);});

       //let searchbox : WebElement = null;
       return expect(browser.driver.findElement(by.xpath("/html/body/app-root/app-main/div/main/app-home/a[1]")).getText()).to.eventually.equal("Carros");
       //searchbox= (element)browser.driver.executeAsyncScript("return document.evaluate('/html/body/app-root/div[2]/label', document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;", searchbox);
       
      // expect(url).to.equal("www.google.com.br");
      //return expect(browser.getCurrentUrl()).to.eventually.equal("www.google.com.b1r");

      // return document.evaluate(path, document, null, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    }
}

export default PortuguesSteps;