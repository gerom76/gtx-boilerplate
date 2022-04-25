import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentB } from '.';
import { within, userEvent } from '@storybook/testing-library';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'ComponentB',
  component: ComponentB,
} as ComponentMeta<typeof ComponentB>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ComponentB> = args => <ComponentB {...args} />;

//👇 Each story then reuses that template
export const DefaultStory = Template.bind({});
DefaultStory.args = {
  parameter1: 'vvv',
};

export const OutlinedStory = Template.bind({});
OutlinedStory.args = {
  variant: 'outlined',
  parameter1: 'vvv',
};

export const ClickStory = Template.bind({});
ClickStory.args = {
  variant: 'outlined',
  parameter1: 'ccc',
};

ClickStory.play = async ({ canvasElement }: { canvasElement: HTMLCanvasElement }) => {
  // Starts querying the component from its root element
  const canvas = within(canvasElement);

  // See https://storybook.js.org/docs/react/essentials/actions#automatically-matching-args to learn how to setup logging in the Actions panel
  await userEvent.click(canvas.getByRole('button'));
};
