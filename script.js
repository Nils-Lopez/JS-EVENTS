//Lorsqu'on clique sur le footer (fonctionnalité n° 1-bis) :
	let footer = document.getElementsByTagName("footer")[0];
	let x = 1;

	function footerClick() {
		console.log("Clique n° " + x);
		x++;
	}

	footer.addEventListener("click", footerClick);

//Lorsqu'on clique sur le toggler (fonctionnalité 2) :
	let navbar = document.getElementById("navbarHeader");
	let toggler = document.getElementsByClassName("navbar-toggler")[0];
	let menustatus = false;
	
	function showMenu() {
		if(menustatus) {
			navbar.classList += " collapse"; 
			menustatus = false;
		}
		else {
			navbar.classList.remove("collapse");
			menustatus = true;
		}
	}

	toggler.addEventListener("click", showMenu);

//Lorsqu'on clique sur le bouton edit de la première card (fonctionnalité 3) :

	let btnedit = document.getElementsByClassName("btn-sm")[1];
	let htmlcardtxt = document.getElementsByClassName("card-text")[0];

	function changeText() {
		htmlcardtxt.style.color = "red";
	}

	btnedit.addEventListener("click", changeText);

//Lorsqu'on clique sur le bouton edit de la deuxième card (fonctionnalité 4) :

	let btnedit2 = document.getElementsByClassName("btn-sm")[3];
	let csscardtxt = document.getElementsByClassName("card-text")[1];
	let textstatus = false;
	
	function changeTextCSS() {
		if(textstatus) {
			csscardtxt.style.color = "black";
			textstatus = false;
		}
		else {
			csscardtxt.style.color = "green";
			textstatus = true;
		}
	}

	btnedit2.addEventListener("click", changeTextCSS);
	
//Faire disparaitre bootstrap (fonctionnalité 5) :

	let cdn = document.getElementsByTagName("link")[0];
	let hrefcdn = cdn.href;
	let bootstrapStatus = true;

	function removeBootstrap() {
		if(bootstrapStatus) {
			cdn.href = "";
			bootstrapStatus = false;
		}
		else {
			cdn.href = hrefcdn;
			bootstrapStatus = true;
		}
	}

	navbar.addEventListener("dblclick", removeBootstrap);

//Lorsqu'on passe la souris sur un bouton EDIT (fonctionnalité 6) :

	let btnsView = document.querySelectorAll("button.btn-success");
	let cardsimg = document.getElementsByClassName("card-img-top");
	let cardstxt = document.getElementsByClassName("card-text");

	btnsView.forEach(smallCard);

	function smallCard(item, index) {
		btnsView[index].addEventListener("mouseover", smCards);

		function smCards() {
			if(cardsimg[index].style.maxWidth != "20%") {
				cardstxt[index].style.display = "none";
				cardsimg[index].style.maxWidth = "20%";
			}
			else {
				cardstxt[index].style.display = "block";
				cardsimg[index].style.maxWidth = "100%";
			}
		}
	}

//Changer l'ordre des cards (fonctionnalité 7) :

	let btngrey = document.getElementsByClassName("my-2")[1];
	
	function changeOrder() {
		
	}

	btngrey.addEventListener("click", changeOrder);