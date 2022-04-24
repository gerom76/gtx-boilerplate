import React from 'react';
import { ComponentBViewModel } from './ComponentBViewModel';

interface Props {
  parameter1: string;
  className?: string;
}
export const ComponentB: React.FC<Props> = ({ parameter1, className }) => {
  const [viewModel, setViewModel] = React.useState(new ComponentBViewModel());
  React.useEffect(() => {
    setViewModel(v => {
      return { ...v, option1: parameter1 };
    });
  }, [parameter1]);

  return <span className={className}>{viewModel.option1}</span>;
};
