import Icon from 'icomoon-react';
import Link from 'next/link';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';
import iconSet from '../styles/selection.json';

function Navbar() {
  return (
    <nav className="text-lg text-fontSub mt-5">
      <ul>
        <NavBarLi>
          <Icon iconSet={iconSet} size={24} icon="bank" />
          <div className="ml-4">
            <Link href="/account">계좌 목록</Link>
          </div>
        </NavBarLi>
        <NavBarLi>
          <Icon iconSet={iconSet} size={24} icon="user" />
          <div className="ml-4">
            <Link href="/user">사용자</Link>
          </div>
        </NavBarLi>
        <NavBarLi>
          <Icon iconSet={iconSet} size={24} icon="signout" />
          <div className="ml-4">
            <button type="button">로그아웃</button>
          </div>
        </NavBarLi>
      </ul>
    </nav>
  );
}
const NavBarLi = tw(styled.li``)`
    flex 
    flex-row 
    align-middle 
    mt-3 px-1 py-2 
    cursor-pointer 
    hover:bg-slate-500
`;

export default Navbar;
