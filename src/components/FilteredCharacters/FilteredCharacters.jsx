import { Input } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getIsloading, getName } from 'redux/selectors';
import { useEffect } from 'react';
import { Loader } from 'components/Loader/Loader';
import {
  getCharacters,
  getfilteredByName,
  getNameByValue,
} from 'redux/operations';
import { debounce } from 'lodash';

function FilteredCharacter() {
  const isLoading = useSelector(getIsloading);
  const name = useSelector(getName);
  const dispatch = useDispatch();
  useEffect(() => {
    const inputEl = document.getElementById('name');
    inputEl.value = name;
    dispatch(getCharacters());
  }, [dispatch, name]);
  return (
    <>
      {isLoading && <Loader />}
      <Input
        id="name"
        placeholder="Filter by name..."
        type="text"
        name="name"
        // value={name}

        onChange={debounce(event => {
          dispatch(getfilteredByName({ name: event.target.value }));
          dispatch(getNameByValue(event.target.value));
        }, 300)}
      />
    </>
  );
}
export default FilteredCharacter;
