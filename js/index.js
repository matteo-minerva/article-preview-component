$(function () {
    const shareBtn = $(".btn--share");
    const authorSection = $(".article__author");
    const shareSection = $(".article__share");

    let isMobile = window.matchMedia("only screen and (max-width: 760px)").matches;

    shareBtn.on("click", function () {
        console.log("sddew");
        if (isMobile) {
            authorSection.toggleClass("hidden");
        } else {
            shareBtn.toggleClass("btn--share-invert");
        }

        shareSection.toggleClass("hidden");
    });

});