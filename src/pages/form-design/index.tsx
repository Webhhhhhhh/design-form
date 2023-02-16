import React from 'react';
import { LeftBar, RightBar, FormMain } from '../../components';
import styles from './index.module.less';

const FormDesign = (props) => {
  return (
    <div className={styles.formContainer}>
      <LeftBar />
      <FormMain />
      <RightBar />
    </div>
  );
};

export default FormDesign;
