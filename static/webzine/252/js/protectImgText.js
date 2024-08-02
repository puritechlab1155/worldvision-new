
// img 드레그 방지
document.addEventListener('DOMContentLoaded', function() {
    // 텍스트와 이미지 요소를 선택합니다.
    const elements = document.querySelectorAll('*');

    elements.forEach(element => {
        // 오른쪽 클릭 방지
        element.addEventListener('contextmenu', function(e) {
            e.preventDefault();
        });

        // 드래그 시작 방지
        element.addEventListener('dragstart', function(e) {
            e.preventDefault();
        });

        // 마우스 다운 이벤트를 통해 선택 방지
        element.addEventListener('mousedown', function(e) {
            e.preventDefault();
        });
    });

    // 페이지 전체에 텍스트 선택 방지
    document.addEventListener('selectstart', function(e) {
        e.preventDefault();
    });
});