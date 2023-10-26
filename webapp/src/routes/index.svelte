<script>
    import NavBar from '../components/nav.svelte'
    import Socials from '../components/socials.svelte'
    import SoundCloudEmbed from '../components/soundcloud.svelte'
    import ImageGallery from '../components/gallery.svelte'
    import Footer from '../components/footer.svelte'
</script>


<main class="min-h-screen w-11/12 lg:w-4/5 xl:w-2/3 2xl:w-1/2">
    <NavBar current_page={'index'}/>
    <Socials />
    <img src="images/cover.jpg" alt="LD & the Independent Variable" class="mt-3" />
    <img class="pfp" src="images/pfp.jpg" alt="Liam Davis" />
    <p class="intro">
        Welcome and get excited about solo musician Liam Davis' upcoming
        shows! Liam brings summer time fun and groove to every Jersey Shore bar
        and restaurant featuring him. More often than not you can catch <em>LD
        and the Independent Variable</em> the iconic father-son duo that's
        been shredding tunes together as far back as one of them goes! Filler
        Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
        Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
        Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler
        Filler Filler Filler Filler Filler Filler Filler Filler Filler Filler.
    </p>
    <SoundCloudEmbed />
    <ImageGallery />
    <Footer/>
</main>

