import { Hospital, Patient } from './types'

export const HOSPITALS: Hospital[] = [
  {
    "id": "h-001",
    "name": "강남세브란스병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "대구",
    "district": "분당구",
    "address": "주소 생략",
    "lat": 35.8714,
    "lng": 128.6014,
    "photos": [
      {
        "url": "/images/hospitals/h001_exterior.webp",
        "label": "병원 외관"
      },
      {
        "url": "/images/hospitals/h001_lobby.webp",
        "label": "로비"
      },
      {
        "url": "/images/hospitals/h001_intl.webp",
        "label": "국제진료센터"
      }
    ],
    "departments": [
      {
        "id": "h-001-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-001",
            "name": "김도윤",
            "departmentId": "h-001-onco",
            "specialties": [
              "폐암",
              "위암"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 43,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 397명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-001-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-002",
            "name": "강하준",
            "departmentId": "h-001-ortho",
            "specialties": [
              "골절",
              "인공관절",
              "척추측만증"
            ],
            "education": [
              "서울대학교병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 정형외과 전문의 (2015–현재)"
            ],
            "publications": 47,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 297명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-003",
            "name": "황서현",
            "departmentId": "h-001-ortho",
            "specialties": [
              "인공관절",
              "척추측만증",
              "관절염"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 정형외과 전문의 (2020–현재)"
            ],
            "publications": 114,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 151명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-001-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-004",
            "name": "서지우",
            "departmentId": "h-001-peds",
            "specialties": [
              "소아비만",
              "소아당뇨"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 소아청소년과 전문의 (2018–현재)"
            ],
            "publications": 147,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 424명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-005",
            "name": "서지훈",
            "departmentId": "h-001-peds",
            "specialties": [
              "소아천식"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 144,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 116명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-001-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-006",
            "name": "최민서",
            "departmentId": "h-001-derm",
            "specialties": [
              "백반증"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 피부과 전문의 (2012–현재)"
            ],
            "publications": 123,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 209명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-001-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-007",
            "name": "정하은",
            "departmentId": "h-001-gi",
            "specialties": [
              "위궤양"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 소화기내과 전문의 (2018–현재)"
            ],
            "publications": 129,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 465명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-008",
            "name": "이시우",
            "departmentId": "h-001-gi",
            "specialties": [
              "위궤양"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 소화기내과 전문의 (2011–현재)"
            ],
            "publications": 127,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 474명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-8474-4305",
    "email": "intl@h001.ac.kr",
    "certifications": [
      "JCI 인증",
      "보건복지부 우수 의료기관"
    ],
    "description": "강남세브란스병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 3998,
    "foundedYear": 1985
  },
  {
    "id": "h-002",
    "name": "삼성서울병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "경북",
    "district": "강남구",
    "address": "주소 생략",
    "lat": 35.8562,
    "lng": 128.5930,
    "photos": [
      {
        "url": "/images/hospitals/h002_exterior.webp",
        "label": "병원 외관"
      },
      {
        "url": "/images/hospitals/h002_center.webp",
        "label": "센터동"
      },
      {
        "url": "/images/hospitals/h002_outpatient.webp",
        "label": "외래동"
      }
    ],
    "departments": [
      {
        "id": "h-002-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-009",
            "name": "최지우",
            "departmentId": "h-002-derm",
            "specialties": [
              "건선",
              "백반증"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "삼성서울병원 피부과 전문의 (2014–현재)"
            ],
            "publications": 32,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 197명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-010",
            "name": "전서연",
            "departmentId": "h-002-derm",
            "specialties": [
              "피부암",
              "백반증"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "삼성서울병원 피부과 전문의 (2011–현재)"
            ],
            "publications": 150,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 313명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-011",
            "name": "박지민",
            "departmentId": "h-002-derm",
            "specialties": [
              "아토피"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "삼성서울병원 피부과 전문의 (2012–현재)"
            ],
            "publications": 64,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 335명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-002-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-012",
            "name": "윤민서",
            "departmentId": "h-002-eye",
            "specialties": [
              "녹내장",
              "각막질환"
            ],
            "education": [
              "서울아산병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "삼성서울병원 안과 전문의 (2013–현재)"
            ],
            "publications": 105,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 459명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-8606-8773",
    "email": "intl@h002.ac.kr",
    "certifications": [
      "ISO 9001"
    ],
    "description": "삼성서울병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 3774,
    "foundedYear": 1999
  },
  {
    "id": "h-003",
    "name": "서울아산병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "광주",
    "district": "강남구",
    "address": "주소 생략",
    "lat": 35.1595,
    "lng": 126.8526,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-003-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-013",
            "name": "안서준",
            "departmentId": "h-003-peds",
            "specialties": [
              "소아천식",
              "성조숙증"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 소아청소년과 전문의 (2011–현재)"
            ],
            "publications": 133,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 431명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-014",
            "name": "윤건우",
            "departmentId": "h-003-peds",
            "specialties": [
              "소아당뇨",
              "소아천식",
              "성조숙증"
            ],
            "education": [
              "아주대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 소아청소년과 전문의 (2014–현재)"
            ],
            "publications": 148,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 489명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-015",
            "name": "송시우",
            "departmentId": "h-003-peds",
            "specialties": [
              "소아천식",
              "소아비만"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 소아청소년과 전문의 (2012–현재)"
            ],
            "publications": 86,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 165명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-016",
            "name": "강건우",
            "departmentId": "h-003-peds",
            "specialties": [
              "소아당뇨"
            ],
            "education": [
              "전북대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 소아청소년과 전문의 (2012–현재)"
            ],
            "publications": 141,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 178명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-003-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-017",
            "name": "최주원",
            "departmentId": "h-003-neuro",
            "specialties": [
              "파킨슨병",
              "뇌출혈",
              "뇌종양"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 신경외과 전문의 (2010–현재)"
            ],
            "publications": 70,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 98명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-018",
            "name": "조민서",
            "departmentId": "h-003-neuro",
            "specialties": [
              "척추질환",
              "뇌출혈"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 신경외과 전문의 (2019–현재)"
            ],
            "publications": 33,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 441명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-019",
            "name": "전건우",
            "departmentId": "h-003-neuro",
            "specialties": [
              "파킨슨병"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 신경외과 전문의 (2015–현재)"
            ],
            "publications": 92,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 182명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-003-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-020",
            "name": "박민서",
            "departmentId": "h-003-derm",
            "specialties": [
              "건선",
              "아토피"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 피부과 전문의 (2010–현재)"
            ],
            "publications": 119,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 71명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-021",
            "name": "오지훈",
            "departmentId": "h-003-derm",
            "specialties": [
              "백반증"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "서울아산병원 피부과 전문의 (2016–현재)"
            ],
            "publications": 122,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 50명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      },
      {
        "code": "zh",
        "label": "中文",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": false,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-5305-7021",
    "email": "intl@h003.ac.kr",
    "certifications": [
      "ISO 9001",
      "JCI 인증",
      "보건복지부 우수 의료기관",
      "외국인환자 유치기관 등록"
    ],
    "description": "서울아산병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 6095,
    "foundedYear": 1950
  },
  {
    "id": "h-004",
    "name": "연세대학교 신촌세브란스병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "경남",
    "district": "서초구",
    "address": "주소 생략",
    "lat": 35.2285,
    "lng": 128.6811,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-004-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-022",
            "name": "서건우",
            "departmentId": "h-004-card",
            "specialties": [
              "심부전",
              "심근경색",
              "협심증"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 심장내과 전문의 (2012–현재)"
            ],
            "publications": 121,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 187명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-023",
            "name": "조서윤",
            "departmentId": "h-004-card",
            "specialties": [
              "심부전",
              "부정맥"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 심장내과 전문의 (2017–현재)"
            ],
            "publications": 149,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 312명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-004-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-024",
            "name": "신서현",
            "departmentId": "h-004-onco",
            "specialties": [
              "대장암",
              "유방암"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 종양내과 전문의 (2010–현재)"
            ],
            "publications": 73,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 336명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-025",
            "name": "송민서",
            "departmentId": "h-004-onco",
            "specialties": [
              "유방암",
              "위암"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 종양내과 전문의 (2016–현재)"
            ],
            "publications": 61,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 244명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-004-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-026",
            "name": "권서현",
            "departmentId": "h-004-obgyn",
            "specialties": [
              "부인암"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 산부인과 전문의 (2015–현재)"
            ],
            "publications": 125,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 194명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-027",
            "name": "임하은",
            "departmentId": "h-004-obgyn",
            "specialties": [
              "난임",
              "부인암",
              "자궁근종"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 산부인과 전문의 (2014–현재)"
            ],
            "publications": 19,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 118명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-028",
            "name": "황서윤",
            "departmentId": "h-004-obgyn",
            "specialties": [
              "고위험임신"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 산부인과 전문의 (2012–현재)"
            ],
            "publications": 99,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 496명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-029",
            "name": "박주원",
            "departmentId": "h-004-obgyn",
            "specialties": [
              "부인암"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 산부인과 전문의 (2012–현재)"
            ],
            "publications": 61,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 298명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-004-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-030",
            "name": "전지호",
            "departmentId": "h-004-ortho",
            "specialties": [
              "척추측만증"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 정형외과 전문의 (2017–현재)"
            ],
            "publications": 10,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 158명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-031",
            "name": "오서윤",
            "departmentId": "h-004-ortho",
            "specialties": [
              "골절",
              "인공관절",
              "척추측만증"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "연세대학교 신촌세브란스병원 정형외과 전문의 (2015–현재)"
            ],
            "publications": 15,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 54명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-5655-6501",
    "email": "intl@h004.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록"
    ],
    "description": "연세대학교 신촌세브란스병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 5484,
    "foundedYear": 1989
  },
  {
    "id": "h-005",
    "name": "가톨릭대학교 서울성모병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "대전",
    "district": "송파구",
    "address": "주소 생략",
    "lat": 36.3504,
    "lng": 127.3845,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-005-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-032",
            "name": "전서윤",
            "departmentId": "h-005-card",
            "specialties": [
              "협심증"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 심장내과 전문의 (2014–현재)"
            ],
            "publications": 69,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 102명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-033",
            "name": "한채원",
            "departmentId": "h-005-card",
            "specialties": [
              "심근경색"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 심장내과 전문의 (2017–현재)"
            ],
            "publications": 48,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 213명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-034",
            "name": "박지민",
            "departmentId": "h-005-card",
            "specialties": [
              "부정맥",
              "협심증",
              "심근경색"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 심장내과 전문의 (2010–현재)"
            ],
            "publications": 144,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 281명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-035",
            "name": "장서준",
            "departmentId": "h-005-card",
            "specialties": [
              "심근경색"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 심장내과 전문의 (2016–현재)"
            ],
            "publications": 102,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 365명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-005-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-036",
            "name": "황민준",
            "departmentId": "h-005-gi",
            "specialties": [
              "대장용종",
              "위염"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "양산부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 소화기내과 전문의 (2019–현재)"
            ],
            "publications": 147,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 449명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-037",
            "name": "윤주원",
            "departmentId": "h-005-gi",
            "specialties": [
              "위궤양",
              "간경화",
              "위염"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 소화기내과 전문의 (2015–현재)"
            ],
            "publications": 140,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 134명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-038",
            "name": "전민준",
            "departmentId": "h-005-gi",
            "specialties": [
              "대장용종",
              "위염",
              "간경화"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 소화기내과 전문의 (2014–현재)"
            ],
            "publications": 91,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 474명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-039",
            "name": "조서준",
            "departmentId": "h-005-gi",
            "specialties": [
              "위궤양",
              "위염",
              "대장용종"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 소화기내과 전문의 (2017–현재)"
            ],
            "publications": 10,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 494명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-005-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-040",
            "name": "박건우",
            "departmentId": "h-005-obgyn",
            "specialties": [
              "난임",
              "자궁근종",
              "부인암"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 산부인과 전문의 (2015–현재)"
            ],
            "publications": 92,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 433명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-041",
            "name": "권시우",
            "departmentId": "h-005-obgyn",
            "specialties": [
              "난임",
              "고위험임신",
              "자궁근종"
            ],
            "education": [
              "아주대학교병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 산부인과 전문의 (2011–현재)"
            ],
            "publications": 83,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 436명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-042",
            "name": "최건우",
            "departmentId": "h-005-obgyn",
            "specialties": [
              "고위험임신"
            ],
            "education": [
              "서울아산병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가톨릭대학교 서울성모병원 산부인과 전문의 (2011–현재)"
            ],
            "publications": 40,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 209명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-2352-8668",
    "email": "intl@h005.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "JCI 인증"
    ],
    "description": "가톨릭대학교 서울성모병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 9234,
    "foundedYear": 1967
  },
  {
    "id": "h-006",
    "name": "분당서울대학교병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "제주",
    "district": "종로구",
    "address": "주소 생략",
    "lat": 33.4996,
    "lng": 126.5312,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-006-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-043",
            "name": "전서연",
            "departmentId": "h-006-neuro",
            "specialties": [
              "뇌출혈",
              "척추질환",
              "뇌종양"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 신경외과 전문의 (2016–현재)"
            ],
            "publications": 147,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 301명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-044",
            "name": "송서윤",
            "departmentId": "h-006-neuro",
            "specialties": [
              "뇌출혈"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 신경외과 전문의 (2010–현재)"
            ],
            "publications": 86,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 292명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-045",
            "name": "최지유",
            "departmentId": "h-006-neuro",
            "specialties": [
              "척추질환",
              "파킨슨병",
              "뇌출혈"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 신경외과 전문의 (2013–현재)"
            ],
            "publications": 102,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 101명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-046",
            "name": "조지유",
            "departmentId": "h-006-neuro",
            "specialties": [
              "뇌종양",
              "뇌출혈"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 신경외과 전문의 (2014–현재)"
            ],
            "publications": 125,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 306명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-006-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-047",
            "name": "오지민",
            "departmentId": "h-006-ent",
            "specialties": [
              "난청",
              "편도선염"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 이비인후과 전문의 (2010–현재)"
            ],
            "publications": 94,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 349명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-048",
            "name": "조하윤",
            "departmentId": "h-006-ent",
            "specialties": [
              "이명",
              "비염"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 이비인후과 전문의 (2017–현재)"
            ],
            "publications": 61,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 330명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-049",
            "name": "임하은",
            "departmentId": "h-006-ent",
            "specialties": [
              "난청"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "충북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 이비인후과 전문의 (2017–현재)"
            ],
            "publications": 92,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 244명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-050",
            "name": "강하준",
            "departmentId": "h-006-ent",
            "specialties": [
              "편도선염"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 이비인후과 전문의 (2018–현재)"
            ],
            "publications": 135,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 293명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-006-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-051",
            "name": "신예준",
            "departmentId": "h-006-card",
            "specialties": [
              "심부전",
              "협심증"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 심장내과 전문의 (2018–현재)"
            ],
            "publications": 21,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 195명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-006-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-052",
            "name": "권지유",
            "departmentId": "h-006-derm",
            "specialties": [
              "아토피"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "분당서울대학교병원 피부과 전문의 (2020–현재)"
            ],
            "publications": 58,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 132명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-4051-2805",
    "email": "intl@h006.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "ISO 9001"
    ],
    "description": "분당서울대학교병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 6422,
    "foundedYear": 1978
  },
  {
    "id": "h-007",
    "name": "고려대학교 안암병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "강원",
    "district": "분당구",
    "address": "주소 생략",
    "lat": 37.8228,
    "lng": 128.1555,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-007-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-053",
            "name": "윤민준",
            "departmentId": "h-007-eye",
            "specialties": [
              "백내장",
              "녹내장",
              "각막질환"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 안과 전문의 (2016–현재)"
            ],
            "publications": 14,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 269명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-054",
            "name": "정건우",
            "departmentId": "h-007-eye",
            "specialties": [
              "녹내장"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 안과 전문의 (2015–현재)"
            ],
            "publications": 115,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 447명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-055",
            "name": "홍서준",
            "departmentId": "h-007-eye",
            "specialties": [
              "각막질환",
              "백내장",
              "녹내장"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 안과 전문의 (2012–현재)"
            ],
            "publications": 65,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 92명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-007-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-056",
            "name": "오서준",
            "departmentId": "h-007-neuro",
            "specialties": [
              "척추질환",
              "뇌출혈",
              "뇌종양"
            ],
            "education": [
              "건국대학교병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 신경외과 전문의 (2013–현재)"
            ],
            "publications": 103,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 105명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-057",
            "name": "윤도윤",
            "departmentId": "h-007-neuro",
            "specialties": [
              "척추질환",
              "파킨슨병",
              "뇌출혈"
            ],
            "education": [
              "전북대학교병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 신경외과 전문의 (2018–현재)"
            ],
            "publications": 42,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 144명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-058",
            "name": "조민준",
            "departmentId": "h-007-neuro",
            "specialties": [
              "척추질환",
              "뇌출혈",
              "뇌종양"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 신경외과 전문의 (2014–현재)"
            ],
            "publications": 120,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 315명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-059",
            "name": "한예준",
            "departmentId": "h-007-neuro",
            "specialties": [
              "척추질환",
              "뇌종양"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 신경외과 전문의 (2011–현재)"
            ],
            "publications": 52,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 335명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-007-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-060",
            "name": "윤채원",
            "departmentId": "h-007-card",
            "specialties": [
              "협심증"
            ],
            "education": [
              "전북대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 심장내과 전문의 (2018–현재)"
            ],
            "publications": 63,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 237명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-061",
            "name": "임하준",
            "departmentId": "h-007-card",
            "specialties": [
              "심부전"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 심장내과 전문의 (2015–현재)"
            ],
            "publications": 150,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 302명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-062",
            "name": "조건우",
            "departmentId": "h-007-card",
            "specialties": [
              "협심증",
              "부정맥"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 안암병원 심장내과 전문의 (2012–현재)"
            ],
            "publications": 98,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 324명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      },
      {
        "code": "zh",
        "label": "中文",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-7058-8421",
    "email": "intl@h007.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록",
      "보건복지부 우수 의료기관",
      "ISO 9001"
    ],
    "description": "고려대학교 안암병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 8183,
    "foundedYear": 1995
  },
  {
    "id": "h-008",
    "name": "아주대학교병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "전남",
    "district": "해운대구",
    "address": "주소 생략",
    "lat": 34.8161,
    "lng": 126.4629,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-008-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-063",
            "name": "황하은",
            "departmentId": "h-008-onco",
            "specialties": [
              "위암",
              "대장암"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 111,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 77명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-064",
            "name": "최서준",
            "departmentId": "h-008-onco",
            "specialties": [
              "폐암",
              "간암",
              "위암"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 94,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 282명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-008-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-065",
            "name": "김도윤",
            "departmentId": "h-008-eye",
            "specialties": [
              "녹내장"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 안과 전문의 (2015–현재)"
            ],
            "publications": 34,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 66명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-066",
            "name": "김민준",
            "departmentId": "h-008-eye",
            "specialties": [
              "각막질환",
              "백내장"
            ],
            "education": [
              "서울아산병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 안과 전문의 (2018–현재)"
            ],
            "publications": 35,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 120명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-067",
            "name": "오서준",
            "departmentId": "h-008-eye",
            "specialties": [
              "백내장"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 안과 전문의 (2016–현재)"
            ],
            "publications": 92,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 456명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-068",
            "name": "장주원",
            "departmentId": "h-008-eye",
            "specialties": [
              "녹내장",
              "망막질환"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "양산부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 안과 전문의 (2020–현재)"
            ],
            "publications": 114,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 138명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-008-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-069",
            "name": "황건우",
            "departmentId": "h-008-card",
            "specialties": [
              "심부전",
              "협심증",
              "심근경색"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 심장내과 전문의 (2016–현재)"
            ],
            "publications": 81,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 319명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-070",
            "name": "장시우",
            "departmentId": "h-008-card",
            "specialties": [
              "심부전"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 심장내과 전문의 (2011–현재)"
            ],
            "publications": 99,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 217명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-071",
            "name": "전시우",
            "departmentId": "h-008-card",
            "specialties": [
              "협심증",
              "부정맥"
            ],
            "education": [
              "서울대학교병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 심장내과 전문의 (2013–현재)"
            ],
            "publications": 121,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 165명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-008-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-072",
            "name": "임민서",
            "departmentId": "h-008-derm",
            "specialties": [
              "백반증"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 피부과 전문의 (2010–현재)"
            ],
            "publications": 85,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 272명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-073",
            "name": "강서준",
            "departmentId": "h-008-derm",
            "specialties": [
              "건선",
              "백반증",
              "아토피"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 피부과 전문의 (2018–현재)"
            ],
            "publications": 87,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 62명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-074",
            "name": "정서연",
            "departmentId": "h-008-derm",
            "specialties": [
              "피부암",
              "아토피"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 피부과 전문의 (2012–현재)"
            ],
            "publications": 110,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 418명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-075",
            "name": "서지호",
            "departmentId": "h-008-derm",
            "specialties": [
              "건선",
              "아토피",
              "백반증"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "충북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 피부과 전문의 (2019–현재)"
            ],
            "publications": 145,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 203명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-008-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-076",
            "name": "조서준",
            "departmentId": "h-008-gi",
            "specialties": [
              "위궤양",
              "위염"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "아주대학교병원 소화기내과 전문의 (2014–현재)"
            ],
            "publications": 110,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 156명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      },
      {
        "code": "zh",
        "label": "中文",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": false,
    "whatsappNumber": "+82-10-3058-2912",
    "email": "intl@h008.ac.kr",
    "certifications": [
      "JCI 인증",
      "외국인환자 유치기관 등록",
      "ISO 9001"
    ],
    "description": "아주대학교병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 7870,
    "foundedYear": 1996
  },
  {
    "id": "h-009",
    "name": "고려대학교 구로병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "경북",
    "district": "분당구",
    "address": "주소 생략",
    "lat": 35.8412,
    "lng": 128.6050,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-009-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-077",
            "name": "황서현",
            "departmentId": "h-009-gi",
            "specialties": [
              "위궤양"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "아주대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 소화기내과 전문의 (2020–현재)"
            ],
            "publications": 58,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 454명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-078",
            "name": "조하은",
            "departmentId": "h-009-gi",
            "specialties": [
              "대장용종"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 소화기내과 전문의 (2010–현재)"
            ],
            "publications": 10,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 67명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-079",
            "name": "안지훈",
            "departmentId": "h-009-gi",
            "specialties": [
              "간경화",
              "위궤양",
              "위염"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 소화기내과 전문의 (2017–현재)"
            ],
            "publications": 69,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 423명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-009-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-080",
            "name": "전하윤",
            "departmentId": "h-009-eye",
            "specialties": [
              "백내장"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 안과 전문의 (2019–현재)"
            ],
            "publications": 75,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 65명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-081",
            "name": "최예준",
            "departmentId": "h-009-eye",
            "specialties": [
              "녹내장"
            ],
            "education": [
              "건국대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 안과 전문의 (2014–현재)"
            ],
            "publications": 47,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 221명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-082",
            "name": "송서연",
            "departmentId": "h-009-eye",
            "specialties": [
              "백내장",
              "녹내장"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 안과 전문의 (2013–현재)"
            ],
            "publications": 148,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 392명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-083",
            "name": "황예준",
            "departmentId": "h-009-eye",
            "specialties": [
              "녹내장",
              "백내장",
              "각막질환"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 안과 전문의 (2013–현재)"
            ],
            "publications": 138,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 206명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-009-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-084",
            "name": "서서현",
            "departmentId": "h-009-peds",
            "specialties": [
              "성조숙증"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "고려대학교 안암병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 104,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 78명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-085",
            "name": "조도윤",
            "departmentId": "h-009-peds",
            "specialties": [
              "성조숙증",
              "소아당뇨",
              "소아천식"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 36,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 96명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-009-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-086",
            "name": "황서연",
            "departmentId": "h-009-neuro",
            "specialties": [
              "파킨슨병",
              "뇌종양"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "고려대학교 구로병원 신경외과 전문의 (2019–현재)"
            ],
            "publications": 25,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 336명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      },
      {
        "code": "zh",
        "label": "中文",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-6360-3798",
    "email": "intl@h009.ac.kr",
    "certifications": [
      "ISO 9001",
      "외국인환자 유치기관 등록"
    ],
    "description": "고려대학교 구로병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 2117,
    "foundedYear": 1988
  },
  {
    "id": "h-010",
    "name": "가천대 길병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "광주",
    "district": "마포구",
    "address": "주소 생략",
    "lat": 35.1445,
    "lng": 126.8646,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-010-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-087",
            "name": "최하은",
            "departmentId": "h-010-derm",
            "specialties": [
              "아토피",
              "건선",
              "백반증"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 피부과 전문의 (2019–현재)"
            ],
            "publications": 69,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 138명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-088",
            "name": "홍주원",
            "departmentId": "h-010-derm",
            "specialties": [
              "아토피",
              "건선",
              "피부암"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 피부과 전문의 (2016–현재)"
            ],
            "publications": 74,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 227명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-089",
            "name": "윤지호",
            "departmentId": "h-010-derm",
            "specialties": [
              "건선"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 피부과 전문의 (2011–현재)"
            ],
            "publications": 130,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 221명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-090",
            "name": "송하은",
            "departmentId": "h-010-derm",
            "specialties": [
              "백반증",
              "아토피",
              "건선"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 피부과 전문의 (2015–현재)"
            ],
            "publications": 24,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 193명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-010-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-091",
            "name": "장지훈",
            "departmentId": "h-010-obgyn",
            "specialties": [
              "고위험임신",
              "자궁근종"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 산부인과 전문의 (2012–현재)"
            ],
            "publications": 13,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 496명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-092",
            "name": "안채원",
            "departmentId": "h-010-obgyn",
            "specialties": [
              "난임",
              "자궁근종"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 산부인과 전문의 (2020–현재)"
            ],
            "publications": 127,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 232명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-093",
            "name": "송민준",
            "departmentId": "h-010-obgyn",
            "specialties": [
              "난임"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 산부인과 전문의 (2010–현재)"
            ],
            "publications": 54,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 51명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-094",
            "name": "오서윤",
            "departmentId": "h-010-obgyn",
            "specialties": [
              "부인암",
              "난임",
              "자궁근종"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 산부인과 전문의 (2020–현재)"
            ],
            "publications": 11,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 171명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-010-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-095",
            "name": "김서연",
            "departmentId": "h-010-onco",
            "specialties": [
              "폐암"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 78,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 282명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-096",
            "name": "황하은",
            "departmentId": "h-010-onco",
            "specialties": [
              "위암",
              "대장암"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "가천대 길병원 종양내과 전문의 (2019–현재)"
            ],
            "publications": 43,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 303명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-7141-3227",
    "email": "intl@h010.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "ISO 9001",
      "JCI 인증"
    ],
    "description": "가천대 길병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 1767,
    "foundedYear": 1987
  },
  {
    "id": "h-011",
    "name": "강남세브란스병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "광주",
    "district": "유성구",
    "address": "주소 생략",
    "lat": 35.1895,
    "lng": 126.8286,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-011-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-097",
            "name": "박지훈",
            "departmentId": "h-011-peds",
            "specialties": [
              "성조숙증",
              "소아당뇨"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 소아청소년과 전문의 (2016–현재)"
            ],
            "publications": 49,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 326명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-011-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-098",
            "name": "안지유",
            "departmentId": "h-011-onco",
            "specialties": [
              "대장암"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 종양내과 전문의 (2020–현재)"
            ],
            "publications": 122,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 389명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-099",
            "name": "김지훈",
            "departmentId": "h-011-onco",
            "specialties": [
              "폐암",
              "위암"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 종양내과 전문의 (2011–현재)"
            ],
            "publications": 73,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 247명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-100",
            "name": "장주원",
            "departmentId": "h-011-onco",
            "specialties": [
              "위암",
              "폐암",
              "유방암"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 종양내과 전문의 (2010–현재)"
            ],
            "publications": 90,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 374명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-011-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-101",
            "name": "윤예준",
            "departmentId": "h-011-card",
            "specialties": [
              "협심증",
              "심부전"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 심장내과 전문의 (2017–현재)"
            ],
            "publications": 65,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 188명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-102",
            "name": "신하윤",
            "departmentId": "h-011-card",
            "specialties": [
              "심근경색"
            ],
            "education": [
              "아주대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 심장내과 전문의 (2018–현재)"
            ],
            "publications": 148,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 77명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-011-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-103",
            "name": "신서현",
            "departmentId": "h-011-neuro",
            "specialties": [
              "뇌종양",
              "척추질환",
              "파킨슨병"
            ],
            "education": [
              "아주대학교병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 신경외과 전문의 (2020–현재)"
            ],
            "publications": 144,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 85명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-104",
            "name": "황시우",
            "departmentId": "h-011-neuro",
            "specialties": [
              "뇌종양",
              "척추질환",
              "뇌출혈"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "아주대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 신경외과 전문의 (2018–현재)"
            ],
            "publications": 26,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 394명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-105",
            "name": "장채원",
            "departmentId": "h-011-neuro",
            "specialties": [
              "척추질환",
              "파킨슨병"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 신경외과 전문의 (2014–현재)"
            ],
            "publications": 81,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 302명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-106",
            "name": "이도윤",
            "departmentId": "h-011-neuro",
            "specialties": [
              "뇌출혈",
              "파킨슨병"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강남세브란스병원 신경외과 전문의 (2015–현재)"
            ],
            "publications": 41,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 268명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": false,
    "whatsappNumber": "+82-10-2681-3823",
    "email": "intl@h011.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록",
      "JCI 인증"
    ],
    "description": "강남세브란스병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 7721,
    "foundedYear": 1978
  },
  {
    "id": "h-012",
    "name": "전남대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "세종",
    "district": "해운대구",
    "address": "주소 생략",
    "lat": 36.4800,
    "lng": 127.2590,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-012-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-107",
            "name": "한지훈",
            "departmentId": "h-012-obgyn",
            "specialties": [
              "부인암",
              "고위험임신"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 산부인과 전문의 (2012–현재)"
            ],
            "publications": 81,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 173명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-108",
            "name": "홍하윤",
            "departmentId": "h-012-obgyn",
            "specialties": [
              "난임",
              "고위험임신"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 산부인과 전문의 (2014–현재)"
            ],
            "publications": 66,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 189명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-109",
            "name": "장지우",
            "departmentId": "h-012-obgyn",
            "specialties": [
              "고위험임신",
              "난임",
              "자궁근종"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 43,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 305명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-012-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-110",
            "name": "최건우",
            "departmentId": "h-012-onco",
            "specialties": [
              "위암",
              "폐암",
              "대장암"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 종양내과 전문의 (2011–현재)"
            ],
            "publications": 126,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 418명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-111",
            "name": "최서준",
            "departmentId": "h-012-onco",
            "specialties": [
              "위암",
              "유방암",
              "간암"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 종양내과 전문의 (2019–현재)"
            ],
            "publications": 17,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 267명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-112",
            "name": "한예준",
            "departmentId": "h-012-onco",
            "specialties": [
              "간암",
              "폐암"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 종양내과 전문의 (2019–현재)"
            ],
            "publications": 129,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 415명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-012-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-113",
            "name": "윤하은",
            "departmentId": "h-012-gi",
            "specialties": [
              "위염",
              "대장용종"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 소화기내과 전문의 (2016–현재)"
            ],
            "publications": 106,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 287명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-114",
            "name": "강하윤",
            "departmentId": "h-012-gi",
            "specialties": [
              "대장용종",
              "위염"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "아주대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 소화기내과 전문의 (2016–현재)"
            ],
            "publications": 52,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 120명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-115",
            "name": "권건우",
            "departmentId": "h-012-gi",
            "specialties": [
              "위염",
              "위궤양",
              "대장용종"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 소화기내과 전문의 (2013–현재)"
            ],
            "publications": 94,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 364명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-116",
            "name": "홍하준",
            "departmentId": "h-012-gi",
            "specialties": [
              "위염",
              "위궤양",
              "대장용종"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 소화기내과 전문의 (2018–현재)"
            ],
            "publications": 34,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 202명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-012-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-117",
            "name": "황민준",
            "departmentId": "h-012-card",
            "specialties": [
              "협심증",
              "심부전",
              "심근경색"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 심장내과 전문의 (2015–현재)"
            ],
            "publications": 139,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 411명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-012-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-118",
            "name": "한민서",
            "departmentId": "h-012-ortho",
            "specialties": [
              "관절염"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 정형외과 전문의 (2018–현재)"
            ],
            "publications": 79,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 259명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-119",
            "name": "정지호",
            "departmentId": "h-012-ortho",
            "specialties": [
              "골절"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 정형외과 전문의 (2020–현재)"
            ],
            "publications": 72,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 283명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-120",
            "name": "강채원",
            "departmentId": "h-012-ortho",
            "specialties": [
              "척추측만증"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 정형외과 전문의 (2016–현재)"
            ],
            "publications": 119,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 292명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-121",
            "name": "조도윤",
            "departmentId": "h-012-ortho",
            "specialties": [
              "인공관절",
              "관절염"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전남대학교병원 정형외과 전문의 (2018–현재)"
            ],
            "publications": 114,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 417명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-6606-5932",
    "email": "intl@h012.ac.kr",
    "certifications": [
      "JCI 인증",
      "보건복지부 우수 의료기관"
    ],
    "description": "전남대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 8206,
    "foundedYear": 1959
  },
  {
    "id": "h-013",
    "name": "경북대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "세종",
    "district": "분당구",
    "address": "주소 생략",
    "lat": 36.4650,
    "lng": 127.2710,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-013-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-122",
            "name": "이하은",
            "departmentId": "h-013-eye",
            "specialties": [
              "망막질환",
              "백내장"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 안과 전문의 (2016–현재)"
            ],
            "publications": 102,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 377명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-123",
            "name": "안도윤",
            "departmentId": "h-013-eye",
            "specialties": [
              "백내장",
              "망막질환",
              "각막질환"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 안과 전문의 (2017–현재)"
            ],
            "publications": 119,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 294명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-124",
            "name": "이지유",
            "departmentId": "h-013-eye",
            "specialties": [
              "백내장",
              "각막질환",
              "녹내장"
            ],
            "education": [
              "아주대학교병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 안과 전문의 (2010–현재)"
            ],
            "publications": 125,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 497명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-125",
            "name": "홍주원",
            "departmentId": "h-013-eye",
            "specialties": [
              "녹내장",
              "백내장"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 안과 전문의 (2016–현재)"
            ],
            "publications": 19,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 322명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-013-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-126",
            "name": "한지우",
            "departmentId": "h-013-onco",
            "specialties": [
              "폐암"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 종양내과 전문의 (2019–현재)"
            ],
            "publications": 52,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 364명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-127",
            "name": "홍건우",
            "departmentId": "h-013-onco",
            "specialties": [
              "위암",
              "대장암"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 24,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 106명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-128",
            "name": "전시우",
            "departmentId": "h-013-onco",
            "specialties": [
              "위암"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 142,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 395명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-129",
            "name": "박서현",
            "departmentId": "h-013-onco",
            "specialties": [
              "위암",
              "폐암"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "고려대학교 안암병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 종양내과 전문의 (2013–현재)"
            ],
            "publications": 48,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 241명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-013-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-130",
            "name": "정지유",
            "departmentId": "h-013-peds",
            "specialties": [
              "소아천식",
              "소아당뇨",
              "소아비만"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경북대학교병원 소아청소년과 전문의 (2014–현재)"
            ],
            "publications": 67,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 98명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-3873-6709",
    "email": "intl@h013.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "JCI 인증",
      "외국인환자 유치기관 등록",
      "ISO 9001"
    ],
    "description": "경북대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 2942,
    "foundedYear": 1960
  },
  {
    "id": "h-014",
    "name": "양산부산대학교병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "제주",
    "district": "유성구",
    "address": "주소 생략",
    "lat": 33.4846,
    "lng": 126.5432,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-014-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-131",
            "name": "안지호",
            "departmentId": "h-014-neuro",
            "specialties": [
              "뇌종양",
              "뇌출혈",
              "파킨슨병"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 신경외과 전문의 (2013–현재)"
            ],
            "publications": 19,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 236명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-132",
            "name": "정하준",
            "departmentId": "h-014-neuro",
            "specialties": [
              "척추질환",
              "파킨슨병"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 신경외과 전문의 (2019–현재)"
            ],
            "publications": 48,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 457명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-133",
            "name": "조도윤",
            "departmentId": "h-014-neuro",
            "specialties": [
              "뇌종양",
              "파킨슨병",
              "척추질환"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 신경외과 전문의 (2020–현재)"
            ],
            "publications": 66,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 344명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-134",
            "name": "강서연",
            "departmentId": "h-014-neuro",
            "specialties": [
              "뇌종양",
              "뇌출혈",
              "파킨슨병"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 신경외과 전문의 (2012–현재)"
            ],
            "publications": 137,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 453명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-014-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-135",
            "name": "장하윤",
            "departmentId": "h-014-card",
            "specialties": [
              "심근경색",
              "협심증"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 심장내과 전문의 (2010–현재)"
            ],
            "publications": 11,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 297명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-014-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-136",
            "name": "안서윤",
            "departmentId": "h-014-peds",
            "specialties": [
              "소아당뇨",
              "성조숙증",
              "소아비만"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 57,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 461명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-137",
            "name": "서민서",
            "departmentId": "h-014-peds",
            "specialties": [
              "성조숙증"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "양산부산대학교병원 소아청소년과 전문의 (2012–현재)"
            ],
            "publications": 25,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 128명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-3285-3034",
    "email": "intl@h014.ac.kr",
    "certifications": [
      "JCI 인증",
      "ISO 9001",
      "외국인환자 유치기관 등록",
      "보건복지부 우수 의료기관"
    ],
    "description": "양산부산대학교병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 3069,
    "foundedYear": 1966
  },
  {
    "id": "h-015",
    "name": "충남대학교병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "전남",
    "district": "송파구",
    "address": "주소 생략",
    "lat": 34.8011,
    "lng": 126.4749,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-015-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-138",
            "name": "권하준",
            "departmentId": "h-015-ortho",
            "specialties": [
              "인공관절",
              "척추측만증"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 정형외과 전문의 (2014–현재)"
            ],
            "publications": 77,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 217명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-015-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-139",
            "name": "안예준",
            "departmentId": "h-015-derm",
            "specialties": [
              "백반증",
              "피부암"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 피부과 전문의 (2015–현재)"
            ],
            "publications": 61,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 294명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-015-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-140",
            "name": "임채원",
            "departmentId": "h-015-card",
            "specialties": [
              "심근경색",
              "협심증"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 심장내과 전문의 (2020–현재)"
            ],
            "publications": 93,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 66명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-141",
            "name": "오지민",
            "departmentId": "h-015-card",
            "specialties": [
              "부정맥",
              "심근경색",
              "심부전"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 심장내과 전문의 (2011–현재)"
            ],
            "publications": 93,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 254명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-142",
            "name": "임시우",
            "departmentId": "h-015-card",
            "specialties": [
              "심부전"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 심장내과 전문의 (2011–현재)"
            ],
            "publications": 87,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 60명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-143",
            "name": "조하윤",
            "departmentId": "h-015-card",
            "specialties": [
              "부정맥",
              "협심증",
              "심부전"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 심장내과 전문의 (2019–현재)"
            ],
            "publications": 126,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 115명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-015-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-144",
            "name": "권하은",
            "departmentId": "h-015-obgyn",
            "specialties": [
              "자궁근종",
              "난임",
              "부인암"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 산부인과 전문의 (2012–현재)"
            ],
            "publications": 105,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 178명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-145",
            "name": "임지훈",
            "departmentId": "h-015-obgyn",
            "specialties": [
              "고위험임신"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충남대학교병원 산부인과 전문의 (2015–현재)"
            ],
            "publications": 69,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 168명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-3139-8051",
    "email": "intl@h015.ac.kr",
    "certifications": [
      "ISO 9001",
      "보건복지부 우수 의료기관"
    ],
    "description": "충남대학교병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 8674,
    "foundedYear": 1959
  },
  {
    "id": "h-016",
    "name": "부산대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "인천",
    "district": "강남구",
    "address": "주소 생략",
    "lat": 37.4563,
    "lng": 126.7052,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1519494140681-8b17d830a3e9?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-016-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-146",
            "name": "권채원",
            "departmentId": "h-016-onco",
            "specialties": [
              "위암"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 종양내과 전문의 (2016–현재)"
            ],
            "publications": 42,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 140명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-147",
            "name": "이지우",
            "departmentId": "h-016-onco",
            "specialties": [
              "위암",
              "대장암",
              "폐암"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 종양내과 전문의 (2010–현재)"
            ],
            "publications": 142,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 80명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-016-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-148",
            "name": "박도윤",
            "departmentId": "h-016-gi",
            "specialties": [
              "대장용종",
              "위궤양",
              "간경화"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 소화기내과 전문의 (2013–현재)"
            ],
            "publications": 126,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 222명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-149",
            "name": "홍지민",
            "departmentId": "h-016-gi",
            "specialties": [
              "간경화",
              "위염"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 소화기내과 전문의 (2012–현재)"
            ],
            "publications": 10,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 426명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-150",
            "name": "김지민",
            "departmentId": "h-016-gi",
            "specialties": [
              "대장용종",
              "위궤양",
              "위염"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 소화기내과 전문의 (2016–현재)"
            ],
            "publications": 70,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 336명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-151",
            "name": "임채원",
            "departmentId": "h-016-gi",
            "specialties": [
              "위염"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 소화기내과 전문의 (2019–현재)"
            ],
            "publications": 128,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 205명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-016-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-152",
            "name": "홍하은",
            "departmentId": "h-016-eye",
            "specialties": [
              "백내장",
              "각막질환",
              "망막질환"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 안과 전문의 (2013–현재)"
            ],
            "publications": 60,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 140명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-016-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-153",
            "name": "정채원",
            "departmentId": "h-016-peds",
            "specialties": [
              "소아당뇨",
              "소아비만",
              "소아천식"
            ],
            "education": [
              "건국대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "부산대학교병원 소아청소년과 전문의 (2014–현재)"
            ],
            "publications": 80,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 145명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-9590-8094",
    "email": "intl@h016.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록"
    ],
    "description": "부산대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 4431,
    "foundedYear": 2002
  },
  {
    "id": "h-017",
    "name": "인하대학교병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "대전",
    "district": "분당구",
    "address": "주소 생략",
    "lat": 36.3354,
    "lng": 127.3965,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-017-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-154",
            "name": "박하은",
            "departmentId": "h-017-onco",
            "specialties": [
              "대장암",
              "위암"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 종양내과 전문의 (2019–현재)"
            ],
            "publications": 62,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 464명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-155",
            "name": "정도윤",
            "departmentId": "h-017-onco",
            "specialties": [
              "대장암",
              "유방암",
              "폐암"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 종양내과 전문의 (2016–현재)"
            ],
            "publications": 57,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 182명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-017-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-156",
            "name": "윤주원",
            "departmentId": "h-017-card",
            "specialties": [
              "부정맥"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 심장내과 전문의 (2019–현재)"
            ],
            "publications": 56,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 292명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-157",
            "name": "권서준",
            "departmentId": "h-017-card",
            "specialties": [
              "부정맥"
            ],
            "education": [
              "건국대학교병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 심장내과 전문의 (2014–현재)"
            ],
            "publications": 73,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 197명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-158",
            "name": "윤민서",
            "departmentId": "h-017-card",
            "specialties": [
              "협심증",
              "부정맥"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 심장내과 전문의 (2013–현재)"
            ],
            "publications": 31,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 376명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-159",
            "name": "전시우",
            "departmentId": "h-017-card",
            "specialties": [
              "심부전"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 심장내과 전문의 (2020–현재)"
            ],
            "publications": 57,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 87명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-017-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-160",
            "name": "권채원",
            "departmentId": "h-017-ent",
            "specialties": [
              "편도선염",
              "난청",
              "비염"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 이비인후과 전문의 (2015–현재)"
            ],
            "publications": 72,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 113명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-161",
            "name": "신서현",
            "departmentId": "h-017-ent",
            "specialties": [
              "비염"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "인하대학교병원 이비인후과 전문의 (2012–현재)"
            ],
            "publications": 124,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 213명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": false,
    "whatsappNumber": "+82-10-6572-3895",
    "email": "intl@h017.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "JCI 인증",
      "ISO 9001"
    ],
    "description": "인하대학교병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 2857,
    "foundedYear": 1986
  },
  {
    "id": "h-018",
    "name": "순천향대학교 부속 부천병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "제주",
    "district": "서초구",
    "address": "주소 생략",
    "lat": 33.5296,
    "lng": 126.5072,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1538108149393-fbbd81895907?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-018-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-162",
            "name": "권시우",
            "departmentId": "h-018-card",
            "specialties": [
              "심부전"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 심장내과 전문의 (2012–현재)"
            ],
            "publications": 32,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 285명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-163",
            "name": "조서윤",
            "departmentId": "h-018-card",
            "specialties": [
              "심부전"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 심장내과 전문의 (2015–현재)"
            ],
            "publications": 68,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 465명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-018-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-164",
            "name": "최서준",
            "departmentId": "h-018-derm",
            "specialties": [
              "아토피",
              "건선"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 피부과 전문의 (2014–현재)"
            ],
            "publications": 31,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 54명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-165",
            "name": "전서연",
            "departmentId": "h-018-derm",
            "specialties": [
              "건선",
              "피부암"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 피부과 전문의 (2013–현재)"
            ],
            "publications": 29,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 196명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-166",
            "name": "한서연",
            "departmentId": "h-018-derm",
            "specialties": [
              "피부암"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 피부과 전문의 (2013–현재)"
            ],
            "publications": 89,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 188명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-167",
            "name": "최지민",
            "departmentId": "h-018-derm",
            "specialties": [
              "건선",
              "백반증"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 피부과 전문의 (2010–현재)"
            ],
            "publications": 27,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 427명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-018-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-168",
            "name": "김하은",
            "departmentId": "h-018-onco",
            "specialties": [
              "위암",
              "대장암"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 종양내과 전문의 (2015–현재)"
            ],
            "publications": 23,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 379명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-169",
            "name": "이지유",
            "departmentId": "h-018-onco",
            "specialties": [
              "대장암"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 53,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 88명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-170",
            "name": "서민서",
            "departmentId": "h-018-onco",
            "specialties": [
              "폐암"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 종양내과 전문의 (2014–현재)"
            ],
            "publications": 15,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 459명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-171",
            "name": "김서준",
            "departmentId": "h-018-onco",
            "specialties": [
              "위암"
            ],
            "education": [
              "서울아산병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 24,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 125명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-018-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-172",
            "name": "장채원",
            "departmentId": "h-018-ent",
            "specialties": [
              "난청"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 부속 부천병원 이비인후과 전문의 (2014–현재)"
            ],
            "publications": 71,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 59명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-7260-1251",
    "email": "intl@h018.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록"
    ],
    "description": "순천향대학교 부속 부천병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 9470,
    "foundedYear": 1990
  },
  {
    "id": "h-019",
    "name": "한림대학교 성심병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "충북",
    "district": "강남구",
    "address": "주소 생략",
    "lat": 36.6357,
    "lng": 127.4917,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1632833239869-a37e3a5806d2?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-019-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-173",
            "name": "송민준",
            "departmentId": "h-019-ortho",
            "specialties": [
              "골절",
              "관절염"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 정형외과 전문의 (2013–현재)"
            ],
            "publications": 147,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 238명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-174",
            "name": "황지민",
            "departmentId": "h-019-ortho",
            "specialties": [
              "인공관절",
              "척추측만증"
            ],
            "education": [
              "아주대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 정형외과 전문의 (2017–현재)"
            ],
            "publications": 85,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 150명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-019-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-175",
            "name": "권하윤",
            "departmentId": "h-019-obgyn",
            "specialties": [
              "고위험임신",
              "부인암"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 12,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 430명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-176",
            "name": "한주원",
            "departmentId": "h-019-obgyn",
            "specialties": [
              "난임",
              "고위험임신"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 산부인과 전문의 (2017–현재)"
            ],
            "publications": 95,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 166명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-019-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-177",
            "name": "권서윤",
            "departmentId": "h-019-neuro",
            "specialties": [
              "파킨슨병",
              "뇌종양",
              "척추질환"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 신경외과 전문의 (2017–현재)"
            ],
            "publications": 91,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 132명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-178",
            "name": "강하은",
            "departmentId": "h-019-neuro",
            "specialties": [
              "뇌종양",
              "파킨슨병"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 신경외과 전문의 (2014–현재)"
            ],
            "publications": 100,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 234명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-179",
            "name": "최민준",
            "departmentId": "h-019-neuro",
            "specialties": [
              "뇌출혈",
              "파킨슨병",
              "뇌종양"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 신경외과 전문의 (2016–현재)"
            ],
            "publications": 112,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 230명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-180",
            "name": "권지유",
            "departmentId": "h-019-neuro",
            "specialties": [
              "파킨슨병",
              "뇌종양",
              "척추질환"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 신경외과 전문의 (2016–현재)"
            ],
            "publications": 79,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 438명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-019-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-181",
            "name": "서서연",
            "departmentId": "h-019-derm",
            "specialties": [
              "백반증",
              "피부암",
              "건선"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 피부과 전문의 (2013–현재)"
            ],
            "publications": 48,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 492명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-182",
            "name": "박도윤",
            "departmentId": "h-019-derm",
            "specialties": [
              "건선",
              "아토피"
            ],
            "education": [
              "전북대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 피부과 전문의 (2014–현재)"
            ],
            "publications": 130,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 365명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-183",
            "name": "장건우",
            "departmentId": "h-019-derm",
            "specialties": [
              "건선",
              "아토피"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "아주대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 피부과 전문의 (2012–현재)"
            ],
            "publications": 41,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 497명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-184",
            "name": "정지우",
            "departmentId": "h-019-derm",
            "specialties": [
              "건선"
            ],
            "education": [
              "건국대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한림대학교 성심병원 피부과 전문의 (2018–현재)"
            ],
            "publications": 29,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 252명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": false,
    "whatsappNumber": "+82-10-2096-9523",
    "email": "intl@h019.ac.kr",
    "certifications": [
      "JCI 인증",
      "ISO 9001",
      "보건복지부 우수 의료기관",
      "외국인환자 유치기관 등록"
    ],
    "description": "한림대학교 성심병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 2642,
    "foundedYear": 1977
  },
  {
    "id": "h-020",
    "name": "이대목동병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "전북",
    "district": "유성구",
    "address": "주소 생략",
    "lat": 35.8242,
    "lng": 127.1480,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1551076805-e1869033e561?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497215842964-222b430dc094?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-020-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-185",
            "name": "임예준",
            "departmentId": "h-020-obgyn",
            "specialties": [
              "자궁근종",
              "고위험임신",
              "난임"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 산부인과 전문의 (2014–현재)"
            ],
            "publications": 76,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 467명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-186",
            "name": "최지민",
            "departmentId": "h-020-obgyn",
            "specialties": [
              "자궁근종",
              "난임",
              "고위험임신"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 100,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 464명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-187",
            "name": "박지훈",
            "departmentId": "h-020-obgyn",
            "specialties": [
              "자궁근종",
              "고위험임신",
              "부인암"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 산부인과 전문의 (2019–현재)"
            ],
            "publications": 68,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 479명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-188",
            "name": "박채원",
            "departmentId": "h-020-obgyn",
            "specialties": [
              "자궁근종",
              "고위험임신",
              "부인암"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 102,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 382명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-020-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-189",
            "name": "송지호",
            "departmentId": "h-020-derm",
            "specialties": [
              "아토피"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 피부과 전문의 (2013–현재)"
            ],
            "publications": 52,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 293명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-190",
            "name": "신건우",
            "departmentId": "h-020-derm",
            "specialties": [
              "건선"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 피부과 전문의 (2010–현재)"
            ],
            "publications": 24,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 260명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-191",
            "name": "장하윤",
            "departmentId": "h-020-derm",
            "specialties": [
              "건선",
              "아토피",
              "백반증"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 피부과 전문의 (2019–현재)"
            ],
            "publications": 118,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 346명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-020-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-192",
            "name": "권서준",
            "departmentId": "h-020-ent",
            "specialties": [
              "편도선염",
              "비염"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 이비인후과 전문의 (2017–현재)"
            ],
            "publications": 138,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 311명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-193",
            "name": "박하준",
            "departmentId": "h-020-ent",
            "specialties": [
              "난청"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 이비인후과 전문의 (2015–현재)"
            ],
            "publications": 30,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 302명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-194",
            "name": "신지우",
            "departmentId": "h-020-ent",
            "specialties": [
              "편도선염",
              "비염",
              "난청"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 이비인후과 전문의 (2011–현재)"
            ],
            "publications": 37,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 491명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-195",
            "name": "신지민",
            "departmentId": "h-020-ent",
            "specialties": [
              "난청",
              "편도선염",
              "비염"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 이비인후과 전문의 (2014–현재)"
            ],
            "publications": 50,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 307명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-020-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-196",
            "name": "조서준",
            "departmentId": "h-020-onco",
            "specialties": [
              "간암",
              "대장암",
              "유방암"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 종양내과 전문의 (2020–현재)"
            ],
            "publications": 27,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 450명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-197",
            "name": "김예준",
            "departmentId": "h-020-onco",
            "specialties": [
              "간암",
              "유방암",
              "대장암"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 종양내과 전문의 (2011–현재)"
            ],
            "publications": 125,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 224명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-198",
            "name": "정서준",
            "departmentId": "h-020-onco",
            "specialties": [
              "유방암",
              "폐암"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "충북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 26,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 155명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-199",
            "name": "권서연",
            "departmentId": "h-020-onco",
            "specialties": [
              "유방암"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 종양내과 전문의 (2017–현재)"
            ],
            "publications": 43,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 218명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-020-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-200",
            "name": "임서연",
            "departmentId": "h-020-ortho",
            "specialties": [
              "골절",
              "척추측만증",
              "관절염"
            ],
            "education": [
              "가천대 길병원 의과대학 졸업",
              "서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 정형외과 전문의 (2012–현재)"
            ],
            "publications": 61,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 326명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-201",
            "name": "오지훈",
            "departmentId": "h-020-ortho",
            "specialties": [
              "관절염",
              "척추측만증"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "양산부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 정형외과 전문의 (2015–현재)"
            ],
            "publications": 129,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 178명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-202",
            "name": "윤건우",
            "departmentId": "h-020-ortho",
            "specialties": [
              "관절염"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "양산부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "이대목동병원 정형외과 전문의 (2014–현재)"
            ],
            "publications": 100,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 353명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-9268-5125",
    "email": "intl@h020.ac.kr",
    "certifications": [
      "JCI 인증",
      "보건복지부 우수 의료기관"
    ],
    "description": "이대목동병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 7542,
    "foundedYear": 1998
  },
  {
    "id": "h-021",
    "name": "한양대학교병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "전남",
    "district": "분당구",
    "address": "주소 생략",
    "lat": 34.8461,
    "lng": 126.4389,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-021-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-203",
            "name": "장서준",
            "departmentId": "h-021-peds",
            "specialties": [
              "소아비만"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "한양대학교병원 소아청소년과 전문의 (2015–현재)"
            ],
            "publications": 36,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 414명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-204",
            "name": "강지호",
            "departmentId": "h-021-peds",
            "specialties": [
              "성조숙증"
            ],
            "education": [
              "분당서울대학교병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한양대학교병원 소아청소년과 전문의 (2015–현재)"
            ],
            "publications": 102,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 174명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-021-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-205",
            "name": "김지호",
            "departmentId": "h-021-ent",
            "specialties": [
              "난청"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한양대학교병원 이비인후과 전문의 (2018–현재)"
            ],
            "publications": 125,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 337명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-021-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-206",
            "name": "최지유",
            "departmentId": "h-021-eye",
            "specialties": [
              "망막질환",
              "백내장"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "한양대학교병원 안과 전문의 (2018–현재)"
            ],
            "publications": 120,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 216명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-021-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-207",
            "name": "정채원",
            "departmentId": "h-021-gi",
            "specialties": [
              "간경화"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "한양대학교병원 소화기내과 전문의 (2017–현재)"
            ],
            "publications": 89,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 143명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      },
      {
        "code": "zh",
        "label": "中文",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-4168-8595",
    "email": "intl@h021.ac.kr",
    "certifications": [
      "JCI 인증",
      "외국인환자 유치기관 등록",
      "ISO 9001"
    ],
    "description": "한양대학교병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 4746,
    "foundedYear": 1973
  },
  {
    "id": "h-022",
    "name": "경희대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "전북",
    "district": "송파구",
    "address": "주소 생략",
    "lat": 35.8092,
    "lng": 127.1600,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-022-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-208",
            "name": "정지훈",
            "departmentId": "h-022-peds",
            "specialties": [
              "소아당뇨",
              "소아비만",
              "성조숙증"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 소아청소년과 전문의 (2016–현재)"
            ],
            "publications": 59,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 98명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-209",
            "name": "전시우",
            "departmentId": "h-022-peds",
            "specialties": [
              "소아비만",
              "소아당뇨",
              "성조숙증"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 소아청소년과 전문의 (2012–현재)"
            ],
            "publications": 85,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 96명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-210",
            "name": "김하은",
            "departmentId": "h-022-peds",
            "specialties": [
              "성조숙증",
              "소아천식",
              "소아당뇨"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 소아청소년과 전문의 (2020–현재)"
            ],
            "publications": 112,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 459명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-211",
            "name": "오서현",
            "departmentId": "h-022-peds",
            "specialties": [
              "성조숙증",
              "소아천식"
            ],
            "education": [
              "전북대학교병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 소아청소년과 전문의 (2010–현재)"
            ],
            "publications": 117,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 74명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-022-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-212",
            "name": "서시우",
            "departmentId": "h-022-obgyn",
            "specialties": [
              "난임"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 산부인과 전문의 (2018–현재)"
            ],
            "publications": 33,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 498명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-022-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-213",
            "name": "서서현",
            "departmentId": "h-022-onco",
            "specialties": [
              "폐암",
              "유방암"
            ],
            "education": [
              "서울대학교병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 종양내과 전문의 (2010–현재)"
            ],
            "publications": 123,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 389명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-214",
            "name": "윤서준",
            "departmentId": "h-022-onco",
            "specialties": [
              "유방암"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 종양내과 전문의 (2015–현재)"
            ],
            "publications": 73,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 281명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-022-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-215",
            "name": "홍서연",
            "departmentId": "h-022-eye",
            "specialties": [
              "백내장",
              "각막질환"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 안과 전문의 (2018–현재)"
            ],
            "publications": 138,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 345명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-216",
            "name": "서도윤",
            "departmentId": "h-022-eye",
            "specialties": [
              "백내장"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 안과 전문의 (2011–현재)"
            ],
            "publications": 84,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 438명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-022-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-217",
            "name": "송민서",
            "departmentId": "h-022-derm",
            "specialties": [
              "건선"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "경희대학교병원 피부과 전문의 (2012–현재)"
            ],
            "publications": 61,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 317명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-4077-6633",
    "email": "intl@h022.ac.kr",
    "certifications": [
      "ISO 9001"
    ],
    "description": "경희대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 4856,
    "foundedYear": 1973
  },
  {
    "id": "h-023",
    "name": "원주세브란스기독병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "울산",
    "district": "유성구",
    "address": "주소 생략",
    "lat": 35.5384,
    "lng": 129.3114,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-023-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-218",
            "name": "송서윤",
            "departmentId": "h-023-peds",
            "specialties": [
              "소아천식",
              "소아비만"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 소아청소년과 전문의 (2017–현재)"
            ],
            "publications": 23,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 116명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-023-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-219",
            "name": "장하은",
            "departmentId": "h-023-obgyn",
            "specialties": [
              "난임",
              "고위험임신"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 산부인과 전문의 (2014–현재)"
            ],
            "publications": 67,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 322명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-023-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-220",
            "name": "전서윤",
            "departmentId": "h-023-eye",
            "specialties": [
              "녹내장",
              "각막질환"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "가천대 길병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 안과 전문의 (2017–현재)"
            ],
            "publications": 143,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 405명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-221",
            "name": "신민준",
            "departmentId": "h-023-eye",
            "specialties": [
              "백내장",
              "각막질환"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 안과 전문의 (2019–현재)"
            ],
            "publications": 77,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 389명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-222",
            "name": "이하윤",
            "departmentId": "h-023-eye",
            "specialties": [
              "녹내장",
              "각막질환"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 안과 전문의 (2011–현재)"
            ],
            "publications": 57,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 77명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-223",
            "name": "홍지호",
            "departmentId": "h-023-eye",
            "specialties": [
              "녹내장",
              "백내장",
              "망막질환"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 안과 전문의 (2020–현재)"
            ],
            "publications": 49,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 96명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-023-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-224",
            "name": "전건우",
            "departmentId": "h-023-onco",
            "specialties": [
              "유방암",
              "위암"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 종양내과 전문의 (2012–현재)"
            ],
            "publications": 35,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 118명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-225",
            "name": "임하준",
            "departmentId": "h-023-onco",
            "specialties": [
              "간암",
              "위암"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "원주세브란스기독병원 종양내과 전문의 (2018–현재)"
            ],
            "publications": 82,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 470명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-6381-3244",
    "email": "intl@h023.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "JCI 인증",
      "ISO 9001",
      "외국인환자 유치기관 등록"
    ],
    "description": "원주세브란스기독병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 6839,
    "foundedYear": 1969
  },
  {
    "id": "h-024",
    "name": "전북대학교병원",
    "type": "tertiary",
    "typeLabel": "상급종합병원",
    "region": "부산",
    "district": "종로구",
    "address": "주소 생략",
    "lat": 35.1796,
    "lng": 129.0756,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1497366412874-3415097a27e7?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-024-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-226",
            "name": "윤민준",
            "departmentId": "h-024-obgyn",
            "specialties": [
              "부인암",
              "난임"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 산부인과 전문의 (2018–현재)"
            ],
            "publications": 89,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 355명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-227",
            "name": "정하은",
            "departmentId": "h-024-obgyn",
            "specialties": [
              "부인암"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "동아대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 산부인과 전문의 (2015–현재)"
            ],
            "publications": 111,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 85명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-228",
            "name": "강건우",
            "departmentId": "h-024-obgyn",
            "specialties": [
              "부인암",
              "고위험임신",
              "자궁근종"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 12,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 476명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-229",
            "name": "홍서현",
            "departmentId": "h-024-obgyn",
            "specialties": [
              "난임"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 산부인과 전문의 (2015–현재)"
            ],
            "publications": 38,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 434명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-024-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-230",
            "name": "김시우",
            "departmentId": "h-024-onco",
            "specialties": [
              "폐암",
              "위암"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "충북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 종양내과 전문의 (2010–현재)"
            ],
            "publications": 30,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 220명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-231",
            "name": "장채원",
            "departmentId": "h-024-onco",
            "specialties": [
              "간암",
              "유방암"
            ],
            "education": [
              "순천향대학교 서울병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 종양내과 전문의 (2020–현재)"
            ],
            "publications": 105,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 99명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-232",
            "name": "임시우",
            "departmentId": "h-024-onco",
            "specialties": [
              "폐암",
              "대장암",
              "위암"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "전북대학교병원 종양내과 전문의 (2013–현재)"
            ],
            "publications": 73,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 289명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      },
      {
        "code": "zh",
        "label": "中文",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-2144-5849",
    "email": "intl@h024.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록",
      "JCI 인증",
      "보건복지부 우수 의료기관"
    ],
    "description": "전북대학교병원은 최고의 의료 서비스를 제공하는 상급종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 3865,
    "foundedYear": 1953
  },
  {
    "id": "h-025",
    "name": "건국대학교병원",
    "type": "general",
    "typeLabel": "종합병원",
    "region": "충남",
    "district": "강남구",
    "address": "주소 생략",
    "lat": 36.6588,
    "lng": 126.6728,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1526256262350-7da7584cf5eb?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-025-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-233",
            "name": "한지유",
            "departmentId": "h-025-onco",
            "specialties": [
              "폐암"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 종양내과 전문의 (2019–현재)"
            ],
            "publications": 47,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 216명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-025-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-234",
            "name": "최건우",
            "departmentId": "h-025-ortho",
            "specialties": [
              "관절염",
              "인공관절"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "한양대학교병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 정형외과 전문의 (2015–현재)"
            ],
            "publications": 94,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 319명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-235",
            "name": "홍시우",
            "departmentId": "h-025-ortho",
            "specialties": [
              "척추측만증"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 정형외과 전문의 (2020–현재)"
            ],
            "publications": 131,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 144명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-025-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-236",
            "name": "장지훈",
            "departmentId": "h-025-gi",
            "specialties": [
              "위궤양",
              "간경화"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 소화기내과 전문의 (2012–현재)"
            ],
            "publications": 77,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 436명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-237",
            "name": "장건우",
            "departmentId": "h-025-gi",
            "specialties": [
              "간경화"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 소화기내과 전문의 (2016–현재)"
            ],
            "publications": 133,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 246명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-025-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-238",
            "name": "윤지우",
            "departmentId": "h-025-card",
            "specialties": [
              "심부전",
              "협심증",
              "부정맥"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "양산부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 심장내과 전문의 (2016–현재)"
            ],
            "publications": 139,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 369명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-239",
            "name": "장지민",
            "departmentId": "h-025-card",
            "specialties": [
              "협심증",
              "심부전",
              "부정맥"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 심장내과 전문의 (2020–현재)"
            ],
            "publications": 79,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 221명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-240",
            "name": "권지우",
            "departmentId": "h-025-card",
            "specialties": [
              "심부전",
              "협심증",
              "심근경색"
            ],
            "education": [
              "서울대학교병원 의과대학 졸업",
              "이대목동병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 심장내과 전문의 (2015–현재)"
            ],
            "publications": 93,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 206명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-241",
            "name": "전민서",
            "departmentId": "h-025-card",
            "specialties": [
              "심부전",
              "부정맥"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "건국대학교병원 심장내과 전문의 (2011–현재)"
            ],
            "publications": 25,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 402명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-6191-4920",
    "email": "intl@h025.ac.kr",
    "certifications": [
      "JCI 인증"
    ],
    "description": "건국대학교병원은 최고의 의료 서비스를 제공하는 종합병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 1672,
    "foundedYear": 2001
  },
  {
    "id": "h-026",
    "name": "단국대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "서울",
    "district": "유성구",
    "address": "주소 생략",
    "lat": 37.5665,
    "lng": 126.9780,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1504439468489-c8920d796a29?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-026-onco",
        "code": "ONCO",
        "name": "종양내과",
        "doctors": [
          {
            "id": "dr-242",
            "name": "안시우",
            "departmentId": "h-026-onco",
            "specialties": [
              "유방암",
              "위암"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "충북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 종양내과 전문의 (2015–현재)"
            ],
            "publications": 47,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 421명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-026-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-243",
            "name": "송지호",
            "departmentId": "h-026-peds",
            "specialties": [
              "성조숙증"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 76,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 285명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-244",
            "name": "장민서",
            "departmentId": "h-026-peds",
            "specialties": [
              "소아당뇨",
              "성조숙증",
              "소아비만"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "양산부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 소아청소년과 전문의 (2016–현재)"
            ],
            "publications": 83,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 67명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-245",
            "name": "정하은",
            "departmentId": "h-026-peds",
            "specialties": [
              "소아당뇨",
              "소아천식"
            ],
            "education": [
              "경북대학교병원 의과대학 졸업",
              "고려대학교 안암병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 17,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 367명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-026-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-246",
            "name": "장하윤",
            "departmentId": "h-026-card",
            "specialties": [
              "협심증",
              "심근경색"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 심장내과 전문의 (2018–현재)"
            ],
            "publications": 41,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 401명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-026-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-247",
            "name": "신지훈",
            "departmentId": "h-026-eye",
            "specialties": [
              "백내장"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 안과 전문의 (2015–현재)"
            ],
            "publications": 117,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 321명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-248",
            "name": "황하은",
            "departmentId": "h-026-eye",
            "specialties": [
              "백내장"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 안과 전문의 (2010–현재)"
            ],
            "publications": 13,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 491명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-249",
            "name": "임서연",
            "departmentId": "h-026-eye",
            "specialties": [
              "녹내장"
            ],
            "education": [
              "한양대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 안과 전문의 (2019–현재)"
            ],
            "publications": 139,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 155명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-026-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-250",
            "name": "신하은",
            "departmentId": "h-026-neuro",
            "specialties": [
              "뇌종양"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 신경외과 전문의 (2017–현재)"
            ],
            "publications": 52,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 101명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-251",
            "name": "강서준",
            "departmentId": "h-026-neuro",
            "specialties": [
              "뇌종양"
            ],
            "education": [
              "인하대학교병원 의과대학 졸업",
              "경북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 신경외과 전문의 (2020–현재)"
            ],
            "publications": 43,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 485명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-252",
            "name": "홍지민",
            "departmentId": "h-026-neuro",
            "specialties": [
              "뇌종양",
              "파킨슨병"
            ],
            "education": [
              "서울대학교병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 신경외과 전문의 (2013–현재)"
            ],
            "publications": 51,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 368명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-253",
            "name": "장서현",
            "departmentId": "h-026-neuro",
            "specialties": [
              "뇌출혈",
              "뇌종양"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "고려대학교 구로병원 대학원 의학박사"
            ],
            "experience": [
              "단국대학교병원 신경외과 전문의 (2020–현재)"
            ],
            "publications": 41,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 497명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": false,
    "whatsappNumber": "+82-10-1950-9174",
    "email": "intl@h026.ac.kr",
    "certifications": [
      "ISO 9001",
      "외국인환자 유치기관 등록",
      "보건복지부 우수 의료기관"
    ],
    "description": "단국대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 9875,
    "foundedYear": 1980
  },
  {
    "id": "h-027",
    "name": "강동경희대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "충남",
    "district": "해운대구",
    "address": "주소 생략",
    "lat": 36.6438,
    "lng": 126.6848,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-027-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-254",
            "name": "김서준",
            "departmentId": "h-027-derm",
            "specialties": [
              "백반증",
              "아토피"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "분당서울대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 피부과 전문의 (2010–현재)"
            ],
            "publications": 110,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 192명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-255",
            "name": "강시우",
            "departmentId": "h-027-derm",
            "specialties": [
              "건선",
              "피부암",
              "아토피"
            ],
            "education": [
              "서울대학교병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 피부과 전문의 (2020–현재)"
            ],
            "publications": 117,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 241명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-027-eye",
        "code": "EYE",
        "name": "안과",
        "doctors": [
          {
            "id": "dr-256",
            "name": "오예준",
            "departmentId": "h-027-eye",
            "specialties": [
              "녹내장"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 안과 전문의 (2014–현재)"
            ],
            "publications": 75,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 260명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-257",
            "name": "전도윤",
            "departmentId": "h-027-eye",
            "specialties": [
              "녹내장",
              "망막질환",
              "백내장"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 안과 전문의 (2011–현재)"
            ],
            "publications": 67,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 280명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-027-ortho",
        "code": "ORTHO",
        "name": "정형외과",
        "doctors": [
          {
            "id": "dr-258",
            "name": "정도윤",
            "departmentId": "h-027-ortho",
            "specialties": [
              "척추측만증"
            ],
            "education": [
              "고려대학교 안암병원 의과대학 졸업",
              "강남세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 정형외과 전문의 (2019–현재)"
            ],
            "publications": 39,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 170명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-259",
            "name": "오민서",
            "departmentId": "h-027-ortho",
            "specialties": [
              "관절염"
            ],
            "education": [
              "부산대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 정형외과 전문의 (2019–현재)"
            ],
            "publications": 46,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 348명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-260",
            "name": "한지유",
            "departmentId": "h-027-ortho",
            "specialties": [
              "관절염",
              "척추측만증",
              "인공관절"
            ],
            "education": [
              "서울아산병원 의과대학 졸업",
              "부산대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 정형외과 전문의 (2012–현재)"
            ],
            "publications": 68,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 391명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-027-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-261",
            "name": "오서준",
            "departmentId": "h-027-ent",
            "specialties": [
              "이명",
              "난청"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "연세대학교 신촌세브란스병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 이비인후과 전문의 (2018–현재)"
            ],
            "publications": 73,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 257명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-262",
            "name": "홍건우",
            "departmentId": "h-027-ent",
            "specialties": [
              "비염",
              "난청"
            ],
            "education": [
              "삼성서울병원 의과대학 졸업",
              "원주세브란스기독병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 이비인후과 전문의 (2011–현재)"
            ],
            "publications": 19,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 60명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-263",
            "name": "서하은",
            "departmentId": "h-027-ent",
            "specialties": [
              "편도선염",
              "난청"
            ],
            "education": [
              "가톨릭대학교 서울성모병원 의과대학 졸업",
              "단국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 이비인후과 전문의 (2011–현재)"
            ],
            "publications": 147,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 500명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-264",
            "name": "최시우",
            "departmentId": "h-027-ent",
            "specialties": [
              "난청",
              "이명"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 이비인후과 전문의 (2016–현재)"
            ],
            "publications": 87,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 384명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-027-peds",
        "code": "PEDS",
        "name": "소아청소년과",
        "doctors": [
          {
            "id": "dr-265",
            "name": "강민서",
            "departmentId": "h-027-peds",
            "specialties": [
              "소아비만",
              "성조숙증"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 소아청소년과 전문의 (2016–현재)"
            ],
            "publications": 25,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 329명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-266",
            "name": "강민서",
            "departmentId": "h-027-peds",
            "specialties": [
              "소아천식"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "강동경희대학교병원 소아청소년과 전문의 (2013–현재)"
            ],
            "publications": 60,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 429명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-1630-8045",
    "email": "intl@h027.ac.kr",
    "certifications": [
      "ISO 9001",
      "외국인환자 유치기관 등록"
    ],
    "description": "강동경희대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 7101,
    "foundedYear": 1999
  },
  {
    "id": "h-028",
    "name": "충북대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "제주",
    "district": "송파구",
    "address": "주소 생략",
    "lat": 33.4546,
    "lng": 126.5672,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600573472592-401b489a3cdc?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-028-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-267",
            "name": "임하은",
            "departmentId": "h-028-gi",
            "specialties": [
              "간경화",
              "위궤양",
              "위염"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "순천향대학교 서울병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 소화기내과 전문의 (2015–현재)"
            ],
            "publications": 142,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 284명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-028-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-268",
            "name": "서지호",
            "departmentId": "h-028-derm",
            "specialties": [
              "건선",
              "백반증",
              "피부암"
            ],
            "education": [
              "전남대학교병원 의과대학 졸업",
              "건국대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 피부과 전문의 (2015–현재)"
            ],
            "publications": 15,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 109명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-269",
            "name": "서주원",
            "departmentId": "h-028-derm",
            "specialties": [
              "건선",
              "피부암",
              "아토피"
            ],
            "education": [
              "충북대학교병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 피부과 전문의 (2015–현재)"
            ],
            "publications": 62,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 224명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-028-obgyn",
        "code": "OBGYN",
        "name": "산부인과",
        "doctors": [
          {
            "id": "dr-270",
            "name": "최지호",
            "departmentId": "h-028-obgyn",
            "specialties": [
              "부인암",
              "고위험임신",
              "자궁근종"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 120,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 84명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-271",
            "name": "황서윤",
            "departmentId": "h-028-obgyn",
            "specialties": [
              "자궁근종",
              "난임",
              "고위험임신"
            ],
            "education": [
              "이대목동병원 의과대학 졸업",
              "전남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 산부인과 전문의 (2016–현재)"
            ],
            "publications": 140,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 75명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-028-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-272",
            "name": "황서준",
            "departmentId": "h-028-ent",
            "specialties": [
              "편도선염",
              "비염"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "전북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 이비인후과 전문의 (2018–현재)"
            ],
            "publications": 87,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 271명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-273",
            "name": "신하은",
            "departmentId": "h-028-ent",
            "specialties": [
              "비염",
              "편도선염"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "고려대학교 안암병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 이비인후과 전문의 (2012–현재)"
            ],
            "publications": 27,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 475명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-274",
            "name": "정하윤",
            "departmentId": "h-028-ent",
            "specialties": [
              "비염"
            ],
            "education": [
              "고려대학교 구로병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "충북대학교병원 이비인후과 전문의 (2019–현재)"
            ],
            "publications": 132,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 455명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-2578-2659",
    "email": "intl@h028.ac.kr",
    "certifications": [
      "보건복지부 우수 의료기관",
      "ISO 9001",
      "JCI 인증"
    ],
    "description": "충북대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 8570,
    "foundedYear": 1969
  },
  {
    "id": "h-029",
    "name": "순천향대학교 서울병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "서울",
    "district": "송파구",
    "address": "주소 생략",
    "lat": 37.5515,
    "lng": 126.9900,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1580281657702-257584239a55?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-029-gi",
        "code": "GI",
        "name": "소화기내과",
        "doctors": [
          {
            "id": "dr-275",
            "name": "전지민",
            "departmentId": "h-029-gi",
            "specialties": [
              "간경화",
              "위궤양"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "순천향대학교 부속 부천병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 소화기내과 전문의 (2014–현재)"
            ],
            "publications": 113,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 118명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-029-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-276",
            "name": "서주원",
            "departmentId": "h-029-neuro",
            "specialties": [
              "파킨슨병"
            ],
            "education": [
              "원주세브란스기독병원 의과대학 졸업",
              "가톨릭대학교 서울성모병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 신경외과 전문의 (2013–현재)"
            ],
            "publications": 89,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 156명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-277",
            "name": "박채원",
            "departmentId": "h-029-neuro",
            "specialties": [
              "척추질환"
            ],
            "education": [
              "양산부산대학교병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 신경외과 전문의 (2014–현재)"
            ],
            "publications": 108,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 392명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-278",
            "name": "홍민준",
            "departmentId": "h-029-neuro",
            "specialties": [
              "파킨슨병"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "한림대학교 성심병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 신경외과 전문의 (2016–현재)"
            ],
            "publications": 76,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 164명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-029-derm",
        "code": "DERM",
        "name": "피부과",
        "doctors": [
          {
            "id": "dr-279",
            "name": "오서윤",
            "departmentId": "h-029-derm",
            "specialties": [
              "백반증",
              "피부암"
            ],
            "education": [
              "강동경희대학교병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 피부과 전문의 (2014–현재)"
            ],
            "publications": 99,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 222명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-280",
            "name": "한예준",
            "departmentId": "h-029-derm",
            "specialties": [
              "건선"
            ],
            "education": [
              "단국대학교병원 의과대학 졸업",
              "서울아산병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 피부과 전문의 (2015–현재)"
            ],
            "publications": 99,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "zh",
                "label": "中文",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 66명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-281",
            "name": "서민서",
            "departmentId": "h-029-derm",
            "specialties": [
              "건선",
              "피부암",
              "아토피"
            ],
            "education": [
              "강남세브란스병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "순천향대학교 서울병원 피부과 전문의 (2017–현재)"
            ],
            "publications": 30,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 401명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": true,
    "whatsappNumber": "+82-10-9594-8200",
    "email": "intl@h029.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록",
      "보건복지부 우수 의료기관"
    ],
    "description": "순천향대학교 서울병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 2647,
    "foundedYear": 1972
  },
  {
    "id": "h-030",
    "name": "동아대학교병원",
    "type": "specialty",
    "typeLabel": "전문병원",
    "region": "충남",
    "district": "유성구",
    "address": "주소 생략",
    "lat": 36.6888,
    "lng": 126.6488,
    "photos": [
      {
        "url": "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "병원 외관"
      },
      {
        "url": "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=800&h=500&auto=format&fit=crop",
        "label": "로비"
      }
    ],
    "departments": [
      {
        "id": "h-030-neuro",
        "code": "NEURO",
        "name": "신경외과",
        "doctors": [
          {
            "id": "dr-282",
            "name": "홍하준",
            "departmentId": "h-030-neuro",
            "specialties": [
              "파킨슨병"
            ],
            "education": [
              "한림대학교 성심병원 의과대학 졸업",
              "인하대학교병원 대학원 의학박사"
            ],
            "experience": [
              "동아대학교병원 신경외과 전문의 (2014–현재)"
            ],
            "publications": 32,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 398명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-283",
            "name": "신서연",
            "departmentId": "h-030-neuro",
            "specialties": [
              "척추질환"
            ],
            "education": [
              "경희대학교병원 의과대학 졸업",
              "충남대학교병원 대학원 의학박사"
            ],
            "experience": [
              "동아대학교병원 신경외과 전문의 (2019–현재)"
            ],
            "publications": 80,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 324명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-284",
            "name": "장채원",
            "departmentId": "h-030-neuro",
            "specialties": [
              "뇌종양",
              "척추질환"
            ],
            "education": [
              "충남대학교병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "동아대학교병원 신경외과 전문의 (2010–현재)"
            ],
            "publications": 117,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 352명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-030-card",
        "code": "CARD",
        "name": "심장내과",
        "doctors": [
          {
            "id": "dr-285",
            "name": "한지우",
            "departmentId": "h-030-card",
            "specialties": [
              "협심증",
              "심부전",
              "부정맥"
            ],
            "education": [
              "연세대학교 신촌세브란스병원 의과대학 졸업",
              "삼성서울병원 대학원 의학박사"
            ],
            "experience": [
              "동아대학교병원 심장내과 전문의 (2018–현재)"
            ],
            "publications": 40,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 373명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          },
          {
            "id": "dr-286",
            "name": "이서현",
            "departmentId": "h-030-card",
            "specialties": [
              "협심증"
            ],
            "education": [
              "동아대학교병원 의과대학 졸업",
              "강동경희대학교병원 대학원 의학박사"
            ],
            "experience": [
              "동아대학교병원 심장내과 전문의 (2019–현재)"
            ],
            "publications": 18,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              }
            ],
            "foreignPatientExperience": "외국인 환자 350명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      },
      {
        "id": "h-030-ent",
        "code": "ENT",
        "name": "이비인후과",
        "doctors": [
          {
            "id": "dr-287",
            "name": "안서준",
            "departmentId": "h-030-ent",
            "specialties": [
              "비염"
            ],
            "education": [
              "순천향대학교 부속 부천병원 의과대학 졸업",
              "충북대학교병원 대학원 의학박사"
            ],
            "experience": [
              "동아대학교병원 이비인후과 전문의 (2018–현재)"
            ],
            "publications": 56,
            "languages": [
              {
                "code": "en",
                "label": "English",
                "level": "fluent"
              },
              {
                "code": "ru",
                "label": "Русский",
                "level": "interpreter"
              }
            ],
            "foreignPatientExperience": "외국인 환자 290명 이상 진료 경험",
            "photo": "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=800&h=500&auto=format&fit=crop"
          }
        ]
      }
    ],
    "languages": [
      {
        "code": "en",
        "label": "English",
        "level": "fluent"
      },
      {
        "code": "ru",
        "label": "Русский",
        "level": "interpreter"
      }
    ],
    "isRegisteredForForeigner": true,
    "isAcceptingReferral": false,
    "whatsappNumber": "+82-10-5038-5524",
    "email": "intl@h030.ac.kr",
    "certifications": [
      "외국인환자 유치기관 등록",
      "JCI 인증",
      "ISO 9001",
      "보건복지부 우수 의료기관"
    ],
    "description": "동아대학교병원은 최고의 의료 서비스를 제공하는 전문병원입니다. 다양한 진료과와 전문의를 보유하고 있습니다.",
    "internationalPatientCount": 3069,
    "foundedYear": 2009
  }
];

export const PATIENTS: Patient[] = [
  {
    "id": "p-001",
    "name": "Михаил Петров",
    "nationality": "사우디아라비아",
    "icdCode": "H25",
    "icdLabel": "노년백내장",
    "desiredDepartment": "심장내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-001-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-001-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-001-a",
        "patientId": "p-001",
        "hospitalId": "h-005",
        "hospitalName": "가톨릭대학교 서울성모병원",
        "doctorId": "dr-041",
        "doctorName": "권시우",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-001-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-16T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-12T09:00:00Z",
        "updatedAt": "2024-11-23T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-10T08:00:00Z"
  },
  {
    "id": "p-002",
    "name": "Алексей Морозова",
    "nationality": "아랍에미리트",
    "icdCode": "G40",
    "icdLabel": "뇌전증 (간질)",
    "desiredDepartment": "피부과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-002-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-002-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-002-a",
        "patientId": "p-002",
        "hospitalId": "h-002",
        "hospitalName": "삼성서울병원",
        "doctorId": "dr-009",
        "doctorName": "최지우",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-5T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      },
      {
        "id": "c-002-b",
        "patientId": "p-002",
        "hospitalId": "h-002",
        "hospitalName": "삼성서울병원",
        "doctorId": "dr-012",
        "doctorName": "윤민서",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-002-1-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-18T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-11T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-9T08:00:00Z"
  },
  {
    "id": "p-003",
    "name": "Анна Иванова",
    "nationality": "사우디아라비아",
    "icdCode": "K80",
    "icdLabel": "담석증",
    "desiredDepartment": "소아청소년과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-003-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-003-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-003-a",
        "patientId": "p-003",
        "hospitalId": "h-023",
        "hospitalName": "원주세브란스기독병원",
        "doctorId": "dr-218",
        "doctorName": "송서윤",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-003-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-24T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-11T09:00:00Z",
        "updatedAt": "2024-11-17T14:00:00Z"
      },
      {
        "id": "c-003-b",
        "patientId": "p-003",
        "hospitalId": "h-007",
        "hospitalName": "고려대학교 안암병원",
        "doctorId": "dr-057",
        "doctorName": "윤도윤",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-11T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      },
      {
        "id": "c-003-c",
        "patientId": "p-003",
        "hospitalId": "h-018",
        "hospitalName": "순천향대학교 부속 부천병원",
        "doctorId": "dr-168",
        "doctorName": "김하은",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-003-2-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-24T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-12T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-13T08:00:00Z"
  },
  {
    "id": "p-004",
    "name": "Татьяна Кузнецова",
    "nationality": "카자흐스탄",
    "icdCode": "C34",
    "icdLabel": "기관지 및 폐의 악성 신생물 (폐암)",
    "desiredDepartment": "정형외과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-004-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-004-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-004-a",
        "patientId": "p-004",
        "hospitalId": "h-026",
        "hospitalName": "단국대학교병원",
        "doctorId": "dr-248",
        "doctorName": "황하은",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-004-0-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-19T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-14T09:00:00Z",
        "updatedAt": "2024-11-23T14:00:00Z"
      },
      {
        "id": "c-004-b",
        "patientId": "p-004",
        "hospitalId": "h-022",
        "hospitalName": "경희대학교병원",
        "doctorId": "dr-215",
        "doctorName": "홍서연",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-004-1-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-23T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-25T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-2T08:00:00Z"
  },
  {
    "id": "p-005",
    "name": "Елена Кузнецова",
    "nationality": "러시아",
    "icdCode": "E11",
    "icdLabel": "제2형 당뇨병",
    "desiredDepartment": "안과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-005-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-005-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-005-a",
        "patientId": "p-005",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-094",
        "doctorName": "오서윤",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-3T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      },
      {
        "id": "c-005-b",
        "patientId": "p-005",
        "hospitalId": "h-007",
        "hospitalName": "고려대학교 안암병원",
        "doctorId": "dr-055",
        "doctorName": "홍서준",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-005-1-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-14T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-14T09:00:00Z",
        "updatedAt": "2024-11-22T14:00:00Z"
      },
      {
        "id": "c-005-c",
        "patientId": "p-005",
        "hospitalId": "h-014",
        "hospitalName": "양산부산대학교병원",
        "doctorId": "dr-137",
        "doctorName": "서민서",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-005-2-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-16T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-8T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-4T08:00:00Z"
  },
  {
    "id": "p-006",
    "name": "Иван Смирнов",
    "nationality": "베트남",
    "icdCode": "E11",
    "icdLabel": "제2형 당뇨병",
    "desiredDepartment": "신경외과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-006-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-006-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-006-a",
        "patientId": "p-006",
        "hospitalId": "h-021",
        "hospitalName": "한양대학교병원",
        "doctorId": "dr-204",
        "doctorName": "강지호",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-006-0-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-27T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-7T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      },
      {
        "id": "c-006-b",
        "patientId": "p-006",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-089",
        "doctorName": "윤지호",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-006-1-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-24T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-1T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      },
      {
        "id": "c-006-c",
        "patientId": "p-006",
        "hospitalId": "h-004",
        "hospitalName": "연세대학교 신촌세브란스병원",
        "doctorId": "dr-023",
        "doctorName": "조서윤",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-006-2-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-14T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-12T08:00:00Z"
  },
  {
    "id": "p-007",
    "name": "Ольга Лебедев",
    "nationality": "카자흐스탄",
    "icdCode": "K80",
    "icdLabel": "담석증",
    "desiredDepartment": "종양내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-007-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-007-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-007-a",
        "patientId": "p-007",
        "hospitalId": "h-012",
        "hospitalName": "전남대학교병원",
        "doctorId": "dr-117",
        "doctorName": "황민준",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-007-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-22T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-14T08:00:00Z"
  },
  {
    "id": "p-008",
    "name": "Иван Сидорова",
    "nationality": "러시아",
    "icdCode": "K80",
    "icdLabel": "담석증",
    "desiredDepartment": "산부인과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-008-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-008-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-008-a",
        "patientId": "p-008",
        "hospitalId": "h-016",
        "hospitalName": "부산대학교병원",
        "doctorId": "dr-152",
        "doctorName": "홍하은",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-008-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-23T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-5T09:00:00Z",
        "updatedAt": "2024-11-17T14:00:00Z"
      },
      {
        "id": "c-008-b",
        "patientId": "p-008",
        "hospitalId": "h-013",
        "hospitalName": "경북대학교병원",
        "doctorId": "dr-124",
        "doctorName": "이지유",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-10T09:00:00Z",
        "updatedAt": "2024-11-22T14:00:00Z"
      },
      {
        "id": "c-008-c",
        "patientId": "p-008",
        "hospitalId": "h-007",
        "hospitalName": "고려대학교 안암병원",
        "doctorId": "dr-053",
        "doctorName": "윤민준",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-3T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-6T08:00:00Z"
  },
  {
    "id": "p-009",
    "name": "Мария Попов",
    "nationality": "미국",
    "icdCode": "K80",
    "icdLabel": "담석증",
    "desiredDepartment": "종양내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-009-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-009-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-009-a",
        "patientId": "p-009",
        "hospitalId": "h-023",
        "hospitalName": "원주세브란스기독병원",
        "doctorId": "dr-219",
        "doctorName": "장하은",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-9T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      },
      {
        "id": "c-009-b",
        "patientId": "p-009",
        "hospitalId": "h-002",
        "hospitalName": "삼성서울병원",
        "doctorId": "dr-009",
        "doctorName": "최지우",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      },
      {
        "id": "c-009-c",
        "patientId": "p-009",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-091",
        "doctorName": "장지훈",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-009-2-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-12T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-4T09:00:00Z",
        "updatedAt": "2024-11-23T14:00:00Z"
      },
      {
        "id": "c-009-d",
        "patientId": "p-009",
        "hospitalId": "h-002",
        "hospitalName": "삼성서울병원",
        "doctorId": "dr-009",
        "doctorName": "최지우",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-009-3-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-25T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-5T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-14T08:00:00Z"
  },
  {
    "id": "p-010",
    "name": "Дмитрий Козлов",
    "nationality": "몽골",
    "icdCode": "E11",
    "icdLabel": "제2형 당뇨병",
    "desiredDepartment": "안과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-010-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-010-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-010-a",
        "patientId": "p-010",
        "hospitalId": "h-018",
        "hospitalName": "순천향대학교 부속 부천병원",
        "doctorId": "dr-162",
        "doctorName": "권시우",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-010-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-10T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-14T09:00:00Z",
        "updatedAt": "2024-11-19T14:00:00Z"
      },
      {
        "id": "c-010-b",
        "patientId": "p-010",
        "hospitalId": "h-026",
        "hospitalName": "단국대학교병원",
        "doctorId": "dr-248",
        "doctorName": "황하은",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-5T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      },
      {
        "id": "c-010-c",
        "patientId": "p-010",
        "hospitalId": "h-030",
        "hospitalName": "동아대학교병원",
        "doctorId": "dr-282",
        "doctorName": "홍하준",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-4T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-7T08:00:00Z"
  },
  {
    "id": "p-011",
    "name": "Сергей Петров",
    "nationality": "중국",
    "icdCode": "C20",
    "icdLabel": "직장의 악성 신생물 (대장암)",
    "desiredDepartment": "이비인후과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-011-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-011-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-011-a",
        "patientId": "p-011",
        "hospitalId": "h-007",
        "hospitalName": "고려대학교 안암병원",
        "doctorId": "dr-060",
        "doctorName": "윤채원",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-8T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      },
      {
        "id": "c-011-b",
        "patientId": "p-011",
        "hospitalId": "h-013",
        "hospitalName": "경북대학교병원",
        "doctorId": "dr-130",
        "doctorName": "정지유",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-011-1-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-15T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-19T14:00:00Z"
      },
      {
        "id": "c-011-c",
        "patientId": "p-011",
        "hospitalId": "h-019",
        "hospitalName": "한림대학교 성심병원",
        "doctorId": "dr-177",
        "doctorName": "권서윤",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-011-2-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-19T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-10T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      },
      {
        "id": "c-011-d",
        "patientId": "p-011",
        "hospitalId": "h-012",
        "hospitalName": "전남대학교병원",
        "doctorId": "dr-117",
        "doctorName": "황민준",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-11T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-12T08:00:00Z"
  },
  {
    "id": "p-012",
    "name": "Ольга Смирнов",
    "nationality": "중국",
    "icdCode": "C20",
    "icdLabel": "직장의 악성 신생물 (대장암)",
    "desiredDepartment": "피부과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-012-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-012-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-012-a",
        "patientId": "p-012",
        "hospitalId": "h-028",
        "hospitalName": "충북대학교병원",
        "doctorId": "dr-267",
        "doctorName": "임하은",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-4T08:00:00Z"
  },
  {
    "id": "p-013",
    "name": "Татьяна Соколова",
    "nationality": "러시아",
    "icdCode": "C34",
    "icdLabel": "기관지 및 폐의 악성 신생물 (폐암)",
    "desiredDepartment": "안과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-013-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-013-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-013-a",
        "patientId": "p-013",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-089",
        "doctorName": "윤지호",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-5T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      },
      {
        "id": "c-013-b",
        "patientId": "p-013",
        "hospitalId": "h-009",
        "hospitalName": "고려대학교 구로병원",
        "doctorId": "dr-084",
        "doctorName": "서서현",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-18T14:00:00Z"
      },
      {
        "id": "c-013-c",
        "patientId": "p-013",
        "hospitalId": "h-013",
        "hospitalName": "경북대학교병원",
        "doctorId": "dr-122",
        "doctorName": "이하은",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-1T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      },
      {
        "id": "c-013-d",
        "patientId": "p-013",
        "hospitalId": "h-004",
        "hospitalName": "연세대학교 신촌세브란스병원",
        "doctorId": "dr-025",
        "doctorName": "송민서",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-12T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-15T08:00:00Z"
  },
  {
    "id": "p-014",
    "name": "Михаил Морозова",
    "nationality": "필리핀",
    "icdCode": "M17",
    "icdLabel": "무릎관절증",
    "desiredDepartment": "심장내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-014-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-014-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-014-a",
        "patientId": "p-014",
        "hospitalId": "h-029",
        "hospitalName": "순천향대학교 서울병원",
        "doctorId": "dr-277",
        "doctorName": "박채원",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-9T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-9T08:00:00Z"
  },
  {
    "id": "p-015",
    "name": "Иван Соколова",
    "nationality": "베트남",
    "icdCode": "K80",
    "icdLabel": "담석증",
    "desiredDepartment": "이비인후과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-015-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-015-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-015-a",
        "patientId": "p-015",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-096",
        "doctorName": "황하은",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-015-0-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-21T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-6T09:00:00Z",
        "updatedAt": "2024-11-19T14:00:00Z"
      },
      {
        "id": "c-015-b",
        "patientId": "p-015",
        "hospitalId": "h-007",
        "hospitalName": "고려대학교 안암병원",
        "doctorId": "dr-062",
        "doctorName": "조건우",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      },
      {
        "id": "c-015-c",
        "patientId": "p-015",
        "hospitalId": "h-021",
        "hospitalName": "한양대학교병원",
        "doctorId": "dr-205",
        "doctorName": "김지호",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      },
      {
        "id": "c-015-d",
        "patientId": "p-015",
        "hospitalId": "h-001",
        "hospitalName": "강남세브란스병원",
        "doctorId": "dr-001",
        "doctorName": "김도윤",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-015-3-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-17T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-11T08:00:00Z"
  },
  {
    "id": "p-016",
    "name": "Ольга Попов",
    "nationality": "러시아",
    "icdCode": "E11",
    "icdLabel": "제2형 당뇨병",
    "desiredDepartment": "정형외과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-016-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-016-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-016-a",
        "patientId": "p-016",
        "hospitalId": "h-008",
        "hospitalName": "아주대학교병원",
        "doctorId": "dr-076",
        "doctorName": "조서준",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-4T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-5T08:00:00Z"
  },
  {
    "id": "p-017",
    "name": "Дмитрий Сидорова",
    "nationality": "몽골",
    "icdCode": "C20",
    "icdLabel": "직장의 악성 신생물 (대장암)",
    "desiredDepartment": "피부과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-017-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-017-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-017-a",
        "patientId": "p-017",
        "hospitalId": "h-020",
        "hospitalName": "이대목동병원",
        "doctorId": "dr-186",
        "doctorName": "최지민",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-13T08:00:00Z"
  },
  {
    "id": "p-018",
    "name": "Ольга Иванова",
    "nationality": "중국",
    "icdCode": "H25",
    "icdLabel": "노년백내장",
    "desiredDepartment": "이비인후과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-018-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-018-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-018-a",
        "patientId": "p-018",
        "hospitalId": "h-028",
        "hospitalName": "충북대학교병원",
        "doctorId": "dr-267",
        "doctorName": "임하은",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-018-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-23T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      },
      {
        "id": "c-018-b",
        "patientId": "p-018",
        "hospitalId": "h-027",
        "hospitalName": "강동경희대학교병원",
        "doctorId": "dr-258",
        "doctorName": "정도윤",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-12T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-8T08:00:00Z"
  },
  {
    "id": "p-019",
    "name": "Иван Смирнов",
    "nationality": "사우디아라비아",
    "icdCode": "C20",
    "icdLabel": "직장의 악성 신생물 (대장암)",
    "desiredDepartment": "안과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-019-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-019-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-019-a",
        "patientId": "p-019",
        "hospitalId": "h-003",
        "hospitalName": "서울아산병원",
        "doctorId": "dr-019",
        "doctorName": "전건우",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-019-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-28T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-14T08:00:00Z"
  },
  {
    "id": "p-020",
    "name": "Анна Петров",
    "nationality": "몽골",
    "icdCode": "H25",
    "icdLabel": "노년백내장",
    "desiredDepartment": "피부과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-020-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-020-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-020-a",
        "patientId": "p-020",
        "hospitalId": "h-016",
        "hospitalName": "부산대학교병원",
        "doctorId": "dr-152",
        "doctorName": "홍하은",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-020-0-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-13T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-9T09:00:00Z",
        "updatedAt": "2024-11-18T14:00:00Z"
      },
      {
        "id": "c-020-b",
        "patientId": "p-020",
        "hospitalId": "h-009",
        "hospitalName": "고려대학교 구로병원",
        "doctorId": "dr-083",
        "doctorName": "황예준",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      },
      {
        "id": "c-020-c",
        "patientId": "p-020",
        "hospitalId": "h-025",
        "hospitalName": "건국대학교병원",
        "doctorId": "dr-234",
        "doctorName": "최건우",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-14T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-1T08:00:00Z"
  },
  {
    "id": "p-021",
    "name": "Анна Лебедев",
    "nationality": "베트남",
    "icdCode": "I25",
    "icdLabel": "만성 허혈성 심장질환",
    "desiredDepartment": "심장내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-021-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-021-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-021-a",
        "patientId": "p-021",
        "hospitalId": "h-021",
        "hospitalName": "한양대학교병원",
        "doctorId": "dr-205",
        "doctorName": "김지호",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-4T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      },
      {
        "id": "c-021-b",
        "patientId": "p-021",
        "hospitalId": "h-026",
        "hospitalName": "단국대학교병원",
        "doctorId": "dr-246",
        "doctorName": "장하윤",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-021-1-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-26T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-11T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      },
      {
        "id": "c-021-c",
        "patientId": "p-021",
        "hospitalId": "h-026",
        "hospitalName": "단국대학교병원",
        "doctorId": "dr-243",
        "doctorName": "송지호",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-7T09:00:00Z",
        "updatedAt": "2024-11-16T14:00:00Z"
      },
      {
        "id": "c-021-d",
        "patientId": "p-021",
        "hospitalId": "h-004",
        "hospitalName": "연세대학교 신촌세브란스병원",
        "doctorId": "dr-026",
        "doctorName": "권서현",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-021-3-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-12T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-17T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-6T08:00:00Z"
  },
  {
    "id": "p-022",
    "name": "Мария Лебедев",
    "nationality": "필리핀",
    "icdCode": "K80",
    "icdLabel": "담석증",
    "desiredDepartment": "소화기내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-022-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-022-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-022-a",
        "patientId": "p-022",
        "hospitalId": "h-015",
        "hospitalName": "충남대학교병원",
        "doctorId": "dr-145",
        "doctorName": "임지훈",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-15T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      },
      {
        "id": "c-022-b",
        "patientId": "p-022",
        "hospitalId": "h-026",
        "hospitalName": "단국대학교병원",
        "doctorId": "dr-248",
        "doctorName": "황하은",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-022-1-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-11T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-1T09:00:00Z",
        "updatedAt": "2024-11-17T14:00:00Z"
      },
      {
        "id": "c-022-c",
        "patientId": "p-022",
        "hospitalId": "h-020",
        "hospitalName": "이대목동병원",
        "doctorId": "dr-199",
        "doctorName": "권서연",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-022-2-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-16T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-3T09:00:00Z",
        "updatedAt": "2024-11-16T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-14T08:00:00Z"
  },
  {
    "id": "p-023",
    "name": "Иван Иванова",
    "nationality": "미국",
    "icdCode": "C34",
    "icdLabel": "기관지 및 폐의 악성 신생물 (폐암)",
    "desiredDepartment": "소화기내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-023-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-023-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-023-a",
        "patientId": "p-023",
        "hospitalId": "h-015",
        "hospitalName": "충남대학교병원",
        "doctorId": "dr-142",
        "doctorName": "임시우",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-023-0-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-13T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-1T09:00:00Z",
        "updatedAt": "2024-11-22T14:00:00Z"
      },
      {
        "id": "c-023-b",
        "patientId": "p-023",
        "hospitalId": "h-016",
        "hospitalName": "부산대학교병원",
        "doctorId": "dr-149",
        "doctorName": "홍지민",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-12T09:00:00Z",
        "updatedAt": "2024-11-17T14:00:00Z"
      },
      {
        "id": "c-023-c",
        "patientId": "p-023",
        "hospitalId": "h-004",
        "hospitalName": "연세대학교 신촌세브란스병원",
        "doctorId": "dr-028",
        "doctorName": "황서윤",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-023-2-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-26T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-5T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-2T08:00:00Z"
  },
  {
    "id": "p-024",
    "name": "Иван Смирнов",
    "nationality": "필리핀",
    "icdCode": "C16",
    "icdLabel": "위의 악성 신생물 (위암)",
    "desiredDepartment": "이비인후과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-024-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-024-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-024-a",
        "patientId": "p-024",
        "hospitalId": "h-029",
        "hospitalName": "순천향대학교 서울병원",
        "doctorId": "dr-281",
        "doctorName": "서민서",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-024-0-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-16T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-10T08:00:00Z"
  },
  {
    "id": "p-025",
    "name": "Дмитрий Петров",
    "nationality": "우즈베키스탄",
    "icdCode": "G40",
    "icdLabel": "뇌전증 (간질)",
    "desiredDepartment": "신경외과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-025-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-025-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-025-a",
        "patientId": "p-025",
        "hospitalId": "h-027",
        "hospitalName": "강동경희대학교병원",
        "doctorId": "dr-261",
        "doctorName": "오서준",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-025-0-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-10T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-7T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-2T08:00:00Z"
  },
  {
    "id": "p-026",
    "name": "Иван Смирнов",
    "nationality": "베트남",
    "icdCode": "J45",
    "icdLabel": "천식",
    "desiredDepartment": "소화기내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-026-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-026-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-026-a",
        "patientId": "p-026",
        "hospitalId": "h-028",
        "hospitalName": "충북대학교병원",
        "doctorId": "dr-267",
        "doctorName": "임하은",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-026-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-14T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-12T09:00:00Z",
        "updatedAt": "2024-11-26T14:00:00Z"
      },
      {
        "id": "c-026-b",
        "patientId": "p-026",
        "hospitalId": "h-029",
        "hospitalName": "순천향대학교 서울병원",
        "doctorId": "dr-277",
        "doctorName": "박채원",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-026-1-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-23T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-25T14:00:00Z"
      },
      {
        "id": "c-026-c",
        "patientId": "p-026",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-094",
        "doctorName": "오서윤",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-27T14:00:00Z"
      },
      {
        "id": "c-026-d",
        "patientId": "p-026",
        "hospitalId": "h-024",
        "hospitalName": "전북대학교병원",
        "doctorId": "dr-230",
        "doctorName": "김시우",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-026-3-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-10T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-1T09:00:00Z",
        "updatedAt": "2024-11-22T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-14T08:00:00Z"
  },
  {
    "id": "p-027",
    "name": "Анна Кузнецова",
    "nationality": "필리핀",
    "icdCode": "C20",
    "icdLabel": "직장의 악성 신생물 (대장암)",
    "desiredDepartment": "종양내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-027-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-027-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-027-a",
        "patientId": "p-027",
        "hospitalId": "h-023",
        "hospitalName": "원주세브란스기독병원",
        "doctorId": "dr-218",
        "doctorName": "송서윤",
        "status": "reviewing",
        "feedbacks": [],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-21T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-11T08:00:00Z"
  },
  {
    "id": "p-028",
    "name": "Анна Попов",
    "nationality": "베트남",
    "icdCode": "J45",
    "icdLabel": "천식",
    "desiredDepartment": "산부인과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-028-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-028-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-028-a",
        "patientId": "p-028",
        "hospitalId": "h-009",
        "hospitalName": "고려대학교 구로병원",
        "doctorId": "dr-084",
        "doctorName": "서서현",
        "status": "info_requested",
        "feedbacks": [
          {
            "id": "fb-p-028-0-1",
            "from": "hospital",
            "message": "추가 검사 결과지(최근 3개월 내 혈액검사, MRI 등)를 제출해 주시기 바랍니다.",
            "requestedDocuments": [
              "최근 혈액검사 결과",
              "MRI 영상 (DICOM)"
            ],
            "createdAt": "2024-11-28T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-23T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-12T08:00:00Z"
  },
  {
    "id": "p-029",
    "name": "Елена Сидорова",
    "nationality": "러시아",
    "icdCode": "C16",
    "icdLabel": "위의 악성 신생물 (위암)",
    "desiredDepartment": "신경외과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-029-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-029-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-029-a",
        "patientId": "p-029",
        "hospitalId": "h-015",
        "hospitalName": "충남대학교병원",
        "doctorId": "dr-145",
        "doctorName": "임지훈",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-029-0-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-19T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-4T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      },
      {
        "id": "c-029-b",
        "patientId": "p-029",
        "hospitalId": "h-025",
        "hospitalName": "건국대학교병원",
        "doctorId": "dr-236",
        "doctorName": "장지훈",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-3T09:00:00Z",
        "updatedAt": "2024-11-20T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-14T08:00:00Z"
  },
  {
    "id": "p-030",
    "name": "Ольга Лебедев",
    "nationality": "사우디아라비아",
    "icdCode": "H25",
    "icdLabel": "노년백내장",
    "desiredDepartment": "종양내과",
    "desiredProcedure": "관련 질환 검토 및 치료 계획 수립 요망",
    "attachments": [
      {
        "id": "att-p-030-1",
        "name": "여권사본.pdf",
        "type": "application/pdf",
        "size": "1.2MB"
      },
      {
        "id": "att-p-030-2",
        "name": "진단기록.pdf",
        "type": "application/pdf",
        "size": "3.5MB"
      }
    ],
    "cases": [
      {
        "id": "c-030-a",
        "patientId": "p-030",
        "hospitalId": "h-010",
        "hospitalName": "가천대 길병원",
        "doctorId": "dr-093",
        "doctorName": "송민준",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-030-0-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-23T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-13T09:00:00Z",
        "updatedAt": "2024-11-28T14:00:00Z"
      },
      {
        "id": "c-030-b",
        "patientId": "p-030",
        "hospitalId": "h-015",
        "hospitalName": "충남대학교병원",
        "doctorId": "dr-145",
        "doctorName": "임지훈",
        "status": "submitted",
        "feedbacks": [],
        "submittedAt": "2024-11-8T09:00:00Z",
        "updatedAt": "2024-11-24T14:00:00Z"
      },
      {
        "id": "c-030-c",
        "patientId": "p-030",
        "hospitalId": "h-025",
        "hospitalName": "건국대학교병원",
        "doctorId": "dr-238",
        "doctorName": "윤지우",
        "status": "rejected",
        "feedbacks": [
          {
            "id": "fb-p-030-2-3",
            "from": "hospital",
            "message": "현재 환자의 상태로는 본원에서 수용이 어렵습니다. 양해 부탁드립니다.",
            "createdAt": "2024-11-24T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-2T09:00:00Z",
        "updatedAt": "2024-11-16T14:00:00Z"
      },
      {
        "id": "c-030-d",
        "patientId": "p-030",
        "hospitalId": "h-014",
        "hospitalName": "양산부산대학교병원",
        "doctorId": "dr-135",
        "doctorName": "장하윤",
        "status": "approved",
        "feedbacks": [
          {
            "id": "fb-p-030-3-2",
            "from": "hospital",
            "message": "검토 결과, 본원에서 치료 가능합니다. 외래 진료 예약을 진행해 주시기 바랍니다.",
            "createdAt": "2024-11-25T10:00:00Z"
          }
        ],
        "submittedAt": "2024-11-11T09:00:00Z",
        "updatedAt": "2024-11-23T14:00:00Z"
      }
    ],
    "createdAt": "2024-11-13T08:00:00Z"
  }
];

// Helper functions
export function getHospitalById(id: string): Hospital | undefined {
  return HOSPITALS.find((h) => h.id === id)
}

export function getPatientById(id: string): Patient | undefined {
  return PATIENTS.find((p) => p.id === id)
}

export function getDoctorById(doctorId: string): { hospital: Hospital; doctor: import('./types').Doctor } | undefined {
  for (const hospital of HOSPITALS) {
    for (const dept of hospital.departments) {
      const doctor = dept.doctors.find((d) => d.id === doctorId)
      if (doctor) return { hospital, doctor }
    }
  }
  return undefined
}
