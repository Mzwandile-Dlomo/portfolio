import { useState } from 'react';
import styled from 'styled-components';
import avatar from '../../assets/avatar.png';


const Wrapper = styled.div`
  border-radius: 0.375rem; /* Equivalent to rounded-md in Tailwind CSS */
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: hidden;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #0008990;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 12px;
`;

const About = () => {

  const skills = [
    { name: 'C#', strength: 4 },
    { name: 'Java', strength: 4 },
    { name: 'Python', strength: 3 },
    { name: 'JavaScript', strength: 3 },
  ];

  const maxStrength = Math.max(...skills.map((skill) => skill.strength));

  const [isFlipped, setIsFlipped] = useState(false);
  const handleCardClick = () => {
    setIsFlipped((prevState) => !prevState);
  };


  return (
    <Wrapper>
        <div className="bg-black p-4 rounded-md">
            <h1 className="text-white">About</h1>
        </div>
        <MainContainer>
            <div className="card-container mb-16 relative w-64 h-60 flex items-center perspective"
                onClick={handleCardClick}
            >
            <div
                className={`about-card front absolute w-full h-full flex flex-col items-center justify-center bg-gray-600 rounded-lg shadow-md transition-transform transform-gpu ${
                isFlipped ? 'rotate-y-180' : ''
                }`}>
                <img src={avatar} alt='icon'/>
            </div>
            <div
                className={`about-card back absolute w-full h-full flex flex-col items-center justify-center bg-gray-800 rounded-lg shadow-md transition-transform transform-gpu rotate-y-180 ${
                isFlipped ? 'rotate-y-0 opacity-100' : 'opacity-0'
                }`}>
                <div className="bg-gray-800 rounded-lg shadow-md p-4">
                <h2 className="text-2xl font-semibold text-white mb-4">Skills</h2>
                <div className="grid grid-cols-1 gap-4">
                    {skills.map((skill, index) => (
                    <div key={index} className="flex items-center">
                        <span className="text-white font-semibold w-20">{skill.name}</span>
                        <div className="h-4 bg-gray-700 rounded-full flex-grow relative">
                        <div className="h-4 bg-green-500 rounded-full" 
                        style={{ width: `${(skill.strength / maxStrength) * 100}%` }}/>
                        </div>
                        <span className="text-white font-semibold ml-2">{skill.strength}</span>
                    </div>
                    ))}
                </div>
                </div>
            </div>
            </div>
            <Paragraph>
                My passion for software development began with the synergy of math and computer science. Initially intrigued by numbers, I ventured into coding through computer modules. Collaborative projects have deepened my exploration of this dynamic field.
            </Paragraph>
            <Paragraph>
                Beyond the confines of the digital realm, inspiration abounds in arts, numbers, exploration, and sports. From brush strokes to strategic maneuvers, each facet offers a unique lens to fuel my creativity.
            </Paragraph>
        </MainContainer>
    </Wrapper>
  );
};

export default About;