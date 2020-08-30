import React from 'react';

import { Button } from '../../src/components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button Primary',
  size: 'large',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button Secondary',
  size: 'medium',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button Large',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button Small',
};
