function exibe(){
	htm = "<article>" + articles[licao % articles.length] + "</article>";
	htm += "<h3><button onclick='licao = licao + articles.length - 1; exibe();'>&lt;&lt; anterior</button>&nbsp;&nbsp;<button onclick='licao = licao + 1; exibe();'>próximo &gt;&gt;</button></h3>";
	document.getElementsByTagName("main")[0].innerHTML = htm;
	window.scrollTo(0,0);
	Prism.highlightAll();
}

conteudo = document.getElementsByTagName('article');
articles = [];
licao = 0;
for(x = 0; x < conteudo.length; x++) {
    articles[x] = conteudo[x].innerHTML;
}

document.body.addEventListener('keydown', function(k) {
	if(k.keyCode == 37 || k.keyCode == 65) {
		licao = licao + articles.length - 1;
		exibe();
	}
	if(k.keyCode == 39 || k.keyCode == 68) {
		licao = licao + 1;
		exibe();
	}
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-064TE6RX0W');
