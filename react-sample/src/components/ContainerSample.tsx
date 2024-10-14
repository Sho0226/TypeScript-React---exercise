const Container = (props: {title:string,children: React.ReactElement}) =>{
    const {title, children} = props

    return(
        <div style={{background:'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = () => {
    return(
        <Container title="Hello">
            <p>個々の色が背景色でで囲まれます</p>
        </Container>
    )
}

export default Parent