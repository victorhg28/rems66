class miFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
			
		</style>
		
		<footer>
			<p>
			probando footer<br>
			123123
			</p>
		</footer>
    `;
	
	

	}
}

customElements.define('mifooter-component', miFooter);