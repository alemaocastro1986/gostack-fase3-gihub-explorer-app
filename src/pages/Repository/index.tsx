import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="githubexplorer" />
        <Link to="/">
          <FiChevronLeft size={16} />
          voltar
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/28929274?v=4"
            alt="avatar_url"
          />
          <div>
            <strong>Rocketseat/unform</strong>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, deserunt! Maiores, aperiam nostrum libero eius, numquam
              architecto vel eveniet magnam nihil eos sit, ratione illo itaque.
              Cum blanditiis eius quasi?
            </p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1980</strong>
            <span>Stars</span>
          </li>
          <li>
            <strong>48</strong>
            <span>Forks</span>
          </li>
          <li>
            <strong>67</strong>
            <span>Issues abertas</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="dasdasdas">
          <div>
            <strong>aasnasndkjandsakjnk</strong>
            <p>cmsdmcsmcmsdkmsddsmç</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
