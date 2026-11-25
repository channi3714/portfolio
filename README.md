# 백엔드 개발자 포트폴리오

`index.html`은 오창엽 백엔드 개발자 포트폴리오 홈입니다. URLUV 카드는 `urluv.html` 상세 페이지, 안전고래 카드는 `safewhale.html` 소개 페이지로 이동합니다. MCC는 프로젝트 목록에 넣지 않았습니다. 이 폴더 전체가 GitHub Pages 배포 단위이며 별도 빌드 도구는 필요하지 않습니다.

프로필 사진은 `assets/profile.png`에 있습니다. 홈의 연락처, 활동, 학력, 수상, SQLD 정보는 제공된 이력서 내용을 반영했습니다. 안전고래 페이지는 현재 소개와 담당 영역만 담고 있어 구현 화면과 문제 해결 사례를 추가할 수 있습니다.

로컬에서는 이 폴더에서 `python3 -m http.server 8765`를 실행한 뒤 `http://localhost:8765/`을 엽니다.

GitHub 저장소를 정한 뒤 이 폴더의 내용 전체를 저장소 루트에 올리고, Settings → Pages에서 해당 브랜치의 `/ (root)`를 선택하면 됩니다. 프로젝트 저장소로 배포해도 상대 경로로 페이지와 이미지가 연결됩니다. 실제 업로드와 Pages 설정은 저장소 주소를 받은 뒤 진행합니다.

## 사진·영상 추가

URLUV 상세 페이지의 점선 상자는 자료를 넣을 자리입니다. `assets/` 폴더에 자료를 저장한 뒤 `urluv.html`의 해당 `.media-slot`을 `<figure>`와 `<img>` 또는 `<video controls>`로 바꾸면 됩니다. 파일 이름 예시는 각 상자에 표시했습니다. 실제 주문 내용·고객 사진·전화번호는 공개 전에 가려 주세요.

인프라 구조도 두 장은 예외로, 아래 이름으로 `assets/`에 저장하면 페이지에서 자동 표시됩니다.

- 현재 운영 구조도: `assets/current-architecture.png`
- 확장 계획 구조도: `assets/scaling-architecture.png`

서비스 소개의 주문·크리스마스·큐피드 화면은 `assets/order-template-selection.png`, `assets/christmas-template.png`, `assets/cupid-template.png`를 사용합니다. 공개 전 화면 안의 사진과 영상 썸네일에 대한 사용 허락 여부를 확인해 주세요.

사진 미리보기 문제의 전후 화면은 `assets/preview-before.jpeg`와 `assets/preview-after.png`를 사용합니다. 수정 후 화면은 관리자 미리보기 상태에서 촬영한 사진입니다.

홍보 카드뉴스는 `assets/card-news/` 아래 큐피드 6장, 빼빼로 6장, 크리스마스 10장을 사용합니다. 탭을 고른 다음 화살표·키보드 방향키·화면 밀기로 넘길 수 있습니다.

## 게시 전 확인

- 담당 영역의 표현을 팀 내 실제 기여와 대조
- 운영 중인 기술과 확장 계획의 구분 유지
- 공개할 수 있는 화면·로그·테스트 자료만 사용
- 홈의 자기소개·기술 스택과 각 상세 페이지의 담당 범위를 최종 제출 전에 본인 경력과 대조
