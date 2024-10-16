import React from "react"

type ContainerProps = {
    title : string
}

const Container = React.FC<ContainerProps> =(props)  =>{
    const {title, children} = props

    return(
        <div style={{background:'red'}}>
            <span>{title}</span>
            <div>{children}</div>
        </div>
    )
}

const Parent = React.VFC=()=> {
    return(
        <Container title="Hello">
            <p>個々の色が背景色でで囲まれます</p>
        </Container>
    )
}

export default Parent