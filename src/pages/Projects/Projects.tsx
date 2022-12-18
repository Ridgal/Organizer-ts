import { Card } from "./Card/Card";
import { Search, QuestionCircle, ArrowDownCircle } from "react-bootstrap-icons";
import { Todolist } from "./Todolist/Todolist";

const Projects:React.FC = () => {
  return (
    <section className="projects">
      <div className="projects__header">
        <div className="projects__search">
          <label htmlFor="search">
            <Search className="projects__search__icon"/>
          </label>
          <input
            id="search"
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="projects__header__tooltip">
          <QuestionCircle className="projects__header__tooltip__icon"/>
        </div>
      </div>
      <div className="projects__body">
        <div className="projects__body__head">
          <p>Projects</p>
          <div className="projects__body__head__sort">
            This week
            <ArrowDownCircle  className="projects__body__head__sort__icon"/>
          </div>
        </div>
        <Card />
        <Todolist />
      </div>
    </section>
  );
};

export { Projects };
