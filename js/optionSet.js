export default class OptionSet extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        const clonedTemp = template.content.cloneNode(true);
        this.shadowRoot.appendChild(clonedTemp);
    }
    connectedCallback() {
    }
    disconnectedCalback() {
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
    get type() {
        return this.getAttribute('type');
    }
    set type(type) {
        if (type) {
            this.setAttribute('type', type);
        }
        else {
            this.removeAttribute('type');
        }
    }
    get exclude() {
        return Array.from(this.querySelector('#exclude').value || '');
    }
}
OptionSet.observedAttributes = ['type'];
function html(templateString) {
    const templateElement = document.createElement('template');
    templateElement.innerHTML = templateString[0];
    return templateElement;
}
const template = html `
<link rel="stylesheet" href="/css/optionSet.css"/>
<fieldset>
  <legend>
    <input type="checkbox" name="check" id="check" checked>
    <label for="check">Include NAME</label>
  </legend>
  <details>
    <summary>Options</summary>
    <div class="group">
      <input type="radio" class="group-radio" name="amount" id="amount-min-max" value="min-max">
      <label for="amount-min-max">Minimum</label>
      <input type="number" id="min" value="3">
      <label for="amount-min-max">Maximum</label>
      <input type="number" id="max" placeholder="Unlimited">
    </div>
    <div class="group">
      <input type="radio" class="group-radio" name="amount" id="amount-exact" value="exact">
      <label for="amount-exact">Exactly</label>
      <input type="number" id="exact" value="5">
    </div>
    <div class="group">
      <label for="exclude">Exclude:</label>
      <input id="exclude" type="text">
    </div>
  </details>
</fieldset>
`;
customElements.define('option-set', OptionSet);
//# sourceMappingURL=optionSet.js.map