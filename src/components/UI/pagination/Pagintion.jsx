import React from 'react';
import { getPagesArray } from '../../utils/pages';
import MyButton from '../button/MyButton';

const Pagintion = ({totalPages, page, changePage}) => {
    let pagesArray = getPagesArray(totalPages);
    return (
        <div>
            {pagesArray.map((p) => (
                <div
                    className={page === p ? "page page__active" : "page"}
                    key={p}
                    onClick={() => changePage(p)}
                >
                    <MyButton>{p}</MyButton>
                </div>
            ))}
        </div>
    );
};

export default Pagintion;
