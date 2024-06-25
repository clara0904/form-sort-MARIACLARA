import styles from './Form.module.css'
import Sort from '../Sort/Sort'
import React, { useState } from 'react';

export default function FormData(){

    const [items, setItems] = useState([]);
    const [form, setForm] = useState({
        name: '',
        description: '',
        value: '',
        available: undefined
    })
    const [showSort, setShowSort] = useState(false);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        if (type === 'radio') {
            setForm({
                ...form,
                [name]: value === 'true' ? true : false
            });
        } else {
            setForm({
                ...form,
                [name]: type === 'checkbox' ? checked : value
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setItems([...items, { name: form.name, value: parseFloat(form.value) }]);
        setForm({
          name: '',
          description: '',
          value: '',
          available: undefined
        });
        setShowSort(true);
    }

    if (showSort) {
        return <Sort items={items} onBack={() => setShowSort(false)} />;
    }

    return(
        <div className={styles.container}>
            <div className={styles.content}>
                <form onSubmit={handleSubmit} className={styles['form-content']}>

                    <div className={styles.cabecalho}>Inserção de produtos</div>

                    Nome do produto<br/>
                    <input name='name' type='text' placeholder='Digite o nome do produto'  className={styles.input} value={form.name} onChange={handleChange}></input><br/><br/>

                    Descrição do produto<br/>
                    <textarea name='description' type='text' placeholder='Digite a descrição do produto' className={styles.textarea} value={form.description} onChange={handleChange}></textarea><br/><br/>

                    Valor do produto<br/>
                    <input name='value' type="number" placeholder='Digite o valor do produto' className={styles.input} value={form.value} onChange={handleChange}></input><br/><br/>

                    Disponível para venda<br/>
                    <input type='radio' id='true' name='available' value='true' checked={form.available === true} onChange={handleChange}></input>
                    <label htmlFor="true">Sim</label><br />

                    <input type='radio' id='false' name='available' value='false' checked={form.available === false} onChange={handleChange}></input>
                    <label htmlFor="false">Não</label><br />

                    <button type='submit' className={styles.submit}>Enviar</button>
                    <button type='reset' className={styles.reset} onClick={() => setForm({name: '', description: '', value: '', available: 'true'})}>Cancelar</button>
                </form>
            </div>
        </div>
    )
}