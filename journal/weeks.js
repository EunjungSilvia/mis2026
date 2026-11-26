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
    sheetTitle: '러닝 저널',
    lead: '미션을 마친 뒤 수업 중에 작성한다. 칸마다 두세 문장으로, 내 말로 쓴다.',
    open: true,
    sections: [
      {
        title: '',
        layout: 'kv',
        fields: [
          { key: 'interest', label: '내 관심 대상' },
          { key: 'workflow', label: '정리한 업무 흐름 (일 한 건)' },
          { key: 'ai', label: '사용한 AI' }
        ]
      },
      {
        title: '1. 미션에서 알게 된 것',
        note: '미션의 정리표를 다시 보며 쓴다.',
        layout: 'kv',
        tall: true,
        fields: [
          { key: 'flow_learned', label: '업무 흐름을 정리하며 과업이나 연결 작업에 대해 새로 알게 된 것은 무엇인가?' },
          { key: 'ai_changed', label: '내가 찾은 사례에서 AI는 업무 흐름을 바꾸었나, 누군가의 일을 대신했을 뿐인가? 그렇게 본 이유는?' }
        ]
      },
      {
        title: '2. 업무 흐름에서 나의 역할',
        layout: 'kv',
        tall: true,
        fields: [
          { key: 'human_role', label: '신입이 맡던 과업에서 AI와 일을 나눈 뒤 사람에게 남는 역할은 무엇인가?' },
          { key: 'my_role', label: '그 가운데 내가 맡아 보고 싶은 역할, 또는 가장 중요하다고 생각하는 역할과 그 이유' }
        ]
      },
      {
        title: '3. 미션을 하며 느낀 것',
        layout: 'block',
        fields: [
          { key: 'needed_skill', label: '이번 미션을 하면서 AI와 함께 일하기 위해서 필요하겠다고 느낀 능력은 무엇인가? 이유는?' }
        ]
      }
    ]
  },
  {
    week: 12,
    title: '12주차 · AI와 함께 일한 나는 AI를 어떻게 감독했나',
    sheetTitle: '러닝 저널',
    lead: '미션 3에서 받은 「AI 대화 돌아보기」 정리 파일(AI대화돌아보기_….md)을 펼쳐 놓고 작성한다. 지시문 없이 직접 한 경우에는 미션 3 정리표를 펼쳐 놓는다. 칸마다 두세 문장으로, 내 말로 쓴다.',
    open: true,
    sections: [
      {
        title: '',
        layout: 'kv',
        fields: [
          { key: 'conversation', label: '돌아본 대화', hint: '무엇을 하던 대화였나' }
        ]
      },
      {
        title: '1. 미션에서 무엇을 발견했나',
        layout: 'kv',
        fields: [
          { key: 'my_way', label: '나의 방식', hint: "정리 파일 4번 '나의 방식'을 옮겨 적는다" }
        ]
      },
      {
        title: '',
        layout: 'kv',
        tall: true,
        fields: [
          { key: 'discovered', label: '대화를 다시 보기 전에 내가 생각하던 나와 비교하면, 새로 알게 되었거나 의외였던 점은 무엇인가' }
        ]
      },
      {
        title: '2. 나는 AI를 어떻게 감독하고 있었나',
        layout: 'info',
        cols: ['단계', '하는 일'],
        rows: [
          ['계획', '무엇을 AI에게 맡기고 무엇을 내가 할지 정한다'],
          ['지시', '원하는 결과와 조건을 AI에게 알려 준다'],
          ['모니터링', 'AI의 답이 맞게 가고 있는지 살핀다'],
          ['개입', '이상하면 멈추고, 고치고, 다시 시킨다'],
          ['학습', 'AI와 일하며 알게 된 것을 다음 일에 반영한다']
        ]
      },
      {
        title: '',
        layout: 'kv',
        tall: true,
        fields: [
          { key: 'supervision', label: '나는 다섯 단계 가운데 어디에 가장 힘을 쏟는 편인가? 그 단계에서 내가 하고 있는 나만의 방법과, 실제로 그렇게 한 장면을 적는다', hint: '미션 3에서 돌아본 대화가 아니어도 된다' }
        ]
      },
      {
        title: '3. 다음에 무엇을 해 볼까',
        layout: 'kv',
        tall: true,
        fields: [
          { key: 'change', label: '2번에서 찾은 내 감독 방식을 보고, 다음에 AI와 일할 때 내 방식에서 하나 바꿔 본다면 무엇을 바꾸고 싶은가' }
        ]
      }
    ]
  }
];
