import { useState } from 'react';
// components
import { Logo } from '../logo/Logo';
import { CustomeInput } from '../customInput/CustomInput';
import { List } from '../list/List';
// img
import HomeIcon from '../../assets/icons/home.svg?react';
import FeaturesIcon from '../../assets/icons/features.svg?react';
import IntegrationsIcon from '../../assets/icons/integrations.svg?react';
import PricingIcon from '../../assets/icons/pricing.svg?react';
import UsersIcon from '../../assets/icons/users.svg?react';
import Settings from '../../assets/icons/settings.svg?react';
import Webflow from '../../assets/icons/webflow.svg?react';
import ChevronRight from '../../assets/icons/chevron-right.svg?react';
import ChevronLeft from '../../assets/icons/chevron-left.svg?react';
import ArrowRight from '../../assets/icons/arrow-right.svg?react';
import User from '../../assets/img/users/user-01.png';

// styles
import styles from './Sidebar.module.css';
import { Avatar } from '../avatar/Avatar';
import { CustomButton } from '../customButton/CustomButton';

const sections = [
  {
    titleSection: 'Панель управления',
    icon: HomeIcon,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
      {
        title: 'Отчеты',
        active: false,
        href: '/',
      },
      {
        title: 'Продукция',
        active: false,
        href: '/',
      },
      {
        title: 'Задачи',
        active: false,
        href: '/',
      },
    ],
  },
  {
    titleSection: 'Функции',
    icon: FeaturesIcon,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
    ],
  },
  {
    titleSection: 'Пользователи',
    icon: UsersIcon,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
    ],
  },
  {
    titleSection: 'Цены',
    icon: PricingIcon,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
    ],
  },
  {
    titleSection: 'Интеграции',
    icon: IntegrationsIcon,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
    ],
  },
];

const sectionsBottom = [
  {
    titleSection: 'Настройки',
    icon: Settings,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
      {
        title: 'Отчеты',
        active: false,
        href: '/',
      },
      {
        title: 'Продукция',
        active: false,
        href: '/',
      },
      {
        title: 'Задачи',
        active: false,
        href: '/',
      },
    ],
  },
  {
    titleSection: 'Страницы шаблонов',
    icon: Webflow,
    listTitlesItem: [
      {
        title: 'Все страницы',
        active: false,
        href: '/',
      },
    ],
  },
];

export const Sidebar = () => {
  const [openSections, setOpenSections] = useState<string[]>([]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => (prev.includes(title) ? prev.filter((item) => title !== item) : [...prev, title]));
  };

  return (
    <nav className={styles.sidebar}>
      <div className={styles.top}>
        <Logo />
        <div>
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>
      <div>
        <CustomeInput type="text" icon={true} placeholder="Поиск..." name="sidebar-search" />
      </div>
      <div className={styles.list}>
        <div className={styles.listGroup}>
          <List sections={sections} toggleSection={toggleSection} openSections={openSections} />
        </div>
        <div className={styles.listGroup}>
          <List sections={sectionsBottom} toggleSection={toggleSection} openSections={openSections} />
          <div className={styles.hrefUser}>
            <Avatar img={User} bg="var(--primary-pink)" />
            <a href="/" className={styles.infoUser}>
              <div style={{ fontSize: '14px', lineHeight: 1 }}>Джон Картер</div>
              <div style={{ fontSize: '14px', color: 'var(--neutral--grey-400)' }}>Настройки аккаунта</div>
            </a>
          </div>
          <CustomButton title="Получить шаблон" svg={ArrowRight} variant="gradient" size="big" />
        </div>
      </div>
    </nav>
  );
};
