import React from 'react';
import { ComponentAViewModel } from './ComponentAViewModel';

interface Props {
  /**
   * Text within component
   */
  parameter1: string;
  className?: string;
}
/**
 * ComponentA component as basic example
 */
export const ComponentA: React.FC<Props> = ({ parameter1, className }) => {
  const [viewModel, setViewModel] = React.useState(new ComponentAViewModel());
  React.useEffect(() => {
    console.info('ComponentA.uE [] parameter1', parameter1);
    setViewModel(v => {
      return { ...v, option1: parameter1 };
    });
  }, [parameter1]);

  return <span className={className}>{viewModel.option1}</span>;
};
