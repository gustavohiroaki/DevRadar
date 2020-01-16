import React from "react";
import "./global.css";
import "./App.css";
import "./Sidebar.css";
import "./Main.css";

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>

        <form>
          <div className="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="github_username" />
          </div>

          <div className="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" />
          </div>

          <div className="input-group">
            <div className="input-block">
              <label htmlFor="latitude">Latitude</label>
              <input name="latitude" id="latitude" />
            </div>

            <div className="input-block">
              <label htmlFor="longitude">Longitude</label>
              <input name="longitude" id="longitude" />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>

      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/47416709?s=460&v=4"
                alt="Gustavo Hiroaki"
              />
              <div className="user-info">
                <strong>Gustavo Hiroaki</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Isso é a biografia</p>

            <a href="https://github.com/gustavohiroaki">
              Acessar perfil do github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/47416709?s=460&v=4"
                alt="Gustavo Hiroaki"
              />
              <div className="user-info">
                <strong>Gustavo Hiroaki</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Isso é a biografia</p>

            <a href="https://github.com/gustavohiroaki">
              Acessar perfil do github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/47416709?s=460&v=4"
                alt="Gustavo Hiroaki"
              />
              <div className="user-info">
                <strong>Gustavo Hiroaki</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Biografia de teste</p>

            <a href="https://github.com/gustavohiroaki">
              Acessar perfil do github
            </a>
          </li>

          <li className="dev-item">
            <header>
              <img
                src="https://avatars2.githubusercontent.com/u/47416709?s=460&v=4"
                alt="Gustavo Hiroaki"
              />
              <div className="user-info">
                <strong>Gustavo Hiroaki</strong>
                <span>ReactJS, React Native, NodeJS</span>
              </div>
            </header>

            <p>Isso é a biografia</p>

            <a href="https://github.com/gustavohiroaki">
              Acessar perfil do github
            </a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
