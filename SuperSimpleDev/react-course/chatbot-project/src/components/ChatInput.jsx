import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import dayjs from 'dayjs';
import LoadingSpinner from '../assets/loading-spinner.gif'
import './ChatInput.css';

export function ChatInput({ chatMessages, setChatMessages }) {
    const [inputText, setInputText] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    function saveInputText(event) {
        setInputText(event.target.value);
    }

    async function sendMessage() {
        const time = dayjs().valueOf();

        if (isLoading || inputText.trim() === '') {
            return;
        }

        setIsLoading(true);

        const newChatMessages = [
            ...chatMessages,
            {
                message: inputText.trim(),
                sender: 'user',
                time: dayjs(time).format('HH:mm'),
                id: crypto.randomUUID()
            }
        ];

        setInputText('');

        setChatMessages(newChatMessages);

        setChatMessages([
            ...newChatMessages,
            {
                message: <img src={LoadingSpinner} alt="loading" className="loading-spinner" />,
                sender: 'robot',
                id: crypto.randomUUID()
            }
        ]);

        const response = await Chatbot.getResponseAsync(inputText);
        setChatMessages([
            ...newChatMessages,
            {
                message: response,
                sender: 'robot',
                time: dayjs(time).format('HH:mm'),
                id: crypto.randomUUID()
            }
        ]);

        setIsLoading(false);

    }

    function checkKey(event) {
        if (event.key == 'Enter') {
            sendMessage()
        }
        if (event.key == 'Escape') {
            setInputText('');
        }
    }

    return (
        <div className="chat-input-container">
            <input
                placeholder="Send a message to ChatBot"
                size="50"
                onChange={saveInputText}
                onKeyDown={checkKey}
                value={inputText}
                className="chat-input"
            />
            <button
                onClick={sendMessage}
                className="send-button"
            >Send</button>
        </div>
    );
}

