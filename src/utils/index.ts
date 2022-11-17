export const getCurreny = (amount: string) =>
  new Intl.NumberFormat('ko-KR', { style: 'currency', currency: 'KRW' }).format(Number(amount)).slice(1);
