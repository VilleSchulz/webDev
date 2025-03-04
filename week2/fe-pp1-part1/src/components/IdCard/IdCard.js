import "./IdCard.css";

function IdCard(props) {
  return (
    <div className="id-card">
      <img className="profilePicture" src={props.picture} alt="profile" />
      <div className="IdCardInfo">
        <p>
          <strong>First Name: </strong>
          {props.lastName}
        </p>
        <p>
          <strong>Last Name: </strong>
          {props.firsName}
        </p>
        <p>
          <strong> Gender: </strong>
          {props.gender}
        </p>
        <p>
          <strong>Height: </strong>
          {props.height}
        </p>
        <p>
          <strong>Birth: </strong>
          {props.birth.toDateString()}
        </p>
      </div>
    </div>
  );
}
export default IdCard;
