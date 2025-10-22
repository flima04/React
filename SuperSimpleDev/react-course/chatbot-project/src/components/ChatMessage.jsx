import RobotImg from '../assets/robot.png';
import UserImg from '../assets/user.png'
import './ChatMessage.css'


export function ChatMessage({ message, sender, time }) {

    return (
        <div className={sender === 'robot'
            ? 'robot-message'
            : 'user-message'
        }>
            {sender === 'robot' && (
                <img src={RobotImg} className="message-icon" />
            )}
            <div className="text-message">
                {message}
                <div className='text-message-time'>
                    {time}
                </div>
            </div>
            {sender === 'user' && (
                <img src={UserImg} className="message-icon" />
            )}
        </div>
    )
}