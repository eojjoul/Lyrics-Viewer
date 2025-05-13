$(document).ready(function () {
    // 페이지 로딩 시 모든 가사 내용과 해당 줄 숨김
    $('.lyrics-content1').hide();
    $('.lyrics-content1').closest('tr.EDLyrics').hide();
    $('.lyrics-content2').hide();
    $('.lyrics-content2').closest('tr.CLyrics').hide();
    $('.lyrics-content3').hide();
    $('.lyrics-content3').closest('tr.CPLyrics').hide();
    $('.lyrics-content4').hide();
    $('.lyrics-content4').closest('tr.IDLyrics').hide();
    $('.lyrics-content5').hide();
    $('.lyrics-content5').closest('tr.SMLyrics').hide();

    // 공통 처리 함수
    function toggleLyrics(buttonSelector, lyricsSelector) {
        $(buttonSelector).click(function () {
            var $lyricsContent = $(lyricsSelector);
            var $parentRow1 = $lyricsContent.closest('tr.EDLyrics');
            var $parentRow2 = $lyricsContent.closest('tr.CLyrics');
            var $parentRow3 = $lyricsContent.closest('tr.CPLyrics');
            var $parentRow4 = $lyricsContent.closest('tr.IDLyrics');
            var $parentRow5 = $lyricsContent.closest('tr.SMLyrics');

            $lyricsContent.stop(); // 현재 실행 중인 애니메이션 중지
            // lyrics-content가 현재 숨겨져 있는지 확인
            if ($lyricsContent.is(':hidden')) {
                // 숨겨져 있다면 슬라이드 다운 시작하기 전에 부모 줄을 먼저 보여줌
                $parentRow1.show();
                $parentRow2.show();
                $parentRow3.show();
                $parentRow4.show();
                $parentRow5.show();
                // 그리고 가사 내용을 슬라이드 다운으로 보여줌
                $lyricsContent.slideDown(500);
            } else {
                // 숨겨져 있지 않다면
                // 가사 내용을 슬라이드 업으로 숨김
                $lyricsContent.slideUp(500, function() {
                    // 슬라이드 업 애니메이션이 끝난 후에 부모 줄(tr)을 숨김
                    $parentRow1.hide();
                    $parentRow2.hide();
                    $parentRow3.hide();
                    $parentRow4.hide();
                    $parentRow5.hide();
                });
            }
        });
    }
    // 여러 버튼과 가사 항목에 대해 동일한 기능 적용
    toggleLyrics('#EDL', '.lyrics-content1');
    toggleLyrics('#CL', '.lyrics-content2');
    toggleLyrics('#CPL', '.lyrics-content3');
    toggleLyrics('#IDL', '.lyrics-content4');
    toggleLyrics('#SML', '.lyrics-content5');
    // 필요에 따라 계속 추가할 수 있음

    // 로고 클릭 시 페이지 이동
    $('#change').click(function () {
        window.location.href = "song.html";
    });
});