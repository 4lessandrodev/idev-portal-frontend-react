import React from 'react';
import './UserRanking.css';
import User from '../../Ranking/User/User';
import UserInfor from '../../Ranking/User/UserInfo';

export default props => (
  
    <>
        <section className="container ranking">
            <header className="ranking__header">
                <h1 className="ranking__header__title">{props.title}</h1>  
            </header>
            <main className="ranking__user__main">
                <User name="Pedro" points="560" position="#1 - Lugar" image="https://pbs.twimg.com/profile_images/806683021084655617/kok9CbUh_400x400.jpg" />
                
                <UserInfor />
            </main>
        </section>
    </>
    
);