const form = () => {
    const forms = document.querySelector('.was');
    const formes = document.querySelectorAll('.was');
    const btn = document.querySelectorAll('.modal-footer .btn');
    const btnClose = document.querySelectorAll('[data-close="form"]');
    const fields = document.querySelectorAll('.form-control');
    const fade = document.querySelectorAll('.modal-backdrop');

    btnClose.forEach(item => {
        item.addEventListener('click', () => {
            forms.reset();
            clearClass(fields);
        })
    });

    forms.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = {};
        fields.forEach(item => {
            if (item.value) {   
                console.log('field is blank', item.value)
                closeCurrentWindow();
                clearClass;
            } else {
                item.classList.add('is-invalid')
            }
        })
    });
    const filledFields = (item) => {
        item.forEach(item => {
            item.addEventListener('focusout', () => {
                if (!item.value) {
                    item.classList.add('is-invalid')
                } else {
                    item.classList.add('is-valid')
                }
            });
            item.addEventListener('focusin', () => {
                clearClass;
            });
        });
    }
    filledFields(fields);
    const clearClass = (item) => {
        item.forEach(item => {
            item.classList.remove('is-valid', 'is-invalid');
        });
    }
    // const clearInputs = () => {
    //     fields.forEach(item => {
    //         item.value = '';
    //     });
    // };
}
export default form;