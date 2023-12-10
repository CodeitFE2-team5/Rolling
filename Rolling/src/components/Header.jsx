import logo from '../assets/logo.svg';

function Header() {
  return (
    <>
      <div class="flex items-center justify-between flex-shrink-0 py-[12px] px-[222px] border-b-[1px] border-zinc-100">
        <a className="" href="/">
          <img src={logo} />
        </a>
        <button class="hover:bg-neutral-100 w-40 px-4 py-2 bg-white rounded-md border border-gray-300 justify-center items-center gap-2.5 flex text-center text-neutral-900 text-base font-bold font-pre ">
          롤링 페이퍼 만들기
        </button>
      </div>
    </>
  );
}

export default Header;