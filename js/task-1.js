const categories = document.querySelector('#categories');
const items = categories.querySelectorAll('.item');
console.log("Number of categories: ", items.length);

items.forEach(item => {
	const header = item.querySelector('h2');
	console.log("Category: ", header.textContent)
	const subCategories = item.querySelector('ul');
	const subCategoryItems = subCategories.querySelectorAll('li');
	console.log("Elements: ", subCategoryItems.length);
});