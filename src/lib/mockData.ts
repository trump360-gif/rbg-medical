import { Hospital, Patient } from './types'

export const HOSPITALS: Hospital[] = [
  {
    id: 'h-001',
    name: '강남세브란스병원',
    type: 'tertiary',
    typeLabel: '상급종합병원',
    region: '서울',
    district: '강남구',
    address: '서울특별시 강남구 언주로 211',
    photos: [
      { url: 'https://placehold.co/800x500/185FA5/FFFFFF?text=강남세브란스병원', label: '병원 외관' },
      { url: 'https://placehold.co/800x500/0C447C/FFFFFF?text=로비', label: '로비' },
      { url: 'https://placehold.co/800x500/E6F1FB/185FA5?text=국제진료센터', label: '국제진료센터' },
    ],
    departments: [
      {
        id: 'd-001-onco',
        code: 'ONCO',
        name: '종양내과',
        doctors: [
          {
            id: 'dr-001',
            name: '김종훈',
            departmentId: 'd-001-onco',
            specialties: ['폐암', '위암', '대장암'],
            education: ['연세대학교 의과대학 졸업', '연세대학교 대학원 의학박사'],
            experience: ['강남세브란스병원 종양내과 과장 (2015–현재)', '미국 MD Anderson Cancer Center 연구원 (2010–2012)'],
            publications: 87,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
              { code: 'ru', label: 'Русский', level: 'interpreter' },
            ],
            foreignPatientExperience: '러시아·CIS 폐암 환자 200명 이상 치료 경험',
            awards: ['대한암학회 우수연구상 (2020)', '연세의료원 우수의사상 (2022)'],
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=김종훈',
          },
          {
            id: 'dr-002',
            name: '이수진',
            departmentId: 'd-001-onco',
            specialties: ['유방암', '갑상선암', '항암 면역치료'],
            education: ['서울대학교 의과대학 졸업', '연세대학교 대학원 의학박사'],
            experience: ['강남세브란스병원 종양내과 전문의 (2017–현재)', '국립암센터 전임의 (2014–2017)'],
            publications: 52,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
            ],
            foreignPatientExperience: '중앙아시아 출신 유방암 환자 치료 다수',
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=이수진',
          },
        ],
      },
      {
        id: 'd-001-card',
        code: 'CARD',
        name: '심장내과',
        doctors: [
          {
            id: 'dr-003',
            name: '박민철',
            departmentId: 'd-001-card',
            specialties: ['관상동맥질환', '심부전', '부정맥'],
            education: ['연세대학교 의과대학 졸업', '연세대학교 대학원 의학박사'],
            experience: ['강남세브란스병원 심장내과 부장 (2013–현재)', '미국 Cleveland Clinic 연수 (2009–2010)'],
            publications: 63,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
              { code: 'ru', label: 'Русский', level: 'interpreter' },
            ],
            foreignPatientExperience: 'CIS 심장질환 환자 150명 이상 시술',
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=박민철',
          },
        ],
      },
    ],
    languages: [
      { code: 'ru', label: 'Русский', level: 'interpreter' },
      { code: 'en', label: 'English', level: 'fluent' },
    ],
    isRegisteredForForeigner: true,
    isAcceptingReferral: true,
    whatsappNumber: '+82-10-1234-5678',
    email: 'international@yuhs.ac',
    certifications: ['JCI 인증', '외국인환자 유치기관 등록', '보건복지부 우수 의료기관'],
    description:
      '강남세브란스병원은 연세대학교 의료원 산하 상급종합병원으로, 암·심장·신경 분야에서 국내 최고 수준의 치료를 제공합니다. 국제진료센터를 통해 러시아·CIS를 포함한 40여 개국 외국인 환자를 매년 3,000명 이상 진료하고 있습니다. JCI 국제인증을 획득한 의료 환경과 통역 서비스를 갖추고 있습니다.',
    internationalPatientCount: 3200,
    foundedYear: 1983,
  },
  {
    id: 'h-002',
    name: '삼성서울병원',
    type: 'tertiary',
    typeLabel: '상급종합병원',
    region: '서울',
    district: '강남구',
    address: '서울특별시 강남구 일원로 81',
    photos: [
      { url: 'https://placehold.co/800x500/185FA5/FFFFFF?text=삼성서울병원', label: '병원 외관' },
      { url: 'https://placehold.co/800x500/0C447C/FFFFFF?text=센터동', label: '센터동' },
      { url: 'https://placehold.co/800x500/E6F1FB/185FA5?text=외래동', label: '외래동' },
    ],
    departments: [
      {
        id: 'd-002-neuro',
        code: 'NEURO',
        name: '신경외과',
        doctors: [
          {
            id: 'dr-004',
            name: '최재원',
            departmentId: 'd-002-neuro',
            specialties: ['뇌종양', '간질수술', '척추수술'],
            education: ['성균관대학교 의과대학 졸업', '성균관대학교 대학원 의학박사'],
            experience: ['삼성서울병원 신경외과 교수 (2011–현재)', '독일 Charité 병원 연수 (2008–2009)'],
            publications: 112,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
              { code: 'ru', label: 'Русский', level: 'interpreter' },
            ],
            foreignPatientExperience: '러시아·카자흐스탄 뇌종양 환자 수술 다수',
            awards: ['대한신경외과학회 학술상 (2019)', '삼성의료원 최우수 의사상 (2021)'],
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=최재원',
          },
        ],
      },
      {
        id: 'd-002-gi',
        code: 'GI',
        name: '소화기내과',
        doctors: [
          {
            id: 'dr-005',
            name: '정혜영',
            departmentId: 'd-002-gi',
            specialties: ['담도·췌장 질환', '담석증', '내시경 시술'],
            education: ['성균관대학교 의과대학 졸업', '성균관대학교 대학원 의학박사'],
            experience: ['삼성서울병원 소화기내과 부교수 (2014–현재)', '미국 Mayo Clinic 연수 (2012–2013)'],
            publications: 74,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
            ],
            foreignPatientExperience: '담석·췌담도 외국인 환자 내시경 시술 전문',
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=정혜영',
          },
          {
            id: 'dr-006',
            name: '강동현',
            departmentId: 'd-002-gi',
            specialties: ['간질환', '간암', '복강경 수술'],
            education: ['서울대학교 의과대학 졸업', '성균관대학교 대학원 의학박사'],
            experience: ['삼성서울병원 소화기내과 전문의 (2016–현재)', '일본 게이오대학병원 연수 (2015)'],
            publications: 38,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
              { code: 'zh', label: '中文', level: 'fluent' },
            ],
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=강동현',
          },
        ],
      },
    ],
    languages: [
      { code: 'ru', label: 'Русский', level: 'interpreter' },
      { code: 'en', label: 'English', level: 'fluent' },
      { code: 'zh', label: '中文', level: 'fluent' },
    ],
    isRegisteredForForeigner: true,
    isAcceptingReferral: true,
    whatsappNumber: '+82-10-2345-6789',
    email: 'global@smc.samsung.co.kr',
    certifications: ['JCI 인증', '외국인환자 유치기관 등록', 'ISO 9001', '보건복지부 선도 의료기관'],
    description:
      '삼성서울병원은 성균관대학교 의과대학 부속병원으로, 뇌·신경외과 및 소화기 분야에서 세계적 수준의 의료 서비스를 제공합니다. 글로벌 의료센터를 통해 연간 5,000명 이상의 외국인 환자를 진료하며, 러시아·CIS 전담 코디네이터를 운영합니다. 최신 로봇수술 및 내시경 장비를 보유하고 있습니다.',
    internationalPatientCount: 5100,
    foundedYear: 1994,
  },
  {
    id: 'h-003',
    name: '서울아산병원',
    type: 'tertiary',
    typeLabel: '상급종합병원',
    region: '서울',
    district: '송파구',
    address: '서울특별시 송파구 올림픽로 43길 88',
    photos: [
      { url: 'https://placehold.co/800x500/185FA5/FFFFFF?text=서울아산병원', label: '병원 전경' },
      { url: 'https://placehold.co/800x500/0C447C/FFFFFF?text=암병원', label: '암병원' },
      { url: 'https://placehold.co/800x500/E6F1FB/185FA5?text=국제진료센터', label: '국제진료센터' },
    ],
    departments: [
      {
        id: 'd-003-onco',
        code: 'ONCO',
        name: '종양내과',
        doctors: [
          {
            id: 'dr-007',
            name: '윤성민',
            departmentId: 'd-003-onco',
            specialties: ['폐암 표적치료', '면역항암치료', '희귀암'],
            education: ['울산대학교 의과대학 졸업', '서울대학교 대학원 의학박사'],
            experience: ['서울아산병원 종양내과 교수 (2010–현재)', 'Harvard Medical School 방문교수 (2017–2018)'],
            publications: 156,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
              { code: 'ru', label: 'Русский', level: 'interpreter' },
            ],
            foreignPatientExperience: '러시아 폐암 환자 300명 이상 치료, CIS 연계 네트워크 보유',
            awards: ['대한종양학회 학술대상 (2021)', '아산의학상 (2023)'],
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=윤성민',
          },
        ],
      },
      {
        id: 'd-003-card',
        code: 'CARD',
        name: '심장내과',
        doctors: [
          {
            id: 'dr-008',
            name: '한지현',
            departmentId: 'd-003-card',
            specialties: ['허혈성 심장질환', '중재시술', '심장재활'],
            education: ['울산대학교 의과대학 졸업', '울산대학교 대학원 의학박사'],
            experience: ['서울아산병원 심장내과 부교수 (2012–현재)', '미국 Johns Hopkins 연수 (2010–2011)'],
            publications: 91,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
              { code: 'ru', label: 'Русский', level: 'interpreter' },
            ],
            foreignPatientExperience: 'CIS 출신 심장 중재시술 환자 200명 이상',
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=한지현',
          },
          {
            id: 'dr-009',
            name: '오준혁',
            departmentId: 'd-003-card',
            specialties: ['심장판막 수술', '관상동맥 우회술', '심방세동'],
            education: ['서울대학교 의과대학 졸업', '울산대학교 대학원 의학박사'],
            experience: ['서울아산병원 심장내과 전문의 (2015–현재)'],
            publications: 44,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
            ],
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=오준혁',
          },
        ],
      },
      {
        id: 'd-003-neuro',
        code: 'NEURO',
        name: '신경내과',
        doctors: [
          {
            id: 'dr-010',
            name: '임소연',
            departmentId: 'd-003-neuro',
            specialties: ['뇌전증', '두통', '신경계 면역질환'],
            education: ['울산대학교 의과대학 졸업', '연세대학교 대학원 의학박사'],
            experience: ['서울아산병원 신경내과 조교수 (2018–현재)', '미국 Mayo Clinic 연수 (2016–2017)'],
            publications: 29,
            languages: [
              { code: 'en', label: 'English', level: 'fluent' },
            ],
            photo: 'https://placehold.co/160x160/E6F1FB/185FA5?text=임소연',
          },
        ],
      },
    ],
    languages: [
      { code: 'ru', label: 'Русский', level: 'interpreter' },
      { code: 'en', label: 'English', level: 'fluent' },
      { code: 'ar', label: 'عربي', level: 'interpreter' },
    ],
    isRegisteredForForeigner: true,
    isAcceptingReferral: true,
    whatsappNumber: '+82-10-3456-7890',
    email: 'international@amc.seoul.kr',
    certifications: ['JCI 인증', '외국인환자 유치기관 등록', 'ISO 9001', '대한민국 의료관광 대상'],
    description:
      '서울아산병원은 아산사회복지재단이 운영하는 국내 최대 규모의 상급종합병원으로, 암·심장·뇌혈관 분야에서 아시아 최고 수준의 치료 성과를 자랑합니다. 연간 외국인 환자 7,000명 이상을 진료하며, 러시아어 전담 코디네이터와 24시간 통역 서비스를 제공합니다. 최첨단 암병원과 하트센터를 별도 운영합니다.',
    internationalPatientCount: 7200,
    foundedYear: 1989,
  },
]

export const PATIENTS: Patient[] = [
  {
    id: 'p-001',
    name: 'Иван Петров',
    nationality: '러시아',
    icdCode: 'C34',
    icdLabel: '기관지 및 폐의 악성 신생물 (폐암)',
    desiredDepartment: '종양내과',
    desiredProcedure: '표적치료 또는 면역항암치료 평가',
    attachments: [
      { id: 'att-001', name: '여권사본.pdf', type: 'application/pdf', size: '1.2MB' },
      { id: 'att-002', name: 'CT_chest_2024.dcm', type: 'application/dicom', size: '45.8MB' },
      { id: 'att-003', name: '조직검사결과.pdf', type: 'application/pdf', size: '3.1MB' },
      { id: 'att-004', name: '현지병원진단서.pdf', type: 'application/pdf', size: '2.4MB' },
    ],
    cases: [
      {
        id: 'c-001-a',
        patientId: 'p-001',
        hospitalId: 'h-001',
        hospitalName: '강남세브란스병원',
        doctorId: 'dr-001',
        doctorName: '김종훈',
        status: 'approved',
        feedbacks: [
          {
            id: 'fb-001',
            from: 'hospital',
            message:
              '환자의 CT 영상 및 조직검사 결과를 검토하였습니다. EGFR 변이 양성 폐암으로 확인되어 표적치료 대상에 해당합니다. 내원 시 외래 진료 후 치료 계획을 수립하겠습니다.',
            createdAt: '2024-11-20T09:30:00Z',
          },
        ],
        submittedAt: '2024-11-15T08:00:00Z',
        updatedAt: '2024-11-20T09:30:00Z',
      },
      {
        id: 'c-001-b',
        patientId: 'p-001',
        hospitalId: 'h-003',
        hospitalName: '서울아산병원',
        doctorId: 'dr-007',
        doctorName: '윤성민',
        status: 'info_requested',
        feedbacks: [
          {
            id: 'fb-002',
            from: 'hospital',
            message:
              '검토 결과 추가 자료가 필요합니다. PET-CT 결과 및 최근 3개월 내 혈액검사 결과를 제출해 주시기 바랍니다.',
            requestedDocuments: ['PET-CT 결과지 (최근 6개월 이내)', '혈액검사 결과 (CBC, LFT, RFT)', 'EGFR/ALK 유전자 검사 결과'],
            createdAt: '2024-11-18T14:00:00Z',
          },
        ],
        submittedAt: '2024-11-15T08:10:00Z',
        updatedAt: '2024-11-18T14:00:00Z',
      },
    ],
    createdAt: '2024-11-15T07:45:00Z',
  },
  {
    id: 'p-002',
    name: 'Мария Иванова',
    nationality: '카자흐스탄',
    icdCode: 'I25',
    icdLabel: '만성 허혈성 심장질환',
    desiredDepartment: '심장내과',
    desiredProcedure: '관상동맥 중재시술 (PCI) 또는 CABG 평가',
    attachments: [
      { id: 'att-005', name: '여권사본.pdf', type: 'application/pdf', size: '0.9MB' },
      { id: 'att-006', name: '심장초음파_2024.pdf', type: 'application/pdf', size: '5.2MB' },
      { id: 'att-007', name: '관상동맥조영술.pdf', type: 'application/pdf', size: '8.7MB' },
    ],
    cases: [
      {
        id: 'c-002-a',
        patientId: 'p-002',
        hospitalId: 'h-001',
        hospitalName: '강남세브란스병원',
        doctorId: 'dr-003',
        doctorName: '박민철',
        status: 'reviewing',
        feedbacks: [],
        submittedAt: '2024-11-22T10:00:00Z',
        updatedAt: '2024-11-22T10:00:00Z',
      },
      {
        id: 'c-002-b',
        patientId: 'p-002',
        hospitalId: 'h-003',
        hospitalName: '서울아산병원',
        doctorId: 'dr-008',
        doctorName: '한지현',
        status: 'submitted',
        feedbacks: [],
        submittedAt: '2024-11-22T10:05:00Z',
        updatedAt: '2024-11-22T10:05:00Z',
      },
    ],
    createdAt: '2024-11-22T09:30:00Z',
  },
  {
    id: 'p-003',
    name: 'Алексей Козлов',
    nationality: '우즈베키스탄',
    icdCode: 'G40',
    icdLabel: '뇌전증 (간질)',
    desiredDepartment: '신경외과',
    desiredProcedure: '난치성 간질 수술 적응증 평가',
    attachments: [
      { id: 'att-008', name: '여권사본.pdf', type: 'application/pdf', size: '1.0MB' },
      { id: 'att-009', name: 'MRI_brain_3T.dcm', type: 'application/dicom', size: '120.4MB' },
      { id: 'att-010', name: '뇌파검사결과.pdf', type: 'application/pdf', size: '4.3MB' },
      { id: 'att-011', name: '현지신경과_소견서.pdf', type: 'application/pdf', size: '1.8MB' },
    ],
    cases: [
      {
        id: 'c-003-a',
        patientId: 'p-003',
        hospitalId: 'h-002',
        hospitalName: '삼성서울병원',
        doctorId: 'dr-004',
        doctorName: '최재원',
        status: 'info_requested',
        feedbacks: [
          {
            id: 'fb-003',
            from: 'hospital',
            message:
              'MRI 영상 검토 완료. 수술 적응증 평가를 위해 비디오 뇌파 모니터링(VEEG) 결과 및 신경심리검사 결과가 필요합니다.',
            requestedDocuments: [
              '비디오 뇌파 모니터링 (VEEG) 결과지',
              '신경심리검사 결과 (한국어 또는 영어)',
              '현재 복용 중인 항경련제 목록 및 복용 기간',
              '발작 빈도 기록 (최근 6개월)',
            ],
            createdAt: '2024-11-19T11:00:00Z',
          },
          {
            id: 'fb-004',
            from: 'agency',
            message: '요청하신 자료를 환자 측에 전달하였습니다. VEEG 결과는 2주 이내 제출 예정입니다.',
            createdAt: '2024-11-20T09:00:00Z',
          },
        ],
        submittedAt: '2024-11-17T13:00:00Z',
        updatedAt: '2024-11-20T09:00:00Z',
      },
      {
        id: 'c-003-b',
        patientId: 'p-003',
        hospitalId: 'h-003',
        hospitalName: '서울아산병원',
        status: 'rejected',
        feedbacks: [
          {
            id: 'fb-005',
            from: 'hospital',
            message:
              '제출된 MRI 영상의 해상도가 수술 계획 수립에 필요한 기준에 미달합니다. 3T MRI (고해상도) 재촬영 후 재의뢰 부탁드립니다.',
            createdAt: '2024-11-21T16:30:00Z',
          },
        ],
        submittedAt: '2024-11-17T13:10:00Z',
        updatedAt: '2024-11-21T16:30:00Z',
      },
    ],
    createdAt: '2024-11-17T12:30:00Z',
  },
  {
    id: 'p-004',
    name: 'Анна Сидорова',
    nationality: '러시아',
    icdCode: 'K80',
    icdLabel: '담석증',
    desiredDepartment: '소화기내과',
    desiredProcedure: '복강경 담낭 절제술 또는 내시경 담석 제거',
    attachments: [
      { id: 'att-012', name: '여권사본.pdf', type: 'application/pdf', size: '0.8MB' },
      { id: 'att-013', name: '복부초음파.pdf', type: 'application/pdf', size: '3.6MB' },
      { id: 'att-014', name: '혈액검사결과.pdf', type: 'application/pdf', size: '1.1MB' },
    ],
    cases: [
      {
        id: 'c-004-a',
        patientId: 'p-004',
        hospitalId: 'h-002',
        hospitalName: '삼성서울병원',
        doctorId: 'dr-005',
        doctorName: '정혜영',
        status: 'submitted',
        feedbacks: [],
        submittedAt: '2024-11-23T09:00:00Z',
        updatedAt: '2024-11-23T09:00:00Z',
      },
    ],
    createdAt: '2024-11-23T08:40:00Z',
  },
]

// Helper: find a hospital by id
export function getHospitalById(id: string): Hospital | undefined {
  return HOSPITALS.find((h) => h.id === id)
}

// Helper: find a patient by id
export function getPatientById(id: string): Patient | undefined {
  return PATIENTS.find((p) => p.id === id)
}

// Helper: find a doctor by id across all hospitals
export function getDoctorById(doctorId: string): { hospital: Hospital; doctor: import('./types').Doctor } | undefined {
  for (const hospital of HOSPITALS) {
    for (const dept of hospital.departments) {
      const doctor = dept.doctors.find((d) => d.id === doctorId)
      if (doctor) return { hospital, doctor }
    }
  }
  return undefined
}
