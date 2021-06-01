import React, { memo, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';

import './index.css';

const Notification = () => {
  const auth = useSelector((state) => state.auth);
  const { isShowAlert, status } = auth;
  const [showNotify, setShowNotify] = useState(isShowAlert);

  useEffect(() => {
    setShowNotify(isShowAlert);
    if (isShowAlert) {
      setTimeout(() => setShowNotify(false), 2000);
    }
  }, [auth]);

  return (
    showNotify
     && (
       status
         ? (
           <div className="notification alert alert-success" role="alert">
             Успешно
           </div>
         )
         : (
           <div className="notification alert alert-danger" role="alert">
             Что-то не так
           </div>
         )
     )
  );
};
export default memo(Notification);
