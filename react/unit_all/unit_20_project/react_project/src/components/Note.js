
import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import env from '../env.json';

function Note() {
let {noteURL} = useParams();
const [noteText, setNoteText] = useState('');
const [lineClass, setLineClass] = useState('hide');
const [formClass, setFormClass] = useState('hide');
const [errorClass, setErrorClass] = useState('hide');

useEffect( () => {
    if (noteURL !== undefined) {
        fetch( env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify({"url": noteURL})
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
            if (response.result) {
                setNoteText(response.note);
                setLineClass('');
                setFormClass('hide');
                setErrorClass('hide');
            }
            else if (!response.result) {
                setLineClass('hide');
                setFormClass('hide');
                setErrorClass('');
            }
        })
    }

    else {
        setLineClass('hide');
        setFormClass('');
        setErrorClass('hide');
    }

},[noteURL]);

function getNote(event) {
event.preventDefault();
let url = event.target.elements.url.value;
url = url.trim();
if(url === '') {
    alert('Заполните поля');
    return false;
}
noteURL = url;
window.location.href = env.url + '/' + url;
}

    return (
        <div className="row">
       <div className="col-12">
        <div className={lineClass}>
        <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Note: {noteURL}</h4>
        <div>{noteText}</div>
         <hr />
         <p className="mb-0">Внимание! Скопируйте заметку.</p>
         </div>
        <div className="text-right"><button  className="btn btn-primary" onClick={() => window.location.href = env.url}>Смотреть еще один note</button></div> 
        </div>
        <div className={errorClass}>
        <div className="alert alert-danger" role="alert">
            <p>Произошла ошибка. Такой хеш не найден, попробуйте снова.</p>
            </div>
            <div className="text-right"><button  className="btn btn-primary" onClick={() => window.location.href = env.url}>Смотреть еще один note</button></div> 
          </div>
          <div className="text">
             <form onSubmit={getNote} className={formClass} >
             <label htmlFor="url">Введите hash заметку</label>
             <input type="text" name="url" id="url" className="form-control" />
             <div className="form-group text-right">
             <button type="submit"  className="btn btn-primary">Искать Note</button>
             </div>
             </form>
        </div>
        </div>
        </div>
    );
}

export default Note;