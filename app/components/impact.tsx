import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiPackage,
  FiRepeat,
  FiUserCheck,
  FiUsers,
} from "react-icons/fi";

const stats = [
  { value: "180", label: "Project Completed", Icon: FiUsers },
  { value: "750", label: "Satisfied Clients", Icon: FiUserCheck },
  { value: "1050", label: "Repeat Customers", Icon: FiRepeat },
  { value: "280", label: "Product Delivery", Icon: FiPackage },
];

export default function Stats() {
  return (
    <section className="w-full mt-8 sm:mt-10 md:mt-12 lg:mt-14">
      {/* Full-width background image part */}
      <div className="relative isolate w-full overflow-hidden bg-[#0A1530]">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
          alt="Smiling team members working together"
          fill
          sizes="100vw"
          className="-z-20 object-cover object-center"
        />
        {/* Navy overlay */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#0A1530]/90 via-[#0A1530]/75 to-[#0A1530]/60" />

        <div className="mx-auto max-w-[1320px] px-4 sm:px-6 lg:px-14 xl:px-12">
          <div className="flex flex-col gap-8 pb-[140px] pt-14 lg:flex-row lg:items-start lg:justify-between lg:pt-16">
            <div>
              <div className="flex items-center gap-4">
                <span className="h-[2px] w-10 bg-[#3B8BFF]" />
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/90 sm:text-sm">
                  Our Impact in Numbers
                </p>
              </div>

              <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
                Hundreds of Customers
                <span className="block">
                  <span className="text-[#6FA8FF]">Trust in Our</span> Company
                </span>
              </h2>
            </div>

            <Link
              href="/quote"
              className="inline-flex w-fit items-center gap-4 rounded-md bg-[#2F80ED] px-7 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-[#1F6FDB] lg:mt-3"
            >
              Get a Quote
              <FiArrowRight className="text-xl" />
            </Link>
          </div>
        </div>
      </div>

      {/* Cards overlapping the image */}
      <div className="mx-auto max-w-[1320px] px-4 pb-16 sm:px-6 lg:px-14 xl:px-12">
        <div className="relative z-10 -mt-[100px] grid gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map(({ value, label, Icon }) => (
            <div
              key={label}
              className="group relative mt-11 rounded-xl bg-white px-6 pb-8 pt-16 text-center shadow-[0_10px_30px_rgba(15,27,61,0.10)] transition-transform duration-300 hover:-translate-y-1"
            >
              {/* Icon circle */}
              <div className="absolute -top-11 left-1/2 -translate-x-1/2">
                <div className="relative flex h-[88px] w-[88px] items-center justify-center rounded-full bg-white p-[5px]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 88 88"
                    className="absolute inset-0 h-full w-full -rotate-90"
                  >
                    <circle
                      cx="44"
                      cy="44"
                      r="42.5"
                      fill="none"
                      stroke="#3B8BFF"
                      strokeWidth="3"
                      strokeLinecap="round"
                      pathLength="100"
                      strokeDasharray="100"
                      className="[stroke-dashoffset:100] transition-[stroke-dashoffset] duration-700 ease-out group-hover:[stroke-dashoffset:0]"
                    />
                  </svg>
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-[#0A1530] text-white">
                    <Icon className="text-[34px]" strokeWidth={1.5} />
                  </span>
                </div>
              </div>

              <p className="text-5xl font-extrabold tracking-tight text-[#0A1530]">
                {value}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-slate-600">
                {label}
              </p>
              <span className="mx-auto mt-5 block h-[3px] w-10 rounded-full bg-[#2F80ED] transition-all duration-300 group-hover:w-20" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}