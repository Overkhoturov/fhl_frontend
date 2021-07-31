import React, { memo } from 'react';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';

export default memo(() => (
  <>
    <Header />
    <div>
      Not found
    </div>
    <Footer />
  </>
));
