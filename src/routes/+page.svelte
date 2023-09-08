<script>
  import { Button, Chip } from "@svelteness/kit-docs";
  import SocialBanner from "../kit-docs/SocialBanner.svelte";
  import { browser } from "$app/environment";
  // console.log(typeof window);
  if (browser) {
    const m = window.matchMedia("(min-width: 1280px)").matches;
    if (m) {
      const ele = document.querySelector(".\\31 280\\:block");
      if (ele) {
        ele.setAttribute("style", "display: none;");
      }
    }
  }
</script>

<p class="text-center" style="font-weight: 600; font-size: 400%; ">
  James Sullivan
</p>
<section class="header-image">
  <div class="header-image-text text-center" style="position:relative;">
    <br /><br /><br /><br />
    <p style="font-weight: 600; font-size: 300%;">
      Digital Product Development
    </p>
    <br />
    <Button style="display: inline-block;" primary href="/about" type="raised"
      >About</Button
    >
  </div>
</section>
<div style="font-weight: 600; font-size: 350%; padding: 20px;">Services</div>
<div class="flex flex-row justify-center" style="flex-wrap: wrap;">
  <div class="box a">
    <div style="font-size: 150%">Digital Product Dev</div>
    <div class="ml-4">
      research<br />planning<br />costing<br /> sourcing<br />commercialization
    </div>
  </div>
  <div class="box b">
    <div style="font-size: 150%">Software Engineering</div>
    <div class="ml-4">
      team formation<br />prototyping<br />implementation<br />testing &
      integration<br />security
    </div>
  </div>
  <div class="box c text-left">
    <div style="font-size: 150%; text-align: left">Data & Analytics</div>
    <div class="ml-4">
      web scraping<br />data visualization<br />ETL<br />data pipelines<br />
    </div>
  </div>
</div>

<br /><br /><br />
<SocialBanner />
