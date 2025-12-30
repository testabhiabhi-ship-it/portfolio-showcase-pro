interface SkillBadgeProps {
  name: string;
  icon?: React.ReactNode;
}

const SkillBadge = ({ name, icon }: SkillBadgeProps) => {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/10 hover:text-primary hover-shake cursor-default transition-colors duration-300">
      {icon}
      {name}
    </span>
  );
};

export default SkillBadge;
