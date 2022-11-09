import React from 'react';

import { Meta, Story } from '@storybook/react';

import { ITextInputProps, TextInput } from './TextInput';

export default {
  title: 'Components/TextInput',
  component: TextInput,
  argTypes: {
    type: { type: 'string' }
  }
} as Meta;

export const Small: Story<ITextInputProps> = (args) => <TextInput {...args} />;
Small.args = {
  type: 'text',
  textinputsize: 'small',
  caption: 'Caption text',
  placeholder: 'Placeholder text'
};

export const Medium: Story<ITextInputProps> = (args) => <TextInput {...args} />;
Medium.args = {
  type: 'text',
  textinputsize: 'medium',
  caption: 'Caption text',
  placeholder: 'Placeholder text'
};

export const Large: Story<ITextInputProps> = (args) => <TextInput {...args} />;
Large.args = {
  type: 'text',
  textinputsize: 'large',
  caption: 'Caption text',
  placeholder: 'Placeholder text'
};

export const ExtraLarge: Story<ITextInputProps> = (args) => <TextInput {...args} />;
ExtraLarge.args = {
  type: 'text',
  textinputsize: 'extraLarge',
  caption: 'Caption text',
  placeholder: 'Placeholder text'
};

export const WithIcon: Story<ITextInputProps> = (args) => <TextInput {...args} />;
WithIcon.args = {
  type: 'text',
  text: '6d',
  textinputsize: 'withIcon',
  placeholder: 'Add a comment',
  borderRadius: '80px',
  imageUrl: ['images/emoji-smile-small-icon.png', 'images/post-small-icon.png'],
  styles: 'flex flex-row absolute right-6 bottom-2.5'
};
