<script>
    import NavBar from '../components/nav.svelte'
    import Footer from '../components/footer.svelte'
</script>


<main class="min-h-screen w-11/12 lg:w-4/5 xl:w-2/3 2xl:w-1/2">
    <NavBar current_page={'contact'}/>

    <div class="email-form flex flex-row">
        <form method="POST" class="basis-2/3">
            <h2>Get in touch</h2>
            <label>
                Name:
                <input name="name" type="name">
            </label>
            <label>
                Email Address:
                <input name="email" type="email">
            </label>
            <label>
                Subject:
                <input name="subject" type="subject">
            </label>
            <label>
                Message:
                <input name="message" type="message">
            </label>
            <button>Send Message</button>
        </form>
        <div class="contact-info basis-1/3">
            <h2>Contact Us</h2>
            <p>Address: XYZ</p>
            <p>Phone: XTZ</p>
            <p>Email: XYZ</p>
            <p>Website: this one</p>
        </div>
    </div>

    <Footer/>
</main>

