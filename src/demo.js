import React, {useState} from 'react'
import ReactDOM from 'react-dom'

const Header = (
    <header>
        header
    </header>
)
const Header2 = function (props) {
    return (
        <header>
            header{props.name}
        </header>
    )
}
const Bottom = (
    <div>
        bottom
    </div>
)
const Bottom2 = function () {
    const [n, setN] = React.useState(0)
    return (
        <div>
            {n}
            <button onClick={function () {
                setN(n + 1)
            }
            }>
                +1
            </button>
        </div>
    )
}
class Bottom3 extends React.Component{
    render() {
        return(
            <div>bottom3</div>
        )
    }
}
const div = (
    <div>
        {Header}
        {Header2({name: 'jack'})}
        <Header2 name='jack2'/>
        <p>
            <span>hi</span>
        </p>
        {Bottom}
        <Bottom2/>
        <Bottom3/>
    </div>
)


ReactDOM.render(div, document.getElementById('root'))
