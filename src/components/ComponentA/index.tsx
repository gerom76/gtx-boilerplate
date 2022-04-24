import React from 'react';
import { ComponentAViewModel } from './ComponentAViewModel';

interface Props {
  parameter1: string;
  className?: string;
}
export const ComponentA: React.FC<Props> = ({ parameter1, className }) => {
  const [viewModel, setViewModel] = React.useState(new ComponentAViewModel());
  React.useEffect(() => {
    setViewModel(v => {
      return { ...v, option1: parameter1 };
    });
  }, [parameter1]);

  return <span className={className}>{viewModel.option1}</span>;
};
