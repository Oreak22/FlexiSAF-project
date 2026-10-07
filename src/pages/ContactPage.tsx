import { useState, type FormEvent } from "react";
import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Feedback } from "../components/Feedback";
import { Input, TextArea } from "../components/Input";
import { usePageTitle } from "../hooks/usePageTitle";

const eyebrowClass =
  "text-[10px] font-semibold tracking-[1.1px] text-olive uppercase";
const detailLabelClass =
  "text-[9px] font-semibold tracking-[1.1px] text-muted uppercase";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  usePageTitle("Come by");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <section className="px-page pt-[75px] pb-[43px] max-[760px]:px-page-mobile max-[760px]:pt-[55px] max-[760px]:pb-[30px]">
        <span className={eyebrowClass}>We saved you a seat</span>
        <h1 className="mt-[15px] mb-[10px] font-serif text-[58px] leading-[1.02] font-medium max-[760px]:text-[48px]">
          Come on <em className="text-olive">over.</em>
        </h1>
        <p className="text-[13px] text-muted">
          A date night, a long lunch, a Tuesday. We'll be glad to see you.
        </p>
      </section>
      <section className="grid grid-cols-[.85fr_1.15fr] gap-[12%] px-page pt-[26px] pb-[78px] max-[760px]:grid-cols-1 max-[760px]:gap-9 max-[760px]:px-page-mobile max-[760px]:pt-4 max-[760px]:pb-[54px]">
        <div className="grid content-start gap-7 max-[760px]:grid-cols-2 max-[760px]:gap-x-[18px] max-[760px]:gap-y-[26px] max-[390px]:grid-cols-1">
          <div>
            <span className={detailLabelClass}>Find the front door</span>
            <p className="mt-[10px] text-xs leading-[1.9]">Nigeria</p>
            <a
              className="mt-[9px] inline-block text-[11px] text-olive"
              href="https://maps.google.com/?q=Nigeria"
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
              <a href="mailto:hello@oliveandember.com">
                hello@oliveandember.com
              </a>
            </p>
          </div>
        </div>
        <Card className="px-[30px] pt-[27px] pb-[29px] max-[760px]:px-5 max-[760px]:py-6">
          <form onSubmit={handleSubmit}>
            <span className={detailLabelClass}>A note to the team</span>
            <h2 className="mt-[7px] mb-5 font-serif text-[29px] leading-tight font-medium">
              Let's talk.
            </h2>
            <Input
              label="Your name"
              name="name"
              autoComplete="name"
              required
              placeholder="How should we call you?"
            />
            <Input
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="you@example.com"
            />
            <TextArea
              label="What's on your mind?"
              name="message"
              rows={3}
              required
              placeholder="A question, a celebration, anything at all…"
            />
            <Button className="mt-2" type="submit" disabled={submitted}>
              {submitted ? "Message noted" : "Send your note"}
              <span aria-hidden="true">→</span>
            </Button>
            {submitted && (
              <Feedback state="success" className="mt-[15px]">
                Thanks for reaching out. We'll be in touch soon.
              </Feedback>
            )}
          </form>
        </Card>
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
