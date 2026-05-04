import styles from './CardInfoList.module.css';
// components
import { MiniCardInfo } from '../miniCardInfo/MiniCardInfo';
// img
import Views from '../../assets/icons/views.svg?react';
import User from '../../assets/icons/user.svg?react';
import Plus from '../../assets/icons/plus.svg?react';
import Star from '../../assets/icons/features.svg?react';

const stats = [
  {
    id: 1,
    title: 'Просмотры страницы',
    count: '50.8 тыс.',
    isUp: true,
    statistic: 28.4,
    svg: Views,
  },
  {
    id: 2,
    title: 'Eжемесячные пользователи',
    count: '23.6 тыс.',
    isUp: false,
    statistic: 12.6,
    svg: User,
  },
  {
    id: 3,
    title: 'Новые пользователи',
    count: '756',
    isUp: true,
    statistic: 3.1,
    svg: Plus,
  },
  {
    id: 4,
    title: 'Подписки',
    count: '2.3 тыс.',
    isUp: true,
    statistic: 11.3,
    svg: Star,
  },
];

export const CardInfoList = () => {
  return (
    <div className={styles.list}>
      {stats.map((card) => (
        <MiniCardInfo
          key={card.id}
          svg={card.svg}
          title={card.title}
          count={card.count}
          isUp={card.isUp}
          statistic={card.statistic}
          onClick={() => console.log('клик')}
        />
      ))}
    </div>
  );
};
