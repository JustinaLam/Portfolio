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
import Gallery from "./Gallery"
  
  const GalleryProject = ({invertedOrientation, projectName, projectDescription, galleryImagesInfo, stackItems}) => {
    const techStackItems = [];
  
    for (const s of stackItems) {
      techStackItems.push(<TechStackItem key={Math.random()}>{s}</TechStackItem>);
    }
  
    if (invertedOrientation === true) {
      return (
        <>
          <ProjectBody>
            {/* <VideoHolder> */}
              <Gallery imagesInfo={galleryImagesInfo}/>
            {/* </VideoHolder> */}
            <DescriptionSide inversed={true} isGallery={true}>
              <ProjectName inversed={true}>{projectName}</ProjectName>
              <Description inversed={true} isGallery={true}>{projectDescription}</Description>
              <TechStack>{techStackItems}</TechStack>
            </DescriptionSide>
          </ProjectBody>
        </>
      );
    } else {
      return (
        <>
          <ProjectBody>
            <DescriptionSide inversed={false} isGallery={true}>
              <ProjectName inversed={false}>{projectName}</ProjectName>
              <Description inversed={false} isGallery={true}>{projectDescription} </Description>
              <TechStack>{techStackItems}</TechStack>
            </DescriptionSide>
            {/* <VideoHolder> */}
            <Gallery imagesInfo={galleryImagesInfo}/>
            {/* </VideoHolder> */}
          </ProjectBody>
        </>
      );
    }
  };
  
  export default GalleryProject;