import React, {ChangeEvent, useState} from "react";
import {Divider, IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const SearchInput: React.FC = () => {
  let [value, setValue] = useState('')

    const changeSearch = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      setValue(e.currentTarget.value)
    }

    const getMyWeather = () => {
        console.log(value)
    }

  return (
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400, borderRadius: '30px' }}
      >
          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google"
              inputProps={{ 'aria-label': 'search google maps' }}
              value={value}
              onChange={(e) => changeSearch(e)}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton sx={{ p: '10px' }} onClick={getMyWeather}>
              <SearchIcon/>
          </IconButton>
      </Paper>
  )
}