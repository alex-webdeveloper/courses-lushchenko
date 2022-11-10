import React from 'react';
import './Main.css';

class Main extends React.Component {
    render() {
        return (

            <main>
                <h1>Разработка сайтов</h1>
                <h2>Резюме</h2>
                <div className='flex'>
                    <section>
                        <h3>Казека Алексей</h3>
                        <ul>
                            <li>Год рождения: 1978</li>
                            <li>e-mail: example@yandex.ru</li>
                            <li>Зарплата от 1000$</li>
                            <li>Офис или по удаленке</li>
                            <li>Опыт работы 1 год</li>
                            <li>Должность: Frontend-разработчик</li>
                        </ul>
                    </section>

                    <section>
                        <h3>Профессиональные навыки:</h3>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>JavaScript</li>
                            <li>OOP JS</li>
                            <li>React</li>
                            <li>Графические редакторы: Photoshop and Figma</li>
                        </ul>
                    </section>
                </div>
                <section>
                    <h3>Дополнительные сведения:</h3>
                    <p>Умение работать в режиме многозадачности и высокие аналитические способности позволяют мне эффективно работать с большими объёмами информации, быстро находить качественные решения сложных задач.</p>
                    <p>Так-же являюсь ответсвенным и целеустремленным разработчиком, без вредных привычек.</p>
                </section>
            </main>

        );
    }
}

export default Main;