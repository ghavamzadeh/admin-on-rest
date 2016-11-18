import React from 'react';
import { List, Edit, Create, Datagrid, TextField, EditButton, DisabledInput,  Filter, TextInput } from 'admin-on-rest/lib/mui';

const PostFilter = (props) => (
    <Filter {...props}>
        <TextInput label="Search" source="q" alwaysOn />
    </Filter>
);

export const PostList = (props) => (
    <List title="All products" {...props} filter={PostFilter}>
        <Datagrid>
            <TextField source="id" />
            <TextField source="name" />
            <TextField source="description" />
            <TextField source="price.value" label="Price" />
            <TextField source="vatpercentage" label="VAT" />
            <EditButton />
        </Datagrid>
    </List>
);

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.name}"` : ''}</span>;
};

export const PostEdit = (props) => (
    <Edit title={PostTitle} {...props}>
        <DisabledInput source="id" />
        <TextInput source="name" />
        <TextInput source="description" />
        <TextInput source="price.value" label="Value" />
        <TextInput source="vatpercentage" label="VAT" />
    </Edit>
);

export const PostCreate = (props) => (
    <Create {...props}>
      <TextInput source="name" />
      <TextInput source="description" />
      <TextInput source="price.value" label="Value" />
      <TextInput source="vatpercentage" label="VAT" />
    </Create>
);
