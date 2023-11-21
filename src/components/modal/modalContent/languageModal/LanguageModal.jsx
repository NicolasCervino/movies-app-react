import React from 'react'
import { useTranslation } from 'react-i18next'

function LanguageModal({handleClose}) {
    const [t, i18n] = useTranslation("global");
   
    const handleLanguageSelect = (language) => {
        i18n.changeLanguage(language);
        handleClose();
    };

    return (
        <div className="container p-4">
            <div className="row">
                <div className="col-12">
                    <h1 className="titulo-modal" style={{ fontFamily: "Bebas Neue, cursive" }}>
                        {t("language-selection.title")}
                    </h1>
                </div>
            </div>
            <div className="row d-flex justify-content-between">
                <div className="col-6 py-2">
                    <button className="btn btn-light w-100" onClick={() => handleLanguageSelect("es")}>
                        {t("language-selection.option-1")} 🇪🇸
                    </button>
                </div>
                <div className="col-6 py-2">
                    <button className="btn btn-light w-100" onClick={() => handleLanguageSelect("en")}>
                        {t("language-selection.option-2")} 🇬🇧
                    </button>
                </div>
                <div className="col-6 py-2">
                    <button className="btn btn-light w-100" onClick={() => handleLanguageSelect("pt")}>
                        {t("language-selection.option-3")} 🇧🇷
                    </button>
                </div>
                <div className="col-6 py-2">
                    <button className="btn btn-light w-100" onClick={() => handleLanguageSelect("ja")}>
                        {t("language-selection.option-4")} 🇯🇵
                    </button>
                </div>
            </div>
        </div>
      );
}

export default LanguageModal