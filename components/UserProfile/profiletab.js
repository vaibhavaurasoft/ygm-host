import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UpdateDetails from '../UpdateDetails';
import ChangePassword from '../ChangePassword';
import History from '../History';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function ProfileTabs() {
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className='container mt-3'>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: 324 }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    {/* <Tab label="My Profile" {...a11yProps(0)} />
                    <Tab label="Uploaded Documents" {...a11yProps(1)} /> */}
                    <Tab label="History" {...a11yProps(0)} />
                    <Tab label="Change Password" {...a11yProps(1)} />
                    <Tab label="Update Details" {...a11yProps(2)} />
                </Tabs>
                <TabPanel className="TabPanel" value={value} index={0}>
                    <History />
                </TabPanel>
                <TabPanel className="TabPanel password" value={value} index={1}>
                    <ChangePassword />
                </TabPanel>
                <TabPanel className="TabPanel details" value={value} index={2}>
                    <UpdateDetails />
                </TabPanel>
            </Box>
        </div>

    );
}