import { GameBoard } from './components/Game';


import { Route } from 'wouter';

import styles from './App.module.css';

const App = () => {
  return (
    <div className={styles.App}>
      <Route path='/' component={GameBoard} />
    </div>
  );
};

export default App;
