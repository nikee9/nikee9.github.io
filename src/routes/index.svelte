<script>
import Intro from "../Components/Intro.svelte";
import Welcome from "../Components/Welcome.svelte";

</script>

<div class="container">
    <Welcome/>
    <Intro/>
</div>

<style>
.container{
    flex: 1;
    height: calc(100% - var(--nav-height));
    width: 80%;
    margin: auto;
    display: flex;
    flex-direction: column;
}
</style>