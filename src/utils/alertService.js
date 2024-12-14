import Swal from 'sweetalert2';

export const showSuccess = (message) => {
    Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 1500
    });
};

export const showError = (message) => {
    Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: message,
    });
};

export const showWarning = (message) => {
    Swal.fire({
        icon: 'warning',
        title: 'Advertencia',
        text: message,
    });
};

export const showConfirmation = async (title, text) => {
    const result = await Swal.fire({
        title,
        text,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, eliminar',
    });

    return result.isConfirmed;
};
