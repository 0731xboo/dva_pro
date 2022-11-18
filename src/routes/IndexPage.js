import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage({history}) {
  return (
    <div className={styles.normal}>
      <h1 className={styles.title}>Yay! Welcome to dva!</h1>
      <button onClick={()=>{history.push('/list')}}>跳转List页面</button>

    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
