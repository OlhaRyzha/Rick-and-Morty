import { Container, Section } from 'components/App/App.styled';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import CharactersList from 'components/CharactersList/CharactersList';
import { getCharacters } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsloading } from 'redux/selectors';
import FilteredCharacter from 'components/FilteredCharacters/FilteredCharacters';
// import { selectIsLoggedIn } from 'redux/user/selectors';
// import RegisterPage from 'pages/RegisterPage/RegisterPage';

const Home = () => {
  const isLoading = useSelector(getIsloading);
  // const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <Section>
      <Container>
        <FilteredCharacter />
        {isLoading && <Loader />}
        <CharactersList />
      </Container>
    </Section>
  );
};
export default Home;
