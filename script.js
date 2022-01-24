let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
	var tanya = true;
	while (tanya == true) {
		// menangkap pilihan player
		var p = prompt("pilih : gajah , semut , orang");

		// menangkap pilihan computer
		// membangkitkan bilangan random
		var comp = Math.random();

		console.log(comp);

		if (comp < 0.34) {
			comp = "semut";
		} else if (comp >= 0.34 && comp < 0.67) {
			comp = "orang";
		} else {
			comp = "gajah";
		}

		var hasil = " ";
		//menentukan rules
		if (p == comp) {
			hasil = "seri";
		} else if (p == "semut") {
			hasil = comp == "orang" ? "kalah!" : "menang!";
		} else if (p == "orang") {
			hasil = comp == "gajah" ? "kalah!" : "menang!";
		} else if (p == "gajah") {
			hasil = comp == "semut" ? "kalah!" : "menang!";
		}

		//tampilkan hasil
		alert("kamu memilih : " + p + "\n dan komputer memilih : " + comp + "\n maka hasilnya : " + hasil);

		tanya = confirm("mau main lagi?");
	}
	alert("terima kasih sudah main!");
});
