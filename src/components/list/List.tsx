// components
import { ListSection } from './components/listSection/ListSection';
// style
import styles from './List.module.css';
import type { ListProps } from '../../types/types';

export const List = ({ sections, toggleSection, openSections }: ListProps) => {
  return (
    <div>
      {sections.map((section) => (
        <ListSection
          key={section.titleSection}
          {...section}
          isOpen={openSections.includes(section.titleSection)}
          onToggle={() => toggleSection(section.titleSection)}
        />
      ))}
    </div>
  );
};
