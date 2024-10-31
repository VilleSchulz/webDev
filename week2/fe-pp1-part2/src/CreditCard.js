import './credit-card.css';

import visaLogo from './images/visa.png';
import masterCardLogo from './images/master.png';

function CreditCard(props) {
  const logo = props.type === 'Visa' ? visaLogo : masterCardLogo;
  const lastFourDigits = props.number.slice(-4);
  const logoHeight = props.type === 'Visa' ? '80%' : '170%';
  const headerTopMargin = props.type === 'Visa' ? '1.5rem' : '0.7rem';
  const headerBottomMargin = props.type === 'Visa' ? '1rem' : '1.8rem';
  const headerRightMargin = props.type === 'Visa' ? '1.5rem' : '0rem';

  //const headerHeight = props.type === 'Visa' ? '1.8rem' : '3rem';

  return (
    <div
      className="credit-card"
      style={{ backgroundColor: props.bgColor, color: props.color }}
    >
      <div
        className="header"
        style={{
          'margin-top': headerTopMargin,
          'margin-bottom': headerBottomMargin,
          'margin-right':headerRightMargin,
        }}
      >
        <img
          src={logo}
          alt={props.type}
          style={{ height: logoHeight }}
          className="credit-card-logo"
        />
      </div>
      <div className="credit-card-number">•••• •••• •••• {lastFourDigits}</div>
      <div className="credit-card-details">
        <p>
          Expires {props.expirationMonth}/{props.expirationYear}
        </p>
        <p>{props.bank}</p>
      </div>
      <div className="credit-card-owner">{props.owner}</div>
    </div>
  );
}
export default CreditCard;
