import React, { useState, useEffect, useRef } from "react";

export default function DropdownMenu() {
  const [selectedMenu, setSelectedMenu] = useState("보상");
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  //   메뉴 선택하면 닫히게
  const handleMenuClick = (menu) => {
    setSelectedMenu(menu);
    setMenuOpen(false);
  };

  //   메뉴 외 클릭시 닫히게
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setMenuOpen(false);
    }
  };

  // 컴포넌트가 언마운트될 때 이벤트 리스너 정리
  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  return (
    <div className="relative mt-[20px] inline-block text-left" ref={menuRef}>
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center rounded-md w-[310px] py-5 bg-[#E6E6E6] font-bold text-[30px] text-[#8B8B8B]"
          onClick={() => setMenuOpen(!menuOpen)} // 버튼 클릭 시 메뉴 열기/닫기 토글
        >
          {selectedMenu}
          <svg
            className="-mr-1 ml-2 h-5 w-5"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 12a1 1 0 01-.707-.293l-4-4a1 1 0 111.414-1.414L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-.707.293z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* 드롭다운 메뉴 */}
      {menuOpen && (
        <div className="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-white">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={() => handleMenuClick("보상")}
              className="w-full block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
            >
              보상
            </button>
            <button
              onClick={() => handleMenuClick("완료")}
              className="w-full block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
            >
              완료
            </button>
            <button
              onClick={() => handleMenuClick("미완료")}
              className="w-full block px-4 py-2 text-sm text-gray-700"
              role="menuitem"
            >
              미완료
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
