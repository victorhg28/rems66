class miHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
			ul {
				list-style-type: none;
				padding: 0;
				overflow: hidden;
				font-weight: bold;
				width: max-content;
				margin: auto;
			}
	
			li {
				float: left;
			}

			li a {
				display: block;
				color: #111;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
			}

			li a:hover {
				background-color: #111;
			}
	
			li a.active {
				background-color: #1E1E1E;
				color: var(--whiteDarkTheme);
			}
		</style>
		
		<header>
			<h1 style="font-size: 40px;">REMS</h1>
			<nav class="menu">
				
				<ul>
					<li><a href="index.html">RFLATHEADPHONES</a></li>
					<li><a href="RDistortion.html">RDISTORTION</a></li>
					<li><a href="about.html">ABOUT</a></li>
				</ul>
			</nav>
		</header>
    `;
	
	
	// Para 'active
	const links = this.querySelectorAll("a"); //obtiene listado de elementos <a> (links) dentro de componente
	const currentPage = window.location.pathname.split("/").pop();

	links.forEach(link => {
		const linkPage = link.getAttribute("href");

		if (linkPage === currentPage) {
			link.classList.add("active");
		}
	});
	}
}

customElements.define('header-component', miHeader);