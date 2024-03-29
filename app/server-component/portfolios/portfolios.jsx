import "./portfolios.css";
import SectionHeading from "../section-heading/section-heading";
import Portfolio from "./portfolio/portfolio";
import { portfolioData } from "./portfolios-data";

function Portfolios() {
  return (
    <div className="portfolios" id="projects">
      <div className="container flex flex-col items-center justify-center">
        <div className="headerss flex flex-col gap-4 justify-center py-16 max-w-4xl items-center text-center">
          <h2 className="text-5xl font-semibold text-slate-900">
            A Symphony of Design and Code
          </h2>
          <p className="text-gray-500 font-medium text-base">
            Unveiling the artistry of code and design, I blend innovation with
            aesthetics to create immersive digital landscapes. Explore my
            portfolio and witness the seamless fusion of creativity and
            functionality.
          </p>
        </div>
        <div className="filter font-base flex items-center gap-4 mb-6">
          <span className="bg-slate-300 py-2 px-4 rounded-2xl hover:bg-slate-100 border hover:cursor-pointer hover:border active:scale-95  transition">All</span>
          <span className="bg-slate-200 py-2 px-4 rounded-2xl hover:bg-slate-100 border hover:cursor-pointer hover:border active:scale-95  transition">Ecomerce</span>
          <span className="bg-slate-200 py-2 px-4 rounded-2xl hover:bg-slate-100 border hover:cursor-pointer hover:border active:scale-95  transition">Realt State</span>
          <span className="bg-slate-200 py-2 px-4 rounded-2xl hover:bg-slate-100 border hover:cursor-pointer hover:border active:scale-95  transition">Business</span>
          <span className="bg-slate-200 py-2 px-4 rounded-2xl hover:bg-slate-100 border hover:cursor-pointer hover:border active:scale-95  transition">Dashboard</span>
        </div>
        <div className="portfoliosWrapper">
          {portfolioData.map((data, index) => {
            return (
              <Portfolio
                key={index}
                thumbnail={data.thumbnail}
                type={data.type}
                desc={data.desc}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Portfolios;
