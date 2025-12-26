# ChatGPT Portfolio

ChatGPT 컴포넌트와 Header, Footer로 구성된 단일 페이지 Next.js 프로젝트입니다.

## 설치 및 실행 방법

### 1. 의존성 설치

```bash
npm install
```

### 2. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 3. 프로덕션 빌드

```bash
npm run build
npm start
```

## 프로젝트 구조

```
chatgpt-portfolio/
├── src/
│   ├── components/
│   │   ├── chatgpt.js      # ChatGPT 채팅 컴포넌트
│   │   ├── header.js        # 헤더 컴포넌트
│   │   ├── footer.js        # 푸터 컴포넌트
│   │   ├── headinfo.js     # 메타 정보 컴포넌트
│   │   └── loading.js       # 로딩 스피너 컴포넌트
│   ├── pages/
│   │   ├── _app.js          # Next.js 앱 루트
│   │   ├── _document.js     # Next.js 문서 루트
│   │   ├── index.js         # 메인 페이지
│   │   └── layout.js        # 레이아웃 컴포넌트
│   └── styles/
│       ├── globals.css      # 전역 스타일
│       └── setting/         # 개별 컴포넌트 스타일
├── public/
│   └── font/                # 이미지 파일들 (필요시 추가)
├── package.json
├── next.config.mjs
├── tailwind.config.js
└── postcss.config.mjs
```

## 주요 기능

- ChatGPT 채팅 인터페이스
- 반응형 헤더 (모바일 햄버거 메뉴 지원)
- 푸터 (소셜 링크 포함)
- 로딩 상태 표시

## API 엔드포인트

ChatGPT 컴포넌트는 다음 API를 사용합니다:
- `https://api.westcold0035.com/sendMessage`

## 추가 페이지 생성 방법

다른 페이지를 추가하려면:

1. `src/pages/` 폴더에 새 파일 생성 (예: `about.js`)
2. `src/components/header.js`에 메뉴 링크 추가
3. 필요시 새로운 스타일 파일 추가

## 기술 스택

- Next.js 14
- React 18
- Tailwind CSS
- Axios
- react-loader-spinner

