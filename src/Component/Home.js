import React from "react";
export const Home = () =>{
    return(
        <div className="Home">
            <h1>TO DO APP</h1>
            <div className="titleHome">
                <p>WELCOME TO</p>
                <p>MY PROJECT</p>
            </div>
            <div className="About">
            <h3>MY PROFILE</h3>
            <div className="Yourinfo">
                <div className="titleAbout">
                    <strong>Full name:</strong>< br/>
                    <strong>ID:</strong><br/>
                    <strong>Class:</strong>
                </div>
                <div className="inputtitle">
                    <strong>Trần Đoàn Đăng Khoa</strong><br/>
                    <strong> 4501104114</strong><br/>
                    <strong>2111COMP103101</strong>
                </div>
            </div>
            </div>
        </div>
    )
}