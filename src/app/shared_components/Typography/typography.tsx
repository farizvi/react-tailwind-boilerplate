import { FC, HTMLAttributes } from 'react';

export interface ITypographyProps extends HTMLAttributes<HTMLDivElement> {
  text: string;
  variant:
    | 'H1'
    | 'H2'
    | 'H3'
    | 'H4'
    | 'Paragraph'
    | 'Small'
    ;
  classes?: string;
}

export const Typography: FC<ITypographyProps> = ({ text, variant = 'H1', classes }) => {
    const variantMap = {
      H1: 'text-h1 text-heading',
      H2: 'text-h2 text-body',
      H3: 'text-h3 font-light text-body',
      H4: 'text-h4 font-medium text-body',
      Paragraph: 'text-paragraph text-body',
      Small: 'text-small text-body',
      
    };
  
    const extraClasses = variantMap[variant];
  
    return <div className={[classes, extraClasses].join(' ')}>{text!}</div>;
  };
  