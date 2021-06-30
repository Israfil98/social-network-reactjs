import React, { useState } from 'react';

import s from "./Paginator.module.css";

const Paginator = React.memo(({totalItemsCount, pageSize, currentPage, onPageChangeHandler, portionSize}) => {
    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionPageNumber = portionNumber * portionSize

    return (
        <div className={s.paginationContainer}>
            <div className={ s.pagination }>
                { portionNumber > 1 &&
                <button onClick={ () => setPortionNumber(portionNumber - 1) } className={ s.btn }>prev</button> }
                { pages
                    .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                    .map((page) => {
                        return (
                            <span
                                className={ currentPage === page ? s.selectedPage : s.page }
                                onClick={ () => onPageChangeHandler(page) }
                            >
                        { page }
                    </span>
                        )
                    }) }
                { portionCount > portionNumber &&
                <button onClick={ () => setPortionNumber(portionNumber + 1) } className={ s.btn }>next</button> }
            </div>
        </div>
    );
});

export default Paginator;