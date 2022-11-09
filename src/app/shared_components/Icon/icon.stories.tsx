import { Meta, Story } from '@storybook/react';
import React from 'react';
import { Icon, IIconProps } from './icon';

export default {
  title: 'Components/IconPng',
  component: Icon,
  argTypes: {
    backgroundColor: { control: 'color' },
    textColor: { control: 'color' }
  }
} as Meta;

export const Default: Story<IIconProps> = (args) => <Icon {...args} />;
Default.args = {
  imageUrl: 'images/arrow-down-icon.png',
  iconWidth: 20,
  iconHeight: 20
};
