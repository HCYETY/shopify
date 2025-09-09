<!-- ============================================================================= -->
<!-- Ella Custom JS - Customize The Style For Layout -->
<!-- ============================================================================= -->

<!-- ============================================================================= -->
<!-- IMPORTANT DISCLAIMER -->
<!-- Please use only JS to style the layout. -->
<!-- ============================================================================= -->

function slickProductTabTitle() {
    const productTabTitle = $('.sections-product-tab .halo-block-content .list-product-tabs');
    if (productTabTitle && window.innerWidth < 768) {
        productTabTitle.find('.separation').remove();
        productTabTitle.slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: false,         
            arrows: true,
            dots: false,
            fade: false,
            nextArrow: '<button type="button" class="slider-button slider-button--next" name="next" aria-label="Slide right"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path></svg></button>',
            prevArrow: '<button type="button" class="slider-button slider-button--prev" name="previous" aria-label="Slide left"><svg aria-hidden="true" focusable="false" role="presentation" class="icon icon-caret" viewBox="0 0 10 6"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.354.646a.5.5 0 00-.708 0L5 4.293 1.354.646a.5.5 0 00-.708.708l4 4a.5.5 0 00.708 0l4-4a.5.5 0 000-.708z"></path></svg></button>',
            rtl: window.rtl_slick,
        });
    }
}


