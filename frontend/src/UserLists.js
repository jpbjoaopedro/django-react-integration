import React from "react";
import ListComponent from "./ListComponent";

export default class UserLists extends React.Component{
    state = { lists: [], loading: false }

    async componentDidMount(){
        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        config.headers['Authorization'] = 'Token 4e942231525d69407c9b5cb801969b50269f59fa'

        var url = 'http://127.0.0.1:8000/list/';
        const response = await fetch(url, config);
        const data = await response.json();
        console.log(data);
        this.setState({lists: data, loading: false})
    }

    render()
    {
        const listsApi = this.state.lists;
        return (
            <div>
                {listsApi.map(list => <ListComponent key={list.id} listName={list.name} items={list.item_set} />)}
            </div>
        );
    };
}