//import { DebounceInput } from 'react-debounce-input';

import { Form, InputSearch } from './SearchForm.styled';

export const SearchForm = ({ value, onChange }) => {
  const handleSubmit = e => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h2>Movie Search</h2>
      <InputSearch
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
        placeholder="type here"
      />
      {/* <Icon /> */}
    </Form>
  );
};
