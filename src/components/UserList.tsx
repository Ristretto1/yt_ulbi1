import React from 'react';
import {useTypedSelector} from '../hooks/useTypeSelector';

export const UserList: React.FC = () => {
    const {users, error, loading} = useTypedSelector(state => state.user)
    return (
        <div>

        </div>
    );
}