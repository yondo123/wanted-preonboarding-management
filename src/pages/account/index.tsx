import ListHeader from '@components/common/ListHeader';
import type { QueryFunctionContext } from '@tanstack/react-query';
import { useQuery } from '@tanstack/react-query';
import { requestAccounts } from '@utils/httpClient';
import { useRecoilState, useRecoilValue } from 'recoil';
import { accountFilterState, listColumnState, pageState, pageTotalLength } from '@recoil/index';
import { useRouter } from 'next/router';
import { AccountType } from 'src/types';
import Pagination from '@components/common/Pagination';
import AccountFilter from '@components/filter/AccountFilter';
import { useEffect } from 'react';
import { ACCOUNT_HEADER, ACCOUNT_STATUS, BROKER } from '../../types/constants';
import { getCurreny } from '../../utils';

function Account() {
  const router = useRouter();
  const [, setListColumn] = useRecoilState(listColumnState);
  const [, setTotalLength] = useRecoilState(pageTotalLength);
  const currentPage = useRecoilValue(pageState);
  const accountFilter = useRecoilValue(accountFilterState);

  const getAccounts = async ({ queryKey }: QueryFunctionContext<[string, number | undefined]>) => {
    const { data, headers }: any = await requestAccounts({ currentPage: queryKey[1], ...accountFilter });
    setTotalLength(Number(headers['x-total-count']));
    return data;
  };

  const { data, isLoading, refetch } = useQuery(['accounts', currentPage], getAccounts, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
    retry: 0,
    onSuccess() {
      setListColumn(ACCOUNT_HEADER);
    },
    onError() {
      router.replace('/login');
    },
  });

  useEffect(() => {
    refetch();
  }, [accountFilter]);

  if (isLoading) {
    return <div>로딩 중</div>;
  }

  return (
    <section className="py-1 w-full">
      <div className="w-full  mb-12 xl:mb-0">
        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded min-h-[1000px]">
          <AccountFilter />
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
