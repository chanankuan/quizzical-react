import React from 'react';
import { Oval } from 'react-loader-spinner';

const Loader = () => {
  return (
    <Oval
      height={80}
      width={80}
      color="#d6dbf5"
      wrapperStyle={{}}
      wrapperClass=""
      visible={true}
      ariaLabel="oval-loading"
      secondaryColor="#d6dbf5"
      strokeWidth={4}
      strokeWidthSecondary={4}
    />
  );
};

export default Loader;
