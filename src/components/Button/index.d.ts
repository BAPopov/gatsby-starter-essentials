import React from 'react';

type active = 'red' | 'blue';

export interface ButtonProps {
  /**
   * Help supporting a react-transition-group/Transition component.
   */
  active?: active;
}

declare const Button: React.FC<ButtonProps>;

export default Button;
