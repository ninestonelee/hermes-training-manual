# Hermes Training Manual — 통합 허브

헤르메스(메신저 기반 AI 비서) 교재를 한 사이트로 모은 GitHub Pages 정적 사이트.

라이브: https://ninestonelee.github.io/hermes-training-manual/

## 페이지 구성

| 파일 | 내용 | 비고 |
|------|------|------|
| `index.html` | 통합 허브 홈 (6개 교재 카드) | 신규 |
| `curriculum.html` | 헤르메스 교육 교재 (5파트·11챕터) | 기존 교재 |
| `handbook.html` | 완전 활용 핸드북 (14챕터) | ex-Vercel `hermes-handbook-deploy` |
| `install-guide.html` | 로컬 설치와 첫 실행 | ex-Vercel `hermes-manual-chi` |
| `advanced-guide.html` | 운영·확장 | ex-Vercel `hermes-manual-chi` |
| `multiagent-guide.html` | 멀티 에이전트 운영 | ex-Vercel `hermes-manual-chi` |
| `telegram-handson.html` | 헤르메스 × 텔레그램 핸즈온 | ex-Vercel `hermes-telegram-deploy` |

모든 페이지 상단에 공통 허브 네비(`.hubnav`, 인라인 CSS로 독립)가 들어가 서로 이동 가능.

## 에셋

- `assets/hermes-hero.png`, `hermes-architecture.png`, `hermes-cron.png` — 교육 교재 이미지
- `assets/hermes-manual.css`, `hermes-manual.js` — 설치/운영/멀티에이전트 가이드 공용 스타일
- `styles.css`, `script.js` — 교육 교재(curriculum) 전용

## 배포

GitHub Pages (main 브랜치 루트, `.nojekyll`). push 시 자동 반영.
