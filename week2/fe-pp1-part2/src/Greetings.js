import './Greeting.css';

function Greetings({lang, children}) {
    let greeting;

    switch(lang) {
        case 'fi':
            greeting = 'Hei';
            break;
        case 'de':
            greeting = 'Hallo';
            break;
        case 'en':
            greeting = 'Hello';
            break;
        case 'es':
            greeting = 'Hola';
            break;
        case 'fr':
            greeting = 'Bonjour';
            break;
        default:
            greeting = 'Hello'
    }

    return (
        <div className="greeting">
            {greeting} {children}
        </div>
    );
}

export default Greetings;