<script>
    import NavBar from '../components/nav.svelte'
    import Gigs from '../components/gigs.svelte'
    import Footer from '../components/footer.svelte'
</script>

<!-- https://soundcloud.com/liam-davis-99/sets/ld-the-independent-variable -->
<main class="min-h-screen w-11/12 lg:w-4/5 xl:w-2/3 2xl:w-2/3">
    <NavBar current_page={'shows'}/>

    <Gigs/>
    <Footer/>
</main>
