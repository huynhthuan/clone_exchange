$('.slider-list').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
            },
        },
    ],
});

let qrModal = document.getElementById('qrModal');
if (qrModal) {
    qrModal.addEventListener('show.bs.modal', function (event) {
        let button = event.relatedTarget;
        let address = button.getAttribute('data-deposit-address');
        let modalAddress = qrModal.querySelector('#deposit-address');
        modalAddress.value = address;
    });
}

// Menu mobile
document.addEventListener('DOMContentLoaded', () => {
    const menu = new MmenuLight(document.querySelector('#my-menu'), 'all');

    const navigator = menu.navigation();
    const drawer = menu.offcanvas();

    document
        .querySelector("a[href='#my-menu']")
        .addEventListener('click', (evnt) => {
            evnt.preventDefault();
            drawer.open();
        });
});
