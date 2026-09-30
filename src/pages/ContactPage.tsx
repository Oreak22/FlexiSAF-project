import { useState, type FormEvent } from "react";
import { usePageTitle } from "../hooks/usePageTitle";

const eyebrowClass =
  "text-[10px] font-semibold tracking-[1.1px] text-olive uppercase";
const detailLabelClass =
  "text-[9px] font-semibold tracking-[1.1px] text-muted uppercase";
const fieldClass =
  "mt-[7px] block w-full resize-y border-0 border-b border-[#d1cec3] bg-transparent py-[10px] text-[11px] text-ink outline-none placeholder:text-[#a09e94] focus:border-olive";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  usePageTitle("Come by");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="px-[12.1%] pt-[75px] pb-[43px] max-[760px]:px-[8%] max-[760px]:pt-[55px] max-[760px]:pb-[30px]">
        <span className={eyebrowClass}>We saved you a seat</span>
        <h1 className="mt-[15px] mb-[10px] font-serif text-[58px] leading-[1.02] font-medium max-[760px]:text-[48px]">
          Come on <em className="text-olive">over.</em>
        </h1>
        <p className="text-[13px] text-muted">
          A date night, a long lunch, a Tuesday. We'll be glad to see you.
        </p>
      </section>
      <section className="grid grid-cols-[.85fr_1.15fr] gap-[12%] px-[12.1%] pt-[26px] pb-[78px] max-[760px]:grid-cols-1 max-[760px]:gap-9 max-[760px]:px-[8%] max-[760px]:pt-4 max-[760px]:pb-[54px]">
        <div className="grid content-start gap-7 max-[760px]:grid-cols-2 max-[760px]:gap-x-[18px] max-[760px]:gap-y-[26px] max-[390px]:grid-cols-1">
          <div>
            <span className={detailLabelClass}>Find the front door</span>
            <p className="mt-[10px] text-xs leading-[1.9]">
              214 Wythe Avenue
              <br />
              Brooklyn, NY 11249
            </p>
            <a
              className="mt-[9px] inline-block text-[11px] text-olive"
              href="https://maps.google.com/?q=214+Wythe+Avenue+Brooklyn+NY+11249"
              target="_blank"
              rel="noreferrer"
            >
              Get directions{" "}
              <span className="pl-1.5" aria-hidden="true">
                ↗
              </span>
            </a>
          </div>
          <div>
            <span className={detailLabelClass}>When the lights are on</span>
            <p className="mt-[10px] text-xs leading-[1.9]">
              Monday – Thursday <span className="text-muted">5 – 10 pm</span>
              <br />
              Friday – Saturday <span className="text-muted">5 – 11 pm</span>
              <br />
              Sunday <span className="text-muted">4 – 9 pm</span>
            </p>
          </div>
          <div>
            <span className={detailLabelClass}>Say hello</span>
            <p className="mt-[10px] text-xs leading-[1.9]">
              <a href="tel:+17185550148">(718) 555-0148</a>
              <br />
              <a href="mailto:hello@oliveandember.com">
                hello@oliveandember.com
              </a>
            </p>
          </div>
        </div>
        <form
          className="bg-[#eeece3] px-[30px] pt-[27px] pb-[29px] max-[760px]:px-5 max-[760px]:py-6"
          onSubmit={handleSubmit}
        >
          <span className={detailLabelClass}>A note to the team</span>
          <h2 className="mt-[7px] mb-5 font-serif text-[29px] leading-tight font-medium">
            Let's talk.
          </h2>
          <label className="my-[14px] block text-[10px] text-[#54534a]">
            Your name
            <input
              className={fieldClass}
              name="name"
              autoComplete="name"
              required
              placeholder="How should we call you?"
            />
          </label>
          <label className="my-[14px] block text-[10px] text-[#54534a]">
            Email address
            <input
              className={fieldClass}
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
          </label>
          <label className="my-[14px] block text-[10px] text-[#54534a]">
            What's on your mind?
            <textarea
              className={fieldClass}
              name="message"
              rows={3}
              required
              placeholder="A question, a celebration, anything at all…"
            />
          </label>
          <button
            className="mt-2 inline-flex min-h-[46px] items-center justify-center gap-[17px] bg-olive px-[19px] text-[11px] font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#3f4a34]"
            type="submit"
          >
            {submitted ? "Message noted" : "Send your note"}{" "}
            <span aria-hidden="true">→</span>
          </button>
          {submitted && (
            <p className="mt-[15px] text-[11px] text-olive" role="status">
              Thanks for reaching out. We'll be in touch soon.
            </p>
          )}
        </form>
      </section>
      <section
        className="relative h-[260px] bg-cover bg-[position:center_57%] max-[760px]:h-[200px]"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1800&q=82)",
        }}
        aria-label="Restaurant dining room"
      >
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#181a1314,transparent)]" />
      </section>
    </>
  );
}
