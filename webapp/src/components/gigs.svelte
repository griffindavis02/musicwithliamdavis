<script>
    import { onMount } from 'svelte';
    import { initFirebase } from '$lib/firebase';
    import { gigs as gigStore } from '../stores/gigStore';
    import { collection, getDocs } from 'firebase/firestore/lite';
    
    $: gig_list = [];
    onMount(async () => {
        const { db } = initFirebase();
        const gigsCol = collection(db, 'gigs');
        const gigsSnapshot = await getDocs(gigsCol);
        const gigsData = gigsSnapshot.docs.map(doc => doc.data());
        gig_list = gigsData;
        // TODO see if we can query the db only if the gig store is empty
        // so that we only need to interface with firebase once
        // gigStore.set(gigs);
    });

    let now = new Date();
    const IS_CURRENT_GIG = 0;
    // FIXME this should be moved into the db query itself, not querying old dates
    const GIG_TOO_OLD_DAYS = -7; // gig's more than 7 days old should not be displayed in the gig list

    const checkGigAge = (gigDate, gigStartTime, gigEndTime) => {
        const start = Date.parse(gigDate + ' ' + gigStartTime);
        const end = Date.parse(gigDate + ' ' + gigEndTime);

        if (start <= now && now <= end)
        {
            return IS_CURRENT_GIG;
        }
        else
        {
            return (start - now)/1000/60/60/24; // convert to days
        }
    };

    const addToCalendarHandler = (event) => {
        alert('Not implemented!');
    };

    const requestSongHandler = (event) => {
        alert('Not implemented!');
    };

    $: for (let i=0; i<gig_list.length; i++)
    {
        gig_list[i].gigAge = checkGigAge(gig_list[i].date, gig_list[i].startTime, gig_list[i].endTime);
    }
</script>

<div class="w-full">
    <h1 class="text-3xl text-center my-10 font-medium">Upcoming Shows</h1>
    <ul>
        {#each gig_list as {venue, city, state, date, startTime, endTime, gigAge} }
            <li class:old-gig={gigAge < 0} class="border-b-2 flex p-3 justify-between border-blue-200/50 hover:border-blue-200 duration-150 ease-in-out">
                <div class="basis-1/3">
                    <p>{venue}</p>
                    <p>{new Date(date).toLocaleDateString()}, {startTime} - {endTime}</p>
                </div>
                <div class="basis-1/3 text-center">{city}, {state}</div>
                <div class="basis-1/3 flex justify-end">
                    {#if gigAge == IS_CURRENT_GIG}
                        <button on:click|preventDefault={requestSongHandler} class="ring-blue-200 w-44 bg-blue-200/50 rounded-lg p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">Request a Song</button>
                    {:else if gigAge > 0}
                        <button on:click|preventDefault={addToCalendarHandler} class="ring-blue-200 w-44 bg-blue-200/50 rounded-lg p-3 hover:ring-2 hover:bg-transparent duration-150 ease-in-out">Add to Calendar</button>
                    {:else}
                        <div></div>
                    {/if}
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>

    .old-gig {
        color: rgb(203 213 225);
        border-color: rgb(203 213 225);
        opacity: 50%;
    }

    .old-gig div, p {
        color: inherit;
    }

</style>
