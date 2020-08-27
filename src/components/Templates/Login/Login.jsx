import React from 'react';
import './Login.css';

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

                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" className="form-control" name="email" id="email"/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">Senha</label>
                        <input type="password" className="form-control" name="password" id="password"/>
                    </div>
    
                    <input type="submit" className="btn btn-lg btn-block login__form__btn-submit" value="Entrar" />
    
                </form>
            </main>
        </section>
    </>
    
)