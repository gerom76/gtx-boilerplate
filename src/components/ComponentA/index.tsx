interface Props {
  parameter1: string;
  className?: string;
}
export const ComponentA: React.FC<Props> = ({ parameter1, className }) => {
  return <div className={className}>{parameter1}</div>;
};
