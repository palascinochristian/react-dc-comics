export default function Button(button) {
  return <button className={`btn ${button.className}`}>{button.text}</button>;
}
