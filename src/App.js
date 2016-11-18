import React from 'react';

import { jsonServerRestClient, Admin, Resource } from 'admin-on-rest';
import { Delete } from 'admin-on-rest/lib/mui';

import Dashboard from './Dashboard';

import { PostList, PostEdit, PostCreate } from './posts';
import Products from 'material-ui/svg-icons/action/list';

import { OrderList } from './orders';
import Orders from 'material-ui/svg-icons/action/credit-card';

import { StatisticsList } from './statistics';
import Statistics from 'material-ui/svg-icons/action/trending-up';

const App = () => (
    <Admin title="Admin" dashboard={Dashboard} restClient={jsonServerRestClient('http://localhost:3004')}>
        <Resource name="Products" list={PostList} edit={PostEdit} create={PostCreate} remove={Delete} icon={Products} />
        <Resource name="Orders" list={OrderList} icon={Orders} />
        <Resource name="Statistics" list={StatisticsList} icon={Statistics} />
    </Admin>
);

export default App;
