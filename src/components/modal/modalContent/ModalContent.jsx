import MovieModal from "./movieModal/MovieModal";
import LoginModal from "./loginModal/LoginModal";
import RegisterModal from "./registerModal/RegisterModal";

const ModalContent = ({ element, type, register, login, handleClose }) => {
    const renderContent = () => {
        switch (type) {
            case "login":
                return (
                    <LoginModal
                        email={login.email}
                        setEmail={login.setEmail}
                        password={login.password}
                        setPassword={login.setPassword}
                        submit={login.submit}
                    />
                );
            case "register":
                return (
                    <RegisterModal
                        email={register.email}
                        setEmail={register.setEmail}
                        password={register.password}
                        setPassword={register.setPassword}
                        submit={register.submit}
                    />
                );
            case "movie":
                return <MovieModal element={element} type={type} handleClose={handleClose} />;
            default:
                return <MovieModal element={element} type={type} handleClose={handleClose} />;
        }
    };

    return renderContent();
};

export default ModalContent;
