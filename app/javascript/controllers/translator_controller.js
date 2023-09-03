import ApplicationController from './application_controller'

/* This is the custom StimulusReflex controller for the Translator Reflex.
 * Learn more at: https://docs.stimulusreflex.com
 */
export default class extends ApplicationController {

    static targets = ['message']

  connect () {
    super.connect()
    // add your code here, if applicable
  }

  translate (e) {
    e.preventDefault()
    document.getElementById('spin').classList.remove("hidden");
    document.getElementById('button_translate').disabled = true;
    this.stimulate('Translator#translate', this.messageTarget.value)
  }
}
