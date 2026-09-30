import { menuSections } from "../data/menu";
import { usePageTitle } from "../hooks/usePageTitle";
import { formatCurrency } from "../utils/formatCurrency";

const menuImage =
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1800&q=88";

export function MenuPage() {
  usePageTitle("The menu");

  return (
    <>
      <section
        className="relative flex min-h-[350px] flex-col justify-center bg-cover bg-[position:center_54%] px-[12.1%] py-[50px] text-white max-[760px]:min-h-[300px] max-[760px]:px-[8%] max-[760px]:py-10"
        style={{ backgroundImage: `url(${menuImage})` }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#181a13b8_0%,#181a136e_46%,#181a130f_100%)]" />
        <span className="relative z-10 text-[10px] font-semibold tracking-[1.1px] text-[#eee8d8] uppercase">
          Made for passing around
        </span>
        <h1 className="relative z-10 mt-[17px] mb-0 font-serif text-[56px] leading-[1.02] font-medium max-[760px]:text-[45px]">
          Eat what
          <br />
          <em>makes you happy.</em>
        </h1>
      </section>
      <section className="grid grid-cols-[.8fr_1.2fr] gap-[12%] px-[12.1%] pt-[76px] pb-[105px] max-[760px]:grid-cols-1 max-[760px]:gap-10 max-[760px]:px-[8%] max-[760px]:pt-[51px] max-[760px]:pb-[70px]">
        <aside className="sticky top-8 self-start max-[760px]:static">
          <span className="flex items-center gap-3 text-[10px] font-semibold tracking-[1.1px] text-olive uppercase">
            <span className="text-[9px] text-clay">02</span> The menu
          </span>
          <p className="my-[27px] max-w-[250px] text-[13px] leading-[1.9] text-muted max-[760px]:mt-[18px] max-[760px]:mb-[10px] max-[760px]:max-w-[390px]">
            Good ingredients, treated kindly. Our menu follows the seasons, so a
            few favorites may come and go.
          </p>
          <span className="text-[10px] leading-[1.7] text-muted">
            Please tell us about allergies. We are happy to help.
          </span>
        </aside>
        <div>
          {menuSections.map((section) => (
            <section className="mb-[42px]" key={section.title}>
              <h2 className="mb-[17px] font-serif text-[26px] leading-tight font-medium max-[760px]:text-2xl">
                {section.title}
              </h2>
              {section.items.map((item) => (
                <article className="border-t border-line py-4" key={item.name}>
                  <div className="flex items-baseline gap-[10px] max-[390px]:gap-[7px]">
                    <h3 className="m-0 shrink-0 text-[13px] font-semibold whitespace-nowrap max-[760px]:text-xs max-[390px]:text-[11px]">
                      {item.name}
                    </h3>
                    <span
                      className="flex-1 border-b border-dotted border-[#c9c5b8]"
                      aria-hidden="true"
                    />
                    <span className="text-xs">
                      {formatCurrency(item.price)}
                    </span>
                  </div>
                  <p className="mt-[5px] text-[11px] text-muted">
                    {item.description}
                  </p>
                  {item.tag && (
                    <span className="mt-2 inline-block text-[9px] text-olive">
                      {item.tag}
                    </span>
                  )}
                </article>
              ))}
            </section>
          ))}
        </div>
      </section>
    </>
  );
}
