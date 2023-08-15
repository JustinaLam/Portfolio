import styled from "styled-components";

export const ProjectBody = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 25rem;
  height: auto;
  margin-bottom: 3em;

  padding-left: 0em;
  padding-right: 0em;

  // @media screen and (max-width: 1000px) {
  //   transform: scale(0.7);
  // }

  // @media screen and (max-width: 768px) {
  //   flex-direction: column;
  //   margin-top: -4em;
  // }

  // @media screen and (max-width: 425px) {
  //   transform: scale(0.5);
  //   margin-top: -8em;
  // }
`;

export const VideoHolder = styled.div`
  border-radius: 10px;

  &:before {
    content: "";
    position: absolute;
    // background: linear-gradient(
    //   0deg,
    //   rgba(34, 193, 195, 1) 0%,
    //   rgba(154, 205, 49, 1) 100%
    // );
    
    // --------------- PLAY BUTTON ---------------

    // background: url("https://github.com/JustinaLam/Portfolio/assets/88551260/fb024d2d-7cce-4a6a-85d4-07ee79b74dd0") no-repeat center;
    // background: url("https://github.com/JustinaLam/Portfolio/assets/88551260/c707d249-7c40-4b5a-85ce-f1b48780d8f3") no-repeat center;
    // background: url("https://github.com/JustinaLam/Portfolio/assets/88551260/e0049ba6-802b-49e9-8163-1ba70d1ad225") no-repeat center;    
    // background: url("https://github.com/JustinaLam/Portfolio/assets/88551260/ae8f7f08-d5d5-4f56-a9e6-a9fbaf4a4415") no-repeat center;
    // background: url("https://github.com/JustinaLam/Portfolio/assets/88551260/11e77f16-e85a-47c8-a6ca-ac0047da152c") no-repeat center;
    
    background: url("https://github.com/JustinaLam/Portfolio/assets/88551260/07902da9-dc92-4af5-8da1-75e08b48d59c") no-repeat center;
        
    background-size: 20%;
    background-color: rgba(150, 150, 150, 0.8);

    // --------------------------------------------
    
    display: inline-block;
    width: 53rem;
    height: 30rem;
    border-radius: 10px;
    mix-blend-mode: screen;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes fade-in {
      from {
        opacity: 0%;
      }

      to {
        opacity: 70%;
      }
    }
  }

  &:hover::before {
    animation-name: fade-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes fade-out {
      from {
        opacity: 70%;
      }

      to {
        opacity: 0%;
      }
    }
  }

  @media screen and (max-width: 768px) {
    width: fit-content;
    opacity: 50%;
  }
`;

export const Video = styled.video`
  width: 53rem;
  height: 30rem;
  object-fit: contain;
  border-radius: 10px;
  padding: 0;
  // min-height: 100%;
  // min-width: 100%;

  &:before {
    content: "";
    position: absolute;
    background: linear-gradient(
      0deg,
      rgba(34, 193, 195, 1) 0%,
      rgba(154, 205, 49, 1) 100%
    );
    width: 35rem;
    height: 20rem;
    border-radius: 10px;
    mix-blend-mode: screen;
    display: inline-block;
    animation-name: fade-in;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    box-sizing: inherit;

    @keyframes fade-in {
      from {
        opacity: 0%;
      }

      to {
        opacity: 80%;
      }
    }
  }

  &:hover::before {
    animation-name: fade-out;
    animation-duration: 1s;
    animation-fill-mode: forwards;

    @keyframes fade-out {
      from {
        opacity: 80%;
      }

      to {
        opacity: 0%;
      }
    }
  }
`;

export const DescriptionSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  // ${inversed => inversed ? inversed === false && "flex-start" : "flex-end"};
  ${({ inversed }) =>
    inversed === false &&
    `
    align-items: flex-start;
    `
  };

  justify-content: center;
  width: 25em;
  height: 20em;
  z-index: 20;

  ${({ isGallery }) =>
    isGallery === true && (
        `
        margin: 0 1.5em 0 1.5em;
        `
    )
  };

  @media screen and (max-width: 768px) {
    position: absolute;
    align-items: flex-start;
  }
`;

export const ProjectName = styled.h1`
  color: white;
  // background-color: #0be779;
  padding-bottom: 0.5em;
  padding-right: 0em;
  padding-left: 0;

  border-top: 3px solid #0be779;
  padding-top: 0.5em;
  

  ${({ inversed }) =>
    inversed === false &&
    `
    padding-left: 0em;
    padding-right: 0;
    `
  };
`;

export const Description = styled.p`
  background-color: #333333;
  padding: 1.5em 1.5em 1.5em 1.5em;
  width: 26rem;
  border-radius: 30px;
  color: white;

  font-size: 0.9em;

  ${({ inversed }) =>
    inversed === false &&
    `
    border-left: 3px solid #0be779;
    border-right: 0;
    `
  };

  ${({ inversed }) =>
    inversed === true &&
    `
    border-left: 0;
    border-right: 3px solid #0be779;
    `
  };
  
  ${({ isGallery }) =>
    isGallery === true &&
    `
    width: 23rem;
    `
  };
`;

export const TechStack = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  // padding-top: 1em;
`;

export const TechStackItem = styled.div`
  color: gray;
  padding-right: 0.5em;
  padding-top: 0.5em;
  padding-left: 0.5em;
  font-size: 0.8em;

  @media screen and (max-width: 768px) {
    padding: 0;
    padding-left: 1.2em;
    font-weight: bold;
  }
`;
