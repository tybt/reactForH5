import React, { useEffect, useState } from 'react';
import AppRouters from '../../router/appRouter'
import toRem from '../../config/toRem'
import '../../globalStyle/global.css'
type AppProps = {}

export const App = ({}: AppProps) => {
  const [state, setState] = useState();

  useEffect(() => {
    toRem()
  }, []);

  return (
    <>
      <AppRouters></AppRouters>
    </>
  );
};