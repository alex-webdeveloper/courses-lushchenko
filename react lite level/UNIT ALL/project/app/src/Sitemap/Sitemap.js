import React from 'react';
import './Sitemap.css';


class Sitemap extends React.Component {


    render() {
        const title = 'Карта сайта';
        const nav = {
            '/': 'Главная', '/about': 'О нас', '/contacts':
                'Контакты', '/guarantees': 'Гарантии', '/reimbursement': 'Условия возврата', '/address':
                'Пункты обмена'
        };
        document.title = title;
        return (

            <div className='sitemap'>
                <h2>{title}</h2>
                <nav>
                    <ul>
                        {Object.keys(nav).map(item => <li key={item}><a href={item}>{nav[item]}</a></li>)}
                    </ul>
                </nav>
            </div>

        );
    }
}

export default Sitemap;