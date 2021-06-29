import React, { memo, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Header from '../../components/Header';
import { confirmEmailRequest } from '../../actions/auth';

const ConfirmEmail = memo((props) => {
  const dispatch = useDispatch();
  const { location } = props;

  useEffect(() => {
    const { search } = location;
    dispatch(confirmEmailRequest(search));
  }, []);

  return (
    <>
      <Header isShowNavigation />

      <div className="registration-confirm">
        <div className="registration-confirm__icon">
          <svg width="180" height="180" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0)">
              <path d="M153.67 153.67C136.792 170.547 113.9 180.028 90.0316 180.028C66.1629 180.028 43.2717 170.547 26.3936 153.67L153.67 26.3575C162.032 34.7154 168.665 44.6389 173.191 55.5613C177.717 66.4836 180.046 78.1906 180.046 90.0135C180.046 101.836 177.717 113.543 173.191 124.466C168.665 135.388 162.032 145.312 153.67 153.67Z" fill="#191B26" />
              <path d="M26.3584 153.67C9.47577 136.788 -0.00878931 113.89 -0.00878906 90.0142C-0.00878881 66.1385 9.47577 43.2408 26.3584 26.3582C43.241 9.47553 66.1388 -0.00903295 90.0144 -0.0090332C113.89 -0.00903345 136.788 9.47553 153.67 26.3582L26.3584 153.67Z" fill="#242632" />
              <path d="M137.529 58.3765H42.4697V123.879H137.529V58.3765Z" fill="#D3D6E5" />
              <path d="M42.4697 116.591L89.9994 84.2397L137.529 116.591V123.879H42.4697V116.591Z" fill="#B3B7CE" />
              <path d="M137.529 65.6645L89.9994 98.016L42.4697 65.6645V58.3765H137.529V65.6645Z" fill="white" />
            </g>
            <defs>
              <clipPath id="clip0">
                <rect width="180" height="180" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <div>
          <div className="registration-confirm__header">
            Почта подтверждена
          </div>
          <div className="registration-confirm__message">
            <Link to="/" className="registration-confirm__resend-link"> На главную </Link>
          </div>
        </div>
      </div>

    </>
  );
});
ConfirmEmail.propTypes = {
  location: {
    search: PropTypes.string.isRequired,
  },
};

ConfirmEmail.defaultProps = {
  location: {},
};

export default ConfirmEmail;
