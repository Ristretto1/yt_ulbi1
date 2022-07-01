import React, {useEffect} from 'react';
import {useTypedSelector} from '../hooks/useTypeSelector';
import {useDispatch} from 'react-redux';
import {fetchUsers} from '../store/actionCreators/user';
import {Simulate} from 'react-dom/test-utils';

export const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        // @ts-ignore
        dispatch(fetchUsers())
    }, [])

    if (loading) {
        return <h1>Идёт загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }

    return (
        <div>
            {users.map(u =>
                <div key={u.name}>{u.name}</div>)
            }
        </div>
    );
}