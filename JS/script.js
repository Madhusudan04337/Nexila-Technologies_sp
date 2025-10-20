document.addEventListener('DOMContentLoaded', function(){
    function handleResponsiveBehaviour(){
        const isDesktop = window.innerWidth >= 992;

        if (isDesktop){
            const offcanvas = document.getElementById('offcanvasNavbar');
            const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvas);
            if(bsOffcanvas){
                bsOffcanvas.hide();
            }
        }
        // For desktop : Show submenu on hover
        if (isDesktop){
            const dropdownItems = document.querySelectorAll('.navbar-collapse .dropdown-submenu');
            dropdownItems.forEach(item => {
                item.addEventListener('mouseover',function(){
                    const submenu = this.querySelector('.dropdown-menu');
                    if (submenu){
                        submenu.classList.add('show');
                    }
                });

                item.addEventListener('mouseout',function(){
                    const submenu = this.querySelector('.dropdown-menu');
                    if(submenu){
                        submenu.classList.remove('show');
                    }
                });
            });
            const mainDropdowns = document.querySelectorAll('.navbar-collapse .nav-item .dropdown');
            mainDropdowns.forEach(dropdown => {
                dropdown.addEventListener('mouseover', function(){
                    const dropdownMenu = this.querySelector('.dropdown-menu');
                    if (dropdownMenu){
                        dropdownMenu.classList.add('show');
                    }
                });

                dropdown.addEventListener('mouseout', function(){
                    const dropdownMenu = this.querySelector('.dropdown-menu');
                    if (dropdownMenu){
                        dropdownMenu.classList.remove('show');
                    }
                });
            });
        }
    }
    handleResponsiveBehaviour();
    window.addEventListener('resize',handleResponsiveBehaviour);

    //For mobile : Toggle submenu on click
    const mobileDropdownToggles = document.querySelectorAll('.offcanvas .dropdown-toggle');
    mobileDropdownToggles.forEach(toggle => {
        toggle.addEventListener('click',function(e){
            if (window.innerWidth <992){
                e.preventDefault();
                e.stopPropagation();

                const parent = this.parentElement;
                const dropdownMenu = parent.querySelector('.dropdown-menu');

                if(dropdownMenu){
                    if (dropdownMenu.classList.contains('show')){
                        dropdownMenu.classList.remove('show');
                    } else{
                        dropdownMenu.classList.add('show');
                    }
                }
            }
        });
    }) ;

    //close mobile dropdown menus when clicking outside
    document.addEventListener('click',function(e){
        if (window.innerWidth<992){
            const openDropdowns = document.querySelectorAll('.offcanvas .dropdown-menu.show');
            if(openDropdowns.length > 0 && !e.target.closest('.dropdown-toggle')){
                openDropdowns.forEach(dropdown => {
                    dropdown.classList.remove('show');
                });
            }
        }
    });
});

document.getElementById("contactForm").addEventListener('submit',function(e){
    e.preventDefault();
    const contact = document.getElementById("contact");
    const message = document.getElementById("message");
    const contactError = document.getElementById("contactError");
    const messageError = document.getElementById("messageError");

    let valid = true;
    if (contact.value.trim()=== ""){
        contactError.classList.remove("d-none");
        contact.classList.add("is-invalid");
        valid=false;
    }

    if (message.value.trim()=== ""){
        messageError.classList.remove("d-none");
        message.classList.add("is-invalid");
        valid=false;
    }

    if(valid){
        alert("Form submitted successfully!")
    }

    contact.addEventListener("input",()=>{
        if(contact.value.trim()!== ""){
            contactError.classList.add("d-none");
            contact.classList.remove("is-invalid");
        }
    });

    message.addEventListener("input",()=>{
        if(message.value.trim()!== ""){
            messageError.classList.add("d-none");
            message.classList.remove("is-invalid");
        }
    });

})