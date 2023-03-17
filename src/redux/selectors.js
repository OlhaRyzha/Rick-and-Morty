import { createSelector } from '@reduxjs/toolkit';

export const getCharacters = state => state.charactersData.characters;

export const getFilter = state => state.charactersData.value;

export const getFilteredCharacters = createSelector(
  [getCharacters, getFilter],

  (characters, filter) => {
    return filter?.length !== 0 ? filter : characters;
  }
);
export const getIsloading = state => state.charactersData.isLoading;
export const getPages = state => state.charactersData.pages;
export const getCount = state => state.charactersData.count;
export const getPage = state => state.charactersData.page;
export const getName = state => state.charactersData.name;
