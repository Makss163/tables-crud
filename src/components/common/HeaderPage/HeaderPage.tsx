import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import '../../../styles/components/HeaderPage.scss';
import { TablesCRUD } from '../../../types';

const HeaderPage: FC = () => {
    return (
        <div className="header flex flex-all-center flex-justify-between">
            <Link to={"/"} >
                Главная
            </Link>

            <div className='header-right flex flex-justify-between'>
                <Link to={"/posts"} >
                    Посты
                </Link>

                <Link to={"/todos"} >
                    Список дел
                </Link>
            </div>

        </div>
    )
};

export default HeaderPage;
