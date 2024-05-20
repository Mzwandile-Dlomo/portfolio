import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  border-radius: 0.375rem;
`;

const Header = styled.div`
  margin-top: 1rem;
  padding-top: 3rem;
  background-color: #3a5a40;
  padding: 1rem;
  border-radius: 0.375rem;
`;

const Title = styled.h1``;

const SubTitle = styled.h2`
  margin-top: 8rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-align: center;
  color: #31aa45;
  &:hover {
    color: #121b10;
  }
  text-decoration: underline;
`;

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  position: absolute;
  width: 16rem;
  height: 12rem;
  border-radius: 0.75rem;
  transition: all 0.5s ease-out;
  overflow: hidden;
  transform: translate(0, 0) rotate(-8deg);
  left: ${(props) => props.leftOffset};

  background: linear-gradient(to bottom, ${(props) => props.gradientFrom}, ${(props) => props.gradientTo});
`;

const CardDetails = styled.div``;

const CardDetailsHeader = styled.div``;

const CardDetailsButton = styled(Link)``;

const HoverContainer = styled.div`
  position: relative;
`;

const HoverBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1f2937;
  height: 2rem;
  width: 8rem;
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.2);
  }
`;

const HoverText = styled.p`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 0.5rem;
  border-radius: 0.375rem;
  opacity: 0;
  visibility: hidden;
  transition: visibility 0s, opacity 0.3s ease;

  ${HoverBox}:hover & {
    visibility: visible;
    opacity: 1;
  }
`;

const HoverLabel = styled.p`
  text-align: center;
`;

const Projects = () => {
  return (
    <Container>
      <Header>
        <Title>Projects</Title>
      </Header>
      <SubTitle>
        These are some of the projects I've worked on.
      </SubTitle>
      <CardContainer>
        <Card leftOffset="-40px" gradientFrom="green-700" gradientTo="black">
          <CardDetails>
            <CardDetailsHeader>Project 1</CardDetailsHeader>
            <CardDetailsButton to="/project1">Link to Project 1</CardDetailsButton>
          </CardDetails>
        </Card>
        <Card leftOffset="-26px" gradientFrom="green-800" gradientTo="black">
          <CardDetails>
            <CardDetailsHeader>Project 2</CardDetailsHeader>
            <CardDetailsButton to="/project2">Link to Project 2</CardDetailsButton>
          </CardDetails>
        </Card>
        <Card leftOffset="-20px" gradientFrom="yellow-500" gradientTo="black">
          <CardDetails>
            <CardDetailsHeader>Project 3</CardDetailsHeader>
            <CardDetailsButton to="/project3">Link to Project 3</CardDetailsButton>
          </CardDetails>
        </Card>
      </CardContainer>
      <HoverContainer>
        <HoverBox>
          <HoverText>HOVER ON CARD DESCRIPTION</HoverText>
          <HoverLabel>HOVER</HoverLabel>
        </HoverBox>
      </HoverContainer>
    </Container>
  );
};

export default Projects;




// import { Link } from 'react-router-dom';
// import Card from './Card';


// const Projects = () => {
//   return (
//     <div className="rounded-md w-full flex flex-col items-center">
//       <div className="mt-4 pt-12 bg-[#3a5a40] p-4 rounded-md">
//         <h1>Projects</h1>
//       </div>
//       <h2 class="mt-32 font-semibold uppercase tracking-wide text-center text-[#31aa45] hover:text-[#121b10] underline">
//         These are some of the projects I've worked on.
//       </h2>
//       <div className="relative flex-grow flex justify-center items-center">
//         {/* <Card projectName="Project 1" projectUrl="/project1" leftOffset="-40px" gradientFrom="green-700" gradientTo="black" />
//         <Card projectName="Project 2" projectUrl="/project2" leftOffset="-26px" gradientFrom="green-800" gradientTo="black" />
//         <Card projectName="Project 3" projectUrl="/project3" leftOffset="-26px" gradientFrom="yellow-500" gradientTo="black" /> */}

//         <div className="card absolute w-64 h-48 rounded-lg transition-all duration-500 ease-out overflow-hidden transform translate-x-0 translate-y-0 perspective-905 rotate-x-0 rotate-y-0 rotate-z--8 -left-40 bg-gradient-to-b from-green-700 to-black">
//           <div className="cardDetails">
//             <div className="cardDetailsHeader">Project 1</div>
//               <Link to="/project1" className="cardDetailsButton">
//                 Link to Project 1
//               </Link>
//           </div>
//         </div>
//         <div className="card absolute w-64 h-48 rounded-lg transition-all duration-500 ease-out overflow-hidden transform translate-x-0 translate-y-0 perspective-905 rotate-x-0 rotate-y-0 rotate-z--8 -left-26 bg-gradient-to-b from-green-800 to-black">
//           <div className="cardDetails">
//             <div className="cardDetailsHeader">Project 2</div>
//               <Link to="/project2" className="cardDetailsButton">
//                 Link to Project 2
//               </Link>
//           </div>
//         </div>
//         <div className="card absolute w-64 h-48 rounded-lg transition-all duration-500 ease-out overflow-hidden transform translate-x-0 translate-y-0 perspective-905 rotate-x-0 rotate-y-0 rotate-z--8 -left-20 bg-gradient-to-b from-yellow-500 to-black">
//           <div className="cardDetails">
//             <div className="cardDetailsHeader">Project 3</div>
//               <Link to="/project3" className="cardDetailsButton">
//                 Link to Project 3
//               </Link>
//           </div>
//         </div>
//       </div>
//       <div class="relative">
//         <div class="flex justify-center items-center bg-gray-900 h-8 w-32 rounded-md shadow-lg hover:shadow-xl transition duration-300">
//           <p class="text-center bg-black text-white py-2 px-2 rounded-md opacity-0 absolute bottom-0 left-0 right-0 invisible group-hover:visible">
//             HOVER ON CARD DESCRIPTION
//           </p>
//           <p class="text-center">HOVER</p>
//         </div>
//       </div>

//     </div>
//   );
// };

// export default Projects;
