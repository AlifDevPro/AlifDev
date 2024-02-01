import "./skills.css";
import SectionHeading from "../../server-component/section-heading/section-heading";
import Skill from "./skill/skill";
import { programmingSkills, othersSkills } from "./skills-data";

function Skills() {


  return (
    <div className="skills" id='skills'>
      <div className="container">
        <div className="header flex flex-col gap-4 items-center justify-center mb-16">
            <h2 className="text-5xl font-semibold text-white">My Extraordinaire Skills</h2>
            <p className="text-gray-200 font0-medium text-base">Here is list of my top skils and expertise</p>
        </div>
        <div className="programming-skills flex flex-col items-center gap-6">
          <div
            className='skillsWrapper flex flex-wrap gap-4 gap-y-6 justify-center'
            // ref={programmingSkillsRef}
          >
            {programmingSkills.map((skill, index) => (
              <Skill
                key={index}
                index={index}
                name={skill.name}
                percentages={skill.percentage}
                logo={skill.logo}
                // getter={animationProgrammingVisibleGetter}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
