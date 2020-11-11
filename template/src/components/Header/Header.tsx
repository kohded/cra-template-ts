import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Header: FC = () => (
  <header>
    <Link to="/">Logo</Link>
    <nav>
      <Link to="/">Nav</Link>
    </nav>
  </header>
);
