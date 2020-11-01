import React from 'react';
import UserService from '../services/UserService';

class UserComponent extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            users: []
        }
        this.register = this.register.bind(this); 
    }

    componentDidMount() {
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data })
        });
    }

    register(){
        this.props.history.push('/user');
    }

    render() {
        return (
            <div>
                <h1 className="text-center"> Users List</h1>
                <div className="row">
                    <button className="btn-btn-primary" onClick={this.register}>register</button>
                </div>
                <table className="table table-striped">
                    <thead>
                        <tr>

                            {/* <td> Picture</td> */}
                            <td> Name</td>
                            <td> Surname</td>
                            <td> Email</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.users.map(
                                user =>
                                    <tr key={user.id}>
                                        {/* <td> {user.profilePicture}</td>    */}
                                        <td> {user.name}</td>
                                        <td> {user.surname}</td>
                                        <td> {user.email}</td>
                                    </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default UserComponent