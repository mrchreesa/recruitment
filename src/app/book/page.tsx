import { BookingForm } from "@/components/forms/booking-form";
import { Reveal } from "@/components/reveal";
import { Container, Eyebrow, Pill } from "@/components/ui";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Book a consultation",
  description:
    "Book a free 20-minute consultation with The JobFather. Phone, video or in person — Monday to Friday 9:30am–4:30pm, Saturday 10am–3pm.",
  path: "/book",
});

export default function BookPage() {
  return (
    <>
      <section className="grain relative overflow-hidden border-b-2 border-ink bg-ink text-white">
        <div className="pointer-events-none absolute -top-32 left-[15%] h-80 w-80 rounded-full bg-grape/45 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-40 right-[5%] h-80 w-80 rounded-full bg-zest/15 blur-3xl" />
        <Container className="relative py-12 sm:py-16">
          <div className="max-w-3xl">
            <Eyebrow tone="light">Book a consultation</Eyebrow>
            <h1 className="mt-5 text-[2.6rem] leading-[0.98] font-extrabold sm:text-6xl lg:text-[4rem]">
              Twenty minutes.
              <br />
              <span className="text-zest">No sales patter.</span>
            </h1>
            <p className="mt-6 max-w-xl text-[1.05rem] leading-relaxed text-white/70">
              Pick a slot that suits and we&rsquo;ll come prepared — realistic timescales and a
              straight answer on whether a Volunteer Parachute Position is the right fit for you.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {["Free", "No obligation", "Phone, video or in person", "Mon–Fri 9:30am–4:30pm", "Sat 10am–3pm"].map((p) => (
                <li key={p}>
                  <Pill tone="light">{p}</Pill>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </section>

      <section className="bg-bone py-14 sm:py-20">
        <Container>
          <Reveal className="mx-auto max-w-3xl">
            <BookingForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
