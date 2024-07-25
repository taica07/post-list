import { useState } from 'react';
import PostList from './components/PostList/PostList';
import MainHeader from './components/MainHeader/MainHeader';

const App = () => {
  const [isVisible, setIsVisible] = useState(false);

  function showModal() {
    setIsVisible(true);
  }
  function hideModal() {
    setIsVisible(false);
  }

  return (
    <>
      <MainHeader showModal={showModal} />
      <main>
        <PostList
          isVisible={isVisible}
          showModal={showModal}
          hideModal={hideModal}
        />
      </main>
    </>
  );
};

export default App;
