const Name = () =>{
    const onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.value)
    }
    return(
        <div style={{padding: '16px',backgroundColor: 'grey'}}>
            <label htmlFor="name">名前</label>
            <input id="name" className="input-name" type="text" onChange={onchange} />
        </div>
    )
}

export default Name