import { Link } from "react-router-dom";
import { usePageTitle } from "../hooks/usePageTitle";

const heroImage =
  "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=2200&q=88";
const eyebrowClass = "text-[10px] font-semibold tracking-[1.1px] uppercase";
const textLinkClass =
  "inline-flex items-center gap-[9px] text-[11px] font-semibold [&_span]:transition-transform hover:[&_span]:translate-x-1";
const buttonClass =
  "inline-flex min-h-[46px] items-center justify-center gap-[17px] px-[19px] text-[11px] font-semibold transition duration-200 hover:-translate-y-0.5";

export function HomePage() {
  usePageTitle("A neighborhood table");

  return (
    <>
      <section
        className="relative flex h-[min(70vw,720px)] min-h-[590px] items-center bg-cover bg-[position:center_53%] text-white max-[760px]:h-[74svh] max-[760px]:min-h-[600px] max-[760px]:max-h-[720px] max-[760px]:bg-[position:59%_center]"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#181a13b8_0%,#181a136e_46%,#181a130f_100%)] max-[760px]:bg-[linear-gradient(90deg,#181a13bd,#181a1340)]" />
        <div className="relative z-10 ml-[12.1%] w-[min(650px,80%)] animate-rise-in py-[50px] motion-reduce:animate-none max-[760px]:ml-[8%] max-[760px]:w-[84%]">
          <span className={`${eyebrowClass} text-[#eee8d8]`}>
            A neighborhood restaurant · Brooklyn, NY
          </span>
          <h1 className="my-[27px] font-serif text-[82px] leading-[1.02] font-medium max-[760px]:text-[44px]">
            Come hungry.
            <br />
            <em>Leave happy.</em>
          </h1>
          <p className="max-w-[390px] text-[14px] leading-[1.8] text-[#e0dfd7] max-[760px]:max-w-[300px] max-[760px]:text-[13px]">
            Seasonal plates, generous pours, and a seat saved just for you.
          </p>
          <div className="mt-[29px] flex items-center gap-[27px] max-[760px]:items-start max-[760px]:flex-col max-[760px]:gap-[18px]">
            <Link className={`${buttonClass} bg-[#f5f2e8] text-ink`} to="/menu">
              Explore the menu <span aria-hidden="true">↗</span>
            </Link>
            <Link className={`${textLinkClass} text-[#f1efe7]`} to="/contact">
              Make a reservation <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <span className="absolute right-[7.2%] bottom-7 font-serif text-[13px] text-[#eceae1] italic max-[760px]:right-[8%] max-[760px]:bottom-[22px]">
          Dinner is better together.
        </span>
      </section>

      <section className="px-[12.1%] pt-[82px] pb-[98px] max-[760px]:px-[8%] max-[760px]:pt-[59px] max-[760px]:pb-[68px]">
        <div className="flex items-center gap-3 text-[10px] font-semibold tracking-[1.1px] text-olive uppercase">
          <span className="text-[9px] text-clay">01</span> A seat at our table
        </div>
        <div className="mt-9 grid grid-cols-[1.1fr_.75fr] items-end gap-[12%] max-[760px]:mt-[26px] max-[760px]:grid-cols-1 max-[760px]:gap-5">
          <h2 className="m-0 font-serif text-[45px] leading-[1.16] font-medium max-[760px]:text-[39px]">
            Good things happen
            <br />
            around <em className="text-olive">the table.</em>
          </h2>
          <div className="max-w-[390px]">
            <p className="mb-[19px] text-[13px] leading-[1.9] text-muted">
              We cook what feels right for the season, pour what we love, and
              make room for one more. Nothing fussy. Everything from the heart.
            </p>
            <Link className={`${textLinkClass} text-olive`} to="/menu">
              A peek at what we're cooking <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-[1.08fr_.92fr] bg-[#eeece3] max-[760px]:grid-cols-1">
        <img
          className="h-[410px] w-full object-cover max-[760px]:h-[280px]"
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1100&q=85"
          alt="Friends sharing dinner at a warmly lit restaurant table"
        />
        <div className="max-w-[450px] self-center px-[12%] py-[50px] max-[760px]:px-[8%] max-[760px]:pt-[39px] max-[760px]:pb-[45px]">
          <span className={`${eyebrowClass} text-olive`}>
            The long way around
          </span>
          <h2 className="my-4 font-serif text-[39px] leading-[1.16] font-medium">
            A little local.
            <br />
            <em className="text-olive">A lot of love.</em>
          </h2>
          <p className="mb-[23px] text-[13px] leading-[1.9] text-muted">
            Inspired by the markets, makers, and neighbors right outside our
            door. Our menu changes with the weather. The welcome never does.
          </p>
          <Link className={`${textLinkClass} text-olive`} to="/contact">
            Come say hello <span aria-hidden="true">→</span>
          </Link>
        </div>
      </section>

      <section className="flex min-h-[138px] items-center justify-between gap-5 px-[12.1%] py-[26px] max-[760px]:items-start max-[760px]:flex-col max-[760px]:px-[8%] max-[760px]:py-[34px]">
        <span className="font-serif text-2xl font-medium max-[760px]:text-[22px]">
          Tonight sounds nice.
        </span>
        <Link
          className={`${buttonClass} bg-olive text-white hover:bg-[#3f4a34]`}
          to="/contact"
        >
          Find your way here <span aria-hidden="true">↗</span>
        </Link>
        <span className="text-[11px] text-muted">
          Dinner, every day · 5 till late
        </span>
      </section>
    </>
  );
}
