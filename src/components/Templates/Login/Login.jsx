import React from 'react';
import './Login.css';
import Field from '../../Field/Field';
import Button from '../../Button/Button';


export default props => (
    
    <>
        <section className="login">
            <header className="login__header">
                <div className="logo">
                    <span className="logo__span"><i className="fas fa-user-circle"></i></span>
                </div>
                <h1 hidden>Login</h1>
            </header>
            <main>
                <form className="login__form">

                    <Field label="Email" type="email" name="email" />
                    
                    <Field  label="Senha" type="password" name="password" />
    
                    <Button value="Entrar" />
    
                </form>
            </main>
        </section>
    </>
    
)