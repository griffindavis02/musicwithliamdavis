<script>
    import NavBar from '../components/nav.svelte'
    import Footer from '../components/footer.svelte'

    const sendMessageHandler = (event) => {
        alert('Not implemented!');
    };
</script>


<main class="min-h-screen w-11/12 lg:w-4/5 xl:w-2/3 2xl:w-2/3">
    <NavBar current_page={'contact'}/>

    <div class="container flex flex-row">
        <form method="POST" class="email-form flex flex-col justify-start basis-2/3">
            <h2 class="text-xl font-bold">Get In Touch</h2>
            <label>
                Name:
                <input name="name" type="name" class="std-input">
            </label>
            <label>
                Email Address:
                <input name="email" type="email" class="std-input">
            </label>
            <label>
                Subject:
                <input name="subject" type="subject" class="std-input">
            </label>
            <label>
                Message:
            </label>
            <!--<input name="message" type="message" class="message-box">-->
            <textarea name="message" rows="10" class="message-box"></textarea>
            <button on:click|preventDefault={sendMessageHandler} class="font-bold ring-blue-200 w-44 bg-blue-200/50 rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">Send Message</button>
        </form>
        <div class="contact-info basis-1/3 p-10 rounded-3xl">
            <h2 class="text-xl">Contact Us</h2>
            <p>Email: contact@musicwithliamdavis.com</p>
            <p>Website: <a href="/">musicwithliamdavis.com</a></p>
        </div>
    </div>

    <Footer/>
</main>

<style>
    .container {
        margin: 5rem 0;
        position: relative;
    }

    .contact-info {
        position: absolute;
        top: 0;
        bottom: 0;
        right: 0;
        width: 33%;
        transform: scaleY(1.10);
        background-color: var(--fontColor);
    }

    .contact-info p, h2 {
        font-weight: bold;
        margin: 1rem 0;
        color: var(--backgroundDark);
    }

    .email-form {
        width: 66%;
        position: relative;
        margin: 0;
    }

    .email-form h2 {
        color: var(--fontColor);
    }

    .email-form label {
        display: flex;
        flex-direction: row;
        margin: 0.5rem 0;
    }

    .email-form input, textarea {
        border-radius: 0.25rem;
        color: black;
        padding: 0.25rem;
    }

    .std-input {
        position: absolute;
        left: 25%;
        width: 65%;
    }

    .message-box {
        width: 90%;
    }

</style>
