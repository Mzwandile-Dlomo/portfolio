import styled from 'styled-components';
import avatar from '../../assets/avatar.png';
import '@fontsource/caveat';




const Wrapper = styled.div`
  border-radius: 0.375rem;
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
  padding: 1.8rem;
  color: #9BCF89;
`;

const Paragraph = styled.p`
  font-size: 16px;
  line-height: 1.6;
  color: #D1D8C5;
  padding-left: 32px;
  padding-right: 32px;
  margin-bottom: 12px;
`;

const Emphasis = styled.span`
  font-family: 'Caveat', cursive;
  font-size: 24px;
  font-weight: bold;
  color: black;
  padding-right: 5px;

  &:hover{
    color: #9BCF53;
    // background-color: red;
  }
`;

const CardContainer = styled.div`
  width: 16rem;
  height: 15rem;
  perspective: 1000px;
  margin-bottom: 4rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover .front {
    transform: rotateY(180deg);
  }

  &:hover .back {
    transform: rotateY(0deg);
  }
`;

const AboutCard = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  backface-visibility: hidden;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); 
  transition: transform 0.6s;
`;

const FrontCard = styled(AboutCard)`
  background-color: #4A5568;
  transform: rotateY(0deg);
`;

const BackCard = styled(AboutCard)`
  background-color: #2D3748;
  transform: rotateY(-180deg);
`;

const SkillsContainer = styled.div`
  background-color: #2D3748;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem;
  text-align: center;

  h2 {
    font-size: 1.5rem;
    font-weight: 600;
    color: white;
    margin-bottom: 1rem;
  }

  .skills-list {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .skill {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }

  .skill-bar {
    height: 1rem;
    background-color: #4A5568; 
    border-radius: 0.375rem;
    flex-grow: 1;
    margin: 0 0.5rem;
    position: relative;
  }

  .skill-fill {
    height: 100%;
    background-color: #48BB78;
    border-radius: 0.375rem;
  }
`;

const About = () => {
  const skills = [
    { name: 'C#', strength: 4 },
    { name: 'Java', strength: 4 },
    { name: 'Python', strength: 3 },
    { name: 'JavaScript', strength: 3 },
  ];

  const maxStrength = Math.max(...skills.map((skill) => skill.strength));

  return (
    <Wrapper>
        <div className="bg-black p-4 rounded-md">
            <h1 className="text-white">About</h1>
        </div>
        <MainContainer>
            <CardContainer>
                <FrontCard className="front">
                    <img src={avatar} alt='icon'/>
                </FrontCard>
                <BackCard className="back">
                    <SkillsContainer>
                        <h2>Skills</h2>
                        <div className="skills-list">
                            {skills.map((skill, index) => (
                            <div key={index} className="skill">
                                <span>{skill.name}</span>
                                <div className="skill-bar">
                                <div className="skill-fill" 
                                    style={{ width: `${(skill.strength / maxStrength) * 100}%` }}/>
                                </div>
                                <span>{skill.strength}</span>
                            </div>
                            ))}
                        </div>
                    </SkillsContainer>
                </BackCard>
            </CardContainer>
            <Paragraph>
              The <Emphasis>passion</Emphasis> for software development began with the <Emphasis>synergy of math and computer science</Emphasis>. From solving mathematical problems to writing computer code, the journey has been <Emphasis>intellectually stimulating</Emphasis> and deeply rewarding.
            </Paragraph>
            <Paragraph>
            Beyond the confines of the digital realm, I draw inspiration from various sources: the arts, the beauty of numbers, exploration, and sports. Each activity, whether it's a brush stroke on a canvas or a strategic maneuver on the field, offers a unique perspective that fuels my <Emphasis>creativity and drive</Emphasis>.
            </Paragraph>
        </MainContainer>
    </Wrapper>
  );
};

export default About;
