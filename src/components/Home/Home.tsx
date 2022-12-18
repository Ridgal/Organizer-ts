import { Routes, Route } from 'react-router-dom';
import { Sidebar } from "../Sidebar";
import { Overview } from '../../pages/Overview/Overview';
import { Projects } from '../../pages/Projects/Projects';

const Home = () => {
  return (
    <div className="home">
      <section className="home__sidebar">
        <Sidebar />
      </section>
      <div className="border"></div>
      <section className="home__main">
        <Routes>
          <Route path="/" element={<Overview />}/>
          <Route path="/projects" element={<Projects />}/>
        </Routes>
      </section>
    </div>
  );
};

export { Home };
