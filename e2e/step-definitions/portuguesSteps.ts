
import { binding, given, then } from "cucumber-tsflow";
import { browser } from "protractor";
let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

@binding()
class PortuguesSteps{
    @given(/que navego ate o google/)
    /**
     * NavegaAteSite
     */
    public NavegaAteSite():void {
        browser.get('www.google.com.br');
       // console.log("navego ate o google")
    }

    @then(/verifico se estou na pagina correta/)
    /**
     * VerificoSeEstouNaPaginaCorreta
     */
    public VerificoSeEstouNaPaginaCorreta():void {         
       //let url = await browser.getCurrentUrl().then((resultado)=> {console.log("resultado: "+resultado);});

      // expect(url).to.equal("www.google.com.br");
      return expect(browser.getCurrentUrl()).to.eventually.equal("www.google.com.b1r");
    }
}

export default PortuguesSteps;