import styles from './Comment.module.css';
import { Trash, ThumbsUp } from "phosphor-react";
import { Avatar } from './Avatar';

export function Comment({content, onDeleteComment }) {
  function handleDeleteComment() {
    console.log('delete');

    onDeleteComment(content);

  }
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://avatars.githubusercontent.com/u/49919267?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Vic Orwell junior</strong>
              <time title="22 de fevereiro de 2032 as 23:22" dateTime="2022-05-11 08:13:30"> Cerca de 2h atrás</time>
            </div>

            <button onClick={handleDeleteComment} title="Deletar Comentario">
              <Trash size={24}/>
            </button>
          </header>

          <p>{content}</p>
        </div>

        <footer>
          <button>
            <ThumbsUp/>
            Like <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}