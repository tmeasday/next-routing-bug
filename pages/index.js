import Link from 'next/link';
import Router from 'next/router';

export default () =>
  <div>
    <Link href={{ pathname: 'page' }}>
      <a>Link</a>
    </Link>
    <p>
      <a
        onClick={() => {
          Router.push({ pathname: 'page' });
        }}
      >
        No Leading Slash
      </a>
    </p>
    <p>
      <a
        onClick={() => {
          Router.push({ pathname: '/page' });
        }}
      >
        Leading Slash
      </a>
    </p>
  </div>;
