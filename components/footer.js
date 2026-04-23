class miFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>

		</style>
		
		<footer>
			
			<img src="iconos/pagina_icono.png" style="filter: grayscale(100%); opacity: 0.15;">
			
			<br>
			
			<!--
			<span style="color: #AB5C7C;">
				♪ ... The tears trickle down wet the earth. Gotta get out now. From the Chamomile bathroom, tonight... ♪
			</span>
			-->
			
			<br>
			
			<span style="color:gray;">
				Victor Morante | Lima, Perú
			</span>
		</footer>
	`;
	
	

	}
}

customElements.define('footer-component', miFooter);