import { useState } from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'

import './global.css';
import styles from './App.module.css';

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          <Post
            author="v 76 ae trueno"
            content="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo deleniti magni recusandae, veniam autem alias nesciunt inventore aspernatur ipsa, possimus, libero mollitia maiores doloremque ullam cumque beatae iste quibusdam adipisci?"
          />

          <Post
            author="ae ! trueno"
            content="Lorem ipsum dolusandae, veniam autem  nesciunt inventore aspernatur ipsa, possimus, libero mollitia maiores doloremque ullam cumque beatae iste quibusdam adipisci?"
          />  
        </main>
      </div>
    </div>
  )
}

