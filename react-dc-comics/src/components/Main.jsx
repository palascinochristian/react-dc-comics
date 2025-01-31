import ComicsList from "./ComicsList";
import Jumbotron from "./Jumbotron";
import Button from "./Button";

export default function Main() {
  return (
    <>
      <Jumbotron src="../imgs/jumbotron.jpg" />
      <main>
        <section className="container">
          <ComicsList />
        </section>
      </main>
    </>
  );
}
