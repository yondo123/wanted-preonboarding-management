import { accountFilterState } from '@recoil/index';
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { ACCOUNT_STATUS, BROKER } from '../../types/constants';

function AccountFilter() {
  const [accountFilter, setAccountFilter] = useRecoilState(accountFilterState);
  const [keyword, setKeyword] = useState('');
  const handleSearchClick = () => {
    setAccountFilter({ ...accountFilter, keyword: keyword || null });
  };
  const handleChangeBroker = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountFilter({ ...accountFilter, broker: e.currentTarget.value || null });
  };
  const handleChangActive = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountFilter({ ...accountFilter, isActive: e.currentTarget.value || null });
  };
  const handleChangeStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountFilter({ ...accountFilter, status: e.currentTarget.value || null });
  };

  return (
    <div className="rounded-t mb-0 px-4 py-3 border-0">
      <div className="flex flex-wrap items-center">
        <div className="relative w-full px-4 max-w-full flex-grow flex-1">
          <input
            className="border-solid border border-primary h-7 px-5 pr-16 rounded-lg text-sm font-bold "
            type="text"
            name="search"
            placeholder="Search"
          />
          <button
            type="submit"
            onClick={handleSearchClick}
            className="ml-4 py-1 px-2 bg-primary text-white text-sm rounded-md">
            검 색
          </button>
        </div>
        <div className="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
          <div className="flex items-center ">
            <select
              onChange={handleChangeBroker}
              className="bg-secondary border border-primary text-font text-sm rounded-lg focus:ring-primary  w-1/3 p-2">
              <option value="">브로커 전체</option>
              {Object.keys(BROKER).map((key) => (
                <option value={key}>{BROKER[key]}</option>
              ))}
            </select>
            <select
              onChange={handleChangActive}
              className="ml-4 bg-secondary border border-primary text-font text-sm rounded-lg focus:ring-primary  w-1/3 p-2">
              <option value="">상태</option>
              <option value="true">활성화</option>
              <option value="false">비할성화</option>
            </select>
            <select
              onChange={handleChangeStatus}
              className="ml-4 bg-secondary border border-primary text-font text-sm rounded-lg focus:ring-primary  w-1/3 p-2">
              <option value="">계좌 상태</option>
              {Object.keys(ACCOUNT_STATUS).map((key) => (
                <option value={key}>{ACCOUNT_STATUS[key]}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AccountFilter;
