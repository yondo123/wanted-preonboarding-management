import { useRecoilValue } from 'recoil';
import { listColumnState } from '@recoil/index';
import { Column } from 'src/types';

function ListHeader() {
  const columnList = useRecoilValue(listColumnState);
  return (
    <thead>
      <tr>
        {columnList.map((item: Column) => (
          <th
            key={item.id}
            className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
            {item.name}
          </th>
        ))}
      </tr>
    </thead>
  );
}
export default ListHeader;
