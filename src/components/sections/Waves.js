import React from 'react';
import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  :root {
    --index: calc(1vw + 1vh);
    --transition: cubic-bezier(0.1, 0.7, 0, 1);
  }

  body {
    background-color: #141414;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow-x: hidden;
`;

const ItemsContainer = styled.div`
  display: flex;
  gap: 0.4rem;
  perspective: calc(var(--index) * 35);

  @media (min-width: 1200px) {
    --index: calc(0.5vw + 0.5vh);
    overflow: hidden;
  }
`;

const Item = styled.div`
  width: calc(var(--index) * 3);
  height: calc(var(--index) * 12);
  background-color: #222;
  background-size: cover;
  background-position: center;
  cursor: pointer;
  filter: grayscale(1) brightness(0.5);
  transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
  will-change: transform, filter, rotateY, width;

  &:before,
  &:after {
    content: '';
    position: absolute;
    height: 100%;
    width: 20px;
    right: calc(var(--index) * -1);
  }

  &:after {
    left: calc(var(--index) * -1);
  }

  &:hover {
    filter: none;
    transform: translateZ(calc(var(--index) * 10));
  }

  /* Right */
  &:hover + * {
    filter: none;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
    z-index: -1;
  }

  &:hover + * + * {
    filter: none;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
    z-index: -2;
  }

  &:hover + * + * + * {
    filter: none;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
    z-index: -3;
  }

  &:hover + * + * + * + * {
    filter: none;
    transform: translateZ(calc(var(--index) * 0.6)) rotateY(15deg);
    z-index: -4;
  }

  /* Left */
  &:has(+ *:hover) {
    filter: none;
    transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
  }

  &:has(+ * + *:hover) {
    filter: none;
    transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
  }

  &:has(+ * + * + *:hover) {
    filter: none;
    transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
  }

  &:has(+ * + * + * + *:hover) {
    filter: none;
    transform: translateZ(calc(var(--index) * 0.6)) rotateY(-15deg);
  }

  &:active,
  &:focus {
    width: calc(var(--index) * 15);
    filter: none;
    z-index: 100;
    transform: translateZ(calc(var(--index) * 10));
    margin: 0 auto;
  }
`;

const App = () => {
  const images = [
    'https://e22u.short.gy/KTU286',
    'https://e22u.short.gy/SMBrES',
    'https://e22u.short.gy/f8spJ8',
    'https://e22u.short.gy/SwM7dn',
    'https://e22u.short.gy/8Oipim',
    'https://e22u.short.gy/BWYQgv',
    'https://e22u.short.gy/KzNDfr',
    'https://e22u.short.gy/ne5nuX',
    'https://e22u.short.gy/cwZrVj',
    'https://e22u.short.gy/Xvf2a1',
    'https://e22u.short.gy/pCrIJq',
    'https://e22u.short.gy/mSLCrl',
    'https://e22u.short.gy/EwQcy5',
  ];

  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <ItemsContainer>
          {images.map((image, index) => (
            <Item
              key={index}
              tabIndex="0"
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </ItemsContainer>
      </Wrapper>
    </>
  );
};

export default App;





















// import React from 'react';
// import styled, { createGlobalStyle } from 'styled-components';

// const GlobalStyle = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//   }

//   :root {
//     --index: calc(1vw + 1vh);
//     --transition: cubic-bezier(0.1, 0.7, 0, 1);
//   }

//   body {
//     background-color: #141414;
//   }
// `;

// const Wrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   height: 100vh;
//   overflow-x: hidden;
// `;

// const ItemsContainer = styled.div`
//   display: flex;
//   gap: 0.4rem;
//   perspective: calc(var(--index) * 35);
// `;

// const Item = styled.div`
//   width: calc(var(--index) * 3);
//   height: calc(var(--index) * 12);
//   background-color: #222;
//   background-size: cover;
//   background-position: center;
//   cursor: pointer;
//   filter: grayscale(1) brightness(0.5);
//   transition: transform 1.25s var(--transition), filter 3s var(--transition), width 1.25s var(--transition);
//   will-change: transform, filter, rotateY, width;

//   &:before,
//   &:after {
//     content: '';
//     position: absolute;
//     height: 100%;
//     width: 20px;
//     right: calc(var(--index) * -1);
//   }

//   &:after {
//     left: calc(var(--index) * -1);
//   }

//   &:hover {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 10));
//   }

//   /* Right */
//   &:hover + * {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 8.5)) rotateY(35deg);
//     z-index: -1;
//   }

//   &:hover + * + * {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 5.6)) rotateY(40deg);
//     z-index: -2;
//   }

//   &:hover + * + * + * {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 2.5)) rotateY(30deg);
//     z-index: -3;
//   }

//   &:hover + * + * + * + * {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 0.6)) rotateY(15deg);
//     z-index: -4;
//   }

//   /* Left */
//   &:has(+ *:hover) {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 8.5)) rotateY(-35deg);
//   }

//   &:has(+ * + *:hover) {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 5.6)) rotateY(-40deg);
//   }

//   &:has(+ * + * + *:hover) {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 2.5)) rotateY(-30deg);
//   }

//   &:has(+ * + * + * + *:hover) {
//     filter: none;
//     transform: translateZ(calc(var(--index) * 0.6)) rotateY(-15deg);
//   }

//   &:active,
//   &:focus {
//     width: 28vw;
//     filter: none;
//     z-index: 100;
//     transform: translateZ(calc(var(--index) * 10));
//     margin: 0 0.45vw;
//   }
// `;

// const App = () => {
//   const images = [
//     'https://e22u.short.gy/KTU286',
//     'https://e22u.short.gy/SMBrES',
//     'https://e22u.short.gy/f8spJ8',
//     'https://e22u.short.gy/SwM7dn',
//     'https://e22u.short.gy/8Oipim',
//     'https://e22u.short.gy/BWYQgv',
//     'https://e22u.short.gy/KzNDfr',
//     'https://e22u.short.gy/ne5nuX',
//     'https://e22u.short.gy/cwZrVj',
//     'https://e22u.short.gy/Xvf2a1',
//     'https://e22u.short.gy/pCrIJq',
//     'https://e22u.short.gy/mSLCrl',
//     'https://e22u.short.gy/EwQcy5',
//   ];

//   return (
//     <>
//       <GlobalStyle />
//       <Wrapper>
//         <ItemsContainer>
//           {images.map((image, index) => (
//             <Item
//               key={index}
//               tabIndex="0"
//               style={{ backgroundImage: `url(${image})` }}
//             />
//           ))}
//         </ItemsContainer>
//       </Wrapper>
//     </>
//   );
// };

// export default App;










// // // Import necessary libraries
// // import styled from 'styled-components';

// // // Define styled-components with Tailwind CSS
// // const Wrapper = styled.div`
// //   display: flex;
// //   align-items: center;
// //   justify-comntent: center;
// //   background-color: #141414;
// //   width: 100%
// //   overflow-x: none;
// // `;

// // const Items = styled.div`
// //   display: flex;
// //   perspective: calc(1vw + 1vh) * 35;
// // `;

// // const Item = styled.div`
// //   display: relative;
// //   cursor: pointer;
// //   width: calc((1vw + 1vh) * 3);
// //   height: calc((1vw + 1vh) * 12);
// //   background-color: #222;
// //   background-size: cover;
// //   background-position: center;
// //   filter: grayscale(1) brightness(0.5);
// //   transition: transform 1.25s cubic-bezier(.1, .7, 0, 1), 
// //               filter 3s cubic-bezier(.1, .7, 0, 1), 
// //               width 1.25s cubic-bezier(.1, .7, 0, 1);
// //   will-change: transform, filter, rotateY, width;

// //   &:before, &:after {
// //     content: '';
// //     position: absolute;
// //     height: 100%;
// //     width: 20px;
// //     right: calc((1vw + 1vh) * -1);
// //   }

// //   &:after {
// //     left: calc((1vw + 1vh) * -1);
// //   }

// //   &:hover {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 10));
// //   }

// //   &:hover + * {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 8.5)) rotateY(35deg);
// //     z-index: -1;
// //   }

// //   &:hover + * + * {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 5.6)) rotateY(40deg);
// //     z-index: -2;
// //   }

// //   &:hover + * + * + * {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 2.5)) rotateY(30deg);
// //     z-index: -3;
// //   }

// //   &:hover + * + * + * + * {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 0.6)) rotateY(15deg);
// //     z-index: -4;
// //   }

// //   &:has(+ :hover) {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 8.5)) rotateY(-35deg);
// //   }

// //   &:has(+ * + :hover) {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 5.6)) rotateY(-40deg);
// //   }

// //   &:has(+ * + * + :hover) {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 2.5)) rotateY(-30deg);
// //   }

// //   &:has(+ * + * + * + :hover) {
// //     filter: none;
// //     transform: translateZ(calc((1vw + 1vh) * 0.6)) rotateY(-15deg);
// //   }

// //   &:active, &:focus {
// //     width: 28vw;
// //     filter: none;
// //     z-index: 100;
// //     transform: translateZ(calc((1vw + 1vh) * 10));
// //     margin: 0 0.45vw;
// //   }
// // `;

// // const Waves = () => {
// //   const images = [
// //     "https://e22u.short.gy/KTU286",
// //     "https://e22u.short.gy/SMBrES",
// //     "https://e22u.short.gy/f8spJ8",
// //     "https://e22u.short.gy/SwM7dn",
// //     "https://e22u.short.gy/8Oipim",
// //     "https://e22u.short.gy/BWYQgv",
// //     "https://e22u.short.gy/KzNDfr",
// //     "https://e22u.short.gy/ne5nuX",
// //     "https://e22u.short.gy/cwZrVj",
// //     "https://e22u.short.gy/Xvf2a1",
// //     "https://e22u.short.gy/pCrIJq",
// //     "https://e22u.short.gy/mSLCrl",
// //     "https://e22u.short.gy/EwQcy5"
// //   ];

// //   return (
// //     <Wrapper>
// //       <Items>
// //         {images.map((image, index) => (
// //           <Item key={index} style={{ backgroundImage: `url(${image})` }} tabIndex="0" />
// //         ))}
// //       </Items>
// //     </Wrapper>
// //   );
// // };

// // export default Waves;
