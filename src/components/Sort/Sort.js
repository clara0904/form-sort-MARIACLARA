import styles from './Sort.module.css'

export default function Sort({ items, onBack }){
    const sortedItems = [...items].sort((a, b) => a.value - b.value);

    return (
        <div className={styles.container}>
            <h2>Lista de produtos</h2>
            <table className={styles.table}>
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Valor</th>
                </tr>
                </thead>
                <tbody>
                    {sortedItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.value}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
            <button onClick={onBack} className={styles.submit}>Adicionar novo produto</button>
        </div>
    )
}