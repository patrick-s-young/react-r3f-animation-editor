import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function PanelMenu({ panelCount, handlePanelCountChange }) {

  const handleChange = (event, newValue) => {
    handlePanelCountChange(newValue)
  };

  return (
    <Box sx={{ width: '18%', typography: 'body1', boxSizing: 'border-box' }}>
      <TabContext value={panelCount}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Main" value={1} />
            <Tab label="Dual" value={2} />
            <Tab label="Quad" value={4} />
          </TabList>
        </Box>
        {/* <TabPanel value="1">Main</TabPanel>
        <TabPanel value="2">Dual</TabPanel>
        <TabPanel value="4">Quad</TabPanel> */}
      </TabContext>
    </Box>
  );
}