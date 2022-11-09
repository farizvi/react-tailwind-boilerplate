import { Meta, Story } from '@storybook/react';
import { ITypographyProps, Typography } from './typography';

export default {
  title: 'Components/Typography',
  component: Typography,
  argTypes: {}
} as Meta;

export const H1: Story<ITypographyProps> = (args) => <Typography {...args} />;
H1.args = {
  text: 'Heading',
  variant: 'H1'
};

export const H2: Story<ITypographyProps> = (args) => <Typography {...args} />;
H2.args = {
  text: 'Heading',
  variant: 'H2'
};

export const H3: Story<ITypographyProps> = (args) => <Typography {...args} />;
H3.args = {
  text: 'Heading',
  variant: 'H3'
};

export const StepTitle: Story<ITypographyProps> = (args) => <Typography {...args} />;
StepTitle.args = {
  text: 'Heading',
  variant: 'H4'
};

export const StepSubTitle: Story<ITypographyProps> = (args) => <Typography {...args} />;
StepSubTitle.args = {
  text: 'Paragraph text',
  variant: 'Paragraph'
};

export const SubTitle: Story<ITypographyProps> = (args) => <Typography {...args} />;
SubTitle.args = {
  text: 'Small text',
  variant: 'Small'
};

