import { useRouter } from 'next/router';
import { Page } from 'src/types';
import { pageState } from '@recoil/index';
import { useRecoilState } from 'recoil';
import { ACCOUNT_TOTAL_LENGTH, USER_TOTAL_LENGTH, LIMIT, PER_PAGE } from 'src/types/constants';

function Pagination() {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const totalLength = router.pathname.includes(Page.ACCOUNT) ? ACCOUNT_TOTAL_LENGTH : USER_TOTAL_LENGTH;

  const generatePages = () => {
    let startPage = (currentPage - 1) / PER_PAGE;
    startPage = Math.floor(startPage) * PER_PAGE + 1;
    const endPage = startPage + PER_PAGE - 1;
    return new Array(5).fill(null).map((_, i) => i + startPage);
  };

  const handleClick = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  console.log(currentPage);

  return (
    <ul className="inline-flex items-center -space-x-px">
      <li>
        <button
          type="button"
          className="disabled:bg-gray-300 block py-2 px-3 ml-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="p-2">이전</span>
        </button>
      </li>
      <li>
        {generatePages().map((i: number) => (
          <button
            onClick={() => handleClick(i)}
            type="button"
            className={
              'py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white' +
              (i === currentPage ? ' text-white bg-primary' : ' text-gray-500 bg-white')
            }>
            {i}
          </button>
        ))}
      </li>
      <li>
        <button
          onClick={() => handleClick(currentPage + 1)}
          type="button"
          className="block py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
          <span className="p-2">다음</span>
        </button>
      </li>
    </ul>
  );
}
export default Pagination;
