import { Helmet } from "react-helmet";
import CustomModal from "../../components/modal/CustomModal";
import useModal from "../../hooks/useModal";
import { useTranslation } from "react-i18next";
import LanguageModal from "../../components/modal/modalContent/languageModal/LanguageModal";

function LanguageSelection() {
    const [show, handleClose] = useModal("/home");
    
    const [t] = useTranslation("global")

    return (
        <>
            <Helmet>
                <title>MoviesApp | {t("language-selection.header")}</title>
            </Helmet>
            <CustomModal show={show} handleClose={handleClose} size={"md"}>
                <LanguageModal handleClose={handleClose}/>
            </CustomModal>
        </>
    );
}

export default LanguageSelection;