<script>
    import { onMount } from 'svelte';
    import { initFirebase } from '$lib/firebase';
    import { gigs as gigStore } from '../../stores/gigStore';
    import { collection, getDocs, Timestamp } from 'firebase/firestore/lite';

    const NOW = new Date().valueOf();
    const IS_CURRENT_GIG = 0;
    const TIME_FORMAT = { hour: 'numeric', minute: '2-digit' };
    $: gig_list = new Array();
    onMount(async () => {
        const { db } = initFirebase();
        const gigsCol = collection(db, 'gigs');
        const gigsSnapshot = await getDocs(gigsCol);
        const gigsData = gigsSnapshot.docs.map((doc) => doc.data());
        gig_list = gigsData;
        // TODO see if we can query the db only if the gig store is empty
        // so that we only need to interface with firebase once
        // gigStore.set(gigs);
    });

    // FIXME this should be moved into the db query itself, not querying old dates
    const GIG_TOO_OLD_DAYS = -7; // gig's more than 7 days old should not be displayed in the gig list

    /**
     * //FIXME use actual dates in the db and pass the two dates in instead.
     * @param {Timestamp} gigStartDate Start time of the gig
     * @param {Timestamp} gigEndDate End time of the gig
     */
    const checkGigAge = (gigStartDate, gigEndDate) => {
        const start = gigStartDate.seconds * 1000;
        const end = gigEndDate.seconds * 1000;

        if (start <= NOW && NOW <= end) {
            return IS_CURRENT_GIG;
        } else {
            return (start - NOW) / 1000 / 60 / 60 / 24; // convert to days
        }
    };

    $: for (let i = 0; i < gig_list.length; i++) {
        gig_list[i].gigAge = checkGigAge(
            gig_list[i].startDate,
            gig_list[i].endDate
        );
    }

    const editGigHandler = (event) => {
        alert('Not implemented!');
    };

    const trashGigHandler = (event) => {
        alert('Not implemented!');
    };

    // TODO use age-check for what goes in the upcoming shows list
    // vs. what is edited/removed through modals
</script>

<div class="w-full">
    <h1 class="text-3xl text-center my-10 font-medium">
        Edit/Remove Upcoming Shows
    </h1>
    <ul>
        {#each gig_list as { venue, city, state, startDate, endDate, gigAge }}
            <li
                class="border-b-2 flex p-3 justify-between border-blue-200/50 hover:border-blue-200 duration-150 ease-in-out"
            >
                <div class="basis-1/3">
                    <p>{venue}</p>
                    <p>
                        {startDate.toDate().toLocaleDateString()},
                        {startDate
                            .toDate()
                            .toLocaleTimeString('en-us', TIME_FORMAT)} -
                        {endDate
                            .toDate()
                            .toLocaleTimeString('en-us', TIME_FORMAT)}
                    </p>
                </div>
                <div class="basis-1/3 text-center">{city}, {state}</div>
                <div class="basis-1/3 flex justify-end">
                    <button on:click|preventDefault={editGigHandler}
                        ><div class="icon edit-icon"></div></button
                    >
                    <button on:click|preventDefault={trashGigHandler}
                        ><div class="icon trash-icon"></div></button
                    >
                </div>
            </li>
        {/each}
    </ul>
</div>

<style>
    .icon {
        margin: 0 1rem;
        background-color: var(--fontColor);
        opacity: 100%;
        height: 1.5rem;
        width: 1.5rem;
    }

    .icon:hover {
        background-color: var(--accentLight);
        opacity: 50%;
        transition-timing-function: ease-in-out;
        transition-duration: 150ms;
    }

    .edit-icon {
        -webkit-mask: url(edit.svg) no-repeat center;
        mask: url(edit.svg) no-repeat center;
    }

    .trash-icon {
        -webkit-mask: url(trash.svg) no-repeat center;
        mask: url(trash.svg) no-repeat center;
    }
</style>
