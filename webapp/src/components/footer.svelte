<script>
    import Socials from '../components/socials.svelte'

    const mailingListHandler = (event) => {
        alert('Not implemented!');
    };

</script>

<div class="w-full my-10 border-t border-blue-200/50 text-center">
    <p class="text-l font-medium mt-3">Get Notified When We Play Next!</p>
    <button on:click|preventDefault={mailingListHandler} class="font-bold ring-blue-200 w-44 bg-blue-200/50 rounded-lg mt-3 p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">FOLLOW LIAM DAVIS</button>
    <Socials />
</div>

<style>

</style>

