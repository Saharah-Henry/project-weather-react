import handleSubmit from "./Weather";
import updateCity from "./Weather";
import Loading from "./Loading";

export default function Search() {
  let form = (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="search " className="search-bar" onChange={updateCity} />
        <button type="Submit" class="btn btn-primary">
          {" "}
          Search
        </button>
        <button type="submit" class="btn btn-success">
          Current
        </button>
      </form>
    </div>
  );
  return form;
}
