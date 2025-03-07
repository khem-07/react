import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";
import SearchResult from "./components/SearchResult";

export const BASE_URL = "http://localhost:9000";

const App = () => {
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedBtn, setSelectedBtn] = useState("all");

  useEffect(() => {
    const fetchFoodData = async () => {
      setLoading(false);
      try {
        const response = await fetch(BASE_URL);
        const json = await response.json();

        setData(json);
        setFilteredData(json);
        setLoading(false);
      } catch (error) {
        setError("Unable to Fetch Data");
      }
    };
    fetchFoodData();
  }, []);
  // fetchFoodData(); this call is making infinite loop so
  // to resolve this useEffect hook has used
  // with useState Effect only one time data is fetched from api

  const searchFood = (e) => {
    const searchValue = e.target.value;

    console.log(searchValue);

    if (searchValue === "") {
      setFilteredData(null);
    }
    const filter = data?.filter((food) =>
      food.name.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredData(filter);
  };

  const filterFood = (type) => {
    if (type === "all") {
      setFilteredData(data);
      setSelectedBtn("all");
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );
    setFilteredData(filter);
    setSelectedBtn(type);
  };

  const filterBtns = [
    {
      name: "All",
      type: "all",
    },
    {
      name: "Breakfast",
      type: "breakfast",
    },
    {
      name: "Lunch",
      type: "luch",
    },
    {
      name: "Dinner",
      type: "dinner",
    },
  ];

  if (error) return <div>{error}</div>;
  if (loading) return <div>{loading}</div>;

  return (
    <>
      <Container>
        <TopContainer>
          <div className="logo">
            <img src="/images/logo.png" alt="logo" />
          </div>
          <div className="search">
            <input onChange={searchFood} placeholder="Search Food" />
          </div>
        </TopContainer>

        <FilterContainer>
          {filterBtns.map((value) => (
            <Button
              key={value.name}
              onClick={() => filterFood(value.type)}
            > {value.name}</Button>
          ))}

          {/* <Button onClick= {() => filterFood("all")}>All</Button>
          <Button onClick= {() => filterFood("breakfast")}>Breakfast</Button>
          <Button onClick= {() => filterFood("lunch")}>Lunch</Button>
          <Button onClick= {() => filterFood("dinner")}>Dinner</Button> */}
        </FilterContainer>
      </Container>
      <SearchResult data={filteredData} />
    </>
  );
};

export default App;
export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;
const TopContainer = styled.div`
  height: 140px;
  display: flex;
  justify-content: space-around;
  padding: 16px;
  align-items: center;

  .search {
    input {
      background-color: transparent;
      border: 1px solid #ff0000;
      color: white;
      border-radius: 5px;
      height: 40px;
      font-size: 16px;
      padding: 4px;
      font-family: cursive;
    }
  }

  @media (0 < width < 600px) {
    flex-direction: column;
    height: 120px;
  }
`;

const FilterContainer = styled.section`
  display: flex;
  justify-content: center;
  gap: 12px;
  padding-bottom: 40px;
`;

export const Button = styled.button`
  background: #ff0000;
  border-radius: 5px;
  padding: 6px 12px;
  font-family: cursive;
  border: none;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: black;
  }
`;
