class miFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
		
		
		/*footer{
			text-align: right;
			font-size: 0.8em;
			background-color: #111;
			bottom: 0;
			min-height: 80px;
		}*/
		</style>
		
		<footer>
				<img src="iconos/pagina_icono.png" class="icono">
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