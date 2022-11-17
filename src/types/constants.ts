import { AccountStatusType, Broker } from '.';

export const ACCOUNT_TOTAL_LENGTH = 383;
export const USER_TOTAL_LENGTH = 101;

// pagination
export const LIMIT = 20;
export const PER_PAGE = 5;

export const ACCOUNT_STATUS: AccountStatusType = {
  '1': '입금대기',
  '2': '운용중',
  '3': '투자중지',
  '4': '해지',
  '9999': '관리자 확인필요',
};

export const BROKER: Broker = {
  '209': '유안타증권',
  '218': '현대증권',
  '230': '미래에셋증권',
  '238': '대우증권',
  '240': '삼성증권',
  '243': '한국투자증권',
  '247': '우리투자증권',
  '261': '교보증권',
  '262': '하이투자증권',
  '263': 'HMC투자증권',
  '264': '키움증권',
  '265': '이베스트투자증권',
  '266': 'SK증권',
  '267': '대신증권',
  '268': '아이엠투자증권',
  '269': '한화투자증권',
  '270': '하나대투자증권',
  '279': '동부증권',
  '280': '유진투자증권',
  '288': '카카오페이증권',
  '287': '메리츠종합금융증권',
  '290': '부국증권',
  '291': '신영증권',
  '292': 'LIG투자증권',
  '271': '토스증권',
};

export const ACCOUNT_HEADER = [
  {
    id: 'user_name',
    name: '고객명',
  },
  {
    id: 'broker_name',
    name: '브로커명',
  },
  {
    id: 'number',
    name: '계좌번호',
  },
  {
    id: 'status',
    name: '계좌상태',
  },
  {
    id: 'name',
    name: '계좌명',
  },
  {
    id: 'assets',
    name: '평가금액',
  },
  {
    id: 'payments',
    name: '입금금액',
  },
  {
    id: 'is_active',
    name: '계좌 활성화',
  },
  {
    id: 'created_at',
    name: '계좌 개설일',
  },
];
