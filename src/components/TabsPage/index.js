import React, {useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import TabPanel from "../TabPanel";
import Profile from "../Profile";
import Logs from "../Logs";
import Settings from "../Settings";
import Repos from "../Repos";
import { Redirect } from "react-router-dom";
import { connect } from 'react-redux';

const a11yProps = (index) => {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

const TabsMenu = (props) => {
    const [activeTab, setActiveTab] = useState(0);

    const classes = useStyles();

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };
    // if (!props.auth.isLoggedIn) {
    //     return <Redirect to='/login' />;
    // }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs value={activeTab} onChange={handleTabChange} aria-label="simple tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Repos" {...a11yProps(1)} />
                    <Tab label="Activity Log" {...a11yProps(2)} />
                    <Tab label="Settings" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <TabPanel value={activeTab} index={0}>
                <Profile />
            </TabPanel>
            <TabPanel value={activeTab} index={1}>
                <Repos />
            </TabPanel>
            <TabPanel value={activeTab} index={2}>
                <Logs />
            </TabPanel>
            <TabPanel value={activeTab} index={3}>
                <Settings />
            </TabPanel>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { auth: state.auth }
}
export default connect(mapStateToProps)(TabsMenu);