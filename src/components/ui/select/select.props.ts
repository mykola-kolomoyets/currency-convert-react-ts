/* eslint-disable no-unused-vars */
export interface SelectProps {
  value: string;
  options: string[];
  onOptionChangeCallback: (value: string) => void;
}

export interface ListItemProps {
  isSelected: boolean;
}

export interface SelectImageProps {
  isActive: boolean; 
}