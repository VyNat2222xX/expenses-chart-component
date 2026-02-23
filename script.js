const $button = document.querySelector("#submit");
let $inputvalue = document.querySelector("#depense");
const $list = document.querySelector("#list");
let $h2 = document.querySelector("#none");

$button.addEventListener("click", () => {
	$h2.remove();

	const ItemDiv = document.createElement("div");
	const ItemP = document.createElement("p");

	ItemDiv.classList.add("listitem");
	ItemP.textContent = $inputvalue.value;
	ItemDiv.appendChild(ItemP);

	$list.appendChild(ItemDiv);
});
