import { NavLink } from "react-router-dom";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `py-[5px] text-xs text-[#66665d] transition-colors hover:text-ink max-[760px]:px-[15px] max-[760px]:py-[10px] max-[760px]:text-[11px] ${isActive ? "text-ink shadow-[0_1px_#526044] max-[760px]:shadow-[inset_0_2px_#526044]" : ""}`;

export function Header() {
  return (
    <header className="grid h-[88px] grid-cols-3 items-center bg-paper px-[7.2%] max-[760px]:h-[72px] max-[760px]:grid-cols-[1fr_auto] max-[760px]:px-[6%]">
      <NavLink
        className="flex w-fit items-center gap-[11px] max-[390px]:gap-[7px]"
        to="/"
        aria-label="Olive and Ember home"
      >
        <span className="grid size-[38px] shrink-0 place-items-center rounded-full border border-olive font-serif text-[14px] whitespace-nowrap text-olive max-[760px]:size-[33px]">
          <span className="whitespace-nowrap">
            O<span className="text-clay">&</span>E
          </span>
        </span>
        <span className="text-[11px] font-bold max-[760px]:text-[10px] max-[390px]:text-[9px]">
          OLIVE <i className="text-clay not-italic">&</i> EMBER
        </span>
      </NavLink>
      <nav
        className="flex h-full items-center justify-center gap-9 max-[760px]:fixed max-[760px]:inset-x-0 max-[760px]:bottom-0 max-[760px]:z-50 max-[760px]:h-[58px] max-[760px]:justify-around max-[760px]:gap-0 max-[760px]:border-t max-[760px]:border-line max-[760px]:bg-paper"
        aria-label="Main navigation"
      >
        <NavLink to="/" end className={navLinkClass}>
          Our table
        </NavLink>
        <NavLink to="/menu" className={navLinkClass}>
          The menu
        </NavLink>
        <NavLink to="/contact" className={navLinkClass}>
          Find us
        </NavLink>
      </nav>
      <NavLink
        className="justify-self-end border-b border-olive py-[9px] text-xs text-ink max-[760px]:text-[10px] max-[390px]:text-[9px]"
        to="/contact"
      >
        Book a table{" "}
        <span className="pl-2 text-olive" aria-hidden="true">
          ↗
        </span>
      </NavLink>
    </header>
  );
}
