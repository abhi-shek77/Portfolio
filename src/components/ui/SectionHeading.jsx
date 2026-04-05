/**
 * SectionHeading — consistent label + title pattern used in every section.
 */
export default function SectionHeading({ label, title, className = '' }) {
  return (
    <div className={`mb-14 ${className}`}>
      <p className="text-violet-bright text-xs tracking-[0.38em] uppercase mb-3 font-raleway">
        {label}
      </p>
      <h2 className="font-cinzel font-black text-3xl md:text-4xl text-ghost leading-tight">
        {title}
      </h2>
    </div>
  )
}
