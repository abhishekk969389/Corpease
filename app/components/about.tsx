import Image from "next/image";
import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

const features = [
  {
    no: "01",
    title: "Clear Guidance",
    text: "We simplify complex procedures and provide step-by-step guidance for a smooth business journey.",
  },
  {
    no: "02",
    title: "Tailored Solutions",
    text: "Our solutions are designed to meet your unique business needs and help you grow with confidence.",
  },
];

export default function About() {
  return (
    <section className="relative w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Faint decorative rings (top-right / bottom-right) */}
     
      <div className="relative mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          {/* Left: image with colour blocks behind it */}
          <div className="relative mx-auto w-full max-w-[600px] lg:mx-0">
            {/* Navy block (top-left) */}
            <div className="absolute left-0 top-0 h-[150px] w-[200px] rounded-2xl bg-[#101D33] sm:h-[170px] sm:w-[230px]">
              <span className="absolute right-6 top-3 h-8 w-10 rounded-md border border-[#F9A61A]/60" />
            </div>

            {/* Yellow block (bottom-left) */}
            <div className="absolute bottom-0 left-0 h-[130px] w-[190px] rounded-2xl bg-[#F9A61A] sm:h-[150px] sm:w-[210px]">
              <span className="absolute bottom-3 left-3 h-16 w-16 rounded-2xl border border-white/60" />
            </div>

            {/* Photo */}
            <div className="relative ml-8 mt-8 mb-8 h-[340px] overflow-hidden rounded-[36px] shadow-xl sm:ml-10 sm:h-[430px]">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=1200&q=80"
                alt="Consultants discussing company registration documents"
                fill
                sizes="(min-width: 1024px) 560px, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Right: content */}
          <div>
            <div className="flex items-center gap-4">
              <span className="h-[3px] w-10 rounded-full bg-[#F9A61A]" />
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                About Us
              </p>
            </div>

            <h2 className="text-4xl font-bold text-[#101D33] sm:text-5xl lg:text-6xl">
              Your Business
              <span className="block text-[#F9A61A]">Our Priority</span>
            </h2>

            <p className="mt-2 max-w-[560px] leading-relaxed text-slate-600 text-sm sm:text-sm md:text-base">
              We are committed to making business registration, compliance and
              advisory services simple, transparent and hassle-free. Our
              experienced team helps entrepreneurs and businesses focus on
              growth while we take care of the complexities.
            </p>

            {/* Feature points */}
            <ul className="mt-4 space-y-6">
              {features.map(({ no, title, text }) => (
                <li key={no} className="flex items-center gap-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#FDF1DD] text-sm font-semibold text-[#F9A61A]">
                    {no}
                  </span>
                  <span className="h-12 w-px shrink-0 bg-slate-300" />
                  <div>
                    <h3 className="text-base font-bold text-sm sm:text-sm md:text-base lg:text-[18px] text-[#101D33]">
                      {title}
                    </h3>
                    <p className=" max-w-[420px] text-sm md:text-base leading-relaxed text-slate-600">
                      {text}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              href="/about"
              className="mt-9 inline-flex font-bold items-center gap-3 rounded-lg bg-[#F9A61A] px-7 py-3.5 text-[15px] text-[#101D33] transition hover:bg-[#E8960F]"
            >
              Read More
              <FiArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}