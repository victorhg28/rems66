class miHeader extends HTMLElement {
	constructor() {
		super();
	}

	connectedCallback() {
		this.innerHTML = `
		<style>
			
			
			.menu ul {
				list-style-type: none;
				padding: 0;
				overflow: hidden;
				font-weight: bold;
				width: max-content;
				margin: auto;
			}
	
			.menu li {
				float: left;
			}

			.menu li a {
				display: block;
				color: #111;
				text-align: center;
				padding: 14px 16px;
				text-decoration: none;
			}

			.menu li a:hover {
				background-color: #111;
				color: white;
			}
	
			.menu li a.active {
				background-color: #1E1E1E;
				color: var(--whiteDarkTheme);
			}
			
			.menu a.active{
				text-decoration: none;
				color: black;
				background-color: transparent;
			}
		</style>
		
		<header>
			<div class="cabecera">
				<h1 style="font-size: 40px;"><a href="index.html">rems66</a></h1>
			</div>
			<nav class="menu">
				<ul>
					<li><a href="index.html">HOME</a></li>
					<li><a href="RFlatHeadphones.html">RFLATHEADPHONES</a></li>
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