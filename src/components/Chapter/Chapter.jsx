import css from '../Style.module.css';

function Chapter ({ chapter }) {
  return (
      <h2 className={css.chapter}>{chapter}</h2>
  );
};

export default Chapter;