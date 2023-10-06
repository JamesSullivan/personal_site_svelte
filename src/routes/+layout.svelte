<script>
  import "@svelteness/kit-docs/client/polyfills/index.js";
  import "@svelteness/kit-docs/client/styles/normalize.css";
  import "@svelteness/kit-docs/client/styles/fonts.css";
  // import "@svelteness/kit-docs/client/styles/theme.css";
  // import '@svelteness/kit-docs/client/styles/vars.css';
  import "$lib/styles/theme.css";
  import "$lib/styles/kit-docs-vars.css";

  import { page } from "$app/stores";
  import SvelteLogo from "$img/letter-s.svg?raw";

  import {
    Button,
    KitDocs,
    KitDocsLayout,
    createSidebarContext,
  } from "@svelteness/kit-docs";

  /** @type {import('./$types').LayoutData} */
  export let data;

  $: ({ meta, sidebar } = data);

  /** @type {import('@svelteness/kit-docs').NavbarConfig} */
  const navbar = {
    links: [
      { title: "Menu", slug: "/menu", match: /\/menu/ },
      { title: "About", slug: "/about", match: /\/about/ },
    ],
  };

  const { activeCategory } = createSidebarContext(sidebar);

  $: category = $activeCategory ? `${$activeCategory}: ` : "";
  $: title = meta ? `${category}${meta.title} | KitDocs` : null;
  $: description = meta?.description;
</script>

<svelte:head>
  {#key $page.url.pathname}
    {#if title}
      <title>{title}</title>
    {/if}
    {#if description}
      <meta name="description" content={description} />
    {/if}
  {/key}
</svelte:head>

<KitDocs {meta}>
  <KitDocsLayout {navbar} {sidebar}>
    <div
      class="logo"
      slot="navbar-left"
      style="display: inline-block; font-weight: bold; font-size: 30px;"
    >
      <Button style="display: inline-block; vertical-align: middle;" href="/">
        {@html SvelteLogo}
      </Button><a href="/" style="display: inline-block;">olutions.asia</a>
    </div>

    <slot />
  </KitDocsLayout>
</KitDocs>

<style>
  :global(:root) {
    --kd-color-brand-rgb: 233, 127, 6;
  }

  :global(:root.dark) {
    --kd-color-brand-rgb: 213, 149, 76;
  }

  .logo :global(a) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .logo :global(svg) {
    height: 36px;
    overflow: hidden;
  }
</style>
