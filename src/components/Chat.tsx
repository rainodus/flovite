import styled from "styled-components"

import Input from "./Input"
import ChatMessage from "./ChatMessage"

const Wrapper = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    max-width: 400px;
    min-width: 400px;
    height: 650px;
    padding-top: 5px;
    padding-bottom: 5px;
    background-color: #222222;
    @media screen and (max-width: 1700px) {
        min-width: 100%;
    }
`

const ChatTitle = styled.span`
    display: flex;
    justify-content: center;
    font-size: 20px;
    font-weight: 700;
    color: white;
`

const MessagesBox = styled.div`
    display: flex;
    gap: 10px;
    flex-direction: column;
    height: 100%;
    padding-left: 10px;
    padding-right: 10px;
    overflow-y: auto;
`

function Chat() {
    return (
        <Wrapper>
            <ChatTitle>CHAT</ChatTitle>
            <MessagesBox className="no-scrollbar">
                <ChatMessage username="myst" content="hello" />
            </MessagesBox>
            <Input placeholder="Type your message" style={{ marginLeft: '10px', marginRight: '10px' }} />
        </Wrapper>
    )
}

export default Chat