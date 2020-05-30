import React from 'react';

import { FiChevronRight } from 'react-icons/fi';
import appLogo from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={appLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>
      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37779361?s=460&u=29f7f32888e34d5cac52bffb26b176dcdcd01284&v=4"
            alt="Andrius"
          />
          <div>
            <strong>Rocketseat unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37779361?s=460&u=29f7f32888e34d5cac52bffb26b176dcdcd01284&v=4"
            alt="Andrius"
          />
          <div>
            <strong>Rocketseat unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/37779361?s=460&u=29f7f32888e34d5cac52bffb26b176dcdcd01284&v=4"
            alt="Andrius"
          />
          <div>
            <strong>Rocketseat unform</strong>
            <p>Easy peasy highly scalable ReactJS & React Native forms!</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
