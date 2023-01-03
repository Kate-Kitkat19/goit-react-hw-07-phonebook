import { StyledFilter, StyledLabel } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { updateFilter } from 'redux/filtersSlice';

export const Filter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  console.log('Filter', filter);

  function handleUpdate(evt) {
    const query = evt.target.value;
    console.log(query, 'query in handleUpdate');
    dispatch(updateFilter(query));
  }

  return (
    <StyledLabel>
      Find contact by name
      <StyledFilter
        type="text"
        name="filter"
        onChange={handleUpdate}
      ></StyledFilter>
    </StyledLabel>
  );
};
