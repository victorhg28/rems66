class miFooter extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>

		</style>
		
		<footer>
			
			<!-- gap: 2%; -->
			<div style="display: flex; gap: 2%;">
			
			<!--
			<span style="color: #AB5C7C;">
				♪ ... The tears trickle down wet the earth. Gotta get out now. From the Chamomile bathroom, tonight... ♪
			</span>
			-->
			
				<div style="width: 90%; color: #FFFFFF33; font-family: Courier New;">
					Victor Morante<br>
					Lima, Perú<br>
					--------------
				</div>
			
				<div>
					<img src="iconos/pagina_icono.png" style="filter: grayscale(100%); opacity: 0.20;">
				</div>
			
			</div>
		</footer>
	`;
	
	

	}
}

customElements.define('footer-component', miFooter);