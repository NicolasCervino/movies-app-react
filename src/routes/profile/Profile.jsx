import { Helmet } from "react-helmet";
import CustomModal from "../../components/modal/CustomModal";
import ProfileModal from "../../components/modal/modalContent/profileModal/ProfileModal";
import useModal from "../../hooks/useModal";
import { useTranslation } from "react-i18next";

function Profile() {
    const [show, handleClose] = useModal("/home");
    const [t, i18n] = useTranslation("global")

    return (
        <>
            <Helmet>
                <title>MoviesApp | {t("my-profile.header")}</title>
            </Helmet>
            <CustomModal show={show} handleClose={handleClose} size={"md"}>
                <ProfileModal />
            </CustomModal>
        </>
    );
}

export default Profile;
