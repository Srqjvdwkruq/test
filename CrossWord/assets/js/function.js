function showCategoryContainer() {
    document.getElementById('categoryContainer').style.display = 'block';
}

function hideCategoryContainer() {
    document.getElementById('categoryContainer').style.display = 'none';
}

function displaySelectedCategory(category) {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = `<h3>Starting game in category: ${category}</h3>`;
}

function showGameContainer() {
    document.getElementById('gameContainer').style.display = 'block';
}
