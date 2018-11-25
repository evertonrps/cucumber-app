
import { binding, given, then } from "cucumber-tsflow";
import { browser } from "protractor";

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
        console.log("verifico se estou no google")
    }
}

export default PortuguesSteps;