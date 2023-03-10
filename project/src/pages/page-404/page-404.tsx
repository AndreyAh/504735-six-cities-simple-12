import {Fragment} from 'react';
import {Link} from 'react-router-dom';

function Page404(): JSX.Element {
  return (
    <Fragment>
      <h1>
        404.
        <br />
        <small>Page not found</small>
      </h1>
      <Link to="/">Go to main page</Link>
    </Fragment>
  );
}

export default Page404;
