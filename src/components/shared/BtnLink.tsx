interface BtnLinkProps {
  href: string;
  text: string;
  className?: string;
}

export const BtnLink = ({ href, text, className = "" }: BtnLinkProps) => {
  return (
    <a
      href={href}
      className={`px-6 py-3 rounded-full outline-none relative overflow-hidden border border-box-border bg-box-bg dark:border-transparent dark:bg-violet-600 cursor-pointer transition-colors ${className}`}
    >
      <span className="relative z-10 text-heading-1 dark:text-white font-medium"> {text}</span>
    </a>
  );
};
