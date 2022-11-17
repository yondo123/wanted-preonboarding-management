import { Page } from 'src/types';
import { pageState, pageTotalLength } from '@recoil/index';
import { useRecoilState, useRecoilValue } from 'recoil';
import { PER_PAGE, LIMIT } from 'src/types/constants';

function Pagination() {
  const [currentPage, setCurrentPage] = useRecoilState(pageState);
  const totalLength = useRecoilValue(pageTotalLength);
  const totalPage = Math.ceil(totalLength / LIMIT);

  console.log(currentPage, totalPage, totalLength);

  const generatePages = () => {
    let startPage = (currentPage - 1) / PER_PAGE;
    startPage = Math.floor(startPage) * PER_PAGE + 1;
    return new Array(5)
      .fill(null)
      .map((_, i) => i + startPage)
      .filter((item) => item <= totalPage);
  };

  const handleClick = (nextPage: number) => {
    setCurrentPage(nextPage);
  };

  return (
    <ul className="inline-flex items-center -space-x-px">
      <li>
        <button
          onClick={() => {
            setCurrentPage(currentPage - 1);
          }}
          disabled={currentPage === 1}
          type="button"
          className=" disabled:text-gray-400  block py-2 px-3 ml-0 leading-tight text-font bg-white rounded-l-lg border border-gray-300 hover:bg-gray-50 hover:text-gray-400">
          <span className="p-1">이전</span>
        </button>
      </li>
      <li>
        {generatePages().map((i: number) => (
          <button
            onClick={() => handleClick(i)}
            type="button"
            className={
              'py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ' +
              (i === currentPage ? ' text-white bg-primary' : ' text-gray-500 bg-white')
            }>
            {i}
          </button>
        ))}
      </li>
      <li>
        <button
          disabled={currentPage === totalPage}
          onClick={() => handleClick(currentPage + 1)}
          type="button"
          className="disabled:text-gray-400  block py-2 px-3 leading-tight text-font bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">
          <span className="p-1">다음</span>
        </button>
      </li>
    </ul>
  );
}
export default Pagination;
