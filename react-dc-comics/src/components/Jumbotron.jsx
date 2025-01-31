import Button from "./Button";

export default function Jumbotron({ src }) {
  return (
    <>
      <div className="jumbomain">
        <img src={src} alt="Jumbotron image" />
        <div className="container">
          <Button text="current series" className="jumbo" />
        </div>
      </div>
    </>
  );
}
