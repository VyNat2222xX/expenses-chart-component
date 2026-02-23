let $inputvalue = document.querySelector("#depense");
const $list = document.querySelector("#list");
let $h2 = document.querySelector("#none");
const $form = document.querySelector("#form");

$form.addEventListener("submit", (e) => {
	e.preventDefault();

	$h2.remove();

	const ItemDiv = document.createElement("div");
	const ItemP = document.createElement("p");
	const SupprButton = document.createElement("button");

	ItemDiv.classList.add("listitem");
	ItemP.textContent = $inputvalue.value;
	SupprButton.textContent = "Supprimé cette depense";
	SupprButton.id("suppr");
	ItemDiv.appendChild(ItemP);
	ItemDiv.appendChild(SupprButton);

	$list.appendChild(ItemDiv);
});
