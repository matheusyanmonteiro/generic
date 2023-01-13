import { useState } from 'react';
import { Post } from './components/Post';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar'
import styles from './App.module.css';

import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/49919267?v=4',
      name: 'Vicent Winstom Orwell',
      role: 'CTO @ Generic',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {
        type: 'paragraph', 
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {type: 'link', content: 'jane.desing/doctorcare'}
    ],
    publishedAt: new Date('2022-05-03 21:00:11')
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://avatars.githubusercontent.com/u/62117139?v=4',
      name: 'Gordon Charles Simons',
      role: 'TCO @ Generic',
    },
    content: [
      {type: 'paragraph', content: 'Fala galeraa 👋'},
      {
        type: 'paragraph', 
        content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'
      },
      {type: 'link', content: 'jane.desing/doctorcare'}
    ],
    publishedAt: new Date('2022-05-04 22:00:11')
  }
];

export function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header/>
      
      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {
            posts.map(post => {
              return (
                <Post
                  key={post.id}
                  author={post.author}
                  content={post.content}
                  publishedAt={post.publishedAt}
                />
              )
            })
          }
        </main>
      </div>
    </div>
  )
}

