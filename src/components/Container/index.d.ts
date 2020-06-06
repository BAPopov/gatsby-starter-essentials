import React from 'react';

// type examplePropType = 'opt1' | 'opt2';

type size = 33 | 50 | 66 | 100;
type center = true | 'vertical' | 'horizontal';
type maxWidth = 'xs' | 'sm' | 'md' | 'lg';

export interface ContainerProps {
  /**
   * The min-height of the container in vh.
   */
  size?: size;

  center?: center;
  /**
   * Full width background property for the container. It works with both colors and images
   */
  background?: string;

  overlay?: string;

  maxWidth?: maxWidth;
}

declare const Container: React.FC<ContainerProps>;

export default Container;
