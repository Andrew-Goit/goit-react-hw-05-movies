import { Input, SearchBtn, SearchForm } from './SearchPanel.styled';

const SearchPanel = ({ onSubmit }) => {
  

  return (
    <SearchForm onSubmit={onSubmit}>
      <Input
        type="text"
        autoComplete="off"
        autoFocus
        placeholder="Search movies..."
      ></Input>
      <SearchBtn type="submit">
        Search
      </SearchBtn>
    </SearchForm>
  );
};
export default SearchPanel;
