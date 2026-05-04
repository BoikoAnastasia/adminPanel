import styles from './Avatar.module.css';

interface AvatarProps {
  img?: string;
  bg?: string;
}

export const Avatar = ({ img, bg }: AvatarProps) => {
  return (
    <div className={styles.avatar} style={{ backgroundColor: bg }}>
      {img && <img src={img} alt="Avatar" className={styles.img} />}
    </div>
  );
};
