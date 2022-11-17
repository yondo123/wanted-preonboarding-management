import ListHeader from '@components/common/ListHeader';
import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { requestAccounts } from '@utils/httpClient';
import { useRecoilState, useRecoilValue } from 'recoil';
import { listColumnState, pageState, pageTotalLength } from '@recoil/index';
import { useRouter } from 'next/router';
import { AccountType } from 'src/types';
import Pagination from '@components/common/Pagination';
import { ACCOUNT_HEADER, ACCOUNT_STATUS, BROKER } from '../../types/constants';
import { getCurreny } from '../../utils';

function Account() {
  const router = useRouter();
  const [, setListColumn] = useRecoilState(listColumnState);
  const [, setTotalLength] = useRecoilState(pageTotalLength);
  const currentPage = useRecoilValue(pageState);

  const getAccounts = async ({ queryKey }: QueryFunctionContext<[string, number | null | undefined]>) => {
    const { data, headers }: any = await requestAccounts(currentPage);
    setTotalLength(Number(headers['x-total-count']));
    return data;
  };

  const { data } = useQuery(['accounts', currentPage], getAccounts, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    onSuccess() {
      setListColumn(ACCOUNT_HEADER);
    },
    onError() {
      router.replace('/login');
    },
  });

  return (
    <section className="py-1 w-full">
      <div className="w-full  mb-12 xl:mb-0">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded min-h-[1000px]">
          <div className="rounded-t mb-0 px-4 py-3 border-0">
            <div className="flex flex-wrap items-center">
              <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                <input
                  className="border-solid border border-primary h-7 px-5 pr-16 rounded-lg text-sm font-bold "
                  type="text"
                  name="search"
                  placeholder="Search"
                />
                <button type="submit" className="ml-4 py-1 px-2 bg-primary text-white text-sm rounded-md">
                  검 색
                </button>
              </div>
              <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                <button
                  className="bg-primary hover:bg-hover text-white  text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                  type="button">
                  전체보기
                </button>
              </div>
            </div>
          </div>

          <div className="block w-full overflow-x-auto">
            <table className="items-center bg-transparent w-full border-collapse ">
              <ListHeader />
              <tbody>
                {data?.map((item: AccountType) => (
                  <tr key={item.uuid}>
                    <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left text-font">
                      {item.user.name}
                    </th>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {BROKER[item.broker_id]}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-bold cursor-pointer">
                      {item.number}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {ACCOUNT_STATUS[item.status]}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.name}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {getCurreny(item.assets)}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {getCurreny(item.payments)}
                    </td>
                    <td
                      className={
                        'border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 font-semibold' +
                        (item.is_active ? ' text-green-500' : ' text-red-500')
                      }>
                      {item.is_active ? '활성화' : '비활성화'}
                    </td>
                    <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
                      {item.created_at.slice(0, 10)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination />
    </section>
  );
}

export default Account;
