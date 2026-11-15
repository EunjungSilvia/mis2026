// 주차별 러닝 저널 문항 설정
// open: true 인 주차만 학생이 작성할 수 있다. 11·12주차는 문항이 정해지면 sections를 채우고 open을 true로 바꾼다.
// layout: 'kv' = 왼쪽 항목명 + 오른쪽 입력칸 / 'grid' = 행·열 표 / 'block' = 질문 머리줄 + 넓은 입력칸
window.JOURNAL_WEEKS = [
  {
    week: 10,
    title: '10주차 · 내 관심 분야에서 사람들은 어떤 일을 하고 있나',
    sheetTitle: '러닝 저널',
    open: true,
    sections: [
      {
        title: '',
        layout: 'kv',
        fields: [
          { key: 'interest', label: '내 관심 대상' },
          { key: 'source', label: '출발 자료 (자료 이름이나 링크)' },
          { key: 'ai', label: '사용한 AI (스노우챗 또는 서비스 이름)' }
        ]
      },
      {
        title: '1. 사람의 판단과 AI의 자리',
        layout: 'grid',
        cols: ['구분', '어떤 일인가', '그렇게 본 근거 (자료의 어느 부분인가)'],
        rows: [
          { label: '사람의 판단이 핵심인 일', keys: ['human_task', 'human_evidence'] },
          { label: 'AI가 들어와 있거나 들어올 일', keys: ['ai_task', 'ai_evidence'] }
        ],
        fields: [
          { key: 'human_task', label: '사람의 판단이 핵심인 일 — 어떤 일인가' },
          { key: 'human_evidence', label: '사람의 판단이 핵심인 일 — 그렇게 본 근거 (자료의 어느 부분인가)' },
          { key: 'ai_task', label: 'AI가 들어와 있거나 들어올 일 — 어떤 일인가' },
          { key: 'ai_evidence', label: 'AI가 들어와 있거나 들어올 일 — 그렇게 본 근거 (자료의 어느 부분인가)' }
        ]
      },
      {
        title: '2. 해 봐야만 알 수 있는 지식',
        layout: 'block',
        fields: [
          { key: 'tacit_knowledge', label: '이 일에서 해 봐야만 알 수 있는 지식은 무엇일까?' }
        ]
      },
      {
        title: '3. AI와 함께한 과정 돌아보기',
        layout: 'kv',
        tall: true,
        fields: [
          { key: 'ai_accepted', label: 'AI의 답 중 그대로 받아들인 것 하나' },
          { key: 'ai_checked', label: 'AI의 답 중 확인하거나 고친 것 하나, 그 이유' }
        ]
      }
    ]
  },
  {
    week: 11,
    title: '11주차 · 그 일은 어떻게 돌아가고, AI로 어떻게 바뀌고 있나',
    open: false,
    sections: []
  },
  {
    week: 12,
    title: '12주차 · 그 일에서 AI를 쓸 때 누가 무엇을 책임지나',
    open: false,
    sections: []
  }
];
