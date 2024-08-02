//스크롤시 콘텐츠 아래에서 위로 팝업
document.addEventListener('DOMContentLoaded', function() {
    const options = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // 한 번만 애니메이션 실행
            }
        });
    }, options);

    const elements = document.querySelectorAll('.art');
    elements.forEach(element => {
        observer.observe(element);
    });
});

