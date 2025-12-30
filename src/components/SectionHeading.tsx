interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

const SectionHeading = ({ title, subtitle }: SectionHeadingProps) => {
  return (
    <div className="mb-12">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="mt-4 w-20 h-1 bg-gradient-to-r from-primary to-primary/50 rounded-full" />
    </div>
  );
};

export default SectionHeading;
