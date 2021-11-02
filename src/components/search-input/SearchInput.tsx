import React from "react";
import {Divider, IconButton, InputBase, Paper} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


export const SearchInput: React.FC = () => {
  return (
      <Paper
          component="form"
          sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
      >
          <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Google"
              inputProps={{ 'aria-label': 'search google maps' }}
          />
          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
              <SearchIcon />
          </IconButton>
      </Paper>
  )
}