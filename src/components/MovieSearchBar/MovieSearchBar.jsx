import { Field, Form, Formik } from 'formik';
import css from './MovieSearchBar.module.css';

const MovieSearchBar = () => {
  const initialValues = {
    query: '',
  };
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className={css.searchBar}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field
            className={css.search}
            name="query"
            placeholder="Search movies"
          />
          <button className={css.btn} type="submit">
            Search
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default MovieSearchBar;
