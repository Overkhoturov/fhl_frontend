import React, { memo } from 'react';

import Header from '../../components/Header';

import './index.css';

export default memo(() => (
  <>
    <Header isShowNavigation />
    <div>
      Home
    </div>
  </>
));
