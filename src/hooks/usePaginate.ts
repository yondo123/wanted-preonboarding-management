import { pageState } from '@recoil/index';
import { useRecoilState } from 'recoil';

const usePaginate = () => {
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  return { currentPage };
};

export default usePaginate;
