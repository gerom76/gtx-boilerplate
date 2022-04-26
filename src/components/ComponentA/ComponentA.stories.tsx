import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ComponentA } from './ComponentA';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Example2/Sub1/ComponentA',
  component: ComponentA,
} as ComponentMeta<typeof ComponentA>;

//👇 We create a “template” of how args map to rendering
const Template: ComponentStory<typeof ComponentA> = args => <ComponentA {...args} />;

//👇 Each story then reuses that template
export const DefaultStory = Template.bind({});
DefaultStory.args = {
  parameter1: '1stValue',
};

export const SeconddStory = Template.bind({});
SeconddStory.args = {
  parameter1: '2ndValue',
};
