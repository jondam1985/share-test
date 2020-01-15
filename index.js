const share = document.getElementById("share");

share.addEventListener("click", function() {
    if (navigator.share) {
        navigator.share({
            title: "This is awesome",
            text: "But wait, there's more!",
            url: window.location.href
        })
        .then(window.alert("thank you for sharing"));
    }
    else {
        window.alert("This is mobile-user land boy, and you ain't welcome here")
    }
})
