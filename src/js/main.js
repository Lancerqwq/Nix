window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    const popoverBootstrap = () => {
        $(function () {
            $('[data-bs-toggle="popover"]').popover()
        })
    }

    const scrollWindow = () => {
        window.addEventListener('scroll', () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.querySelector(".progress-bar").style.width = `${scrolled}%`;
        })
    }

    const browserVersion = () => {
        let versionApp = window.navigator.appVersion;
        let version = versionApp.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
        let element = document.createElement("span");
        
        element.innerHTML = version[0];
        document.body.appendChild(element);
    }


    const darkTHeme = () => {
        const switcher = document.querySelector('#darkSwitch');
        const sections = document.querySelectorAll('section');
        const text = document.querySelectorAll('.reasons_text')
        const title = document.querySelectorAll('.title')
        const titleWhite = document.querySelectorAll('.title_white')
        switcher.addEventListener('change', () => {

            sections.forEach(item => {
                if (switcher.checked) {
                    item.classList.toggle('dark')
                } else {
                    item.classList.toggle('dark')
                }
            })

            text.forEach(item => {
                if (switcher.checked) {
                    item.classList.toggle('dark')
                } else {
                    item.classList.toggle('dark')
                }
            })

            title.forEach(item => {
                if (switcher.checked) {
                    item.classList.toggle('dark')
                } else {
                    item.classList.toggle('dark')
                }
            })

            titleWhite.forEach(item => {
                if (item.classList.contains('dark')) {
                    item.classList.remove('dark')
                }
            })
        })
    }

    const disableKey = () => {
        document.addEventListener('keydown', (e) => {
            if(e.keyCode == 123){
                e.preventDefault()
            }else if((e.ctrlKey) && (e.shiftKey) && (e.keyCode == 73)){
                e.preventDefault()
            }else if((e.shiftKey) && (e.keyCode == 121)){
                e.preventDefault()
            }else if((e.ctrlKey) && (e.keyCode == 85)){
                e.preventDefault()
            }
        });
        document.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        })
    }

    const submitForm = () => {
        const {form} = document.forms;
        const btnClose = form.querySelectorAll('.btn-closed');
        const fade = document.querySelector('#exampleModal');
        const fields = document.querySelectorAll('.form-control');
        const phone = document.querySelector('#phone');
    
        const clearClass = (item) => {
            item.forEach(item => {
                item.classList.remove('is-valid', 'is-invalid');
            });
        }
    
        window.addEventListener('click', (e) => {
            if (e.target == fade) {
                form.reset();
                clearClass(fields);
            } 
            btnClose.forEach(item => {
                item.addEventListener('click', () => {
                    form.reset();
                    clearClass(fields);
                })
            })
        })
    
    
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const formData = new FormData(form);
            const values = Object.fromEntries(formData.entries());

            if (parseInt(phone.value)) {
                form.reset();
                clearClass(fields);
                console.log(values);
            } else {
                phone.value = '';
                phone.classList.add('is-invalid')
            }
        });
    }

    const avtivityTime = () => {
        (function() {
            window.open('../secondTask.html');
        })();
    };
    

    darkTHeme();
    popoverBootstrap();
    scrollWindow();
    browserVersion();
    disableKey();
    submitForm();
    avtivityTime();

})
