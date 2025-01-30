import ComicCard from "./ComicCard";
import comics from "../Data/comics";

export default function ComicsList() {
  return (
    <section className="comics">
      <div className="row">
        {comics.map((comic) => {
          return (
            <div className="col" key={comic.id}>
              <ComicCard image={comic.thumb} title={comic.title} />
            </div>
          );
        })}
      </div>
    </section>
  );
}
