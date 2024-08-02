
            // 페이지 URL을 배열로 정의
            const pages = [
                'index.html',
                'specialStory.html',
                'patrons.html',
                'seagull.html',
                'specialProgram.html',
                'scene01.html',
                'scene02.html',
                'camp.html',
                'news.html'
                // 현재 페이지 URL
                // 다음 페이지 URL
                // 이전 페이지 URL
            ];
            // 현재 페이지를 찾기 위한 함수
            function getCurrentPageIndex() {
                const currentPage = window.location.pathname.split('/').pop();
                return pages.indexOf(currentPage);
            }
            
            // 버튼 클릭 이벤트 처리 함수
            function setupNavigation() {
                const homeButton = document.getElementById('homePage');
                const prevButton = document.getElementById('prevPage');
                const nextButton = document.getElementById('nextPage');
                
                const currentIndex = getCurrentPageIndex();
                
                if (currentIndex > 0) {
                    prevButton.addEventListener('click', () => {
                        window.location.href = pages[currentIndex - 1];
                    });
                } else {
                    prevButton.disabled = true;
                }
                
                if (currentIndex < pages.length - 1) {
                    nextButton.addEventListener('click', () => {
                        window.location.href = pages[currentIndex + 1];
                    });
                } else {
                    nextButton.disabled = true;
                }
                
                homeButton.addEventListener('click', () => {
                    window.location.href = 'index.html'; // 메인 홈페이지 URL로 변경
                });
            }
            
            // 페이지 로드 시 네비게이션 설정
            document.addEventListener('DOMContentLoaded', setupNavigation);
            

            //맨 위로 팝업되게 하기
            function scrollToTop() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            }


            //맨 앞 맨 뒤 페이지 버튼 사라지게
            let currentPage = 1;
            const totalPages = 9; // 총 페이지 수
    
            function updateButtons() {
                document.getElementById('prevPage').disabled = currentPage === 1;
                document.getElementById('nextPage').disabled = currentPage === totalPages;
                document.getElementById('pageContent').innerText = `Page ${currentPage}`;
            }
    
            function prevPage() {
                if (currentPage > 1) {
                    currentPage--;
                    updateButtons();
                }
            }
    
            function nextPage() {
                if (currentPage < totalPages) {
                    currentPage++;
                    updateButtons();
                }
            }
    
            // 초기 버튼 상태 업데이트
            updateButtons();
         