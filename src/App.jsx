import AppRoutes from './Routes/AppRoutes';

//import { useState } from 'react';

//import Preloader from './components/layout/Preloader';


function App() {

/*  const [showPreloader, setShowPreloader] = useState(() => {
    return sessionStorage.getItem(
      'senna-preloader-shown'
    );
  });

  const handlePreloaderComplete = () => {
    sessionStorage.setItem(
      'senna-preloader-shown',
      'true'
    );

    setShowPreloader(false);
  }; */

  return (
    <>
      {/* {showPreloader && (
        <Preloader
          onComplete={handlePreloaderComplete}
        />
      )} */}
      <AppRoutes />  
    </>
  )
}

export default App;