/* eslint-disable prettier/prettier */
import Link from 'next/link';

import styles from './header.module.scss';

export default function Header(): JSX.Element {
  return (
    <header className={styles.container}>
      <Link href="/">
        <a title="Home">
          <img src="/logo.svg" alt="logo" />
        </a>
      </Link>
    </header>
  );
}
