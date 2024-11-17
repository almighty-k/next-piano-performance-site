interface HeadlineProps {
  title: string;
  subtitle?: string;
}

export function Headline({ title, subtitle }: HeadlineProps) {
  return (
    <div className="flex flex-col gap-2">
      <div>
        <h1 className="text-center text-4xl font-bold text-white">{title}</h1>
        {subtitle && (
          <p className="text-center text-white-secondary">{subtitle}</p>
        )}
      </div>
      <div className="mx-auto h-1 w-24 rounded-lg bg-yellow" />
    </div>
  );
}
