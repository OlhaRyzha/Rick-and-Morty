import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from 'components/App/App.styled';
import { useLocation } from 'react-router-dom';
import { Section } from 'components/App/App.styled';
import { Loader } from 'components/Loader/Loader';
import CharacterInfo from 'components/CharacterInfo/CharacterInfo';

import { getCharacterInfoById } from 'services/api';
import Array from 'components/Icons/Array';
import { StyledLink, Wrap } from './СharacterDetails.styled';

const СharacterDetails = () => {
  const { characterId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [info, setInfo] = useState({
    name: '',
    gender: '',
    species: '',
    status: '',
    origin: '',
    type: '',
    image: '',
    id: '',
  });
  const { name, gender, status, species, type, image, origin, id } = info;
  const location = useLocation();
  const goBackLink = location?.state?.from ?? '/';

  useEffect(() => {
    setIsLoading(true);
    getCharacterInfoById(characterId).then(
      ({ name, gender, status, species, type, image, origin, id }) => {
        setInfo({
          name,
          gender,
          status,
          species,
          image,
          origin: origin.name,
          type,
          id,
        });
      }
    );

    setIsLoading(false);
  }, [characterId]);

  return (
    <>
      <Section>
        <Container>
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <Wrap>
                <StyledLink to={goBackLink}>
                  <Array />
                  GO BACK
                </StyledLink>
              </Wrap>
              <CharacterInfo
                name={name}
                img={image}
                gender={gender}
                status={status}
                species={species}
                type={type}
                origin={origin}
                id={id}
              />
            </>
          )}
        </Container>
      </Section>
    </>
  );
};
export default СharacterDetails;
