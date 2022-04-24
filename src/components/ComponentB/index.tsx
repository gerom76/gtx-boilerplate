import React from 'react';
import { ComponentBViewModel } from './ComponentBViewModel';
import Button from '@mui/material/Button';

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

  return <Button variant="contained">{viewModel.option1}</Button>;
};
