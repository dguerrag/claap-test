import React from 'react';
import styles from './CircleLetter.module.scss';

export const CircleLetter = ({letter}: { letter: string }) => <div className={styles.circleLetter}>{letter}</div>;
