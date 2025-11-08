"use client";

const techs = [
  "Power BI",
  "Excel",
  "Python",
  "JavaScript",
  "Java",
  "SQL",
  "DAX",
  "React",
  "Next.js",
  "Tailwind",
];

export default function TechMarquee() {
  return (
    <div className="relative overflow-hidden bg-neutral-100 dark:bg-neutral-900 py-4">
      <div className="flex animate-marquee whitespace-nowrap text-lg font-semibold text-neutral-700 dark:text-neutral-300 gap-10">
        {techs.map((t) => (
          <span key={t} className="uppercase tracking-wide">
            {t} •
          </span>
        ))}

        {/* Duplicando para looping perfeito */}
        {techs.map((t) => (
          <span key={t + "-copy"} className="uppercase tracking-wide">
            {t} •
          </span>
        ))}
      </div>
    </div>
  );
}
