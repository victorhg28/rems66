class miFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>

		</style>
		
		<footer>
			<img src="imagenes/logo_dev_alpha.png">
			
			<br>
			
			<span style="color: #AB5C7C;">
				♪ ... The tears trickle down wet the earth. Gotta get out now. From the Chamomile bathroom, tonight... ♪
			</span>
			
			<br>
			
			<span style="color:gray;">
				Victor Morante | Lima, Perú | victormorante28@gmail.com
			</span>
		</footer>
	`;
	
	

	}
}

customElements.define('footer-component', miFooter);