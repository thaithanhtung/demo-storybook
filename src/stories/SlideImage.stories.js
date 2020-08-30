import React from 'react';
import { action } from '@storybook/addon-actions';

import ImageSlide from '../../src/components/ImageSlideCustom';

export default {
  title: 'Example/SlideImage',
  component: ImageSlide,
  argTypes: {
    customViewWidth: { type: 'number' },
  },
  parameters: {
    docs: {
      description: {
        component: 'Tài liệu ',
      },
    },
  },
};

const Template = (args) => {
  return <ImageSlide {...args} />;
};

export const Simple = Template.bind({});
Simple.args = {
  // images: [],
  chooseColor: 'blue',
  clearBtn: false,
  setShowData: action('clicked'),
};
