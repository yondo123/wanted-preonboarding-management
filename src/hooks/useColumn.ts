import { useRecoilState } from 'recoil';
import { listColumnState } from '@recoil/index';
import { Page } from 'src/types';
import { ACCOUNT_HEADER } from 'src/types/constants';

const useColumn = (type: string) => {
  const [listColumn, setListColumn] = useRecoilState(listColumnState);

  if (type === Page.ACCOUNT) {
    setListColumn(ACCOUNT_HEADER);
  }

  return { listColumn };
};

export default useColumn;
