import React from 'react'
import { Layout } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

function Welcome() {
    const username = "Hasan"
    return(
        <div style={{background:"Black"}}>
        <h1 style={{color:"crimson", display:"flex", alignItems:"center", 
        justifyContent:"center", height:"100vh", fontSize:"50px", fontWeight:"500"}}>Hello {username}</h1>
        </div>
    )
}

export default Welcome