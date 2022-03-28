import React from 'react'
import { FC } from 'react'
import { IUser } from '../types'

type UserItemProps = {
    user: IUser
}

const UserItem: FC<UserItemProps> = ({ user }) => {
    return (
        <div style={{ padding: '1rem', border: '1px solid lightgray' }} >
            {user.id}. {user.name} lives at {user.address.city}
        </div>

    )
}

export default UserItem