import Section from '../section/Section'
import VideoProject from "../Project/VideoProject";
import { WorkBody, WorkContainer } from "./WorkElements";
// import { StyledHeading } from "../About/AboutElements";
import SpotifyRec from "../../videodemos/SpotifyRecommenderDemo.mov";
import PennCourseCart from "../../videodemos/PennCourseCartDemo.mov";
import { Fade } from 'react-reveal'
import ImageGallery from 'react-image-gallery';
import GalleryProject from "../Project/GalleryProject";
import Gallery from "../Project/Gallery";

import PennBookLogin from "../../images/projectImages/PennBook/PennBook_1_Login.png";
import PennBookHome from "../../images/projectImages/PennBook/PennBook_2_Home.png";
import PennBookChatsLeft from "../../images/projectImages/PennBook/PennBook_3_Chat_Messages_Left.png";
import PennBookChatsRight from "../../images/projectImages/PennBook/PennBook_3_Chat_Messages_Right.png";
import PennBookInviteToChat from "../../images/projectImages/PennBook/PennBook_4_Chat_InviteFriendToChat.png";
import PennBookInviteAll from "../../images/projectImages/PennBook/PennBook_5_Chat_InviteFriendAll.png";

import XylemWebApp from "../../images/projectImages/Xylem/Xylem_1_OurWebApplication.png";
import XylemCalendarBars from "../../images/projectImages/Xylem/Xylem_2_RNN_Flooding_Prediction_CalendarBarChart_DataVisualization.jpg";
import XylemModelEvalGraph from "../../images/projectImages/Xylem/Xylem_3_OurWebApplicationModelEvaluationGraph.png";
import XylemPredictions from "../../images/projectImages/Xylem/Xylem_4_RNN_Flooding_Prediction_Predictions.jpg";

const Work = () => {
  const spotifyRecTechnologies = [
    "Scikit-Learn",
    "Python",
    "Django",
    "Pandas",
    "Numpy",
    "Spotipy",
  ];

  const pennCourseCartTechnologies = [
    "TypeScript",
    "ReactJS",
    "NodeJS",
  ];

  const pennBookTechnologies = [
    "AWS DynamoDB",
    "JavaScript",
    "ReactJS",
    "NodeJS",
    "Express",
    "React Router",
  ];

  const xylemTechnologies = [
    "Tensorflow",
    "Keras",
    "Python",
    "Flask",
    "Scikit-Learn",
    "Pandas",
    "Numpy",
    "Matplotlib",
  ];

  const PennBookImages = [
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/08544f6e-2cf7-41f1-b826-af2dc34ea46e',
      img: PennBookLogin,
      alt: 'Image: PennBook Login'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/96870bb6-71b7-4b12-a6de-4b997d7f0e31',
      img: PennBookHome,
      alt: 'Image: PennBook Home'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/87509848-4394-4ee2-a872-5631703d61a4',
      img: PennBookChatsLeft,
      alt: 'Image: Chat Messages - Left Side Perspective'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/e6c214c7-cc24-4da1-9d69-e5f708bc0bad',
      img: PennBookChatsRight,
      alt: 'Image: Chat Messages - Right Side Perspective'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/f2eddc6f-a10c-4176-ad11-39134c3cb112',
      img: PennBookInviteToChat,
      alt: 'Image: Invite Friend to Chat'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/fb332b9f-805d-48b7-aab4-1483e3c64536',
      img: PennBookInviteAll,
      alt: 'Image: All Friends Invited to Chat'
    }
  ];

  const XylemImages = [
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/cb0fcbb9-f4ca-4ab3-ad83-d63f376af6e4',
      img: XylemWebApp,
      alt: 'Image: RNN Flooding Predictions - Web Application'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/2acf6178-56f7-4ed1-a88b-de801dd63b66',
      img: XylemCalendarBars,
      alt: 'Image: RNN Predictions Calendar Bar Chart Display'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/283c7939-bafc-42a2-a302-48a658727dc8',
      img: XylemModelEvalGraph,
      alt: 'Image: Model Evaluation Graph'
    },
    {
      // img: 'https://github.com/JustinaLam/Portfolio/assets/88551260/39335615-543a-4f6f-a0c4-2af4764f4b53',
      img: XylemPredictions,
      alt: 'Image: RNN Predictions Graph'
    }
  ];


  return (
    <>
    <Section title="Projects">
      <WorkBody id="work">
        {/* <WorkContainer style={{ alignSelf: "flex-start" }}>
          <StyledHeading>Some things I've Built</StyledHeading>
        </WorkContainer> */}
        <div style={{ height: 40 }}></div>
        <VideoProject
          invertedOrientation={false}
          projectName="Spotify Recommender"
          // projectDescription="A fully functional Discord clone implemented in Java with the help of the JavaFX library. 
          // The application implements the Client-Server model and is using MySQL as a database. 
          // The user can create an account or log in if an account already exists, add other users as friends, create groups, 
          // invite users to the group, add categories and channels to the groups, send personal and group messages, 
          // change personal and group profile photos, block users, change his activity status and see friends activity status."
          projectDescription="
          A full-stack web application accessing the Spotify API to display a list of recommended tracks,
          generated based on cosine similarity to a feature vector constructed from the user-inputted Spotify playlist. 
          Users enter a link to their playlist and receive a list of recommended songs, with links to each."
          video={SpotifyRec}
          stackItems={spotifyRecTechnologies}
        ></VideoProject>
        <VideoProject
          invertedOrientation={true}
          projectName="Penn Course Cart"
          // projectDescription="
          // Algorithm visualization illustrates how algorithms work in a graphical way. 
          // It aims to simplify and deepen the understanding of the algorithm's operation. 
          // Currently, two algorithms are implemented: Breadth-First Search and A-Star. 
          // The application allows the user to draw 'walls', set starting and ending points, and reset the board."
          projectDescription="A dynamic, interactive web application where students can filter and search for courses by name, 
          course code, description, and more. Students can add to and remove from their course cart, use the 
          Drag-and-Drop feature to reorder their course selection, and 'check out' their cart at the end of the session."
          video={PennCourseCart}
          stackItems={pennCourseCartTechnologies}
        ></VideoProject>
        <GalleryProject
          invertedOrientation={false}
          projectName="Penn Book"
          // projectDescription="The Windows XP version of the Minesweeper implemented in PyGame. 
          // The mines are randomly placed and then the whole board is filled with unflipped blocks. 
          // The user can reset the board at any time by pressing the emoji button."
          projectDescription="A social media platform designed as a cloud-based web application modeled after FaceBook. 
          Built with ReactJS, NodeJS, and AWS DynamoDB. 
          Users can add friends and invite them to chat, create and delete group chats, 
          send and receive messages with dynamic updates, create posts, and view suggested news articles.
          User, chat, and message information is stored in DynamoDB tables, accessed and updated by API requests."
          galleryImagesInfo={PennBookImages}
          stackItems={pennBookTechnologies}
        ></GalleryProject>
        <GalleryProject
          invertedOrientation={true}
          projectName="RNN Flooding Predictor"
          // projectDescription="The Windows XP version of the Minesweeper implemented in PyGame. 
          // The mines are randomly placed and then the whole board is filled with unflipped blocks. 
          // The user can reset the board at any time by pressing the emoji button."
          projectDescription="An RNN model to predict urban flooding, trained on pre-processed time series data from the USGS federal database.
          Dynamic visualization of data and predictions through a full-stack interactive web application, built with Flask.
          Users can view predicted water levels of their local body of water for a given time range, displayed on a calendar bar chart."
          galleryImagesInfo={XylemImages}
          stackItems={xylemTechnologies}
        ></GalleryProject>
        
        {/* <h1 style={{ color: "white", paddingBottom: "1.2em" }}>
          See more at my&nbsp;
          <a
            style={{ color: "white", alignSelf: "center" }}
            href="https://github.com/JustinaLam"
          >
            Github
          </a>
        </h1> */}
        <Fade bottom duration={1200} distance="20px">
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',

              marginTop: '-3em',
              marginBottom: '3em',
            }}
          >
            <p style={{ textAlign: 'center' }}>
              See more on my{' '}
              <a
                href="https://github.com/JustinaLam"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  textDecoration: 'none',
                  color: '#0be779',
                  cursor: 'pointer',
                }}
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </Fade>
      </WorkBody>
    </Section>
    </>
  );
};

export default Work;