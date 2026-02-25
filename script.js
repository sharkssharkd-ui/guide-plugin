/* --- script.js --- */
// 1. АНИМАЦИЯ ЗВЕЗД
const canvas = document.createElement('canvas');
canvas.id = 'canvas-stars';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

let width, height, stars = [];

function init() {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;
    stars = [];
    for(let i=0; i<100; i++) {
        stars.push({
            x: Math.random() * width,
            y: Math.random() * height,
            size: Math.random() * 2,
            speed: Math.random() * 0.2
        });
    }
}

function animate() {
    ctx.clearRect(0,0,width,height);
    ctx.fillStyle = '#ffffff';
    stars.forEach(s => {
        ctx.beginPath();
        ctx.globalAlpha = Math.random() * 0.5 + 0.3;
        ctx.arc(s.x, s.y, s.size, 0, Math.PI*2);
        ctx.fill();
        s.y -= s.speed;
        if(s.y < 0) s.y = height;
    });
    requestAnimationFrame(animate);
}

window.addEventListener('resize', init);
init();
animate();

// 2. КОПИРОВАНИЕ КОДА
document.querySelectorAll('.copy-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const code = btn.parentElement.nextElementSibling.innerText;
        navigator.clipboard.writeText(code);
        btn.innerText = "Скопировано!";
        btn.style.borderColor = "#22c55e";
        setTimeout(() => {
            btn.innerText = "Копировать";
            btn.style.borderColor = "";
        }, 2000);
    });
});

// 3. ПОДСВЕТКА АКТИВНОЙ СТРАНИЦЫ
const path = window.location.pathname;
const page = path.split("/").pop() || "index.html";
document.querySelectorAll('.nav-links a').forEach(link => {
    if(link.getAttribute('href') === page) {
        link.classList.add('active');
    }
});
