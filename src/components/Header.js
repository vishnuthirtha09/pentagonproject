import React, { useState } from 'react';
import { AppBar, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Header = () => {
  const [value, setValue] = useState();

  return (
    <div>
      <AppBar sx={{ backgroundColor: '#9999ff', height: 60 }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
            <Typography variant="h6">
              Book Store
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: 'auto' }}
            textColor="black"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab style={{ color: 'inherit', minWidth: 120 }} component={NavLink} to="/add" label="Add Product" />
            <Tab style={{ color: 'inherit', minWidth: 120 }} component={NavLink} to="/books" label="Books" />
            <Tab style={{ color: 'inherit', minWidth: 120 }} component={NavLink} to="/about" label="About Us" />
            <Tab style={{ color: 'inherit', minWidth: 120 }} component={NavLink} to="/contact" label="Contact us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;