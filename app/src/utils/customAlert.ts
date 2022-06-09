import React from 'react';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

export const customAlert = (result) => {
    const MySwal = withReactContent(Swal);
    return MySwal.fire({
        title: 'Error!',
        text: result.response?.data.error,
        icon: 'error',
        timer: 2000,
    });
};
