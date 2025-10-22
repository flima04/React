import './WelcomeMessage.css';

export function WelcomeMessage({ className }) {

  return (
    <p className={className}>
      Welcome to the ChatBot project! send a message using the textbox bellow
    </p>
  )
}