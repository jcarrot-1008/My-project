import React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const SelectBox = (props) => {

  const handleChange = (event) => {
    if(event.target.value === '선택') {
      return null
    }
    setQuantity(event.target.value);
  };

  const { valueOption, quantity, setQuantity } = props;
  const valueList = valueOption?.map((item) => {
              return <MenuItem value={item}>{item}</MenuItem>
            }) ?? <MenuItem value={10}>선택</MenuItem>
  return (
    <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '20px 180px' }}>
    <Box sx={{ minWidth: 120, maxWidth: 250}}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">조회수량</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={quantity}
          label="조회수량"
          onChange={handleChange}
        >
          {valueList}
        </Select>
      </FormControl>
    </Box>
    </div>
  );
}

export default SelectBox
