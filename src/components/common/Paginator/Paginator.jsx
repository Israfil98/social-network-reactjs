import React from 'react';

import s from "./Paginator.module.css";

const Paginator = React.memo((props) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={ s.pagination }>
            { pages.map((page) => {
                return (
                    <span
                        className={ props.currentPage === page ? s.selectedPage : "" }
                        onClick={ () => props.onPageChangeHandler(page) }
                    >
                            { page }
                    </span>
                )
            }) }
        </div>
    );
});

export default Paginator;