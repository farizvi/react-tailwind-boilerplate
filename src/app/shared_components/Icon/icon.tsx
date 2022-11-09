import React, { FC } from 'react';

export interface IIconProps {
  imageUrl: string;
  iconWidth: number;
  iconHeight: number;
  alt?: string;
}

export const Icon: FC<IIconProps> = ({ imageUrl, iconWidth, iconHeight, alt = '' }) => {
  return (
    <img
      src={imageUrl}
      alt={alt}
      style={{
        width: iconWidth,
        height: iconHeight
      }}
    />
  );
};

export default Icon;
