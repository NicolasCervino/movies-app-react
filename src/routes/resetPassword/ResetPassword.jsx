import { useState } from "react";
import useModal from "../../hooks/useModal";
import { useAuth } from "../../context/AuthContext";
import CustomModal from "../../components/modal/CustomModal";
import ResetModal from "../../components/modal/modalContent/resetModal/ResetModal";
import { Helmet } from "react-helmet";
import { useTranslation } from "react-i18next";

function ResetPassword() {
    const [show, handleClose] = useModal("/home");
    const { resetPassword } = useAuth();
    const [t, i18n] = useTranslation("global")

    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState(false);

    const handleResetPassword = async (e) => {
        e.preventDefault();
        setMessage("");
        setStatus(false);
        try {
            await resetPassword(email);
            setStatus(true);
            setMessage(t("restore-password.message"))
        } catch (error) {
            setMessage(error.message);
        }
    };

    return (
        <>
            <Helmet>
                <title>MoviesApp | Reset password</title>
            </Helmet>
            <CustomModal show={show} handleClose={handleClose} size={"md"}>
                <ResetModal email={email} setEmail={setEmail} submit={handleResetPassword} message={message} status={status} />
            </CustomModal>
        </>
    );
}

export default ResetPassword;
