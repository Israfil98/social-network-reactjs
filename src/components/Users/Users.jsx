import React from 'react';
import axios from 'axios';

import s from './Users.module.css';

import userPhoto from '../../assets/img/user.png';

class Users extends React.Component {
    componentDidMount() {
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ this.props.currentPage }&count=${ this.props.pageSize }`)
            .then((response) => {
                this.props.setUsers(response.data.items)
                this.props.setTotalUsersCount(response.data.totalCount)
            })
    }

    onPageChangeHandler = (page) => {
        this.props.setCurrentPage(page)
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?page=${ page }&count=${ this.props.pageSize }`)
            .then((response) => {
                this.props.setUsers(response.data.items)
            })
    }

    render() {
        const users = this.props.usersData.map((user) => {
            return (
                <div className={ s.users }>
                    <div key={ user.id } className={ s.userItem }>
                        <div className={ s.userAbout }>
                            <img className={ s.userPhoto }
                                 src={ user.photos.small != null ? user.photos.small : userPhoto }
                                 alt=''
                            />
                            <div className={ s.description }>
                                <h1 className={ s.userName }>{ user.name }</h1>
                                <div className={ s.status }>{ user.status }</div>
                                <div className={ s.location }>
                                    <span>user.location.city</span>
                                    <span>user.location.country</span>
                                </div>
                            </div>
                        </div>
                        <div>
                            {
                                user.isFollowed ?
                                    <button className={ s.btn } onClick={ () => {
                                        this.props.unfollow(user.id)
                                    } }>Unfollow</button>
                                    : <button className={ s.btn } onClick={ () => {
                                        this.props.follow(user.id)
                                    } }>Follow</button>
                            }
                        </div>
                    </div>
                </div>
            )
        })

        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={ s.container }>
                <div className={ s.pagination }>
                    { pages.map((page) => {
                        return (
                            <span
                                className={ this.props.currentPage === page ? s.selectedPage : "" }
                                onClick={ () => this.onPageChangeHandler(page) }
                            >{ page }</span>
                        )
                    }) }
                </div>
                <div>{ users }</div>
            </div>
        );
    }

}

export default Users;
