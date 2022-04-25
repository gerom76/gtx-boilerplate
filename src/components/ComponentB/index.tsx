import React from 'react';
import { ComponentBViewModel } from './ComponentBViewModel';
import Button from '@mui/material/Button';

interface Props {
  parameter1: string;
  className?: string;
  variant?: 'text' | 'outlined' | 'contained';
}
export const ComponentB: React.FC<Props> = ({
  parameter1,
  className,
  variant,
}) => {
  const [viewModel, setViewModel] = React.useState(new ComponentBViewModel());
  React.useEffect(() => {
    console.info('ComponentB.uE [] parameter1', parameter1);
    setViewModel(v => {
      return { ...v, option1: parameter1 };
    });
  }, [parameter1]);

  return (
    <Button variant={variant} className={className}>
      {viewModel.option1}
    </Button>
  );
};
