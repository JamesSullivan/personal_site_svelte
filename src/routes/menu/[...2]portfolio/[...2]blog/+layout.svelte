
<script>
    import { browser } from "$app/environment";
    // console.log(typeof window);
    if (browser) {
        const x = window.matchMedia("(min-width: 1280px)").matches;
        if (x) {
            const ele = document.querySelector(".\\31 280\\:block");
            if (ele) {
                ele.setAttribute("style", "display: block;");
            }
        }
    }
</script>

<slot />