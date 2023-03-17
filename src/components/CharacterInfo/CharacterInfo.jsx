import {
  CharacterWrapper,
  CharacterDescription,
  Poster,
  Image,
  CharacterTitle,
  CharacterScore,
  CharacterDetail,
  Accent,
  AccentTitle,
} from './CharacterInfo.styled';

const CharacterInfo = ({
  name,
  gender,
  status,
  species,
  type,
  img,
  origin,
  id,
}) => {
  return (
    <CharacterWrapper key={id}>
      <Poster>
        <Image src={img} alt="" />
      </Poster>
      <CharacterScore>{name}</CharacterScore>
      <CharacterDescription>
        <CharacterTitle>
          <AccentTitle>Informations</AccentTitle>
        </CharacterTitle>
        {gender !== 'unknown' && (
          <CharacterDetail>
            Gender: <Accent>{gender}</Accent>
          </CharacterDetail>
        )}

        {status !== 'unknown' && (
          <CharacterDetail>
            Status: <Accent>{status}</Accent>
          </CharacterDetail>
        )}
        {species !== 'unknown' && (
          <CharacterDetail>
            Specie: <Accent>{species}</Accent>
          </CharacterDetail>
        )}
        {origin !== 'unknown' && (
          <CharacterDetail>
            Origin: <Accent>{origin}</Accent>
          </CharacterDetail>
        )}
        {type !== '' && (
          <CharacterDetail>
            Type: <Accent>{origin}</Accent>
          </CharacterDetail>
        )}
      </CharacterDescription>
    </CharacterWrapper>
  );
};

export default CharacterInfo;
