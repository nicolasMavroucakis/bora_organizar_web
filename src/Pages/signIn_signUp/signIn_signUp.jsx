import "./signIn_signUp.css";
import { useState, useRef } from "react";
import Principal_img from "../../assets/background_trip.png";
import Email_icon from "../../assets/email_icon.png";
import Password_icon from "../../assets/password_icon.png";
import Ok from "../../assets/pass.png";
import NotOk from "../../assets/denied.png";

const SignInSignUp = () => {
    const [signUp, setSignUp] = useState(true);
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordIsCorrect, setPasswordIsCorrect] = useState(false);

    const emailInputRef = useRef(null);
    const passwordInputRef = useRef(null);
    const passwordConfirmInputRef = useRef(null);

    const change_type_of_signUp = (isSignUp) => {
        setSignUp(isSignUp);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        verifyIfPasswordsMatch(newPassword, passwordConfirm);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordConfirmChange = (event) => {
        const newPasswordConfirm = event.target.value;
        setPasswordConfirm(newPasswordConfirm);
        verifyIfPasswordsMatch(password, newPasswordConfirm);
    };

    const verifyIfPasswordsMatch = (passwordValue, passwordConfirmValue) => {
        setPasswordIsCorrect(passwordValue === passwordConfirmValue);
    };

    return (
        <>
            {signUp ? (
                <div className="Principal_division">
                    <div className="forms">
                        <div className="pricipal_title_div">
                            <h1 className="font_color_pricipal_title">Bora Organizar</h1>
                        </div>
                        <div>
                            <div className="Welcome_back">
                                <h2 className="font_color_second_title">Bem-vindo de volta</h2>
                                <p className="font_color_second_title_subtitle">
                                    Bem-vindo de volta, por favor insira suas informações
                                </p>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="sign">
                                <div className="signs">
                                    <div
                                        className={signUp ? "text_signs_active" : "text_signs"}
                                        onClick={() => change_type_of_signUp(true)}
                                    >
                                        <h3>Sign Up</h3>
                                    </div>
                                </div>
                                <div className="signs">
                                    <div
                                        className={!signUp ? "text_signs_active" : "text_signs"}
                                        onClick={() => change_type_of_signUp(false)}
                                    >
                                        <h3>Sign In</h3>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="text_inputs"
                                onClick={() => emailInputRef.current.focus()}
                            >
                                <div>
                                    <img className="principal_icons" src={Email_icon} />
                                </div>
                                <div className="bar" />
                                <div className="options_of_input">
                                    <div className="text_inputs_type">
                                        <p>Email</p>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            onChange={handleEmailChange}
                                            className="input_email_password input_email_password_email"
                                            ref={emailInputRef}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="text_inputs"
                                onClick={() => passwordInputRef.current.focus()}
                            >
                                <div>
                                    <img className="principal_icons" src={Password_icon} />
                                </div>
                                <div className="bar" />
                                <div className="options_of_input">
                                    <div>
                                        <p className="text_inputs_type">Senha</p>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={handlePasswordChange}
                                            className="input_email_password"
                                            ref={passwordInputRef}
                                        />
                                    </div>
                                </div>
                                <div className="div_ok_notok">
                                        <img
                                            className="ok_notok"
                                            src={passwordIsCorrect ? Ok : NotOk}
                                        />
                                </div>
                            </div>
                            {signUp && (
                                <div
                                    className="text_inputs"
                                    onClick={() =>
                                        passwordConfirmInputRef.current.focus()
                                    }
                                >
                                    <div>
                                        <img
                                            className="principal_icons"
                                            src={Password_icon}
                                        />
                                    </div>
                                    <div className="bar" />
                                    <div className="options_of_input">
                                        <div>
                                            <p className="text_inputs_type">
                                                Confirmar Senha
                                            </p>
                                        </div>
                                        <div>
                                            <input
                                                type="password"
                                                name="password_confirm"
                                                id="password_confirm"
                                                onChange={handlePasswordConfirmChange}
                                                className="input_email_password"
                                                ref={passwordConfirmInputRef}
                                            />
                                        </div>
                                    </div>
                                    <div className="div_ok_notok">
                                        <img
                                            className="ok_notok"
                                            src={passwordIsCorrect ? Ok : NotOk}
                                        />
                                    </div>
                                </div>
                            )}
                            <button className="Continue_button">
                                <h2>Continuar</h2>
                            </button>
                        </div>
                    </div>
                    <div className="Principal_img">
                        <img src={Principal_img} className="" />
                    </div>
                </div>
            ) : (
                <div className="Principal_division">
                    <div className="forms">
                        <div className="pricipal_title_div">
                            <h1 className="font_color_pricipal_title">Bora Organizar</h1>
                        </div>
                        <div>
                            <div className="Welcome_back">
                                <h2 className="font_color_second_title">
                                    Bem-vindo de volta
                                </h2>
                                <p className="font_color_second_title_subtitle">
                                    Bem-vindo de volta, por favor insira suas informações
                                </p>
                            </div>
                        </div>
                        <div className="inputs">
                            <div className="sign">
                                <div className="signs">
                                    <div
                                        className={signUp ? "text_signs_active" : "text_signs"}
                                        onClick={() => change_type_of_signUp(true)}
                                    >
                                        <h3>Sign Up</h3>
                                    </div>
                                </div>
                                <div className="signs">
                                    <div
                                        className={!signUp ? "text_signs_active" : "text_signs"}
                                        onClick={() => change_type_of_signUp(false)}
                                    >
                                        <h3>Sign In</h3>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="text_inputs"
                                onClick={() => emailInputRef.current.focus()}
                            >
                                <div>
                                    <img className="principal_icons" src={Email_icon} />
                                </div>
                                <div className="bar" />
                                <div className="options_of_input">
                                    <div className="text_inputs_type">
                                        <p>Email</p>
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            id="email"
                                            onChange={handleEmailChange}
                                            className="input_email_password input_email_password_email"
                                            ref={emailInputRef}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="text_inputs"
                                onClick={() => passwordInputRef.current.focus()}
                            >
                                <div>
                                    <img className="principal_icons" src={Password_icon} />
                                </div>
                                <div className="bar" />
                                <div className="options_of_input">
                                    <div>
                                        <p className="text_inputs_type">Senha</p>
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            id="password"
                                            onChange={handlePasswordChange}
                                            className="input_email_password"
                                            ref={passwordInputRef}
                                        />
                                    </div>
                                </div>
                            </div>
                            <button className="Continue_button">
                                <h2>Continuar</h2>
                            </button>
                        </div>
                    </div>
                    <div className="Principal_img">
                        <img src={Principal_img} className="" />
                    </div>
                </div>
            )}
        </>
    );
};

export default SignInSignUp;
