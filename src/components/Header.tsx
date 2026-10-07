import { NavLink } from "react-router-dom";
import { PrimaryNavigation } from "./Navigation";

const navigationItems = [
  { to: "/", label: "Our table", end: true },
  { to: "/menu", label: "The menu" },
  { to: "/contact", label: "Find us" },
];

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
      <PrimaryNavigation items={navigationItems} />
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
