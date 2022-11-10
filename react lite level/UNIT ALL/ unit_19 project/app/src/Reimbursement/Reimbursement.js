import React from 'react';
import './Reimbursement.css';


class Reimbursement extends React.Component {


    render() {
        const title = 'Условия возврата';
        document.title = title;
        return (

            <div>
                <h2>{title}</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit officia modi nam eaque laborum asperiores perferendis accusantium.</p>
            </div>

        );
    }
}

export default Reimbursement;