import {
    Description,
    DescriptionSide,
    ProjectBody,
    ProjectName,
    TechStack,
    TechStackItem,
    VideoHolder,
    Video,
  } from "./ProjectElements";
  
//   interface ProjectProps {
//     invertedOrientation: boolean;
//     projectName: string;
//     projectDescription: string;
//     video: string;
//     stackItems: string[];
//   }
  
  const VideoProject = ({invertedOrientation, projectName, projectDescription, video, stackItems}) => {
    const techStackItems = [];
  
    for (const s of stackItems) {
      techStackItems.push(<TechStackItem key={Math.random()}>{s}</TechStackItem>);
    }
  
    if (invertedOrientation === true) {
      return (
        <>
          <ProjectBody>
            <VideoHolder>
              <Video
                src={video}
                muted
                loop={true}
                onMouseEnter={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              ></Video>
            </VideoHolder>
            <DescriptionSide inversed={true}>
              <ProjectName inversed={true}>{projectName}</ProjectName>
              <Description inversed={true}>{projectDescription}</Description>
              <TechStack>{techStackItems}</TechStack>
            </DescriptionSide>
          </ProjectBody>
        </>
      );
    } else {
      return (
        <>
          <ProjectBody>
            <DescriptionSide inversed={false}>
              <ProjectName inversed={false}>{projectName}</ProjectName>
              <Description inversed={false}>{projectDescription}</Description>
              <TechStack>{techStackItems}</TechStack>
            </DescriptionSide>
            <VideoHolder>
              <Video
                src={video}
                muted
                loop={true}
                onMouseEnter={(e) => e.target.play()}
                onMouseOut={(e) => e.target.pause()}
              ></Video>
            </VideoHolder>
          </ProjectBody>
        </>
      );
    }
  };
  
  export default VideoProject;