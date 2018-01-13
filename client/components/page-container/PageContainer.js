class PageContainer extends Polymer.Element {

	static get is() { return 'page-container'; }

	static get properties() {
		return {
			value: Boolean
		}
	}

	static get observers() {
		return [
			'_test(value)'
		];
	}

	ready() {
		super.ready();
	}
}

customElements.define(PageContainer.is, PageContainer);
