import { Hero, MainProducts } from 'app/components';
import styles from './page.module.css';
import { Description } from 'app/components';

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Hero />
        <MainProducts />
        <Description />
      </main>
    </div>
  );
}
