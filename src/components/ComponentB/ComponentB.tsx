import React from 'react';
import { ComponentBViewModel } from './ComponentBViewModel';
import Button from '@mui/material/Button';

interface Props {
  parameter1: string;
  className?: string;
  backgroundColor?: string;
  /**
   * What style should the button be?
   */
  variant?: 'text' | 'outlined' | 'contained';
}
/**
 * ComponentB component as MUI button wrapper
 */
export const ComponentB: React.FC<Props> = ({ parameter1, className, variant }) => {
  const [viewModel, setViewModel] = React.useState(new ComponentBViewModel());
  React.useEffect(() => {
    console.info('ComponentB.uE [] parameter1', parameter1);
    setViewModel(v => {
      return { ...v, option1: parameter1 };
    });
  }, [parameter1]);

  return (
    <Button
      variant={variant}
      className={className}
      size={'large'}
      onClick={() => {
        console.info('Button clicked');
      }}
    >
      {viewModel.option1}
    </Button>
  );
};
