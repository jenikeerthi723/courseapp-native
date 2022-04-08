import React from 'react';
import styles from './CssModuleExample.module.css'

class CssModuleExample extends React.Component {
    render() {
      
      return (
            <div className={styles.divcontainer}>
                <h1 className={styles.h1container}>Clayfin - CSS Module !!!</h1>
            </div>
      );
    }
  }

export default CssModuleExample;