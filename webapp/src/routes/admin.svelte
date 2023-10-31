<script>
    import NavBar from '../components/nav.svelte'
    import Gigs from '../components/admin/gigs.svelte'
    import Footer from '../components/footer.svelte'

    const placeholderHandler = (event) => {
        return;
    }

    const addGigHandler = (event) => {
        alert('Not implemented!');
    }

    const pastGigsHandler = (event) => {
        alert('Not implemented!');
    }

    const uploadCoverImageHandler = (event) => {
        alert('Not implemented!');
    }

    const uploadPfpHandler = (event) => {
        alert('Not implemented!');
    }

    const editGalleryHandler = (event) => {
        alert('Not implemented!');
    }
</script>


<main class="min-h-screen w-11/12 lg:w-4/5 xl:w-2/3 2xl:w-2/3">
    <NavBar current_page={'admin'}/>

    <div class="container flex flex-row">
        <form method="POST" class="email-form flex flex-col justify-start basis-1/2">
            <h2 class="text-xl font-bold">Add a Gig</h2>
            <label>
                Venue:
                <input name="venue" class="std-input">
            </label>
            <label>
                City:
                <input name="city" class="std-input">
            </label>
            <label>
                State:
                <select name="state" class="std-input">
                    <option class="text-black" value="NJ">New Jersey</option>
                    <option class="text-black" value="NY">New York</option>
                </select>
            </label>
            <label>
                Date:
                <input name="date" type="date" class="std-input">
            </label>
            <label>
                Start Time:
                <input name="startTime" type="time" class="std-input">
            </label>
            <label>
                End Time:
                <input name="endTime" type="time" class="std-input">
            </label>
            <button on:click|preventDefault={addGigHandler} class="font-bold w-24 ring-blue-200 bg-blue-200/50 rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">Add Gig</button>
        </form>
        <div class="contact-info basis-1/2 p-10 rounded-3xl">
            <button on:click|preventDefault={pastGigsHandler} class="font-bold w-full ring-backgroundDark bg-backgroundDark rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent hover:text-backgroundDark duration-150 ease-in-out">Edit/Remove Past Gigs</button>
            <button on:click|preventDefault={uploadCoverImageHandler} class="font-bold w-full ring-backgroundDark bg-backgroundDark rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent hover:text-backgroundDark duration-150 ease-in-out">Upload New Cover Image</button>
            <button on:click|preventDefault={uploadPfpHandler} class="font-bold w-full ring-backgroundDark bg-backgroundDark rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent hover:text-backgroundDark duration-150 ease-in-out">Upload New Profile Picture</button>
            <button on:click|preventDefault={editGalleryHandler} class="font-bold w-full ring-backgroundDark bg-backgroundDark rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent hover:text-backgroundDark duration-150 ease-in-out">Edit Gallery Images</button>
        </div>
    </div>
    <Gigs />

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
        height: 400px;
        background-color: var(--fontColor);
    }

    .contact-info button {
        font-weight: bold;
        margin: 1rem 0;
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

    .email-form input, select {
        border-radius: 0.25rem;
        color: black;
        padding: 0.25rem;
    }

    .std-input {
        position: absolute;
        left: 25%;
        width: 65%;
    }

</style>
