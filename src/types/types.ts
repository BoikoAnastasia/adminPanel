import type { ComponentType, SVGProps } from 'react';

export interface ListItemProps {
  title: string;
  active: boolean;
  href: string;
}

export interface Section {
  titleSection: string;
  icon?: ComponentType<SVGProps<SVGSVGElement>>;
  listTitlesItem: ListItemProps[];
}

export interface ListSectionProps extends Section {
  isOpen: boolean;
  onToggle: () => void;
}

export interface ListProps {
  sections: Section[];
  toggleSection: (title: string) => void;
  openSections: string[];
}
