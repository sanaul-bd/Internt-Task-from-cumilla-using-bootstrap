import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
// import 'react-tabs/style/react-tabs.css';
import './Portfolios.css'
import PortFoliosAll from '../PortFoliosAll/PortFoliosAll';

export default () => (
    <div className='heroTab'>
        <div className='p-name'>
            <h3 className='text-left mt-10'>Portfolios</h3>
        </div>
        <Tabs>
            <TabList>
                <Tab>All</Tab>
                <Tab>Marketing</Tab>
                <Tab>Web</Tab>
                <Tab>Grapich</Tab>
            </TabList>

            <TabPanel>
                <PortFoliosAll></PortFoliosAll>
            </TabPanel>
            <TabPanel>
                <PortFoliosAll></PortFoliosAll>
            </TabPanel>
            <TabPanel>
                <PortFoliosAll></PortFoliosAll>
            </TabPanel>
            <TabPanel>
                <PortFoliosAll></PortFoliosAll>
            </TabPanel>
        </Tabs>
    </div>
)