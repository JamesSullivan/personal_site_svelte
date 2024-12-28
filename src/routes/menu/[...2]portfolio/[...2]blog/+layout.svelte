<script lang="ts">
    import { browser } from "$app/environment";
    interface Props {
        children?: import('svelte').Snippet;
    }

    let { children }: Props = $props();
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

{@render children?.()}
