import React from "react";
import styled from "styled-components";
import { Switch, Route, withRouter } from "react-router-dom";

import Name from "./components/name";
import Jokebox from "./components/jokebox";
import Button from "./components/button";
import { getJoke } from "./dataAccess/jokes";
import FavPage from "./pages/FavPage";

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 600px;
`;

const FavButton = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

function App({ history }) {
  const [joke, setJoke] = React.useState({ value: "joke" });

  const [favJokes, setFavJokes] = React.useState([]);

  React.useEffect(() => {
    const localFavJokes = localStorage.getItem('favJokes');
    if (localFavJokes) {
      setFavJokes(JSON.parse(localFavJokes))
    } else {
      setFavJokes([]);
    }
  }, []);
  React.useEffect(() => {localStorage.setItem('favJokes', JSON.stringify(favJokes))}, [favJokes]);
 

  const newJoke = async () => {
    const res = await getJoke();
    setJoke(res);
  };

  const [interval, setI] = React.useState(null);

  const rollinJokes = () => {
    if (interval) {
      clearInterval(interval);
      setI(null);
    } else {
      setI(setInterval(newJoke, 3000));
    }
  };

  const navigate = () => {
    if (history.location.pathname === "/Rida/build/fav") {
      history.push("/Rida/build/");
      //console.log(history);
    } else {
      history.push("/Rida/build/fav");
    }
  };

  const addFavJoke = (joke) => {
    if (
      favJokes.find((item) => {
        return joke.id === item.id;
      })
    ) {
      deleteFavJoke(joke);
    } else {
      if ([...favJokes, joke].length > 10) {
        setFavJokes([...favJokes, joke].filter((joke, index) => {
          return index > 0;
        }))
      } else {
        setFavJokes([...favJokes, joke]);
      }
    }
    
  };

  const deleteFavJoke = (joke) => {
    setFavJokes(
      favJokes.filter((item) => {
        return joke.id !== item.id;
      })
    );
  };

  const clearAllHandler = () => {
    setFavJokes([]);
  };

  return (
    <Wrapper>
      <Header>
        <Name></Name>
        <FavButton onClick={navigate}>Fav</FavButton>
      </Header>

      <Switch>
        <Route exact path="/Rida/build/">
          <Jokebox joke={joke}></Jokebox>
          <Button onClick={newJoke}>Get joke</Button>
          <Button onClick={rollinJokes}>Let's have dis jokes rolli'n</Button>
          <Button onClick={() => addFavJoke(joke)}>
            {favJokes.find((item) => {
              return joke.id === item.id;
            })
              ? "Delete from fav"
              : "Add to fav"}
          </Button>
        </Route>

        <Route exact path="/Rida/build/fav">
          <FavPage jokes={favJokes} deleteFavJoke={deleteFavJoke} clearAllHandler={clearAllHandler}></FavPage>
        </Route>
      </Switch>
    </Wrapper>
  );
}

export default withRouter(App);
