import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="flex min-h-[110px] items-center justify-between gap-5 border-t border-line px-[7.2%] py-[26px] max-[760px]:flex-wrap max-[760px]:items-start max-[760px]:px-[8%] max-[760px]:pt-7 max-[760px]:pb-[78px]">
      <Link className="text-[10px] font-bold" to="/">
        OLIVE <i className="text-clay not-italic">&</i> EMBER
      </Link>
      <p className="text-[10px] text-muted max-[760px]:order-3 max-[760px]:m-0 max-[760px]:w-full">
        Good food. No occasion necessary.
      </p>
      <div className="flex gap-5 text-[10px] text-muted">
        <Link to="/menu">Menu</Link>
        <Link to="/contact">Contact & hours</Link>
      </div>
      <span className="text-[10px] text-muted max-[760px]:hidden">
        Nigeria · {currentYear}
      </span>
    </footer>
  );
}
