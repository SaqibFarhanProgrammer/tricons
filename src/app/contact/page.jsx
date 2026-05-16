import Link from "next/link";

export default function ContactPage() {
  return (
    <section className="w-full bg-white px-6 md:px-10 py-24 md:py-32">
      <div className="max-w-3xl mx-auto text-center">
        <span className="text-black/40 text-[10px] tracking-[0.2em] uppercase">
          Contact
        </span>

        <h1 className="text-black text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mt-6">
          Let’s talk about your next project
        </h1>

        <p className="mt-6 text-black/60 text-base md:text-lg leading-relaxed">
          Share your idea, product, or business goal. We’ll respond with a clear
          direction and next steps.
        </p>

        <div className="mt-14 border border-black/10 rounded-2xl p-10 md:p-14">
          <p className="text-black/50 text-sm mb-6">Direct contact</p>
          <Link
          
            href="https://mail.google.com/mail/u/0/#inbox?compose=FNSXwzPZhCdWFBnlzvBfrcsQfMckVqcPpwBNCkbFZLMQWTWtQpkdVghsWPckPMfFvKlcBzxmDcwFmzlwtRdQwwMDcmrLXNdsPHcCpfWMWsQNvcbzVdXcNFVPCZNwnnFrJDjVNQzftnmFCzrtsdQGjMMHRfLB"
            className="inline-flex items-center justify-center px-10 py-4 bg-black text-white text-sm tracking-wide rounded-full hover:bg-black/90 transition-all duration-300 hover:scale-105 active:scale-95"
          >
            Send Email
          </Link>

          <p className="text-black/40 text-xs mt-6">studiotricons@gmail.com</p>
        </div>

        <div className="mt-16 text-black/40 text-xs tracking-wide">
          Typical response time: 24–48 hours
        </div>
      </div>
    </section>
  );
}
