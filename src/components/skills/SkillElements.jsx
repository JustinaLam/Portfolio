import styled from "styled-components";

export const SkillBubbleGrid = styled.ul`
    // display: flex;
    // flex-direction: column;
    // font-size: 3rem;
    position: relative;
    padding-left: 0;
    list-style: none;
    margin: 0 auto;
    width: 100%;
`

export const SkillBubbleRowWrapper = styled.li`
    // overflow: hidden;
    // background-color: #3e4555;
    // border: 1px solid gray;

    position: relative;
    display: flex;
    
    border-radius: 2px;
    
    padding: 0;
    margin-bottom: 8px;
`

export const SkillBubbleRow = styled.div`
    padding: 0;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`

export const SkillBubble = styled.div`
    display: inline-block;
    justify-content: center;
    // align-items: center;
    // text-align: center;
    // background-color: #39b175;
    
    left: 0;
    width: auto;
    height: auto;
    font-size: 17px;
    
    font-weight: 600;
    color: white;

    border: 2px solid ${({ bubbleColor = '#0be779' }) => bubbleColor};
    color: ${({ bubbleColor = '#0be779' }) => bubbleColor};
    border-radius: 10px;

    padding: 0.5em 0.75em;
    margin: 0 0.1em 0.7em;
`;
