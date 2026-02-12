// ========== MOBILE MENU ==========
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    const isVisible = navLinks.style.display === 'flex';
    
    if (!isVisible) {
        navLinks.style.display = 'flex';
        navLinks.style.flexDirection = 'column';
        navLinks.style.position = 'absolute';
        navLinks.style.top = '70px';
        navLinks.style.right = '16px';
        navLinks.style.left = '16px';
        navLinks.style.background = 'white';
        navLinks.style.padding = '20px';
        navLinks.style.borderRadius = '20px';
        navLinks.style.boxShadow = '0 15px 40px rgba(0,0,0,0.15)';
        navLinks.style.border = '1px solid #edf0f5';
        navLinks.style.zIndex = '1000';
        
        const links = navLinks.querySelectorAll('a');
        links.forEach(link => {
        link.style.width = '100%';
        link.style.justifyContent = 'center';
        link.style.padding = '12px';
        });
    } else {
        navLinks.style.display = '';
    }
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
    if (navLinks.style.display === 'flex' && 
        !menuBtn.contains(event.target) && 
        !navLinks.contains(event.target)) {
        navLinks.style.display = '';
    }
    });
}

// ========== SCROLL EFFECT ==========
const topbar = document.querySelector('.topbar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
    topbar.classList.add('scrolled');
    } else {
    topbar.classList.remove('scrolled');
    }
});

// ========== VOLUNTEER MODAL ==========
function openVolunteerForm() {
    document.getElementById('volunteerModal').style.display = 'block';
    document.getElementById('volunteerOverlay').style.display = 'block';
    // منع التمرير خلف النافذة
    document.body.style.overflow = 'hidden';
}

function closeVolunteerForm() {
    document.getElementById('volunteerModal').style.display = 'none';
    document.getElementById('volunteerOverlay').style.display = 'none';
    // إعادة التمرير
    document.body.style.overflow = 'auto';
}

function submitVolunteer() {
    const name = document.getElementById('vName').value.trim();
    const email = document.getElementById('vEmail').value.trim();
    const message = document.getElementById('vMessage').value.trim();

    if (!name || !email) {
    alert('❌ الرجاء ملء جميع الحقول المطلوبة (الاسم، البريد).');
    return;
    }

    if (!email.includes('@') || !email.includes('.')) {
    alert('❌ الرجاء إدخال بريد إلكتروني صحيح.');
    return;
    }

    // إنشاء رابط البريد
    const subject = encodeURIComponent('طلب تطوع - منصة تحذير');
    const body = encodeURIComponent(
    'الاسم: ' + name + '\n' +
    'البريد: ' + email + '\n\n' +
    'الرسالة:\n' + message
    );
    
    window.location.href = 'mailto:achouri.aissa@outlook.com?subject=' + subject + '&body=' + body;
    
    alert('✅ تم فتح بريدك لإرسال الطلب. شكراً لاهتمامك!');
    closeVolunteerForm();
    
    // تفريغ الحقول
    document.getElementById('vName').value = '';
    document.getElementById('vEmail').value = '';
    document.getElementById('vMessage').value = '';
}

// ========== CLOSE MODAL WITH ESC ==========
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
    closeVolunteerForm();
    }
});