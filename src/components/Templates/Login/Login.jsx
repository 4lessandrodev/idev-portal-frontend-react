import React from 'react';
import './Login.css';

export default props => (
 
    <>
        <section className="container login">
            <header className="read-only">
                <h1>Login</h1>
            </header>
            <main>
                <form className="login__form">
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control"/>
                    </div>
                </form>
            </main>
        </section>
    </>
    
)