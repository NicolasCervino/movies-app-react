import Swal from "sweetalert2";

export const useSweetAlert = () => {
    const showAlert = (text, icon) => {
        Swal.fire({
            toast: true,
            position: "top-end",
            text: text,
            showConfirmButton: false,
            icon: icon,
            timer: 1500,
            timerProgressBar: true,
        });
    };

    return { showAlert };
};
