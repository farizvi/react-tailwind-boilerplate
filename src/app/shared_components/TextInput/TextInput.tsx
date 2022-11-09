import { forwardRef, HTMLAttributes } from 'react';
import Icon from '../Icon/icon';

import { Typography } from '../Typography/typography';

export interface ITextInputProps extends HTMLAttributes<HTMLInputElement> {
  caption?: string;
  text?: string;
  value?: string;
  type: string;
  textinputsize: 'small' | 'medium' | 'large' | 'extraLarge' | 'withIcon';
  classes?: string;
  borderRadius?: string;
  backgroundColor?: string;
  imageUrl?: string[];
  iconWidth?: number;
  iconHeight?: number;
  styles?: string;
  autoFocus?: boolean;
  characterLength?: number;
  inputId?: string;
  disabled?: boolean;
}

export const TextInput = forwardRef<HTMLInputElement, ITextInputProps>(
  (props: ITextInputProps, ref) => {
    const sizeMap = {
      small: 'h-8 w-240 px-2.5',
      medium: 'h-8 w-full min-w-[80px] px-2.5',
      large: 'h-8 w-96 px-2.5',
      extraLarge: 'h-10 w-447 px-2.5',
      withIcon: 'h-10 md:w-438 px-2.5'
    };
    return (
      <div style={{ display: 'flex', flexDirection: 'column', position: 'relative' }}>
        <span>
          <Typography variant='Small' text={props.caption!} />
        </span>
        <input
          autoFocus={props.autoFocus}
          className={[props.classes, 'rounded-md text-small', `${sizeMap[props.textinputsize]}`].join(
            ' '
          )}
          style={{
            border: '',
            borderColor: '',
            borderRadius: props.borderRadius,
            backgroundColor: props.backgroundColor
          }}
          ref={ref}
          value={props.value}
          maxLength={props.characterLength}
          id={props.inputId}
          disabled={props.disabled}
          {...props}
        />
        <div className={props.styles}>
          <Typography variant="Small" text={props.text || ''} />
          {props.imageUrl?.map((image) => {
            return (
              <Icon
                imageUrl={image}
                iconWidth={props.iconWidth!}
                iconHeight={props.iconHeight!}
              />
            );
          })}
        </div>
      </div>
    );
  }
);
