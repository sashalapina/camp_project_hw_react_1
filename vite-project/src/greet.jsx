export function Greeting({ name, setName, age, setAge, onSubmit}){
    return (
        <form action="#" className='input-group' onSubmit={onSubmit}>
            <div className="input-box">
                <h1 className='main-title'>Генерируем карточку пользователя</h1>
                <p className='card-text'>Введите данные для создания карточки</p>

                <div className="inputs">
                    <input className="card-input" type="text" name='userName' placeholder='Введите имя' value={name} onChange={(e) => setName(e.target.value)}/>
                    <input className="card-input" type="number" name='userAge' min={1} max={99} placeholder='Введите возраст' value={age} onChange={(e) => setAge(e.target.value)}/>
                </div>

                <div className="buttons">
                    <button className="card-button" type="reset" onClick={() => { setName(''); setAge(''); }}>Очистить</button>
                    <button className="card-button" type="submit">Отправить</button>
                </div>   
            </div>

            
        </form>
      )
}