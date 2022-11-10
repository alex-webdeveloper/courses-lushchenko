import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide');
    const [formClass, setFormClass] = useState('');

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then(response => response.json())
            .then(response => {
                if (response.result) {
                    setUrl(env.url + '/' + response.url);
                }
            })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }

        sendData({ 'note': note });
    }

    return (
        <div className="row">
            <div className="col-12 text">
                <form onSubmit={loadDataFromForm} className={formClass}>
                    <div className="form-group">
                        <label htmlFor="note">Введите заметку</label>
                        <textarea name="note" className="form-control" defaultValue="Test" id="note"></textarea>
                        <p><b>Внимание!</b> Максимальная длина заметки 1000 символов.</p>
                    </div>
                    <div className="form-group text-right">
                        <button type="submit" className="btn btn-primary">Создать</button>
                    </div>
                </form>
                <div className={lineClass}>
                    <div className="alert alert-primary" role="alert">{url}</div>
                    <p>Скопируйте URL и передайте адресату. Внимание! Посмотреть заметку можно один раз!</p>
                    <div className="text-right"><button className="btn btn-primary" onClick={() => window.location.reload()}>Создать новую заметку</button></div>
                </div>
            </div>
        </div>
    )
}

export default Create;