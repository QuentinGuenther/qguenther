interface IBlogPostCardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  title: string;
  date: string;
  description: string;
}

export const BlogPostCard: React.FC<IBlogPostCardProps> = ({
  title,
  date,
  description,
  className,
  ...rest
}) => {
  return (
    <article
      className={`bg-alt w-64 h-64 px-6 py-4 flex justify-between flex-col flex-none shadow-lg ${className}`}
      {...rest}
    >
      <section>
        <h2 className="text-accent-alt text-2xl">{title}</h2>
        <p className="text-muted text-sm">{date}</p>
      </section>
      <section>
        <p className="text-base">{description}</p>
      </section>
    </article>
  );
};
