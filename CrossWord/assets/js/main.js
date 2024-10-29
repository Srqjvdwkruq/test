document.getElementById('StartBtn').addEventListener('click', function() {
    this.style.display = 'none';
    document.querySelector('h1').style.display = 'none';
    showCategoryContainer();
});

const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function() {
        const selectedCategory = this.getAttribute('data-category');
        console.log('Selected Category:', selectedCategory);
        startGame(selectedCategory); 
    });
});

function showCategoryContainer() {
    document.getElementById('categoryContainer').style.display = 'block';
}

function hideCategoryContainer() {
    document.getElementById('categoryContainer').style.display = 'none';
}

// ฟังก์ชันเริ่มเกม
function startGame(category) {
    console.log("เลือกหมวดหมู่: " + category);
    hideCategoryContainer(); // ซ่อนหมวดหมู่
    document.getElementById('gameContainer').style.display = 'block'; // แสดงพื้นที่เล่นเกม
    createWordGrid(); // สร้างตาราง 10x10
}

// กำหนดเหตุการณ์สำหรับปุ่มกลับ
document.getElementById('BackBtn').addEventListener('click', function() {
    document.getElementById('gameContainer').style.display = 'none'; // ซ่อนพื้นที่เล่นเกม
    document.getElementById('StartBtn').style.display = 'block'; // แสดงปุ่มเริ่มเกม
    document.querySelector('h1').style.display = 'block'; // แสดงหัวข้อ
});

// ฟังก์ชันสร้างตาราง 10x10
function createWordGrid() {
    const table = document.getElementById('wordGrid');
    table.innerHTML = ''; // เคลียร์ตารางก่อนหน้านี้

    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 10; j++) {
            const cell = document.createElement('td');
            cell.textContent = ''; // หรือใส่ตัวอักษร/คำในแต่ละเซลล์
            cell.style.border = '1px solid black'; // กำหนดกรอบให้เซลล์
            cell.style.width = '30px'; // กำหนดความกว้างของเซลล์
            cell.style.height = '30px'; // กำหนดความสูงของเซลล์
            cell.style.textAlign = 'center'; // จัดข้อความไปกลางเซลล์
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}
