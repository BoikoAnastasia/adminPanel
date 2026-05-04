import { CustomButton } from '../components/customButton/CustomButton';
import { TitleSection } from '../components/titleSection/TitleSection';
// img
import ArrowDown from '../assets/icons/arrow-down.svg?react';

export const Home = () => {
  return (
    <TitleSection>
      <div>
        <h1>Добро пожаловать, Джон</h1>
        <div style={{ fontSize: '12px', color: 'var(--neutral--grey-400)', marginTop: '4px' }}>
          Измеряйте рентабельность инвестиций в рекламу и анализируйте посещаемость сайта.
        </div>
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        <CustomButton title="Экспорт данных" svg={ArrowDown} />
        <CustomButton title="Создать рапорт" variant="pink" />
      </div>
    </TitleSection>
  );
};
