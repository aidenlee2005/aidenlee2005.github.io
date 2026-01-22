// 移动端导航菜单切换
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

function toggleMenu(e) {
    e.stopPropagation();
    nav.classList.toggle('active');
    burger.classList.toggle('active');
    console.log('Menu toggled:', nav.classList.contains('active'));
}

burger.addEventListener('click', toggleMenu);

// 点击导航链接后关闭菜单
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        burger.classList.remove('active');
    });
});

// 点击页面其他地方关闭菜单
document.addEventListener('click', (e) => {
    if (nav.classList.contains('active') && 
        !nav.contains(e.target) && 
        !burger.contains(e.target)) {
        nav.classList.remove('active');
        burger.classList.remove('active');
    }
});

// 图片懒加载优化
document.addEventListener('DOMContentLoaded', function() {
    // 为所有懒加载图片添加加载事件监听
    const lazyImages = document.querySelectorAll('img[loading="lazy"]');
    
    lazyImages.forEach(img => {
        // 图片加载完成后添加loaded类
        img.addEventListener('load', function() {
            this.classList.add('loaded');
            // 给父元素也添加loaded类,隐藏加载动画
            const parent = this.closest('.photo-item');
            if (parent) {
                parent.classList.add('loaded');
            }
        });
        
        // 如果图片已经缓存，立即触发loaded
        if (img.complete && img.naturalHeight !== 0) {
            img.classList.add('loaded');
            const parent = img.closest('.photo-item');
            if (parent) {
                parent.classList.add('loaded');
            }
        }
        
        // 添加错误处理
        img.addEventListener('error', function() {
            const parent = this.closest('.photo-item');
            if (parent) {
                parent.classList.add('loaded');
                parent.style.background = '#fee';
            }
        });
    });
});

// 平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 滚动时导航栏样式变化
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// 表单提交处理
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // 这里可以添加实际的表单提交逻辑
        // 例如使用 fetch API 发送到后端
        alert('消息已发送！（这是一个演示，请配置实际的表单处理）');
        contactForm.reset();
    });
}

// 滚动动画
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// 为所有需要动画的元素添加观察
document.querySelectorAll('.skill-card, .project-card, .about-content, .contact-content').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// 打字机效果（可选）
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// 鼠标粒子特效已取消（保留此注释作为说明，避免误加）
