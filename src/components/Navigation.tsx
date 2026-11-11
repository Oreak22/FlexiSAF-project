import { NavLink } from "react-router-dom";

export type NavigationItem = {
  label: string;
  to: string;
  end?: boolean;
};

type PrimaryNavigationProps = {
  items: NavigationItem[];
  label?: string;
  className?: string;
};

export function PrimaryNavigation({
  items,
  label = "Main navigation",
  className = "",
}: PrimaryNavigationProps) {
  return (
    <nav
      className={`flex h-full items-center justify-center gap-9 max-[760px]:fixed max-[760px]:inset-x-0 max-[760px]:bottom-0 max-[760px]:z-50 max-[760px]:h-14.5 max-[760px]:justify-around max-[760px]:gap-0 max-[760px]:border-t max-[760px]:border-line max-[760px]:bg-paper ${className}`}
      aria-label={label}
    >
      <ul className="m-0 flex h-full w-full list-none items-center justify-center gap-9 p-0 max-[760px]:justify-around max-[760px]:gap-0">
        {items.map((item) => (
          <li key={item.to}>
            <NavLink
              to={item.to}
              end={item.end}
              className={({ isActive }) =>
                `py-1.25 text-xs text-[#66665d] transition-colors hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-olive max-[760px]:px-3.75 max-[760px]:py-2.5 max-[760px]:text-[11px] ${isActive ? "text-ink shadow-active max-[760px]:shadow-[inset_0_2px_#526044]" : ""}`
              }
            >
              {item.label}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
