interface SkillCardProps {
  title: string;
  icon: string;
  position: {
    top?: string;
    right?: string;
    bottom?: string;
    left?: string;
  };
  delay?: string;
}

const SkillCard = ({ title, icon, position, delay = "0s" }: SkillCardProps) => {
  return (
    <div
      className="absolute hidden lg:block"
      style={{
        ...position,
        animationDelay: delay,
      }}
    >
      <div className="cyber-card p-4 rounded-2xl floating-animation backdrop-blur-sm bg-card/50 min-w-[180px]">
        <div className="flex items-center space-x-3">
          <div className="text-2xl">{icon}</div>
          <div>
            <h3 className="font-modern font-semibold text-card-foreground text-sm">
              {title}
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;