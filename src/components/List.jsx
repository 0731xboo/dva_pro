import React from 'react'
import { connect } from 'dva'

function List(props) {

    const { dispatch, listArr } = props
    const deleteItem = (index) => {
        listArr.splice(index, 1)
        dispatch({ type: 'list/deleteItem', listArr })
    }

    return (
        <div>
            <ul>
                {listArr && listArr.map((item, index) => {
                    return (
                        <li key={index}>
                            <span style={{ marginRight: '40px' }}>{item}</span>
                            <button onClick={() => { deleteItem(index) }}>delete</button>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}




//此函数将models里边的state映射到 connect连接的组件props中
const mapStateToProps = (state) => {

    return {
        listArr: state.list.listArr
    }
}
export default connect(mapStateToProps)(List)
// export default connect(({ list }) => ({ list }))(List)
