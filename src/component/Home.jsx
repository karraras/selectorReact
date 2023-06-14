import { useGlobalContext } from "./Context";
import NewCountr from "./NewCountr";
import NewSt from "./newStat";
import NewCit from "./newCit";

function Home() {
  const { country, newState, newCity } = useGlobalContext();
  return (
    <section className="h-screen bg-emerald-500 flex items-center ">
      <div className="min-h-[300px] px-[40px] w-full ">
        <h1 className="text-xl font-semibold mb-[20px]">
          Country,State and City Selectors
        </h1>
        <div className="p-[30px] bg-emerald-600 rounded  h-[120px] grid grid-cols-3">
          <NewCountr name="Country" newCo={country} />
          <NewSt name="Country" newSt={newState} />
          <NewCit name="Country" newCi={newCity} />
        </div>
      </div>
    </section>
  );
}

export default Home;
